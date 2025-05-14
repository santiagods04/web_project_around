import "../pages/index.css";
import {
  initialCards,
  btnAdd,
  btnEdit,
  formProfile,
  formSite,
  settings,
 } from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";

const apiUser = new Api("https://around-api.es.tripleten-services.com/v1/users/me", "28175fc1-f081-4f3f-9a2f-2da0605eb1a7")
const profileValidation = new FormValidator(formProfile, settings);
const siteValidation = new FormValidator(formSite, settings);
const popupProfile = new PopupWithForm("#popupU", (inputs) => {

    infoUser.setUserInfo({
      name: inputs.name,
      job: inputs.job
    });
});
const popupWithImg = new PopupWithImage("#popup-big");
const infoUser = new UserInfo({
  name: ".profile__name",
  job: ".profile__description",
  avatar: ".profile__image"
});

apiUser.getInfoUser()
.then(data => {
  infoUser.setUserInfo({
    name: data.name,
    job: data.about,
    avatar: data.avatar
  })
})

popupWithImg.setEventListeners()

const sectionElements = new Section({items:initialCards, renderer:(item) =>{
  const card = new Card(item.name, item.link, () =>{
    popupWithImg.open(item.name, item.link);
  }).generateCard();
  sectionElements.addItem(card);
}}, ".elements");

sectionElements.renderer();

const popupCards = new PopupWithForm("#popupS" , (inputs) => {
const newCardElement = new Card(inputs.title, inputs.link, () =>{
  popupWithImg.open(inputs.title, inputs.link);
}).generateCard();
sectionElements.addCard(newCardElement);
});

popupProfile.setEventListeners();
popupCards.setEventListeners();

//Eventos popupU
btnEdit.addEventListener("click", () => {
  popupProfile.open();
  profileValidation.enableValidation();
});

//Eventos popupS
btnAdd.addEventListener("click", () => {
  popupCards.open();
  siteValidation.enableValidation();
});






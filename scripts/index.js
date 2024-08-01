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


 const profileValidation = new FormValidator(formProfile, settings);
 const siteValidation = new FormValidator(formSite, settings);
 const popupProfile = new PopupWithForm("#popupU", (inputs) => {
  infoUser.setUserInfo({name: inputs.name, job: inputs.job});
 });

 const popupWithImg = new PopupWithImage("#popup-big");

 const infoUser = new UserInfo({name: ".profile__name", job: ".profile__description"});

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






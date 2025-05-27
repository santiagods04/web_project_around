import "../pages/index.css";
import {
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
import PopupWithConfirmation from "./PopupWithConfirmation.js";

const api = new Api("https://around-api.es.tripleten-services.com/v1", "28175fc1-f081-4f3f-9a2f-2da0605eb1a7");
const profileValidation = new FormValidator(formProfile, settings);
const siteValidation = new FormValidator(formSite, settings);
const popupConfirmation = new PopupWithConfirmation("#popup-confirm");
const popupWithImg = new PopupWithImage("#popup-big");
const infoUser = new UserInfo({
  name: ".profile__name",
  job: ".profile__description",
  avatar: ".profile__image"
});
popupConfirmation.setEventListeners();
api.getInfoUser()
.then(user => {
  infoUser.setUserInfo({
    name: user.name,
    job: user.about,
    avatar: user.avatar
  })
})

const popupProfile = new PopupWithForm("#popupU", (inputs) => {
  api.updateUserInfo({
    name:   inputs.name,
    job:  inputs.job
  })
  .then(updatedData => {
    infoUser.setUserInfo({
      name: updatedData.name,
      job: updatedData.about
    });
  })
});

api.getInitialCards()
  .then(cards => {
    const sectionElements = new Section({
      items: cards,
      renderer: (item) => {
        const card = new Card(item._id, item.isLiked, item.name, item.link, () => popupWithImg.open(item.name, item.link),
        (id, isLiked) => {return api.handleLikeCard(id, isLiked)}, () => {
          popupConfirmation.open();
          popupConfirmation.setSubmitAction(() => {
            api.handleDeleteCard(item._id)
              .then((res) => {
                card.remove();
                popupConfirmation.close();
              })
          });
        }).generateCard();
        sectionElements.addItem(card);
      }
    }, '.elements');
    sectionElements.renderer();
  })
popupWithImg.setEventListeners()

const popupCards = new PopupWithForm("#popupS" , (inputs) => {
  api.newCard({
    name: inputs.title,
    link: inputs.link
  })
  .then(card => {
    const sectionElements = new Section("", '.elements')
    const newCardElement = new Card(inputs.title, inputs.link, () =>{popupWithImg.open(inputs.link, inputs.link);}).generateCard();
    sectionElements.addCard(newCardElement);
  })

});

popupProfile.setEventListeners();
popupCards.setEventListeners();

//Eventos popupU
btnEdit.addEventListener("click", () => {
  const currentData = infoUser.showActualInfo()
  popupProfile.setInputValues({
    name: currentData.name,
    job: currentData.job
  })
  popupProfile.open();
  profileValidation.enableValidation();
});

//Eventos popupS
btnAdd.addEventListener("click", () => {
  popupCards.open();
  siteValidation.enableValidation();
});






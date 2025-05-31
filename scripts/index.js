import {
  btnAdd,
  btnEdit,
  formProfile,
  formSite,
  formAvatar,
  settings,
  btnAvatar,
} from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import Api from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";

let sectionElements;
const api = new Api("https://around-api.es.tripleten-services.com/v1", "28175fc1-f081-4f3f-9a2f-2da0605eb1a7");
const profileValidation = new FormValidator(formProfile, settings);
const siteValidation = new FormValidator(formSite, settings);
const avatarValidation = new FormValidator(formAvatar, settings);
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
  api.renderLoading(true, "#popupU__btn");
  return api.updateUserInfo({
    name:   inputs.name,
    job:  inputs.job
  })
  .then(updatedData => {
    infoUser.setUserInfo({
      name: updatedData.name,
      job: updatedData.about
    });
    api.renderLoading(false, "#popupU__btn");
  })
});
function createCard(item) {
  const card = new Card(
    item._id,
    item.isLiked,
    item.name,
    item.link,
    () => popupWithImg.open(item.name, item.link),
    (id, isLiked) => api.handleLikeCard(id, isLiked),
    () => {
      popupConfirmation.setSubmitAction(() => {
        api.handleDeleteCard(item._id)
          .then((res) => {
            card.removeCard();
            popupConfirmation.close();
          });
      });
      popupConfirmation.open();
    }
  );
  return card.generateCard();
}

api.getInitialCards()
  .then(cards => {
    sectionElements = new Section({
      items: cards,
      renderer: (item) => {
        const card = createCard(item);
        sectionElements.addItem(card);
      }
    }, '.elements');
    sectionElements.renderer();
  });
popupWithImg.setEventListeners()

const popupCards = new PopupWithForm("#popupS", (inputs) => {
  api.renderLoading(true, "#popupS__btn");
  return api.newCard({
    name: inputs.title,
    link: inputs.link
  })
  .then(card => {
    const newCardElement = createCard({
      _id: card._id,
      isLiked: card.isLiked,
      name: inputs.title,
      link: inputs.link
    });
    sectionElements.addCard(newCardElement);
    api.renderLoading(false, "#popupS__btn");
  });
});

popupProfile.setEventListeners();
popupCards.setEventListeners();



const popupAvatar = new PopupWithForm("#popupA", (inputs) => {
  api.renderLoading(true, "#popupA__btn");
  return api.updateAvatar(inputs.avatar)
  .then((data) => {
    infoUser.setUserInfo({
      name: data.name,
      job: data.about,
      avatar: data.avatar
    });
    api.renderLoading(false, "#popupA__btn");
  });
});
popupAvatar.setEventListeners();

//Eventos avatar
btnAvatar.addEventListener("click", () => {
  const currentData = infoUser.showActualInfo();
  popupAvatar.setInputValues({
    avatar: currentData.avatar
  });
  popupAvatar.open();
  avatarValidation.enableValidation();
});
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






import {
  btnAdd,
  btnEdit,
  formProfile,
  popupUser,
  settings,
  formSite,
  btnCloseU,
  btnSave,
  popupSite,
  btnCloseS,
  inputTitle,
  inputImage,
  btnCreate,
  initialCards,
  itemElements,
  openPopup,
  closePopup,
  saveInfoU,
  showInputsInfo,
 } from "./utils.js";

 import Card from "./Card.js";
 import FormValidator from "./FormValidator.js";
 import Popup from "./Popup.js";

 const profileValidation = new FormValidator(formProfile, settings);
 const siteValidation = new FormValidator(formSite, settings);
 const popupProfile = new Popup("#popupU");

  profileValidation.enableValidation();
  siteValidation.enableValidation();

//eventos popup´s en general
document.addEventListener("keydown", (evt) => {
  popupProfile.closeEsc(evt);
});
//Eventos popupU
btnEdit.addEventListener("click", () => {
  popupProfile.open();
});
btnCloseU.addEventListener("click", () => {
  popupProfile.close();
});
btnSave.addEventListener("click", saveInfoU);
popupUser.addEventListener("click", (evt) => {
  popupProfile.closeOutside(evt);
});

showInputsInfo();

//Eventos popupS
btnAdd.addEventListener("click", () => {
  openPopup(popupSite);
});
btnCloseS.addEventListener("click", () => {
  closePopup(popupSite);
});
popupSite.addEventListener("click", (event) => {
  if (event.target.id == "popupS") {
    closePopup(popupSite);
  }
});

//eventos elements
btnCreate.addEventListener("click", (evt) => {
  evt.preventDefault();
  const cardName = inputTitle.value;
  const cardLink = inputImage.value;
  const newCardElement = new Card(cardName, cardLink).generateCard();
  itemElements.prepend(newCardElement);
  closePopup(popupSite);
});

initialCards.forEach(function (elem) {
 const appendCards = new Card(elem.name, elem.link).generateCard();
 itemElements.append(appendCards);
})





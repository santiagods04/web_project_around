import {
  initialCards,
  itemElements,
  btnAdd,
  btnEdit,
  popupUser,
  formProfile,
  profileName,
  profileJob,
  popupSite,
  formSite,
  settings,
  btnCloseU,
  btnCloseS,
  showInputsInfo,
 } from "./utils.js";

 import Card from "./Card.js";
 import FormValidator from "./FormValidator.js";
 import PopupWithForm from "./PopupWithiForm.js";

 const profileValidation = new FormValidator(formProfile, settings);
 const siteValidation = new FormValidator(formSite, settings);
 const popupProfile = new PopupWithForm("#popupU", (inputs) => {
  profileName.textContent = inputs.name;
  profileJob.textContent = inputs.job;
 });
 const popupCards = new PopupWithForm("#popupS" , (inputs) => {
  const newCardElement = new Card(inputs.title, inputs.link).generateCard();
  itemElements.prepend(newCardElement);
 });

 popupProfile.setEventListeners();
 popupCards.setEventListeners();

 profileValidation.enableValidation();
 siteValidation.enableValidation();

//eventos popup´s en general
document.addEventListener("keydown", (evt) => {
  popupProfile.closeEsc(evt);
  popupCards.closeEsc(evt);
});
//Eventos popupU
btnEdit.addEventListener("click", () => {
  popupProfile.open();
});
btnCloseU.addEventListener("click", () => {
  popupProfile.close();
});
popupUser.addEventListener("click", (evt) => {
  popupProfile.closeOutside(evt);
});

showInputsInfo();

//Eventos popupS
btnAdd.addEventListener("click", () => {
  popupCards.open();
});
btnCloseS.addEventListener("click", () => {
  popupCards.close();
});
popupSite.addEventListener("click", (evt) => {
  popupCards.closeOutside(evt);
});

initialCards.forEach(function (elem) {
 const appendCards = new Card(elem.name, elem.link).generateCard();
 itemElements.append(appendCards);
})





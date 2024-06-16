import {
  btnAdd,
  btnEdit,
  profileName,
  profileJob,
  popupProfile,
  btnCloseU,
  inputName,
  inputJob,
  btnSave,
  popupSite,
  btnCloseS,
  inputTitle,
  inputImage,
  btnCreate,
  initialCards,
  itemElements,
 } from "./utils.js";

 import Card from "./Card.js";

//eventos popup´s en general
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePopup(popupProfile);
    closePopup(popupSite);
  }
});
//Eventos popupU
btnEdit.addEventListener("click", () => {
  openPopup(popupProfile);
});
btnCloseU.addEventListener("click", () => {
  closePopup(popupProfile);
});
btnSave.addEventListener("click", saveInfoU);
popupProfile.addEventListener("click", (event) => {
  if (event.target.id == "popupU") {
    closePopup(popupProfile);
  }
});

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



//Funcionamiento popup
function openPopup(popup){
  popup.classList.add("popup__show");
}

function closePopup(popup){
  popup.classList.remove("popup__show");
}
// funcionamiento popupU
function saveInfoU(evt){
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}

function showInputsInfo(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

showInputsInfo();

initialCards.forEach(function (elem) {
 const appendCards = new Card(elem.name, elem.link).generateCard();
 itemElements.append(appendCards);
})





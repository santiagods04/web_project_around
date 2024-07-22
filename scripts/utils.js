//Var's user
export const btnAdd = document.querySelector(".profile__btn-add")
export const btnEdit = document.querySelector(".profile__icon-edit");
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__description");
//Var's popupU
export const popupUser = document.querySelector("#popupU");
export const btnCloseU = document.querySelector("#popupU__icon");
export const inputName = document.querySelector("#input-name");
export const inputJob = document.querySelector("#input-job");
export const formProfile = document.querySelector("#popupU__form");
//Var's PopupS
export const popupSite = document.querySelector("#popupS");
export const btnCloseS = document.querySelector("#popupS__icon");
export const inputTitle = document.querySelector("#input-title");
export const inputImage = document.querySelector("#input-url");
export const formSite = document.querySelector("#popupS__form")
//Var's popup
export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error"
}
//Var's elements
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];
export const itemElements = document.querySelector(".elements");
export const template = document.querySelector(".template-card");
export const popupImg = document.querySelector(".popup-bigcard");

//Funcionamiento popup
export function openPopup(popup){
  popup.classList.add("popup__show");
}

export function closePopup(popup){
  popup.classList.remove("popup__show");
}

// funcionamiento popupU

export function showInputsInfo(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}



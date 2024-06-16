//Variables user
const btnAdd = document.querySelector(".profile__btn-add")
const btnEdit = document.querySelector(".profile__icon-edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
//Variables popupU
const popupProfile = document.querySelector("#popupU");
const btnCloseU = document.querySelector("#popupU__icon");
const inputName = document.querySelector("#input-name");
const inputJob = document.querySelector("#input-job");
const btnSave = document.querySelector("#popupU__btn");
//Variables PopupS
const popupSite = document.querySelector("#popupS");
const btnCloseS = document.querySelector("#popupS__icon");
const inputTitle = document.querySelector("#input-title");
const inputImage = document.querySelector("#input-url");
const btnCreate = document.querySelector("#popupS__btn");
//Var's elements
const initialCards = [
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
const itemElements = document.querySelector(".elements");
const template = document.querySelector(".template-card");
const popupImg = document.querySelector(".popup-bigcard");


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
btnCreate.addEventListener("click", createNewCard);



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

//funcionamiento popupImg
function openPopupImg() {
  popupImg.classList.add("popup__show");
}
function closePopupImg(){

}

//Funcionamiento elements
function createCards(name, link){
  const card = template.cloneNode(true).content.querySelector(".elements__target");
  const cardImage = card.querySelector(".elements__image");
  const cardTitle = card.querySelector(".elements__txt");
  const btnDelete = card.querySelector(".elements__icon-delete");
  const btnLike = card.querySelector(".elements__icon-like");
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("elements__icon-like_active");
  });
  btnDelete.addEventListener("click", function (){
    card.remove();
  });
  cardImage.addEventListener("click", function (){
    showPopupImg(name, link);
  });
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;
  return card;
}

function createNewCard(evt) {
  evt.preventDefault();
  const cardName = inputTitle.value;
  const cardLink = inputImage.value;
  const newCardElement = createCards(cardName, cardLink);
  itemElements.prepend(newCardElement);
  closePopup(popupSite);
}


initialCards.forEach(function (elem) {
 const appendCards = createCards(elem.name, elem.link);
 itemElements.append(appendCards);
})

function showPopupImg(name, link){
  const img = document.querySelector(".popup-bigcard__img");
  const title = document.querySelector(".popup-bigcard__description");
  const btnCloseImg = document.querySelector(".popup-bigcard__icon");
  popupImg.classList.add("popup-bigcard__show");
  btnCloseImg.addEventListener("click", () => {
    popupImg.classList.remove("popup-bigcard__show");
  });
  popupImg.addEventListener("click", (event) => {
  if (event.target.id == "close-img") {
    popupImg.classList.remove("popup-bigcard__show");
  }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      popupImg.classList.remove("popup-bigcard__show");
    }
  });

  img.src = link;
  img.alt = name;
  title.textContent = name;
}





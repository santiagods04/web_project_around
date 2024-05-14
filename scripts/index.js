//Variables user
const btnAdd = document.querySelector(".profile__btn-add")
const btnEdit = document.querySelector(".profile__icon-edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
//Variables popupU
const popupProfile = document.querySelector(".popupU");
const btnCloseU = document.querySelector(".popupU__icon");
const inputName = document.querySelector(".popupU__input-name");
const inputJob = document.querySelector(".popupU__input-job");
const btnSave = document.querySelector(".popupU__btn");
//Variables PopupS
const popupSite = document.querySelector(".popupS");
const btnCloseS = document.querySelector(".popupS__icon");
const inputTitle = document.querySelector(".popupS__input-title");
const inputImage = document.querySelector(".popupS__input-img");
const btnCreate = document.querySelector(".popupS__btn");
//Variables elements cards
const itemElements = document.querySelector(".elements");
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
const template = document.querySelector(".template-card");

//Botones popupU
btnEdit.addEventListener("click", openPopupU);
btnCloseU.addEventListener("click", closePopupU);
btnSave.addEventListener("click", saveInfoU);
//Botones popupS
btnAdd.addEventListener("click", openPopupS);
btnCloseS.addEventListener("click", closePopupS);
//Botones elements
btnCreate.addEventListener("click", newCard);


//Funcionamiento popupU
function openPopupU(){
  inputsShowInfo();
  popupProfile.classList.add("popupU__show");
}

function closePopupU(){
  popupProfile.classList.remove("popupU__show");
}

function inputsShowInfo(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function saveInfoU(evt){
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopupU();
}
//Funcionamiento popupS
function openPopupS(){
  popupSite.classList.add("popupS__show");
}

function closePopupS(){
  popupSite.classList.remove("popupS__show");
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
  cardImage.src = link;
  cardImage.alr = name;
  cardTitle.textContent = name;
  return card;
}

function newCard(evt) {
  evt.preventDefault();
  const cardToAdd = function (elem) {
    elem.name = inputTitle.textContent;
    elem.link = inputImage.textContent;
    createCards(elem.name, elem.link);
  };
  itemElements.prepend(cardToAdd);
  closePopupS();
}


initialCards.forEach(function (elem) {
 const appendCards = createCards(elem.name, elem.link);
 itemElements.append(appendCards);
})



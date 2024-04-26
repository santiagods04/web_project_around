const popupProfile = document.querySelector(".popup")
const btnEdit = document.querySelector(".profile__icon-edit");
const btnClose = document.querySelector(".popup__icon");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const inputName = document.querySelector(".popup__input-name");
const inputJob = document.querySelector(".popup__input-job");
const btnSave = document.querySelector(".popup__btn");
const btnLike = document.querySelectorAll(".elements__icon-like");


function openPopup(){
  inputsShowInfo();
  popupProfile.classList.add("popup__show");
}

btnEdit.addEventListener("click", openPopup);

function closePopup(){
  popupProfile.classList.remove("popup__show");
}

btnClose.addEventListener("click", closePopup);

function inputsShowInfo(){
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

function saveInfo(evt){
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

btnSave.addEventListener("click", saveInfo);

function likeActive() {
  btnLike.classList.add('elements__like_active');
}

btnLike.addEventListener("click", likeActive);


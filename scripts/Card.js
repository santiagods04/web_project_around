import { template, popupImg} from "./utils.js";

export default class Card {
  constructor(name, link){
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
  }

  getTemplate(){
    return template.cloneNode(true).content.querySelector(".elements__target");
  }

  setProperties(){
    this._cardImage = this._card.querySelector(".elements__image");
    this._cardTitle = this._card.querySelector(".elements__txt");
    this._btnDelete = this._card.querySelector(".elements__icon-delete");
    this._btnLike = this._card.querySelector(".elements__icon-like");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
  }

  showBigImg(){
    this._img = popupImg.querySelector(".popup-bigcard__img");
    this._title = popupImg.querySelector(".popup-bigcard__description");
    this._closeImg = popupImg.querySelector(".popup-bigcard__icon");
    popupImg.classList.add("popup-bigcard__show");
    this._closeImg.addEventListener("click", () => {
      popupImg.classList.remove("popup-bigcard__show");
    });
    popupImg.addEventListener("click", (evt) =>{
      if (evt.target.id == "popup-big"){
        popupImg.classList.remove("popup-bigcard__show");
      }
    })
    document.addEventListener("keydown", (evt) =>{
      if (evt.key == "Escape") {
        popupImg.classList.remove("popup-bigcard__show");
      }
    })
    this._img.src = this._link;
    this._img.alt = this._name;
    this._title.textContent = this._name;
  }

  setEventListeners(){
    this._btnLike.addEventListener("click", () => {
      this._btnLike.classList.toggle("elements__icon-like_active");
    })

    this._btnDelete.addEventListener("click", () => {
      this._card.remove();
    })

    this._cardImage.addEventListener("click", () => {
      this.showBigImg();
    })
  }

  generateCard(){
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}


import {template} from "./utils.js";

export default class Card {
  constructor(name, link, handleClick){
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
    this._handleClick = handleClick;
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
  setEventListeners(){
    this._btnLike.addEventListener("click", () => {
      this._btnLike.classList.toggle("elements__icon-like_active");
    })

    this._btnDelete.addEventListener("click", () => {
      this._card.remove();
    })

    this._cardImage.addEventListener("click", () => {
      this._handleClick();
    })
  }

  generateCard(){
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}


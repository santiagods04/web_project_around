import {template} from "./utils.js";

export default class Card {
  constructor(name, link, handleClick, handlelike, handleDelete){
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
    this._handleClick = handleClick;
    this._handleLike = handlelike;
    this._handleDelete = handleDelete;
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
      //this._handleLike();
      this._btnLike.classList.toggle("elements__icon-like_active");
    })

    this._btnDelete.addEventListener("click", () => {
      //this._handleDelete();
      this._btnDelete.remove(this._card);
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


import {template} from "./utils.js";

export default class Card {
  constructor(id, isLiked, name, link, handleClick, handlelike, handleDelete){
    this._id = id;
    this._isLiked = isLiked;
    this._name = name;
    this._link = link;
    this._card = this._getTemplate();
    this._handleClick = handleClick;
    this._handleLike = handlelike;
    this._handleDelete = handleDelete;
  }

  _getTemplate(){
    return template.cloneNode(true).content.querySelector(".elements__target");
  }

  setProperties(){
    this._cardImage = this._card.querySelector(".elements__image");
    this._cardTitle = this._card.querySelector(".elements__txt");
    this._btnDelete = this._card.querySelector(".elements__icon-delete");
    this._btnLike = this._card.querySelector(".elements__icon-like");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
  }
  setEventListeners(){
    this._btnLike.addEventListener("click", () => {
      this._handleLike(this._id, this._isLiked)
         .then(updatedCard => {
            this._isLiked = updatedCard.isLiked;
            this._btnLike.classList.toggle("elements__icon-like_active", this._isLiked);
         })
    })

    this._btnDelete.addEventListener("click", () => {
      this._handleDelete();
    })

    this._cardImage.addEventListener("click", () => {
      this._handleClick();
    })
  }

  removeCard() {
  this._card.remove();
  }
  
  generateCard(){
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}

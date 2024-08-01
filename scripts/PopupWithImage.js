import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._img = this._popup.querySelector(".popup-bigcard__img");
    this._title = this._popup.querySelector(".popup-bigcard__description");
    this._closePopup = this._popup.querySelector(".popup-bigcard__icon");
  }

  open(name, link){
    super.open();
    this._img.src = link;
    this._title.textContent = name;
  }

  

}
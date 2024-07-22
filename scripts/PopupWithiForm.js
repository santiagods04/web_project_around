import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValue(){
    this.formValues = {};
    this._inputList.forEach(input => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  setEventListeners(){
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValue());
      super.close();
    })
  }

}
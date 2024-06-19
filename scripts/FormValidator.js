export default class FormValidator {
  constructor(formElement, settings){
    this._formElement = formElement;
    this._settings = settings;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
  }

  hasInvalidInput(){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState(){
    this.buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    this.hasEmptyInput = this._inputList.some((inputElement) => inputElement.value === "");
    if (this.hasInvalidInput() || this.hasEmptyInput) {
      this.buttonElement.classList.add(this._settings.inactiveButtonClass);
      this.buttonElement.disabled = true;
    } else {
      this.buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this.buttonElement.disabled = false;
    }
  }

  hideInputError(inputElement){
    this.errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    this.errorElement.textContent = "";
  }

  showInputError(inputElement, errorMessage){
     this.errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    this.errorElement.textContent = errorMessage;
  }

  checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      this.showInputError( inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
    this.toggleButtonState();
  }

  setEventListeners(){
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
      });
    });
  }

  enableValidation(){
      this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this.setEventListeners();
  }
}


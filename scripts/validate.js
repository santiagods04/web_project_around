const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};


const toggleButtonState = (inputList, settings, formElement) => {
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  const hasEmptyInput = inputList.some((inputElement) => inputElement.value === "");
  if (hasInvalidInput(inputList) || hasEmptyInput) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
};

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const checkInputValidity = (formElement, inputElement, settings, inputList) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
  toggleButtonState(inputList, settings, formElement);
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  toggleButtonState(inputList, settings, formElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings, inputList);
    });
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error"
});

 export const selectorsItem = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input-type-error',
    errorClass: 'popup__error_visible',
    setSelector: '.popup__set',
    buttonSelector: '.button'
  }

export class FormValidator {
    constructor(selectors, FormElement) {
        this._formSelector = selectors.formSelector,
        this._inputSelector = selectors.inputSelector,
        this._submitButtonSelector = selectors.submitButtonSelector,
        this._inactiveButtonClass = selectors.inactiveButtonClass,
        this._inputErrorClass = selectors.inputErrorClass,
        this._errorClass = selectors.errorClass,
        this._setSelector = selectors.setSelector,
        this._buttonSelector = selectors.buttonSelector,
        this._FormElement = FormElement
    }
    //если данные ввели некорректно, возникает ошибка
    _showError(inputElement, errorMessage) {
        const errorElement = this._FormElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    //если данные ввели корректно, ошибка скрывается
    _hideError(inputElement){
        const errorElement = this._FormElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    };
    //проверка введенных данных, вызов функций showError и hideError
    _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  };
  // Есть ли здесь хотя бы одно поле, которое не прошло валидацию?
_hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  }
  //если данные ввели некорректно, кнопка становится серой и наоборот
    _toggleButtonState(inputList,buttonElement) {
        if (this._hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(this._inactiveButtonClass);
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(this._inactiveButtonClass);
    }
    }
    //валадицая филдсетов
    enableValidation() {
        const formList = Array.from(document.querySelectorAll(this._formSelector));
        formList.forEach((FormElement) => {
            FormElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._setEventListeners(FormElement);
        });
        this._setEventListeners();
    }
    _setEventListeners() {
        const inputList = Array.from(this._FormElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._FormElement.querySelector(this._submitButtonSelector);
        inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState(inputList, buttonElement);
        });
      });
      };
}

//import { selectorsItem } from "../utils/constants";


export class FormValidator {
    constructor(selectors, formElement) {
        this._selector = selectors,
        this._formSelector = selectors.formSelector,
        this._inputSelector = selectors.inputSelector,
        this._submitButtonSelector = selectors.submitButtonSelector,
        this._inactiveButtonClass = selectors.inactiveButtonClass,
        this._inputErrorClass = selectors.inputErrorClass,
        this._errorClass = selectors.errorClass,
        this._setSelector = selectors.setSelector,
        this._buttonSelector = selectors.buttonSelector,
        this._formElement = formElement,
        this._buttonElement = this._formElement.querySelector(this._selector.submitButtonSelector)
    }
    //если данные ввели некорректно, возникает ошибка
    _showError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    //если данные ввели корректно, ошибка скрывается
    _hideError(inputElement){
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
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
        this.disableSubmitButton()
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(this._inactiveButtonClass);
    }
    }
    // отключение кнопки при первом открытии
    disableSubmitButton() {
      this._buttonElement.classList.add(this._selector.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } 

    _setEventListeners() {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        
    });
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);  
          this._toggleButtonState(inputList, buttonElement);
        });
      });
      };
          //валадицая филдсетов
    enableValidation() {
      this._setEventListeners();
  }
}
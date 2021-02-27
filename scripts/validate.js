const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  setSelector: '.popup__set'
}
//если данные ввели некорректно, возникает ошибка
const showError = (formElementNew, inputElement, errorMessage, selectors) => {
  const errorElement = formElementNew.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors.errorClass);
};
//если данные ввели корректно, ошибка скрывается
const hideError = (formElementNew,inputElement) => {
  const errorElement = formElementNew.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(selectors.errorClass);
  errorElement.textContent = "";
};
//проверка введенных данных, вызов функций showError и hideError
const checkInputValidity = (formElementNew,inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showError(formElementNew, inputElement, inputElement.validationMessage, selectors);
  } else {
    hideError(formElementNew, inputElement, selectors);
  } 
};

function setEventListeners(formElementNew, selectors) {
  const inputList = Array.from(formElementNew.querySelectorAll(selectors.inputSelector));
  const buttonElement = formElementNew.querySelector(selectors.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, selectors);
  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
    checkInputValidity(formElementNew, inputElement, selectors);
    toggleButtonState(inputList, buttonElement, selectors);
  });
});
}
//валадицая филдсетов
const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElementNew) => {
    formElementNew.addEventListener('submit', function (evt) {
      evt.preventDefault();

    });
    const fieldsetList = Array.from(formElementNew.querySelectorAll(selectors.setSelector));

fieldsetList.forEach((fieldSet) => {
  setEventListeners(fieldSet, selectors);
}); 
  });
}

// Есть ли здесь хотя бы одно поле, которое не прошло валидацию?
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
}

//если данные ввели некорректно, кнопка становится серой и наоборот
function toggleButtonState(inputList,buttonElement, selectors) {
  if (hasInvalidInput(inputList)) {
  buttonElement.disabled = true;
  buttonElement.classList.add(selectors.inactiveButtonClass);
} else {
  buttonElement.disabled = false;
  buttonElement.classList.remove(selectors.inactiveButtonClass);
}
}

enableValidation(selectors)
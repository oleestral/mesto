import Api from '../components/Api.js';
/*popup*/
export const formElement = document.querySelector('.popup__input-container');
export const nameInput = document.querySelector('.popup__item_type_name');
export const captionInput = document.querySelector('.popup__item_type_caption');
export const formAElementAdd = document.querySelector('.popup__input-add-container');
export const formElementUpdateContainer = document.querySelector('.popup__input-update-container')
//profile
export const editButton = document.querySelector('.profile__info-edit-button');
export const addButton = document.querySelector('.profile__info-add-button');
export const editavatar = document.querySelector('.profile__avatar-edit');

/*целый контейнер*/
export const elementsContainer = document.querySelector('.elements');
//темплейт
export const cardTemplate = document.getElementById('elements-items');

export const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: '42bb299b-ecdd-434e-b139-b5601cfc74ef'
})

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
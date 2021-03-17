import {Card} from './Card.js';
import {FormValidator, selectorsItem} from './FormValidator.js'
import {initialCards} from './initial-сards.js'

/*popup*/
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupOpen = document.querySelector('.popup-open');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__input-container');
const nameInput = document.querySelector('.popup__item_type_name');
const captionInput = document.querySelector('.popup__item_type_caption');
const closeButtonAdd = document.querySelector('.popup__close-button-add-container');
const formAElementAdd = document.querySelector('.popup__input-add-container');
const cardNameInput = document.querySelector('.popup__item_card_name');
const cardLinkInput = document.querySelector('.popup__item_card_link');
const closeButtonOpen = document.querySelector('.popup-open__close-button');
const popupOrigin = document.querySelectorAll('.popup');
const popupSubmitButton = document.querySelector('.popup__submit-button-add-container');
const popupCLose = document.querySelectorAll('.popup-close')
/*profile*/
const editButton = document.querySelector('.profile__info-edit-button');
const nameProfile = document.querySelector('.profile__info-name');
const jobProfile = document.querySelector('.profile__info-self-description');
const addButton = document.querySelector('.profile__info-add-button');

/*целый контейнер*/
const elementsContainer = document.querySelector('.elements');
//темплейт
const cardTemplate = document.getElementById('elements-items');
//переменная для сброса формы добавления карточки
const resetAddContainer =  document.getElementById('input-container-add');

//все попапы
const popups = document.querySelectorAll('.popup')
/********************************************************************************************ФУНКЦИИ**************************************/

//открытие окон с затемнением
export function openPopup (popup) {
    popup.classList.add('popup_opened');
    // закрытие по Esc
    document.addEventListener('keydown', closePopupEsc)
}
//закрытие окон по крестику и оверлею
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    })
})
//закрытие окон по клавише Esc
function closePopupEsc(evt) {
    if (evt.key === "Escape") {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive)
    }
}
//закрытие окон с затемнением
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    // закрытие по Esc
    document.removeEventListener('keydown', closePopupEsc)
}

//отображение теукщего имени профиля
function showNamePrifile () {
    captionInput.value = jobProfile.textContent;
    nameInput.value = nameProfile.textContent;
}
/*запись изменения имени профиля*/
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = captionInput.value;
    closePopup(popupEdit)
}
//добавление дефолтных карточек
function addCard(array) {
    array.forEach((card) => {
        const item = new Card(card,cardTemplate);
        const сardElement = item.generateCard();
        elementsContainer.prepend(сardElement);
    })
}
addCard(initialCards);
//добавляем карточки по клику на кнопу добавления
function addCardClick(evt) {
    evt.preventDefault();
    const card = [{
        name: cardNameInput.value,
        link: cardLinkInput.value
    }]
    addCard(card, cardTemplate)
    closePopup(popupAdd);
    resetAddContainer.reset();
    popupSubmitButton.classList.add(selectorsItem.inactiveButtonClass);
    popupSubmitButton.setAttribute('disabled', true)
}
//Валидация профайла
const profileValidation = new FormValidator(selectorsItem, formElement)
profileValidation.enableValidation();
//Валидация карточек
const cardValidation = new FormValidator(selectorsItem, formAElementAdd)
cardValidation.enableValidation();
////////////////////////////////////////////////////////////////////////ВЫЗОВ ФУНКЦИЙ///////////////////////////////



//сохрание ручного изменения имени
formElement.addEventListener('submit', formSubmitHandler);
formAElementAdd.addEventListener('submit',addCardClick);

editButton.addEventListener('click',() => {
    openPopup(popupEdit);
    showNamePrifile();
});
addButton.addEventListener('click',() => {
    openPopup(popupAdd);
})
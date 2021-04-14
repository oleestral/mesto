import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator, selectorsItem} from '../components/FormValidator.js';
import {initialCards} from '../components/initial-сards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {formElement, nameInput, captionInput, formAElementAdd, editButton, addButton, elementsContainer, cardTemplate} from '../utils/constants.js'

//////////////////////Редактирование профайла
const userProfile = new UserInfo({
    nameProfile: '.profile__info-name',
    descriptionProfile: '.profile__info-self-description'
})
function showNamePrifile() {
    nameInput.value = userProfile.getUserInfo().name;
    captionInput.value = userProfile.getUserInfo().description;
}
const editProfilePopup = new PopupWithForm({
    popupSelector: '.popup-edit',
    submitForm: (item) => {
        userProfile.setUserInfo({
            name: item.name,
            description: item.caption
        });
        editProfilePopup.close();
    }

})
editProfilePopup.setEventListeners();

editButton.addEventListener('click', (evt) => {
    evt.preventDefault(); 
    editProfilePopup.open();
    showNamePrifile()
})
//////////////////////Добавление карточек
const imagePopup = new PopupWithImage('.popup-open');
imagePopup.setEventListeners();

function createCard(item, popupSelector, handleCardClick) {
    const card = new Card(item, popupSelector, handleCardClick);
    return card.generateCard();
}

const cards = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item, cardTemplate, () => {
            imagePopup.open(item.link,item.name)
        })
        cards.appendAddItem(card)
    }
}, elementsContainer)

cards.renderItems();

const addCardPopup = new PopupWithForm({
    popupSelector: '.popup-add',
    submitForm: (item) => {
        const card = createCard({
            name: item.name,
            link: item.link
        }, cardTemplate, ()=> {
            imagePopup.open(item.link, item.name)
        })
        cards.prependAddItem(card);
        addCardPopup.close();
    }
})
addCardPopup.setEventListeners();

addButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    addCardPopup.open();
})
//Валидация профайла
const profileValidation = new FormValidator(selectorsItem, formElement)
profileValidation.enableValidation();
//Валидация карточек
const cardValidation = new FormValidator(selectorsItem, formAElementAdd)
cardValidation.enableValidation();

import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {initialCards} from '../components/initial-сards.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {formElement, nameInput, captionInput, formAElementAdd, editButton, addButton, elementsContainer, cardTemplate, selectorsItem} from '../utils/constants.js'

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

function createCard(item) {
    const card = new Card(item, cardTemplate, ()=> {
        imagePopup.open(item.link,item.name)
    });
    return card.generateCard();
}

const cards = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = createCard(item)
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
        })
        cards.prependAddItem(card);
        addCardPopup.close();
    }
})
addCardPopup.setEventListeners();

addButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const resetAddPopup = new FormValidator(selectorsItem, formAElementAdd);
    resetAddPopup.disableSubmitButton();
    addCardPopup.open();
})
//Валидация профайла
const profileValidation = new FormValidator(selectorsItem, formElement)
profileValidation.enableValidation();
//Валидация карточек
const cardValidation = new FormValidator(selectorsItem, formAElementAdd)
cardValidation.enableValidation();
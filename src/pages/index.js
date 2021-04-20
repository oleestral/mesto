import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js'

import {formElement, nameInput, captionInput, formAElementAdd, editButton, 
    addButton, elementsContainer, cardTemplate, selectorsItem, api, 
    formElementUpdateContainer, editavatar} from '../utils/constants.js';

let userID;

//Получаем  с сервера дефолтные картинки и информацию о пользователе
Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([defaultCards, userInfo])=> {
    userID = userInfo._id;
    cards.renderItems(defaultCards);
    userProfile.setUserInfo({
        name: userInfo.name,
        description: userInfo.about,
        avatar: userInfo.avatar,
        id: userInfo._id
    })
    console.log('Данные пользователям и дефолтные карточки успешно загружены')
})
.catch((err) => {
    console.log(err);
    console.log('Данные пользователям и дефолтные карточки не загружены')
})

//Редактирование профиля
const userProfile = new UserInfo({ 
    nameProfile: '.profile__info-name', 
    descriptionProfile: '.profile__info-self-description',
    avatarProfile: '.profile__avatar',
    id: userID
}) 

function showNamePrifile() { 
    nameInput.value = userProfile.getUserInfo().name; 
    captionInput.value = userProfile.getUserInfo().description; 
}

const editProfilePopup = new PopupWithForm({
    popupSelector: '.popup-edit',
    submitForm: (item) => {
        editProfilePopup.renderLoading(true)
        api.editUserProfile(item)
        .then((res) => {
            userProfile.setUserInfo({
                name: res.name,
                description: res.about,
                avatar: res.avatar,
                id: res._id
            })
            editProfilePopup.close();
            console.log('Редактирование профиля прошло успешно');
        })
        .catch(() => {
            console.log("Возникла ошибка при редактирование профиля")
        })
        .finally(() => {
            editProfilePopup.renderLoading(false);
        })
    }
})
//Обновление аватара пользователя
const editUserAvatar = new PopupWithForm({
    popupSelector: '.popup-update',
    submitForm: (item) => {
        editUserAvatar.renderLoading(true)
        api.updateUserAvatar(item)
        .then((res) => {
            userProfile.setUserInfo({
                name: res.name,
                description: res.about,
                avatar: res.avatar,
                id: res._id
            })
            editUserAvatar.close();
            console.log('Обновление аватара пользователя прошло успешно');
        })
        .catch(() => {
            console.log("Возникла ошибка при Обновлении аватара пользователя")
        })
        .finally(() => {
            editUserAvatar.renderLoading(false)
        })
    }
})
//Создание и добавление карточек 
const cards = new Section({
    renderer: (item) => { 
        const card = createCard(item, cardTemplate, userID)
        cards.appendAddItem(card)
    }, 
}, elementsContainer)

const imagePopup = new PopupWithImage('.popup-open'); 

function createCard(item) { 
    const card = new Card(item, cardTemplate, {
        //cмотрим ближе
        handleCardClick: ()=> {
            imagePopup.open(item.link, item.name)
        },
        //лайкаем
        handleLikeClick: ()=> {
            api.like(item._id)
            .then((res) => {
                card.setLike(res)
                console.log('Лайк')
                
            })
            .catch(() => {
                console.log('Не пролайкано')
            })
        },
        //дизлайкаем
        handleDislikeClick: ()=> {
            api.removeLike(item._id)
            .then((res) => {
                card.removeLike(res)
                console.log('Дизлайк')
            })
            .catch(() => {
                console.log('Ошибка при дизлайке')
            })
        },
        //удаляем
        handleDeleteCard: ()=> {
            removeCard.open();
            removeCard.setSubmit(() => {
                api.removeUserCards(item._id)
                .then((res) => {
                    card.deleteCard(res);
                    removeCard.close();
                    console.log('Успешно удалено')
                })
                .catch(() => {
                    console.log('Неуспешно удалено')
                })
            })
            
        },

    }, userID)
    return card.generateCard(); 
} 
//добавление карточки
const addCardPopup = new PopupWithForm({
    popupSelector: '.popup-add',
    submitForm: (item) => {
        addCardPopup.renderLoading(true)
        api.addUserCards(item)
        .then((res) => {
            const card = createCard(res);
            cards.prependAddItem(card);
            addCardPopup.close();
            console.log('Добавление карточки прошло успешно');
        })
        .catch((err) => {
            console.log("Возникла ошибка при Добавление карточки")
            console.log(err)
        })
        .finally(() => {
            addCardPopup.renderLoading(false);
        })
    }
})
//удаление карточек
const removeCard = new PopupWithConfirm('.popup-delete');

//Валидация профайла 
const profileValidation = new FormValidator(selectorsItem, formElement) 
profileValidation.enableValidation(); 
//Валидация карточек 
const cardValidation = new FormValidator(selectorsItem, formAElementAdd) 
cardValidation.enableValidation(); 
//Валидация аватара 
const avatarValidation = new FormValidator(selectorsItem, formElementUpdateContainer);
avatarValidation.enableValidation();


//addEventListener
//редактировать профиль
editButton.addEventListener('click', (evt) => { 
    evt.preventDefault();  
    editProfilePopup.open(); 
    showNamePrifile();
})
//редактировать аватар
editavatar.addEventListener('click', () =>{
    editUserAvatar.open();
    avatarValidation.disableSubmitButton();
})
//добавить карточку
addButton.addEventListener('click', (evt) => { 
    evt.preventDefault(); 
    const resetAddPopup = new FormValidator(selectorsItem, formAElementAdd); 
    resetAddPopup.disableSubmitButton(); 
    addCardPopup.open(); 
})
//setEventListeners
imagePopup.setEventListeners();
editProfilePopup.setEventListeners(); 
editUserAvatar.setEventListeners();
addCardPopup.setEventListeners();
removeCard.setEventListeners();
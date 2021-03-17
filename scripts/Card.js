import {openPopup} from './script.js'

const popupOpen = document.querySelector('.popup-open');
const popupImage = document.querySelector('.popup-open__image');
const popupTitle = document.querySelector('.popup-open__title');


export class Card {
    constructor(data, cardTemplateSelector) {
        this._name = data.name;
        this._image = data.link;
        this._cardTemplateSelector = cardTemplateSelector;
    }
    
    //копируем темплейт
    _getTemplate() {
        const cardElement = this._cardTemplateSelector 
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }
        //генерируем карточки
        generateCard() {
            this._element = this._getTemplate();
            this._setEventListeners();
            this._element.querySelector('.element__image').src =  this._image;
            this._element.querySelector('.element__image').alt =  this._name;
            this._element.querySelector('.element__paragraph').textContent = this._name;
    
            return this._element;
            
        }
    //открытие картинки при нажатии на нее
    _handleOpenImageClick () {
        popupTitle.textContent = this._name;
        popupImage.src = this._image;
        popupImage.alt = this._name;
        openPopup(popupOpen);
    }
    //лайкаем пост
    _handleLikePosts() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    }
    //удаляем пост
    _handleDeletePost () {
        this._element.querySelector('.element__delete-button').closest('.element').remove();
    }
        //слушатели
        _setEventListeners() {
            this._element.querySelector('.element__image').addEventListener('click', () => {
                this._handleOpenImageClick()
              });
              this._element.querySelector('.element__like-button').addEventListener('click', () => {
                this._handleLikePosts()
              });
              this._element.querySelector('.element__delete-button').addEventListener('click', () => {
                this._handleDeletePost()
              });
        }
}
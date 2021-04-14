


export class Card {
    constructor({name, link}, cardTemplateSelector, handleCardClick) {
        this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
        this._cardTemplateSelector = cardTemplateSelector;
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__image');
        this._title = this._element.querySelector('.element__paragraph');
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
            this._setEventListeners();
            this._image.src =  this._link;
            this._image.alt =  this._name;
            this._title.textContent = this._name;
    
            return this._element;
            
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
            this._image.addEventListener('click', () => {
                this._handleCardClick()
              });
              this._element.querySelector('.element__like-button').addEventListener('click', () => {
                this._handleLikePosts()
              });
              this._element.querySelector('.element__delete-button').addEventListener('click', () => {
                this._handleDeletePost()
              });
        }
}
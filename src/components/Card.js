
export class Card {
    constructor(item, cardTemplateSelector, {handleCardClick, handleLikeClick, handleDeleteCard, handleDislikeClick}, currentUserID) {
        this._item = item;
        this._likes = item.likes;
    
        this._cardTemplateSelector = cardTemplateSelector;

        this._handleLikeClick = handleLikeClick;
        this._handleDeleteCard = handleDeleteCard;
        this._handleCardClick = handleCardClick;
        this._handleDislikeClick = handleDislikeClick;

       this._userID = currentUserID;

       this._element = this._getTemplate();
       this._likesCounter = this._element.querySelector('.element__like-counter');
       this._image = this._element.querySelector('.element__image');
       this._title = this._element.querySelector('.element__paragraph');
       this._likesButton = this._element.querySelector('.element__like-button');
       this._deleteButton = this._element.querySelector('.element__delete-button');
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

            this._image.src =  this._item.link;
            this._image.alt =  this._item.name;
            this._title.textContent = this._item.name;
            this._checkLikes()
            this._likesCounter.textContent = this._item.likes.length;
            this._deleteBtnVisibility();

            return this._element;
            
        }

    //Удаляем карточки
    deleteCard() {
        this._element.closest('.element').remove();
    }
    //ставим лайк
    setLike(item) {
        this._likesButton.classList.add('element__like-button_active');
        this._likesCounter.textContent = item.likes.length;
    }
    //убираем лайк
    removeLike(item) {
        this._likesButton.classList.remove('element__like-button_active');
        this._likesCounter.textContent = item.likes.length;
    }
    //есть ли мой лайк на карточке
    _checkLikes() {
        this._likes.forEach((item) => {
            if(item._id === this._userID) {
                this._likesButton.classList.add('element__like-button_active');
            }
        });
    }

    //Прячем кнопку удалить
    _deleteBtnVisibility() {
        if(this._userID !== this._item.owner._id) {
            this._deleteButton.classList.add('element__delete-button-invisibility');
        }
    }

        //слушатели
        _setEventListeners() {
            //удаляем
            this._deleteButton.addEventListener('click', () => {
                this._handleDeleteCard()
            })
            //открываем картикнку
            this._image.addEventListener('click', () => {
                this._handleCardClick()
            });
            //лайк, дизлайк
            this._likesButton.addEventListener('click', (evt) => {
                if(evt.target.classList.contains('element__like-button_active')) {
                    this._handleDislikeClick();
                }
                else {
                    this._handleLikeClick();
                }
            })
        }
}
export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    //открытие попапа
    open() {
        this._popup.classList.add('popup_opened');
        // закрытие по Esc
        document.addEventListener('keydown', this._handleEscClose);
    }
    //закрытие окон с затемнением
    close() {
        this._popup.classList.remove('popup_opened');
        // закрытие по Esc
        document.removeEventListener('keydown', this._handleEscClose);
    }
    // закрытие по Esc
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    //закрытие окон по крестику и оверлею
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            //по оверлею
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            //по крестику
            if (evt.target.classList.contains('popup__close-button')) {
                this.close();
            }
        })
    }
}
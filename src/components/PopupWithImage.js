import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor (_popupSelector) {
        super(_popupSelector)
        this._imagePopup = this._popupSelector.querySelector('.popup-open__image');
        this._titlePopup = this._popupSelector.querySelector('.popup-open__title');
    }
    open(link, title) {
        super.open();
        this._imagePopup.src = link;
        this._imagePopup.alt = title;
        this._titlePopup.textContent = title;
    }
}
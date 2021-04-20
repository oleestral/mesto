import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        super(popupSelector)
        this._submitForm = submitForm;
        this._popupForms = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForms.querySelectorAll('.popup__input');
        this._saveButton = this._popupForms.querySelector('.popup__save-button');
        this._loadingButton = this._popupForms.querySelector('.popup__loading-button');
        
        
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => 
            this._formValues[input.name] = input.value)
        return this._formValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForms.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        })
    }
    close() {
        super.close();
        this._popupForms.reset();
    }
    renderLoading(isLoading) {
        if(isLoading) {
            this._saveButton.classList.add('popup__button-invisible');
            this._loadingButton.classList.remove('popup__button-invisible');
            this._loadingButton.disabled = true
        }
        else{
            this._saveButton.classList.remove('popup__button-invisible');
            this._loadingButton.classList.add('popup__button-invisible');
        }
    }
}
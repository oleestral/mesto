import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector){
        super(popupSelector)
    }
    setSubmit(submit) {
        this._submit = submit;
    }
    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit();
        })
    }
    
}
export default class UserInfo {
    constructor({nameProfile, descriptionProfile}) {
        this._nameProfile = document.querySelector(nameProfile);
        this._descriptionProfile = document.querySelector(descriptionProfile);
    }
    getUserInfo() {
        return {
            name: this._nameProfile.textContent,
            description: this._descriptionProfile.textContent
        }
    }
    setUserInfo({name, description}) {
        this._nameProfile.textContent = name;
        this._descriptionProfile.textContent = description;
    }
}
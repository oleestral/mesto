export default class UserInfo {
    constructor({nameProfile, descriptionProfile, avatarProfile, id}) {
        this._nameProfile = document.querySelector(nameProfile);
        this._descriptionProfile = document.querySelector(descriptionProfile);
        this._avatarProfile = document.querySelector(avatarProfile);
        this._id = id;
    }
    getUserInfo() {
        return {
            name: this._nameProfile.textContent,
            description: this._descriptionProfile.textContent,
            avatar: this._avatarProfile.src,
            id: this._id
        }
    }
    setUserInfo({name, description, avatar, id}) {
        this._nameProfile.textContent = name;
        this._descriptionProfile.textContent = description;
        this._avatarProfile.src = avatar;
        this._id = id;
    }
}
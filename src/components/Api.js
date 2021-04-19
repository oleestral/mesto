export default class Api {
    constructor({address , token}) {
        this._address = address;
        this._token = token;
    }
    //user information
    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
    //edit user profile
    editUserProfile(info) {
        return fetch(`${this._address}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                about: info.caption
            })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
    //get Initial Cards
    getInitialCards() {
        return fetch(`${this._address}/cards`, {
            method: 'GET',
            headers: {
                authorization: this._token,
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
    //add user's cards
    addUserCards(info) {
        return fetch(`${this._address}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: info.name,
                link: info.link
            })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
    //remove user's card
    removeUserCards(id) {
        return fetch(`${this._address}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
    //like post
    like(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
    //remove like
    removeLike(id) {
        return fetch(`${this._address}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token
            }
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
    //update user avatar
    updateUserAvatar(info) {
        return fetch(`${this._address}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar: info.avatar
            })
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            }
            else {
                return Promise.reject(`Ошибка: ${res.status}`)
            }
        })
    }
}
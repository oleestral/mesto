let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__info_editbutton');
let popupOverlay = document.querySelector('.popup__overlay');
let closeButton = document.querySelector('.popup__closeButton');

let formElement = document.querySelector('.popup__input-container');
let nameInput = document.querySelector('.popup__item_name')
let captionInput = document.querySelector('.popup__item_caption')

let nameProfile = document.querySelector('.profile__info_name');
let jobProfile = document.querySelector('.profile__info_selfdescription');

let submitButton = document.querySelector('.popup__submitButton');

/*открытие окна редактирования*/
function editProfile () {
    popup.classList.add('popup_opened');
    popupOverlay.classList.add('popup_opened');
    let name = nameProfile.textContent;
    let job = jobProfile.textContent;

    nameInput.value = name;
    captionInput.value = job;
}
editButton.addEventListener('click',editProfile);

/*закрытие окна редактирования*/
function closeEditProfile () {
    popup.classList.remove('popup_opened');
    popupOverlay.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeEditProfile);

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = captionInput.value;

    closeEditProfile()
}
formElement.addEventListener('submit', formSubmitHandler);
submitButton.addEventListener('click', formSubmitHandler);
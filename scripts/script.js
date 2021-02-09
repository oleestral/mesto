/*popup*/
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__input-container');
let nameInput = document.querySelector('.popup__item_type_name')
let captionInput = document.querySelector('.popup__item_type_caption')

/*profile*/
let editButton = document.querySelector('.profile__info-edit-button');
let nameProfile = document.querySelector('.profile__info-name');
let jobProfile = document.querySelector('.profile__info-self-description');


/*открытие окна редактирования*/
function editProfile () {
    popup.classList.add('popup_opened');
    nameInput.value = nameProfile.textContent;;
    captionInput.value = jobProfile.textContent;;
}

/*закрытие окна редактирования*/
function closeEditProfile () {
    popup.classList.remove('popup_opened');
}
/*важная штука*/
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = captionInput.value;

    closeEditProfile()
}
editButton.addEventListener('click',editProfile);
closeButton.addEventListener('click', closeEditProfile);
formElement.addEventListener('submit', formSubmitHandler);
/*popup*/
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupOpen = document.querySelector('.popup-open');
const closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__input-container');
let nameInput = document.querySelector('.popup__item_type_name');
let captionInput = document.querySelector('.popup__item_type_caption');
const closeButtonAdd = document.querySelector('.popup__close-button-add-container');
const formAElementAdd = document.querySelector('.popup__input-add-container');
const cardNameInput = document.querySelector('.popup__item_card_name');
const cardLinkInput = document.querySelector('.popup__item_card_link');
const popupImage = document.querySelector('.popup-open__image');
const popupTitle = document.querySelector('.popup-open__title');
const closeButtonOpen = document.querySelector('.popup-open__close-button');

/*profile*/
let editButton = document.querySelector('.profile__info-edit-button');
let nameProfile = document.querySelector('.profile__info-name');
let jobProfile = document.querySelector('.profile__info-self-description');
let addButton = document.querySelector('.profile__info-add-button');

/*element*/
let elementsContainer = document.querySelector('.elements'); /*целый контейнер*/
const cardName = document.querySelector('.element__paragraph');
const cardImage = document.querySelector('.element__image');
const elementTemplate = document.querySelector("#elements-items").content; /*темплейт*/

/********************************************************************************************ФУНКЦИИ**************************************/

//открытие окон с затемнением
function openPopup (popup) {
    popup.classList.add('popup_opened');
    showNamePrifile ();
}
//закрытие окон с затемнением
function closePopup(popup) {
    popup.classList.remove('popup_opened'); //окно редактирования профиля
}

//отображение теукщего имени профиля
function showNamePrifile () {
    nameInput.value = nameProfile.textContent;
    captionInput.value = jobProfile.textContent;
}
/*запись изменения имени профиля*/
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = captionInput.value;
    closePopup()
}
//лайкаем
function addLike(evt) {
    evt.target.classList.toggle('element__like-button_active');
}
//удаляем пост
function deleteCard(evt) {
    evt.target.closest('.element').remove();
}
//создаем скелет 6 изначальных карточек
function createCard(link, name) {
    let element = elementTemplate.querySelector(".element").cloneNode(true); /*скопировали внутренности темплейта*/
    element.querySelector('.element__image').src = link;
    element.querySelector('.element__image').alt = name;
    element.querySelector('.element__paragraph').textContent = name;
    element.querySelector('.element__like-button').addEventListener('click',addLike);
    element.querySelector('.element__delete-button').addEventListener('click',deleteCard);
    //смотрим картинки ближе
    const pic = element.querySelector('.element__image'); 
    pic.addEventListener('click', function(evt) { 
        openPopup(popupOpen);
        popupTitle.textContent = element.querySelector('.element__paragraph').textContent; 
        popupImage.src = element.querySelector('.element__image').src; 
     }) 
    return element;
}
//показываем скелет 6 изначальных карточек
initialCards.forEach((card) => {
    const newDefaultCard = createCard(card.link, card.name);
    elementsContainer.append(newDefaultCard);
});
//добавляем карточки по клику на кнопу добавления
function addCard(evt) {
    evt.preventDefault();
    const newAddCard = createCard(cardLinkInput.value,cardNameInput.value);
    elementsContainer.prepend(newAddCard);
    closePopupAdd()
}
////////////////////////////////////////////////////////////////////////ВЫЗОВ ФУНКЦИЙ///////////////////////////////
//вызов функции закрытия окон
closeButton.addEventListener('click',() => closePopup(popupEdit));
closeButtonAdd.addEventListener('click',() => closePopup(popupAdd));
closeButtonOpen.addEventListener('click',() => closePopup(popupOpen));
//сохрание ручного изменения имени
formElement.addEventListener('submit', formSubmitHandler);
formAElementAdd.addEventListener('submit',addCard);

editButton.addEventListener('click',() => openPopup(popupEdit));
addButton.addEventListener('click',() => openPopup(popupAdd));
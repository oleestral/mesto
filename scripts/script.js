/*popup*/
const popupEdit = document.querySelector('.popup-edit');
const popupAdd = document.querySelector('.popup-add');
const popupOpen = document.querySelector('.popup-open');
const closeButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__input-container');
const nameInput = document.querySelector('.popup__item_type_name');
const captionInput = document.querySelector('.popup__item_type_caption');
const closeButtonAdd = document.querySelector('.popup__close-button-add-container');
const formAElementAdd = document.querySelector('.popup__input-add-container');
const cardNameInput = document.querySelector('.popup__item_card_name');
const cardLinkInput = document.querySelector('.popup__item_card_link');
const popupImage = document.querySelector('.popup-open__image');
const popupTitle = document.querySelector('.popup-open__title');
const closeButtonOpen = document.querySelector('.popup-open__close-button');
const popupOrigin = document.querySelectorAll('.popup');
/*profile*/
const editButton = document.querySelector('.profile__info-edit-button');
const nameProfile = document.querySelector('.profile__info-name');
const jobProfile = document.querySelector('.profile__info-self-description');
const addButton = document.querySelector('.profile__info-add-button');

/*element*/
const elementsContainer = document.querySelector('.elements'); /*целый контейнер*/
const cardName = document.querySelector('.element__paragraph');
const elementTemplate = document.querySelector("#elements-items").content; /*темплейт*/

/********************************************************************************************ФУНКЦИИ**************************************/
const template = elementTemplate.querySelector(".element");
const resetAddContainer =  document.getElementById('input-container-add'); //переменная для сброса формы добавления карточки
//открытие окон с затемнением
function openPopup (popup) {
    popup.classList.add('popup_opened');
}
//закрытие окон по клавише Esc
function closePopupEsc(evt) {
    if (evt.key === "Escape") {
    const popupActive = document.querySelector('.popup_opened');
    closePopup(popupActive);
    }
}
//закрытие окон по клику на фон
popupOrigin.forEach(function(item) {
    item.addEventListener('mousedown', function(evt){
        if (evt.target.classList.contains('popup_opened')) {
            evt.target.classList.toggle('popup_opened');
        }
    })
})
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
    closePopup(popupEdit)
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
    const element = template.cloneNode(true); /*скопировали внутренности темплейта*/
    const elementImage = element.querySelector('.element__image');
    elementImage.src = link;
    elementImage.alt = name;
    const elementParagraph = element.querySelector('.element__paragraph');
    elementParagraph.textContent = name;
    element.querySelector('.element__like-button').addEventListener('click',addLike);
    element.querySelector('.element__delete-button').addEventListener('click',deleteCard);
    //смотрим картинки ближе
    const pic = elementImage; 
    pic.addEventListener('click', function(evt) { 
        popupTitle.textContent = elementParagraph.textContent; 
        popupImage.src = elementImage.src;
        popupImage.alt = elementParagraph.textContent;
        openPopup(popupOpen);
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
    closePopup(popupAdd);
    resetAddContainer.reset();
}
////////////////////////////////////////////////////////////////////////ВЫЗОВ ФУНКЦИЙ///////////////////////////////
//вызов функции закрытия окон
closeButton.addEventListener('click',() => closePopup(popupEdit));
closeButtonAdd.addEventListener('click',() => closePopup(popupAdd));
closeButtonOpen.addEventListener('click',() => closePopup(popupOpen));
//сохрание ручного изменения имени
formElement.addEventListener('submit', formSubmitHandler);
formAElementAdd.addEventListener('submit',addCard);

document.addEventListener('keydown', closePopupEsc)// закрытие по Esc

editButton.addEventListener('click',() => {
    openPopup(popupEdit);
    showNamePrifile();
});
addButton.addEventListener('click',() => openPopup(popupAdd));
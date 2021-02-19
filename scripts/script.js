/*popup*/
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__input-container');
let nameInput = document.querySelector('.popup__item_type_name');
let captionInput = document.querySelector('.popup__item_type_caption');
let popupAdd = document.querySelector('.popup-add');
let popupOpenContainer = document.querySelector('.popup-open');
let closeButtonAdd = document.querySelector('.popup__close-button-add-container');
let formAElementAdd = document.querySelector('.popup__input-add-container');
const cardNameInput = document.querySelector('.popup__item_card_name');
const cardLinkInput = document.querySelector('.popup__item_card_link');
const popupImage = document.querySelector('.popup-open__image');
const popupTitle = document.querySelector('.popup-open__title');
const popupOpen = document.querySelector('.popup-open');
const closeButtonOpen = document.querySelector('.popup-open__close-button');

/*profile*/
let editButton = document.querySelector('.profile__info-edit-button');
let nameProfile = document.querySelector('.profile__info-name');
let jobProfile = document.querySelector('.profile__info-self-description');
let addButton = document.querySelector('.profile__info-add-button');

/*element*/
let likeButton = document.querySelector('.element__like-button');
let elementsContainer = document.querySelector('.elements'); /*целый контейнер*/
const cardName = document.querySelector('.element__paragraph');
const cardImage = document.querySelector('.element__image');

/*Карточки на странице по умолчанию*/
const initialCards = [
    {
        name: "Копенгаген",
        link: 'https://images.unsplash.com/photo-1543164252-901f6b00034b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGNvcGVuaGFnZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: "Хельсингборг",
        link: "https://images.unsplash.com/photo-1600420565426-5ec0420221b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGVsc2luZ2Jvcmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Осло",
        link: "https://images.unsplash.com/photo-1560698862-c340d3c8bf38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        name: "Стокгольм",
        link: "https://images.unsplash.com/photo-1572225303717-a96db5e8d8b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3RvY2tob2xtfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Олесунн",
        link: "https://images.unsplash.com/photo-1576705485497-a63544e1b110?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YWxlc3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Лунд",
        link: "https://images.unsplash.com/photo-1603828665583-e2b1cfaa8cab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
];
/********************************************************************************************ФУНКЦИИ**************************************/

//открытие окна редактирования профиля
editButton.addEventListener('click',function() {
    popup.classList.add('popup_opened');
    showNamePrifile ()
});
//открытие окна добавления карточки
addButton.addEventListener('click',function() {
    popupAdd.classList.add('popup_opened');
});
//отображение теукщего имени профля
function showNamePrifile () {
    nameInput.value = nameProfile.textContent;
    captionInput.value = jobProfile.textContent;
}

//закрытие окон с затемнением
function closePopups() {
    popup.classList.remove('popup_opened');
    popupAdd.classList.remove('popup_opened');
    popupOpen.classList.remove('popup_opened');

}
/*запись изменения имени профиля*/
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = captionInput.value;
    closePopups()
}
//добавление изначальных карточек
initialCards.forEach((item) => {
    let elementTemplate = document.querySelector("#elements-items").content; /*темплейт*/
    let element = elementTemplate.querySelector(".element").cloneNode(true); /*скопировали внутренности темплейта*/
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    element.querySelector('.element__paragraph').textContent = item.name;
    //лайкаем
    const cardLike = element.querySelector('.element__like-button');
    cardLike.addEventListener('click', () => {
        cardLike.classList.toggle('element__like-button_active');
     });
     //смотрим картинки ближе
     const pic = element.querySelector('.element__image');
     pic.addEventListener('click', function() {
        popupOpen.classList.add('popup_opened');
        popupTitle.textContent = element.querySelector('.element__paragraph').textContent;
        popupImage.src = element.querySelector('.element__image').src;
     })
    elementsContainer.append(element);
})

//Создание скелета карточки
function createCardSkeleton() {
    let elementTemplate = document.querySelector("#elements-items").content; /*темплейт*/
    let element = elementTemplate.querySelector(".element").cloneNode(true); /*скопировали внутренности темплейта*/
    element.querySelector('.element__paragraph').textContent =  cardNameInput.value;
    element.querySelector('.element__image').src = cardLinkInput.value;
    element.querySelector('.element__paragraph').alt = cardNameInput.value;
    //лайкаем
    const cardLike = element.querySelector('.element__like-button');
    const pic = element.querySelector('.element__image');
    cardLike.addEventListener('click', () => {
        cardLike.classList.toggle('element__like-button_active');
     });
     //смотрим картинки ближе
     pic.addEventListener('click', function(evt) {
        popupOpen.classList.add('popup_opened');
        popupTitle.textContent = element.querySelector('.element__paragraph').textContent;
        popupImage.src = element.querySelector('.element__image').src;
     })

    elementsContainer.prepend(element);

    return element;
}



//Добавление карточки по кнопке
function addCard(evt) {
    evt.preventDefault();
    createCardSkeleton()
    closePopups()
}
formAElementAdd.addEventListener('submit',addCard);


/*удаление карточки*/
function removeCard() {
    document.getElementById("element-container").remove();
}

////////////////////////////////////////////////////////////////////////ВЫЗОВ ФУНКЦИЙ///////////////////////////////
//вызов функции закрытия окон
closeButton.addEventListener('click',closePopups);
closeButtonAdd.addEventListener('click',closePopups);
closeButtonOpen.addEventListener('click',closePopups);
//сохрание ручного изменения имени
formElement.addEventListener('submit', formSubmitHandler);
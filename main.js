(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r){var i=o.handleCardClick,a=o.handleLikeClick,s=o.handleDeleteCard,u=o.handleDislikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=e,this._likes=e.likes,this._cardTemplateSelector=n,this._handleLikeClick=a,this._handleDeleteCard=s,this._handleCardClick=i,this._handleDislikeClick=u,this._userID=r,this._element=this._getTemplate(),this._likesCounter=this._element.querySelector(".element__like-counter"),this._image=this._element.querySelector(".element__image"),this._title=this._element.querySelector(".element__paragraph"),this._likesButton=this._element.querySelector(".element__like-button"),this._deleteButton=this._element.querySelector(".element__delete-button")}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._cardTemplateSelector.content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._image.src=this._item.link,this._image.alt=this._item.name,this._title.textContent=this._item.name,this._checkLikes(),this._likesCounter.textContent=this._item.likes.length,this._deleteBtnVisibility(),this._element}},{key:"deleteCard",value:function(){this._element.closest(".element").remove()}},{key:"setLike",value:function(e){this._likesButton.classList.add("element__like-button_active"),this._likesCounter.textContent=e.likes.length}},{key:"removeLike",value:function(e){this._likesButton.classList.remove("element__like-button_active"),this._likesCounter.textContent=e.likes.length}},{key:"_checkLikes",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._userID&&e._likesButton.classList.add("element__like-button_active")}))}},{key:"_deleteBtnVisibility",value:function(){this._userID!==this._item.owner._id&&this._deleteButton.classList.add("element__delete-button-invisibility")}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteCard()})),this._image.addEventListener("click",(function(){e._handleCardClick()})),this._likesButton.addEventListener("click",(function(t){t.target.classList.contains("element__like-button_active")?e._handleDislikeClick():e._handleLikeClick()}))}}])&&e(n.prototype,o),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=t,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._setSelector=t.setSelector,this._buttonSelector=t.buttonSelector,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._selector.submitButtonSelector)}var t,o;return t=e,(o=[{key:"_showError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?this.disableSubmitButton():(t.removeAttribute("disabled"),t.classList.remove(this._inactiveButtonClass))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._selector.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()}));var t=Array.from(this._formElement.querySelectorAll(this._inputSelector)),n=this._formElement.querySelector(this._submitButtonSelector);t.forEach((function(o){o.addEventListener("input",(function(){e._checkInputValidity(o),e._toggleButtonState(t,n)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,o),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"appendAddItem",value:function(e){this._container.append(e)}},{key:"prependAddItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&r(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&a(t.prototype,n),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(r){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imagePopup=t._popup.querySelector(".popup-open__image"),t._titlePopup=t._popup.querySelector(".popup-open__title"),t}return t=a,(n=[{key:"open",value:function(e,t){l(h(a.prototype),"open",this).call(this),this._imagePopup.src=e,this._imagePopup.alt=t,this._titlePopup.textContent=t}}])&&c(t.prototype,n),a}(s);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(o);if(r){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t,n=e.popupSelector,o=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submitForm=o,t._popupForms=t._popup.querySelector(".popup__form"),t._inputList=t._popupForms.querySelectorAll(".popup__input"),t._saveButton=t._popupForms.querySelector(".popup__save-button"),t._loadingButton=t._popupForms.querySelector(".popup__loading-button"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;v(k(a.prototype),"setEventListeners",this).call(this),this._popupForms.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues())}))}},{key:"close",value:function(){v(k(a.prototype),"close",this).call(this),this._popupForms.reset()}},{key:"renderLoading",value:function(e){e?(this._saveButton.classList.add("popup__button-invisible"),this._loadingButton.classList.remove("popup__button-invisible"),this._loadingButton.disabled=!0):(this._saveButton.classList.remove("popup__button-invisible"),this._loadingButton.classList.add("popup__button-invisible"))}}])&&y(t.prototype,n),a}(s);function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var C=function(){function e(t){var n=t.nameProfile,o=t.descriptionProfile,r=t.avatarProfile,i=t.id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameProfile=document.querySelector(n),this._descriptionProfile=document.querySelector(o),this._avatarProfile=document.querySelector(r),this._id=i}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameProfile.textContent,description:this._descriptionProfile.textContent,avatar:this._avatarProfile.src,id:this._id}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.description,o=e.avatar,r=e.id;this._nameProfile.textContent=t,this._descriptionProfile.textContent=n,this._avatarProfile.src=o,this._id=r}}])&&S(t.prototype,n),e}();function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e,t,n){return(L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(o);if(r){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"setSubmit",value:function(e){this._submit=e}},{key:"setEventListeners",value:function(){var e=this;L(j(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submit()}))}}])&&w(t.prototype,n),a}(s);function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var I,q=function(){function e(t){var n=t.address,o=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._token=o}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{authorization:this._token,"Content-type":"application/json"}}).then(this._getResponseData)}},{key:"editUserProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({name:e.name,about:e.caption})}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"addUserCards",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"removeUserCards",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"like",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"removeLike",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._getResponseData)}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}}])&&R(t.prototype,n),e}(),D=document.querySelector(".popup__input-container"),T=document.querySelector(".popup__item_type_name"),U=document.querySelector(".popup__item_type_caption"),x=document.querySelector(".popup__input-add-container"),A=document.querySelector(".popup__input-update-container"),V=document.querySelector(".profile__info-edit-button"),F=document.querySelector(".profile__info-add-button"),z=document.querySelector(".profile__avatar-edit"),N=document.querySelector(".elements"),J=document.getElementById("elements-items"),G=new q({address:"https://mesto.nomoreparties.co/v1/cohort-22",token:"42bb299b-ecdd-434e-b139-b5601cfc74ef"}),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__button-disabled",inputErrorClass:"popup__input-type-error",errorClass:"popup__error_visible",setSelector:".popup__set",buttonSelector:".button"};function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}Promise.all([G.getInitialCards(),G.getUserInfo()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];I=i._id,W.renderItems(r),$.setUserInfo({name:i.name,description:i.about,avatar:i.avatar,id:i._id}),console.log("Данные пользователям и дефолтные карточки успешно загружены")})).catch((function(e){console.log(e),console.log("Данные пользователям и дефолтные карточки не загружены")}));var $=new C({nameProfile:".profile__info-name",descriptionProfile:".profile__info-self-description",avatarProfile:".profile__avatar",id:I}),K=new g({popupSelector:".popup-edit",submitForm:function(e){K.renderLoading(!0),G.editUserProfile(e).then((function(e){$.setUserInfo({name:e.name,description:e.about,avatar:e.avatar,id:e._id}),K.close(),console.log("Редактирование профиля прошло успешно")})).catch((function(){console.log("Возникла ошибка при редактирование профиля")})).finally((function(){K.renderLoading(!1)}))}}),Q=new g({popupSelector:".popup-update",submitForm:function(e){Q.renderLoading(!0),G.updateUserAvatar(e).then((function(e){$.setUserInfo({name:e.name,description:e.about,avatar:e.avatar,id:e._id}),Q.close(),console.log("Обновление аватара пользователя прошло успешно")})).catch((function(){console.log("Возникла ошибка при Обновлении аватара пользователя")})).finally((function(){Q.renderLoading(!1)}))}}),W=new i({renderer:function(e){var t=Y(e);W.appendAddItem(t)}},N),X=new d(".popup-open");function Y(e){var n=new t(e,J,{handleCardClick:function(){X.open(e.link,e.name)},handleLikeClick:function(){G.like(e._id).then((function(e){n.setLike(e),console.log("Лайк")})).catch((function(){console.log("Не пролайкано")}))},handleDislikeClick:function(){G.removeLike(e._id).then((function(e){n.removeLike(e),console.log("Дизлайк")})).catch((function(){console.log("Ошибка при дизлайке")}))},handleDeleteCard:function(){ee.open(),ee.setSubmit((function(){G.removeUserCards(e._id).then((function(e){n.deleteCard(e),ee.close(),console.log("Успешно удалено")})).catch((function(){console.log("Неуспешно удалено")}))}))}},I);return n.generateCard()}var Z=new g({popupSelector:".popup-add",submitForm:function(e){Z.renderLoading(!0),G.addUserCards(e).then((function(e){var t=Y(e);W.prependAddItem(t),Z.close(),console.log("Добавление карточки прошло успешно")})).catch((function(e){console.log("Возникла ошибка при Добавление карточки"),console.log(e)})).finally((function(){Z.renderLoading(!1)}))}}),ee=new B(".popup-delete");new o(H,D).enableValidation(),new o(H,x).enableValidation();var te=new o(H,A);te.enableValidation(),V.addEventListener("click",(function(e){e.preventDefault(),K.open(),T.value=$.getUserInfo().name,U.value=$.getUserInfo().description})),z.addEventListener("click",(function(){Q.open(),te.disableSubmitButton()})),F.addEventListener("click",(function(e){e.preventDefault(),new o(H,x).disableSubmitButton(),Z.open()})),X.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),Z.setEventListeners(),ee.setEventListeners()})();
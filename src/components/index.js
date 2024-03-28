import '../index.css';

import { initialCards } from './cards.js';
import { createCard, deleteCard, handleLikeBtn } from './card.js';
import { openPopup, closePopup } from './modal.js';

const cardsContainer = document.querySelector('.places__list');

const popups = document.querySelectorAll('.popup');

const addCardBtn = document.querySelector('.profile__add-button');

const formEditProfile = document.forms['edit-profile'];
const popupEditType = document.querySelector('.popup_type_edit');

const formNewCard = document.forms['new-place'];
const popupNewCard = document.querySelector('.popup_type_new-card');
const inputNameFormCard = popupNewCard.querySelector(
  '.popup__input_type_card-name'
);
const inputLinkFormCard = popupNewCard.querySelector('.popup__input_type_url');

const editProfileBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const inputNameFormProfile = document.querySelector('.popup__input_type_name');
const inputDescriptionFormProfile = document.querySelector(
  '.popup__input_type_description'
);

const popupImageType = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');

// Функция детального показа фото
function handleImageShow(cardImage, cardTitle) {
  popupImage.src = cardImage;
  popupImage.alt = cardTitle;
  popupImageCaption.textContent = cardTitle;

  openPopup(popupImageType);
}

// Функция для редактирования профиля
function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();

  const inputNameFormProfileValue = inputNameFormProfile.value;
  const inputDescriptionFormProfileValue = inputDescriptionFormProfile.value;

  profileName.textContent = inputNameFormProfileValue;
  profileDescription.textContent = inputDescriptionFormProfileValue;

  closePopup(popupEditType);
}
formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

// Функция создания карточки пользователем и её вывода на страницу
function handleFormNewCardSubmit(evt) {
  evt.preventDefault();

  const inputNameFormCardValue = inputNameFormCard.value;
  const inputLinkFormCardValue = inputLinkFormCard.value;

  const newCard = createCard(
    { name: inputNameFormCardValue, link: inputLinkFormCardValue },
    deleteCard,
    handleLikeBtn,
    handleImageShow
  );

  cardsContainer.prepend(newCard);

  closePopup(popupNewCard);

  formNewCard.reset();
}
formNewCard.addEventListener('submit', handleFormNewCardSubmit);

addCardBtn.addEventListener('click', function () {
  formNewCard.reset();
  openPopup(popupNewCard);
});

editProfileBtn.addEventListener('click', function () {
  inputNameFormProfile.value = profileName.textContent;
  inputDescriptionFormProfile.value = profileDescription.textContent;

  openPopup(popupEditType);
});

// Вывод карточек(initialCards) на страницу
initialCards.forEach(function (card) {
  const initialCard = createCard(
    card,
    deleteCard,
    handleLikeBtn,
    handleImageShow
  );
  cardsContainer.append(initialCard);
});

// Закрытие попапов по оверлею/кнопке
popups.forEach(popup => {
  popup.addEventListener('click', evt => {
    if (
      evt.target.classList.contains('popup_is-opened') ||
      evt.target.classList.contains('popup__close')
    ) {
      closePopup(popup);
    }
  });
});

import '../pages/index.css';
import { initialCards } from './cards.js';
import { createCard, deleteCard, handleLikeBtn } from './components/card.js';
import { openPopup, closePopup } from './components/modal.js';

const cardsContainer = document.querySelector('.places__list');

const addCardBtn = document.querySelector('.profile__add-button');

const formEditProfile = document.forms['edit-profile'];
const popupEditType = document.querySelector('.popup_type_edit');

const formNewCard = document.forms['new-place'];
const popupNewCard = document.querySelector('.popup_type_new-card');

const editProfileBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const displayedName = document.querySelector('.popup__input_type_name');
const displayedDescription = document.querySelector(
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

// Функция закрытия попапа с формой после сабмита
function closePopupAfterSubmit(popup) {
  const saveBtn = popup.querySelector('.popup__button');
  saveBtn.addEventListener('submit', closePopup(popup));
}

// Функция для редактирования профиля
function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();

  const displayedNameValue = displayedName.value;
  const displayedDescriptionValue = displayedDescription.value;

  profileName.textContent = displayedNameValue;
  profileDescription.textContent = displayedDescriptionValue;

  closePopupAfterSubmit(popupEditType);
}
formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);

// Функция создания карточки пользователем и её вывода на страницу
function handleFormNewCardSubmit(evt) {
  evt.preventDefault();

  const cardName = popupNewCard.querySelector('.popup__input_type_card-name');
  const cardLink = popupNewCard.querySelector('.popup__input_type_url');
  const cardNameValue = cardName.value;
  const cardLinkValue = cardLink.value;

  const newCard = createCard(
    { name: cardNameValue, link: cardLinkValue },
    deleteCard,
    handleLikeBtn,
    handleImageShow
  );

  cardsContainer.prepend(newCard);

  closePopupAfterSubmit(popupNewCard);

  formNewCard.reset();
}
formNewCard.addEventListener('submit', handleFormNewCardSubmit);

addCardBtn.addEventListener('click', function () {
  formNewCard.reset();
  openPopup(popupNewCard);
});

editProfileBtn.addEventListener('click', function () {
  displayedName.value = profileName.textContent;
  displayedDescription.value = profileDescription.textContent;

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

// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
function createCard(cardData, deleteCard, handleLikeBtn, handleImageShow) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteBtn = card.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteBtn.addEventListener('click', () => deleteCard(card));
  card.addEventListener('click', evt => handleLikeBtn(evt));
  cardImage.addEventListener('click', () =>
    handleImageShow(cardData.link, cardData.name)
  );

  return card;
}

// Функция удаления карточки
function deleteCard(cardForDelete) {
  cardForDelete.remove();
}

// Функция для лайка
function handleLikeBtn(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
}

export { createCard, deleteCard, handleLikeBtn };

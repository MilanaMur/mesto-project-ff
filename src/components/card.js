// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
function createCard(
  { name: cardName, link: cardLink },
  deleteCard,
  handleLikeBtn,
  handleImageShow
) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteBtn = card.querySelector('.card__delete-button');

  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  cardDeleteBtn.addEventListener('click', () => deleteCard(card));
  card.addEventListener('click', evt => handleLikeBtn(evt));
  cardImage.addEventListener('click', () =>
    handleImageShow(cardLink, cardName)
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

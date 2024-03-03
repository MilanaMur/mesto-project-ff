// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// DOM узлы
const cardList = document.querySelector('.places__list');

// Функция создания карточки
function createCard(item, deleteCard) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardDeleteBtn = card.querySelector('.card__delete-button');
  
  cardImage.src = item.link;
  cardImage.alt = item.name;
  card.querySelector('.card__title').textContent = item.name;

  cardDeleteBtn.addEventListener('click', () => deleteCard(card));

  return card;
}

// Функция удаления карточки
function deleteCard(cardForDelete) {
  cardForDelete.remove();
}

// Вывод карточек на страницу
initialCards.forEach(function (card) {
  const newCard = createCard(card, deleteCard);
  cardList.append(newCard);
});

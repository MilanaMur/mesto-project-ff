function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEsc);
  popup.addEventListener('click', closePopupOnOverlay);
  closePopupByBtn(popup);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupByEsc);
  popup.removeEventListener('click', closePopupOnOverlay);
}

function closePopupByBtn(popup) {
  const closeBtn = popup.querySelector('.popup__close');
  closeBtn.addEventListener('click', () => closePopup(popup));
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_is-opened'));
  }
}

function closePopupOnOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(document.querySelector('.popup_is-opened'));
  }
}

export { openPopup, closePopup };

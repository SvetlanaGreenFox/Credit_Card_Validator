// import Game from './startgame';
import isCard from "./isCard";
import isValidCard from "./isValidCard";

const modalWrap = document.querySelector('.wrap_modal');

const activateElement = (tagName) => {
  const activeElement = document.querySelector('.active');
  if (activeElement !== null) {
    activeElement.classList.remove('active');
  }

  const element = document.querySelector(`.${tagName}`);
  if (element === null) {
    modalWrap.style.visibility = 'visible';
    return;
  }

  element.classList.add('active');
};

const closePopup = document.querySelector('.close_popup');

closePopup.addEventListener('click', () => {
  modalWrap.style.visibility = 'hidden';
});

const inputElement = document.querySelector('.form-control');
const buttonElement = document.querySelector('.button');

inputElement.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.preventDefault();
    if (e.target.value.length === 0) return;
    const userCard = e.target.value;

    if (isValidCard(userCard)) {
      const tagName = isCard(userCard);
      activateElement(tagName);
    }

    e.target.value = '';
  }
});

buttonElement.addEventListener('click', (e) => {
  e.preventDefault();
});
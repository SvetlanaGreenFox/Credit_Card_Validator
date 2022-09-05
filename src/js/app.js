import isPaymentSystem from './isPaymentSystem';
import isValidCard from './isValidCard';

const cards = document.querySelectorAll('.card__wrapper');
const inputElement = document.querySelector('.form-control');
const buttonElement = document.querySelector('.button');
const modalWrap = document.querySelector('.wrap_modal');
const closePopup = document.querySelector('.close_popup');

function init() {
  // const activateElement = (tagName) => {
  //   const activeElement = document.querySelector('.active');
  //   if (activeElement !== null) {
  //     activeElement.classList.remove('active');
  //   }

  //   const element = document.querySelector(`.${tagName}`);
  //   if (element === null) {
  //     modalWrap.style.visibility = 'visible';
  //     return;
  //   }

  //   element.classList.add('active');
  // };

  const hideElements = (tagName) => {
    const hiddenElements = document.querySelectorAll('.hidden');
    if (hiddenElements.length > 0) {
      Array.from(hiddenElements).forEach((elem) => elem.classList.remove('hidden'));
    }
    const activeSpan = document.querySelector(`.${tagName}`);
    if (activeSpan === null) {
      modalWrap.style.visibility = 'visible';
      return;
    }
    const parent = activeSpan.parentElement;
    Array.from(cards)
      .filter((elem) => elem !== parent)
      .forEach((elem) => {
        elem.classList.add('hidden');
      });
  };

  closePopup.addEventListener('click', () => {
    modalWrap.style.visibility = 'hidden';
  });

  inputElement.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      if (e.target.value.length === 0) return;
      const userCard = e.target.value;

      if (isValidCard(userCard)) {
        const tagName = isPaymentSystem(userCard);
        hideElements(tagName);
      }

      e.target.value = '';
    }
  });

  buttonElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (isValidCard(inputElement.value)) {
      const tagName = isPaymentSystem(inputElement.value);
      hideElements(tagName);
    }

    inputElement.value = '';
  });
}

init();

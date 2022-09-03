import isPaymentSystem from './isPaymentSystem';
import isValidCard from './isValidCard';

function init() {
  const modalWrap = document.querySelector('.wrap_modal');
  const closePopup = document.querySelector('.close_popup');
  const inputElement = document.querySelector('.form-control');
  const buttonElement = document.querySelector('.button');

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
        activateElement(tagName);
      }

      e.target.value = '';
    }
  });

  buttonElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (isValidCard(inputElement.value)) {
      const tagName = isPaymentSystem(inputElement.value);
      activateElement(tagName);
    }

    inputElement.value = '';
  });
}

init();

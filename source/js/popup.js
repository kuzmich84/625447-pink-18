'use strict';

const form = document.querySelector('.form');
const inputsForm = form.querySelectorAll("input");
const popupSuccess = document.querySelector('.popup--success');
const popupError = document.querySelector('.popup--failure');
const button = document.querySelector('.popup__button');
const popup = document.querySelector('.popup');
const formButton = document.querySelector('.form__button');

let showPopupOfValidity = function (element) {
  if (element.checkValidity() === false) {
    popupError.style.display = 'block';
  } else {
    popupSuccess.style.display = 'block';
  }
};

let checkElementForm = function (elements) {
  elements.forEach(function (item) {
    showPopupOfValidity(item);
  });
};

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  checkElementForm(inputsForm);
});


// formButton.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   checkElementForm(inputsForm);
// });
button.addEventListener('click', function () {
  popup.style.display = 'none';
});


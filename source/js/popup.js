'use strict';

var form = document.querySelector('.form');
var inputsForm = form.querySelectorAll("input");
var popupSuccess = document.querySelector('.popup--success');
var popupError = document.querySelector('.popup--failure');
var button = document.querySelector('.popup__button');
var popup = document.querySelector('.popup');
var formButton = document.querySelector('.form__button');

var showPopupOfValidity = function (element) {
  if (element.checkValidity() === false) {
    popupError.style.display = 'block';
  } else {
    popupSuccess.style.display = 'block';
  }
};

var checkElementForm = function (elements) {
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


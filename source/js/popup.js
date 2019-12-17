'use strict';

var form = document.querySelector('.form');
var inputsForm = form.querySelectorAll("input");
var popupSuccess = document.querySelector('.popup--success');
var popupError = document.querySelector('.popup--failure');
var button = document.querySelector('.popup__button');
var formButton = document.querySelector('.form__button');
var buttonFailure = document.querySelector('.popup__button--failure');
var buttonSuccess = document.querySelector('.popup__button--success');

var showPopupOfValidity = function (element) {
  if (element.checkValidity() === false) {
    popupError.style.display = 'block';
    element.style.borderColor = 'red';
    buttonFailure.addEventListener('click', function () {
      popupError.style.display = 'none';
    });
  } else {
    // popupSuccess.style.display = 'block';
    element.removeAttribute('style');
    // buttonSuccess.addEventListener('click', function () {
    //   popupSuccess.style.display = 'none';
    // });
  }
};


var checkElementForm = function (elements) {
  elements.forEach(function (item) {
    if(item.required === true) {
      showPopupOfValidity(item);
    }
  });
};




form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log('Привет');
  popupSuccess.style.display = 'block';
});

formButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  checkElementForm(inputsForm);
});

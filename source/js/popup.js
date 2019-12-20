'use strict';

var form = document.querySelector('.form');
var inputsForm = form.querySelectorAll("input");
var popupSuccess = document.querySelector('.popup--success');
var popupError = document.querySelector('.popup--failure');
var button = document.querySelector('.popup__button');
var formButton = document.querySelector('.form__button');
var buttonFailure = document.querySelector('.popup__button--failure');
var buttonSuccess = document.querySelector('.popup__button--success');
var ESC_KEYCODE = 27;


var isEscEvent = function (evt, action) {
  if (evt.keyCode === ESC_KEYCODE) {
    action();
  }
};

var pressEscPopupErrorHandler = function (evt) {
  isEscEvent(evt, closePopupError);
};

var pressEscPopupSuccesHandler = function (evt) {
  isEscEvent(evt, closePopupSuccess);
};

var closePopupError = function () {
  popupError.style.display = 'none';
};

var closePopupSuccess = function () {
  popupSuccess.style.display = 'none';
};

var showPopupOfValidity = function (element) {
  if (element.checkValidity() === false) {
    popupError.style.display = 'block';
    element.style.borderColor = 'red';
    buttonFailure.addEventListener('click', function () {
      popupError.style.display = 'none';
    });
    document.addEventListener('keydown', pressEscPopupErrorHandler);
  } else {
    element.removeAttribute('style');
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
  popupSuccess.style.display = 'block';
  buttonSuccess.addEventListener('click', function () {
    form.reset();
    popupSuccess.style.display = 'none';
  });
  document.addEventListener('keydown', pressEscPopupSuccesHandler);
  evt.preventDefault();
});

formButton.addEventListener('click', function () {
  checkElementForm(inputsForm);
});

var btnWriteUs = document.querySelector('.button-write-us');
var popupWriteUs = document.querySelector('.write-us');

var btnWriteUsClose = popupWriteUs.querySelector('.write-us-close');
var nameWriteUs = popupWriteUs.querySelector('input[name="name"]');
var emailWriteUs = popupWriteUs.querySelector('input[name="email"]');
var messageWriteUs = popupWriteUs.querySelector('textarea[name="message"]');
var btnWriteUsSubmit = popupWriteUs.querySelector('button[type="submit"]');

// Открытие окна обратной связи
btnWriteUs.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove('write-us-send');
  popupWriteUs.classList.remove('write-us-error');
  popupWriteUs.classList.remove('write-us-hidden');
  popupWriteUs.classList.add('write-us-show');
});

// Закрытие окна обратной связи
btnWriteUsClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove('write-us-show');
  popupWriteUs.classList.remove('write-us-error');
  popupWriteUs.classList.add('write-us-hidden');
});

// Закрытие окна обратной связи по нажатию клавиши ESC
window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    popupWriteUs.classList.remove('write-us-show');
    popupWriteUs.classList.remove('write-us-error');
    popupWriteUs.classList.add('write-us-hidden');
  }
});

// Нажатие на кнопку отправки формы
btnWriteUsSubmit.addEventListener('click', function(evt) {
  
  if (!nameWriteUs.value || !emailWriteUs.value || !messageWriteUs.value) {
    // console.log('форма пустая');
    popupWriteUs.classList.remove('write-us-error');
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add('write-us-error');
  } else {
    // console.log('форма заполнена');
    evt.preventDefault();
    popupWriteUs.classList.remove('write-us-error');
    popupWriteUs.classList.add('write-us-send');
  }
});
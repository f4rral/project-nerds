var currentSleder = 0;
var rbSliderControls = document.querySelectorAll('.slider-controls i');
var sliderList = document.querySelectorAll('.slider-list .slider-item');
var sliderTimer = setInterval(autoNextSlide, 4000);

rbSliderControls.forEach(function(rb, index) {
  rb.addEventListener('click', switchSliderControls);
});

// обработка нажатия переключателя слайдов
function switchSliderControls(evt) {
  rbSliderControls.forEach(function(rb, index) {
    rb.classList.remove('active');
    if (rb === evt.currentTarget) {
      currentSleder = index;
    }
  });
  
  showSelectedSlide(currentSleder);
  rbSliderControls[currentSleder].classList.add('active');
  sliderTimer = setInterval(autoNextSlide, 4000);
}

// отображение выбранного слайда
function showSelectedSlide(select) {
  sliderList.forEach(function(slide) {
    if (slide.classList.contains('slider-show')) {
      slide.classList.remove('slider-show');
      slide.classList.add('slider-hidden');
    }
  });
  
  sliderList[select].classList.remove('slider-hidden');
  sliderList[select].classList.add('slider-show');
  clearInterval(sliderTimer);
}

// автоматический переход на следующий слайд
function autoNextSlide() {
  currentSleder ++;
  if (currentSleder > 2) {
    currentSleder = 0;
  }
  switchSliderControls(currentSleder);
}
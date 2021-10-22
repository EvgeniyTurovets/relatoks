"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // общие функции
  var sliderCounter = function sliderCounter(slider, selector) {
    var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var info = slider.getInfo();
    document.querySelector(selector).innerHTML = info.slideCount <= count ? '' : "".concat(info.displayIndex, "/").concat(info.slideCount);
    slider.events.on('indexChanged', function () {
      var newInfo = slider.getInfo();
      document.querySelector(selector).innerHTML = "".concat(newInfo.displayIndex, "/").concat(newInfo.slideCount);
    });
  }; // бургер с меню


  if (document.getElementById('burger-checkbox')) {
    var burger = document.getElementById('burger-checkbox');
    var menu = document.querySelector('.header .menu');
    var body = document.querySelector('body');

    burger.onchange = function () {
      if (burger.checked) {
        menu.style.left = '0';
        body.style.overflow = 'hidden';
      } else {
        menu.style.left = '100vw';
        body.style.overflow = 'auto';
      }
    };

    var menuItems = document.querySelectorAll('.header .menu .item');
    menuItems.forEach(function (element) {
      if (element.querySelector('.dropdown-content')) {
        var dropdown = element.querySelector('.dropdown-content');
        var buttonLeft = element.querySelector('.item-button');

        buttonLeft.onclick = function () {
          dropdown.style.left = '0';
        };

        var buttonRight = dropdown.querySelector('.back-button');

        buttonRight.onclick = function () {
          dropdown.style.left = '100vw';
        };
      }
    });
  }

  if (document.querySelector('.main-slider')) {
    var mainSlider = tns({
      container: '.main-slider',
      items: 1,
      nav: false,
      speed: 600,
      prevButton: '.main-slider-button-prev',
      nextButton: '.main-slider-button-next'
    });
  }

  if (document.querySelector('.result-slider')) {
    var resultSlider = tns({
      container: '.result-slider',
      touch: false,
      swipeAngle: false,
      fixedWidth: 330,
      center: true,
      nav: false,
      speed: 600,
      gutter: 200,
      responsive: {
        1410: {
          fixedWidth: 700,
          gutter: 150
        }
      },
      prevButton: '.result-slider-button-prev',
      nextButton: '.result-slider-button-next'
    });
    sliderCounter(resultSlider, '.result .count');
    var slideList = document.querySelectorAll('.result-slider .slide');
    slideList.forEach(function (element) {
      var range = element.querySelector('.range');
      var beforeSlide = element.querySelector('.before');
      var rangeButton = element.querySelector('.range-button');

      var changeFunc = function changeFunc(e) {
        var rangePos = e.target.value;
        beforeSlide.style.width = "".concat(rangePos, "%");

        if (rangePos >= 98) {
          beforeSlide.style.borderRadius = '20px';
        } else {
          beforeSlide.style.borderRadius = '20px 0 0 20px';
        }

        rangeButton.style.left = "calc(".concat(rangePos, "% - 28px)");
      };

      range.onchange = changeFunc;
      range.oninput = changeFunc;
    });
  }

  if (document.querySelector('.news-slider')) {
    var newsSlider = tns({
      container: '.news-slider',
      nav: false,
      rewind: true,
      loop: false,
      gutter: 30,
      speed: 600,
      responsive: {
        1410: {
          fixedWidth: 440
        }
      },
      prevButton: '.news-slider-button-prev',
      nextButton: '.news-slider-button-next'
    });
    sliderCounter(newsSlider, '.news .count', 3);
  }

  if (document.querySelector('.awards-slider')) {
    var awardsSlider = tns({
      container: '.awards-slider',
      nav: false,
      controls: false,
      fixedWidth: 240,
      speed: 600,
      gutter: 20,
      loop: false,
      center: true,
      responsive: {
        1410: {
          fixedWidth: 300,
          gutter: 150,
          center: false
        }
      }
    });
  }

  if (document.querySelector('.about-slider')) {
    var aboutSlider = tns({
      container: '.about-slider',
      nav: false,
      speed: 600,
      gutter: 100,
      responsive: {
        1410: {
          fixedWidth: 1410,
          gutter: 400
        }
      },
      prevButton: '.about-slider-button-prev',
      nextButton: '.about-slider-button-next'
    });
    sliderCounter(aboutSlider, '.about .count');
  } // слайдер для детальных новостей


  if (document.querySelector('.news-detailed-slider')) {
    var newsDetailedSlider = tns({
      container: '.news-detailed-slider',
      touch: false,
      nav: false,
      gutter: 100,
      speed: 600,
      prevButton: '.news-detailed-slider-button-prev',
      nextButton: '.news-detailed-slider-button-next'
    });
  } // слайдеры для инструкций


  if (document.querySelector('.instruction-slider')) {
    var instructionSlider = tns({
      container: '.instruction-slider',
      touch: false,
      nav: false,
      gutter: 100,
      speed: 600,
      prevButton: '.instruction-slider-button-prev',
      nextButton: '.instruction-slider-button-next'
    });
  }

  if (document.querySelector('.documents-slider')) {
    var documentsSlider = tns({
      container: '.documents-slider',
      touch: false,
      fixedWidth: 210,
      nav: false,
      gutter: 30,
      speed: 600,
      prevButton: '.documents-slider-button-prev',
      nextButton: '.documents-slider-button-next'
    });
    sliderCounter(documentsSlider, '.instruction .count', 4);
  } // калькулятор


  if (document.querySelector('div.calculator')) {
    var cosmetology = document.getElementById('calculate-cosmetology');
    var neurology = document.getElementById('calculate-neurology');
    var line = document.getElementById('calculator-title-line');
    var cosmetologyInfo = document.getElementById('cosmetology-info');
    var neurologyInfo = document.getElementById('neurology-info'); // клики по чекбоксам косметологии и неврологии

    cosmetology.onclick = function () {
      cosmetology.classList.add('active');
      neurology.classList.remove('active');
      line.className = 'title-line-pink';
      cosmetologyInfo.classList.add('active');
      neurologyInfo.classList.remove('active');
    };

    neurology.onclick = function () {
      neurology.classList.add('active');
      cosmetology.classList.remove('active');
      line.className = 'title-line-blue';
      neurologyInfo.classList.add('active');
      cosmetologyInfo.classList.remove('active');
    }; // клик по кнопке завершения расчета в косметологии


    var cosmetologyСalculationButton = document.getElementById('cosmetology-calculation-button');
    var cosmetologyCalculationButtonContainer = document.getElementById('cosmetology-calculation-button-container');
    var cosmetologyCalculationResult = document.getElementById('cosmetology-calculation-result');

    cosmetologyСalculationButton.onclick = function () {
      cosmetologyCalculationButtonContainer.classList.remove('active');
      cosmetologyCalculationResult.classList.add('active');
    }; // клик по кнопке завершения расчета в неврологии


    var neurologyСalculationButton = document.getElementById('neurology-calculation-button');
    var neurologyCalculationButtonContainer = document.getElementById('neurology-calculation-button-container');
    var neurologyCalculationResult = document.getElementById('neurology-calculation-result');

    neurologyСalculationButton.onclick = function () {
      neurologyCalculationButtonContainer.classList.remove('active');
      neurologyCalculationResult.classList.add('active');
    };
  }
});
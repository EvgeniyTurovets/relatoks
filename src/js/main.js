document.addEventListener('DOMContentLoaded', function() {

  // общие функции
  const sliderCounter = (slider, selector, count = 1) => {
    const info = slider.getInfo();
    document.querySelector(selector).innerHTML = info.slideCount <= count ? '' : `${info.displayIndex}/${info.slideCount}`;

    slider.events.on('indexChanged', () => {
      const newInfo = slider.getInfo();
      document.querySelector(selector).innerHTML = `${newInfo.displayIndex}/${newInfo.slideCount}`;
    });
  }

  // бургер с меню
  if(document.getElementById('burger-checkbox')) {
    const burger = document.getElementById('burger-checkbox');
    const menu = document.querySelector('.header .menu');
    const body = document.querySelector('body');

    burger.onchange = () => {
      if (burger.checked) {
        menu.style.left = '0';
        body.style.overflow = 'hidden';
      } else {
        menu.style.left = '100vw';
        body.style.overflow = 'auto';
      }
    }

    const menuItems = document.querySelectorAll('.header .menu .item');

    menuItems.forEach(element => {
      if (element.querySelector('.dropdown-content')) {
        const dropdown = element.querySelector('.dropdown-content');
        const buttonLeft = element.querySelector('.item-button');

        buttonLeft.onclick = () => {
          dropdown.style.left = '0';
        }

        const buttonRight = dropdown.querySelector('.back-button');

        buttonRight.onclick = () => {
          dropdown.style.left = '100vw';
        }
      }
    });
  }

  if(document.querySelector('.main-slider')) {
    const mainSlider = tns({
      container: '.main-slider',
      items: 1,
      nav: false,
      speed: 600,
      prevButton: '.main-slider-button-prev',
      nextButton: '.main-slider-button-next',
    });
  }

  if(document.querySelector('.result-slider')) {
    const resultSlider = tns({
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

    const slideList = document.querySelectorAll('.result-slider .slide');
    
    slideList.forEach(element => {
      const range = element.querySelector('.range');
      const beforeSlide = element.querySelector('.before');
      const rangeButton = element.querySelector('.range-button');

      const changeFunc = (e) => {
        const rangePos = e.target.value;

        beforeSlide.style.width = `${rangePos}%`;
        if (rangePos >= 98) {
          beforeSlide.style.borderRadius = '20px';
        } else {
          beforeSlide.style.borderRadius = '20px 0 0 20px';
        }

        rangeButton.style.left = `calc(${rangePos}% - 28px)`;
      }

      range.onchange = changeFunc;
      range.oninput = changeFunc;
    })
  }

  if(document.querySelector('.news-slider')) {
    const newsSlider = tns({
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

  if(document.querySelector('.awards-slider')) {
    const awardsSlider = tns({
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

  if(document.querySelector('.about-slider')) {
    const aboutSlider = tns({
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
  }

  // слайдер для детальных новостей
  if(document.querySelector('.news-detailed-slider')) {
    const newsDetailedSlider = tns({
      container: '.news-detailed-slider',
      touch: false,
      nav: false,
      gutter: 100,
      speed: 600,
      prevButton: '.news-detailed-slider-button-prev',
      nextButton: '.news-detailed-slider-button-next'
    });
  }

  // слайдеры для инструкций
  if(document.querySelector('.instruction-slider')) {
    const instructionSlider = tns({
      container: '.instruction-slider',
      touch: false,
      nav: false,
      gutter: 100,
      speed: 600,
      prevButton: '.instruction-slider-button-prev',
      nextButton: '.instruction-slider-button-next'
    });
  }

  if(document.querySelector('.documents-slider')) {
    const documentsSlider = tns({
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
  }

  // калькулятор
  if(document.querySelector('div.calculator')) {
    const cosmetology = document.getElementById('calculate-cosmetology');
    const neurology = document.getElementById('calculate-neurology');
    const line = document.getElementById('calculator-title-line');
    const cosmetologyInfo = document.getElementById('cosmetology-info');
    const neurologyInfo = document.getElementById('neurology-info');

    // клики по чекбоксам косметологии и неврологии
    cosmetology.onclick = () => {
      cosmetology.classList.add('active');
      neurology.classList.remove('active');
      line.className = 'title-line-pink';
      cosmetologyInfo.classList.add('active');
      neurologyInfo.classList.remove('active');
    }
    neurology.onclick = () => {
      neurology.classList.add('active');
      cosmetology.classList.remove('active');
      line.className = 'title-line-blue';
      neurologyInfo.classList.add('active');
      cosmetologyInfo.classList.remove('active');
    }

    // клик по кнопке завершения расчета в косметологии
    const cosmetologyСalculationButton = document.getElementById('cosmetology-calculation-button');
    const cosmetologyCalculationButtonContainer = document.getElementById('cosmetology-calculation-button-container');
    const cosmetologyCalculationResult = document.getElementById('cosmetology-calculation-result');

    cosmetologyСalculationButton.onclick = () => {
      cosmetologyCalculationButtonContainer.classList.remove('active');
      cosmetologyCalculationResult.classList.add('active');
    }

    // клик по кнопке завершения расчета в неврологии
    const neurologyСalculationButton = document.getElementById('neurology-calculation-button');
    const neurologyCalculationButtonContainer = document.getElementById('neurology-calculation-button-container');
    const neurologyCalculationResult = document.getElementById('neurology-calculation-result');

    neurologyСalculationButton.onclick = () => {
      neurologyCalculationButtonContainer.classList.remove('active');
      neurologyCalculationResult.classList.add('active');
    }
  }
});
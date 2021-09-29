document.addEventListener('DOMContentLoaded', function() {

  // слайдеры для главной
  if(document.querySelector('.main-slider')) {
    const mainSlider = tns({
      container: '.main-slider',
      items: 1,
      nav: false,
      speed: 600,
      prevButton: '.main-slider-button-prev',
      nextButton: '.main-slider-button-next'
    });
  }

  // const resultSlider = tns({
  //   container: '.result-slider',
  //   fixedWidth: 700,
  //   center: true,
  //   nav: false,
  //   gutter: 50,
  //   speed: 600,
  //   prevButton: '.result-slider-button-prev',
  //   nextButton: '.result-slider-button-next'
  // });

  if(document.querySelector('.news-slider')) {
    const newsSlider = tns({
      container: '.news-slider',
      fixedWidth: 440,
      nav: false,
      rewind: true,
      loop: false,
      slideBy: 3,
      gutter: 30,
      speed: 600,
      prevButton: '.news-slider-button-prev',
      nextButton: '.news-slider-button-next'
    });
  }


  if(document.querySelector('.about-slider')) {
    const aboutSlider = tns({
      container: '.about-slider',
      fixedWidth: 1410,
      nav: false,
      gutter: 400,
      speed: 600,
      prevButton: '.about-slider-button-prev',
      nextButton: '.about-slider-button-next'
    });
  }

  // const element = document.getElementById("image-compare");
  // const viewer = new ImageCompare(element).mount();

  // слайдер для детальных новостей
  if(document.querySelector('.news-detailed-slider')) {
    const newsDetailedSlider = tns({
      container: '.news-detailed-slider',
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
      fixedWidth: 210,
      nav: false,
      slideBy: 4,
      gutter: 30,
      speed: 600,
      prevButton: '.documents-slider-button-prev',
      nextButton: '.documents-slider-button-next'
    });
  }
});
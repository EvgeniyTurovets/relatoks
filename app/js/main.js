"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // слайдеры для главной
  var mainSlider = tns({
    container: '.main-slider',
    items: 1,
    nav: false,
    speed: 600,
    prevButton: '.main-slider-button-prev',
    nextButton: '.main-slider-button-next'
  }); // const resultSlider = tns({
  //   container: '.result-slider',
  //   fixedWidth: 700,
  //   center: true,
  //   nav: false,
  //   gutter: 50,
  //   speed: 600,
  //   prevButton: '.result-slider-button-prev',
  //   nextButton: '.result-slider-button-next'
  // });

  var newsSlider = tns({
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
  var aboutSlider = tns({
    container: '.about-slider',
    fixedWidth: 1410,
    nav: false,
    gutter: 400,
    speed: 600,
    prevButton: '.about-slider-button-prev',
    nextButton: '.about-slider-button-next'
  }); // const element = document.getElementById("image-compare");
  // const viewer = new ImageCompare(element).mount();
  //пагинация для новостей

  var container = document.getElementById('tui-pagination-container');
  var instance = new Pagination(container, {});
  instance.getCurrentPage();
});
//# sourceMappingURL=main.js.map

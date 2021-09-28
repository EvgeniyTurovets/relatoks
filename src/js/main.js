document.addEventListener('DOMContentLoaded', function() {

  const mainSlider = tns({
    container: '.main-slider',
    items: 1,
    nav: false,
    speed: 400,
    prevButton: '.main-slider-button-prev',
    nextButton: '.main-slider-button-next'
  });

  const resultSlider = tns({
    container: '.result-slider',
    fixedWidth: 700,
    center: true,
    nav: false,
    gutter: 50,
    speed: 400,
    prevButton: '.result-slider-button-prev',
    nextButton: '.result-slider-button-next'
  });

  const newsSlider = tns({
    container: '.news-slider',
    fixedWidth: 440,
    nav: false,
    rewind: true,
    loop: false,
    slideBy: 3,
    gutter: 30,
    speed: 400,
    prevButton: '.news-slider-button-prev',
    nextButton: '.news-slider-button-next'
  });

  const aboutSlider = tns({
    container: '.about-slider',
    mode: 'gallery',
    items: 1,
    nav: false,
    speed: 1500,
    prevButton: '.about-slider-button-prev',
    nextButton: '.about-slider-button-next'
  });

  const element = document.getElementById("image-compare");
  
  const viewer = new ImageCompare(element).mount();

});
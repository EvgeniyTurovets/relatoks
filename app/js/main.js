"use strict";document.addEventListener("DOMContentLoaded",(function(){tns({container:".main-slider",items:1,nav:!1,speed:600,prevButton:".main-slider-button-prev",nextButton:".main-slider-button-next"}),tns({container:".news-slider",fixedWidth:440,nav:!1,rewind:!0,loop:!1,slideBy:3,gutter:30,speed:600,prevButton:".news-slider-button-prev",nextButton:".news-slider-button-next"}),tns({container:".about-slider",fixedWidth:1410,nav:!1,gutter:400,speed:600,prevButton:".about-slider-button-prev",nextButton:".about-slider-button-next"});var t=document.getElementById("tui-pagination-container");new Pagination(t,{}).getCurrentPage()}));
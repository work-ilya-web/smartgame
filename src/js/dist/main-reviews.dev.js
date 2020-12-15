"use strict";

$('.main-reviews__slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: false,
  speed: 1000,
  responsive: [{
    breakpoint: 1354,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 1010,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 760,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
  }]
});
$('.main-reviews .arrow.arrow_prev').on("click", function (event) {
  $(this).parents('.main-reviews').find('.main-reviews__slick').slick('slickPrev');
});
$('.main-reviews .arrow.arrow_next').on("click", function (event) {
  $(this).parents('.main-reviews').find('.main-reviews__slick').slick('slickNext');
});
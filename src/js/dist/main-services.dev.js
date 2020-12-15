"use strict";

if ($(".main-services__left-slick, .main-services__right-slick").length > 0) {
  $('.main-services__left-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: false,
    speed: 1000,
    asNavFor: ".main-services__right-slick"
  });
  $('.main-services__right-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    speed: 1000,
    asNavFor: ".main-services__left-slick"
  });
}

$('.main-services__tabs').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: false,
  variableWidth: true,
  swipeToSlide: true,
  focusOnSelect: true,
  speed: 1000
});
/*const containerID = '#main-services';
const scrollbar = Scrollbar.init(document.querySelector(containerID), {
	damping: 0.1,
	alwaysShowTracks: true
});*/

$('[data-services]').on('click', function (e) {
  e.preventDefault();
  $('.main-services__tab').removeClass('active');
  $('.main-services__block').removeClass('active');
  $(this).addClass('active');
  var services = $(this).data('services');
  $('[data-services-block="' + services + '"]').toggleClass('active');
  $(".main-services__left-slick, .main-services__right-slick").slick('setPosition');
});
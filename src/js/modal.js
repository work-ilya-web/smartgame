$('.callback--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#callback-modal',
		baseClass: 'modal__bg',
		touch: false,
	});
});

$('.thanks--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		closeExisting: true,
		loop: false,
		src: '#thanks-modal',
		baseClass: 'modal__bg',
		touch: false,
	});
});

$('.reviews--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#reviews-modal',
		baseClass: 'modal__bg',
		touch: false,
	});
});

$('.estimate--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#estimate-modal',
		baseClass: 'modal__bg',
		touch: false,
	});
});

if ($(".gallery-modal__slick").length > 0) {
	$('.gallery-modal__slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		fade: true,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1010,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});
	$('.gallery-modal .arrow.arrow_prev').on("click", function (event) {
		$(this).parents('.gallery-modal').find('.gallery-modal__slick').slick('slickPrev');
	});
	$('.gallery-modal .arrow.arrow_next').on("click", function (event) {
		$(this).parents('.gallery-modal').find('.gallery-modal__slick').slick('slickNext');
	});
}
$('.gallery--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.open({
		loop: false,
		src: '#gallery-modal',
		baseClass: 'gallery__bg',
		touch: false,
	});
	$(".gallery-modal__slick").slick('setPosition');
});

// Phone mask
$('.phone-mask').mask('+7 999 999-99-99');
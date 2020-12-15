if ($(".promo__slick, .promo__bg-slick").length > 0) {
	$('.promo__slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite: true,
		fade: true,
		speed: 1000,
		asNavFor: ".promo__bg-slick",
		responsive: [
			{
				breakpoint: 760,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			}
		]
	});
	$('.promo__bg-slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		infinite: true,
		fade: true,
		speed: 1000,
		focusOnSelect: ".promo__slick"
	});
	$('.promo .arrow.arrow_prev').on("click", function (event) {
		$(this).parents('.promo').find('.promo__slick').slick('slickPrev');
	});
	$('.promo .arrow.arrow_next').on("click", function (event) {
		$(this).parents('.promo').find('.promo__slick').slick('slickNext');
	});
}
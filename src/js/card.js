if ($(".card__info-slick").length > 0) {
	$('.card__info-slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		fade: true,
	});
}

if ($(".card__swipper").length > 0) {
	var swiperHome = $('.card__swipper');
	swiperHome.each(function () {
		var mySwiper = new Swiper(this, {
			slidesPerView: 2.4,
			spaceBetween: 40,
			slidesPerGroup: 1,
			loop: true,
			speed: 1000,
			iOSEdgeSwipeDetection: true,
			initialSlide: 0,
			navigation: {
				nextEl: '.card .arrow.arrow_next',
				prevEl: '.card .arrow.arrow_prev',
			},
			breakpoints: {
				100: {
					slidesPerView: 1.2,
					slidesPerGroup: 1,
					spaceBetween: 20,
					initialSlide: 0,
				},
				600: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 20,
					initialSlide: 0,
				},
				760: {
					slidesPerView: 1.6,
					slidesPerGroup: 1,
					spaceBetween: 20,
					initialSlide: 0,
				},
				1010: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					initialSlide: 0,
					spaceBetween: 20,
				},
				1318: {
					slidesPerView: 2.3,
					slidesPerGroup: 1,
					initialSlide: 0,
				}
			}
		});
	});
}
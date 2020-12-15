if ($(".proect-promo__swipper").length > 0) {
	var swiperHome = $('.proect-promo__swipper');
	swiperHome.each(function () {
		var mySwiper = new Swiper(this, {
			slidesPerView: 2.2,
			spaceBetween: 40,
			slidesPerGroup: 1,
			loop: true,
			speed: 1000,
			iOSEdgeSwipeDetection: true,
			initialSlide: 0,
			navigation: {
				nextEl: '.proect-promo .arrow.arrow_next',
				prevEl: '.proect-promo .arrow.arrow_prev',
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
					slidesPerView: 2.2,
					slidesPerGroup: 1,
					initialSlide: 0,
				}
			}
		});
	});
}


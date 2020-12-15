if ($(".main-services__right-slick").length > 0) {
	$('.main-services__right-slick').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
	});
}

if ($("#main-services").length > 0) {
	const containerID = '#main-services';
	const scrollbar = Scrollbar.init(document.querySelector(containerID), {
		damping: 0.1,
		alwaysShowTracks: true
	});
}

$('[data-services]').on('click', function (e) {
	e.preventDefault();
	$('.main-services__tab').removeClass('active');
	$('.main-services__block').removeClass('active');
	$(this).addClass('active');
	var services = $(this).data('services');
	$('[data-services-block="' + services + '"]').toggleClass('active');
	$(".main-services__left-slick, .main-services__right-slick").slick('setPosition');
	/*if($(".main-services__tab_1").hasClass("active")){
		$(".main-services__tabs").removeClass("active-2 active-3 active-4 active-5 active-6");
		$(".main-services__tabs").addClass("active-1");
	} if($(".main-services__tab_2").hasClass("active")) {
		$(".main-services__tabs").removeClass("active-1 active-3 active-4 active-5 active-6");
		$(".main-services__tabs").addClass("active-2");
	} if($(".main-services__tab_3").hasClass("active")) {
		$(".main-services__tabs").removeClass("active-1 active-2 active-4 active-5 active-6");
		$(".main-services__tabs").addClass("active-3");
	} if($(".main-services__tab_4").hasClass("active")) {
		$(".main-services__tabs").removeClass("active-1 active-2 active-3 active-5 active-6");
		$(".main-services__tabs").addClass("active-4");
	} if($(".main-services__tab_5").hasClass("active")) {
		$(".main-services__tabs").removeClass("active-1 active-2 active-3 active-4 active-6");
		$(".main-services__tabs").addClass("active-5");
	} if($(".main-services__tab_6").hasClass("active")) {
		$(".main-services__tabs").removeClass("active-1 active-2 active-3 active-4 active-5");
		$(".main-services__tabs").addClass("active-6");
	}*/
});
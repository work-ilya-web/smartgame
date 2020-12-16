$(".header__burger").on("click", function (event) {
	event.preventDefault();
	$(this).toggleClass("active");
	$("body").toggleClass("lock");
	$(".header__box").toggleClass("active");
});



/*if ($(window).width() >= '761'){
	$(".menu-item-has-children a").on("click", function (event) {
		event.preventDefault();
		$(".menu").toggleClass('active');
		$(".header").toggleClass('header-mobile');
		$("body").toggleClass('lock-bg');
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".menu, .menu-item-has-children a");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(".menu").removeClass('active');
			$(".header").removeClass('header-mobile');
			$("body").removeClass('lock-bg');
			}
		});
	});
}
if ($(window).width() <= '760'){
	$(".menu-item-has-children a").on("click", function (event) {
		event.preventDefault();
		$(".menu").toggleClass('active');
	});
}*/

$(".menu-item-has-children").on("mouseover", function(e){
	e.preventDefault();
	$('.menu').addClass('active');
	$(".header").addClass('header-mobile header-hover');
	$("body").addClass('dark');
});
$(".menu").on("mouseover", function(e){
	$('.menu').addClass('active');
	$(".header").addClass('header-mobile header-hover');
	$("body").addClass('dark');
});
$(".menu").on("mouseout", function(e){
	$('.menu').removeClass("active");
	$(".header").removeClass('header-mobile header-hover');
	$("body").removeClass('dark');
});
/*jQuery(function($){
	$(document).on("mouseout", function (e){
		var div = $(".menu, .header");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0) {
			$('.menu').removeClass("active");
			$(".header").removeClass('header-mobile header-hover');
			$("body").removeClass('lock-bg');
		}
	});
});*/

$(".menu__back").on("click", function (event) {
	event.preventDefault();
	$(".menu").removeClass('active');
});

var mainHeader = $('.cd-auto-hide-header'),
	secondaryNavigation = $('.cd-secondary-nav'),
	belowNavHeroContent = $('.sub-nav-hero'),
	headerHeight = mainHeader.height();

//set scrolling variables
var scrolling = false,
	previousTop = 0,
	currentTop = 0,
	scrollDelta = 10,
	scrollOffset = 50;

$(window).on('scroll', function () {
	if (!scrolling) {
		scrolling = true;
		(!window.requestAnimationFrame)
			? setTimeout(autoHideHeader, 250)
			: requestAnimationFrame(autoHideHeader);
	}
});

$(window).on('resize', function () {
	headerHeight = mainHeader.height();
});

function autoHideHeader() {
	var currentTop = $(window).scrollTop();

	(belowNavHeroContent.length > 0)
		? checkStickyNavigation(currentTop) // secondary navigation below intro
		: checkSimpleNavigation(currentTop);

	previousTop = currentTop;
	scrolling = false;
}

function checkSimpleNavigation(currentTop) {
	//there's no secondary nav or secondary nav is below primary nav
	if (previousTop - currentTop > scrollDelta) {
		//if scrolling up...
		mainHeader.addClass('active header_active header_fixed');
		mainHeader.removeClass('header_bottom');
	} else if (currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
		//if scrolling down...
		mainHeader.removeClass('active header_active header_fixed header_fix');
		mainHeader.addClass('header_bottom');
	}
	if (currentTop == 0) {
		mainHeader.removeClass('active header_active header_fixed');
		mainHeader.addClass('header_fix');
	}
}
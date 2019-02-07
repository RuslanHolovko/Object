$(document).ready(function(){

	// preloader
	function loading(){
		setTimeout (function(){
			$('.preloader').fadeOut('slow', function(){
				// do something
			});
		}, 1000);
	};

	window.addEventListener('load', loading());

	// init slick slider
	$('.slider-js').slick({
		nextArrow: '.slider__next--banner',
		prevArrow: '.slider__prev--banner',
		draggable: false,
		autoplay: true,
		infinite: false,
		autoplaySpeed: 5000,
		speed: 800,
		infinite: false,
		responsive: [{
			breakpoint: 769,
			settings: {
				draggable: true
			}
		}]
	});

	// init slick slider for reviews
	$('.review-js').slick({
		nextArrow: '.slider__next--rev',
		prevArrow: '.slider__prev--rev',
		draggable: false,
		dots: true,
		infinite: false,
		autoplay: false,
		speed: 800,
		autoplaySpeed: 5000,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 769,
			settings: {
				draggable: true

			}
		}]
	});



	$(window).on('scroll', function(){

		var Yoffset				= $(window).scrollTop();
		var sliderHeight	= $('.slider').height();

		if (Yoffset > sliderHeight) {
			$('.header').addClass('is-active');
		}else{
			$('.header').removeClass('is-active');
		}
	});

	// open mobile-menu
	$('.nav__icon').on('click', function(){
		$('.mobile').addClass('is-visible');
		$('.overlay').addClass('is-visible');
	});

		$('.mobile__button').on('click', function(){
		$('.mobile').removeClass('is-visible');
		$('.overlay').removeClass('is-visible');
	});

	// open search form
	$('.nav__search').on('click', function(){
		$('.search').addClass('is-visible');
	});

	$('.search__close').on('click', function(){
		$('.search').removeClass('is-visible');
	});

});// end document ready

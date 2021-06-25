$(document).ready(function () {
	$(window).scroll(function () {
		const sc = $(window).scrollTop();
		if (sc > 100) {
			$('.fe-navbar').addClass('sticky');
		} else {
			$('.fe-navbar').removeClass('sticky');
		}
	});

	$(document).on('click', '#feNavbOpen', function (e) {
		$('#feNavbarFull').addClass('open');
	});
	$(document).on('click', '#feNavbClose', function (e) {
		$('#feNavbarFull').removeClass('open');
	});

	$('#feSeaTours').slick({
		dots: !1,
		infinite: !0,
		autoplay: !0,
		arrows: !0,
		speed: 1e3,
		prevArrow:
			'<div class="fe-slick-slider-arrow-left"><i class="ri-arrow-left-line ri-xl"></i></div>',
		nextArrow:
			'<div class="fe-slick-slider-arrow-right"><i class="ri-arrow-right-line ri-xl"></i></div>',
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 3, slidesToScroll: 3 },
			},
			{
				breakpoint: 992,
				settings: { slidesToShow: 3, slidesToScroll: 3 },
			},
			{
				breakpoint: 768,
				settings: { slidesToShow: 2, slidesToScroll: 2 },
			},
			{
				breakpoint: 576,
				settings: { slidesToShow: 1, slidesToScroll: 1, arrows: !1 },
			},
		],
	});
});

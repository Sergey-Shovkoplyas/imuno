$(document).ready(function () {

	new WOW().init();

	// ---------------- initialize top__slider ------------------

	let topSlider = $('.top__slider').slick({
		fade: true,
		prevArrow: $('.top__slider-prev'),
		nextArrow: $('.top__slider-next'),
		infinite: false,
		initialSlide: 1
	});

	let $rangeContainer = $('.top__slider-range');

	topSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		if (currentSlide==0) {
			// console.log('day');
			$rangeContainer.removeClass('middle night');
			$rangeContainer.addClass('day');
		}
		if (currentSlide==1) {
			// console.log('middle');
			$rangeContainer.removeClass('day night');
			$rangeContainer.addClass('middle');
		}
		if (currentSlide==2) {
			// console.log('night');
			$rangeContainer.removeClass('middle day');
			$rangeContainer.addClass('night');
		}
	});



	// ---------------- initialize top__slider-range (controls) --------

	let $prevArrow = $('.top__slider-prev');
	let $nextArrow = $('.top__slider-next');

	let rangeSlider = $(".range-slider").ionRangeSlider({
		skin: "big",
		min: 0,
		max: 2,
		from: 1,
		// onChange: function (data) {
		// 	let slideIndex = data.from;
		// 	topSlider.slick('slickGoTo', slideIndex);

		// 	$prevArrow.prop("value", data.from);
		// },
		onFinish: function (data) {
			let slideIndex = data.from;
			topSlider.slick('slickGoTo', slideIndex);
			// console.log(slideIndex)
			$prevArrow.prop("value", data.from);
		},
	});

	let instance = rangeSlider.data("ionRangeSlider");

	$prevArrow.on('click', function(){
		let currentSlide = topSlider.slick('slickCurrentSlide');
		instance.update({
			from: currentSlide
		});
	});

	$nextArrow.on('click', function(){
		let currentSlide = topSlider.slick('slickCurrentSlide');
		instance.update({
			from: currentSlide
		});
	});


	// ---------------- section questions ------------------

	$('.questions__item').on('click', function () {
		$(this).next('.questions__amswer').slideToggle();
		$(this).toggleClass('active');
	});

	// ---------------- decor animation------------------

	let $decor1 = $('#decor1');
	let $decor2 = $('#decor2');
	let $decor3 = $('#decor3');
	let $decorWide = $('#decor-wide');


	$(window).scroll(function () {
		if ($(this).scrollTop() > $decor1.offset().top - 600) {
			$decor1.addClass('decor--animated');
		}
		if ($(this).scrollTop() > $decor2.offset().top - 600) {
			$decor2.addClass('decor--animated');
		}
		if ($(this).scrollTop() > $decor3.offset().top - 600) {
			$decor3.addClass('decor--animated');
		}
		if ($(this).scrollTop() > $decorWide.offset().top - 1000) {
			$decorWide.addClass('decor-wide--animated');
		}
	});

	// ---------------- order__popup-close------------------

	$('.order__popup-close').on('click', function(){
		$(this).parent('.order__popup').fadeOut();
	});

	// ---------------- menu control------------------

	// Cache selectors
	var lastId,
		topMenu = $(".controls__list"),
		topMenuHeight = topMenu.outerHeight() + 15,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top + 0;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 500);
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function () {
		// Get container scroll position
		var fromTop = $(this).scrollTop() + topMenuHeight;

		// Get id of current scroll item
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if (lastId !== id) {
			lastId = id;

			// Set/remove active class
			menuItems
				.parent().removeClass("active")
				.end().filter("[href='#" + id + "']").parent().addClass("active");
		}
	});




});
$( document ).ready(function() {

	new WOW().init();

	// ---------------- section questions ------------------

	$('.questions__item').on('click', function() {
		$(this).next('.questions__amswer').slideToggle();
		$(this).toggleClass('active');
	});

});
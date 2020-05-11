$( document ).ready(function() {

	new WOW().init();

	// ---------------- section questions ------------------

	$('.questions__item').on('click', function() {
		$(this).next('.questions__amswer').slideToggle();
		$(this).toggleClass('active');
	});

	// ---------------- decor animation------------------

	let $decor1 = $('#decor1');
	let $decor2 = $('#decor2');
	let $decor3 = $('#decor3');
	

	$(window).scroll(function(){
		if( $(this).scrollTop() >  $decor1.offset().top - 400 ) {
			$decor1.addClass('decor--animated');
		}
		if( $(this).scrollTop() >  $decor2.offset().top - 400 ) {
			$decor2.addClass('decor--animated');
		}
		if( $(this).scrollTop() >  $decor3.offset().top - 400 ) {
			$decor3.addClass('decor--animated');
		}
	});

});
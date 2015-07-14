$(document).ready(function(){

	$('.anchor-slide a[href^=#]').on('click', function(e){
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop:$(href).offset().top
		},'slow');
		e.preventDefault();
	});

	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
		$('body').toggleClass('open');
	});

	$('.nav-main a').click(function(){
	   $('body').removeClass('open');
	   $('.bar').removeClass('animate');
	});

	$('.nav-main').hover(function(){
		$('body').toggleClass('menu-hover');
	});

});
$(document).ready(function () {
	
	$("input[type='submit']").mouseenter(function() {
		$(this).animate({
			backgroundColor: 'black',
			color: 'white'
		}, "fast");
	});
	
	$("input[type='submit']").mouseleave(function() {
		$(this).animate({
			backgroundColor: 'white',
			color: 'black'
		}, "fast");
	});
	
	$("input[type='reset']").mouseenter(function() {
		$(this).animate({
			backgroundColor: 'black',
			color: 'white'
		}, "fast");
	});
	$("input[type='reset']").mouseleave(function() {
		$(this).animate({
			backgroundColor: 'white',
			color: 'black'
		}, "fast");
	});
	
	$('#contactForm').on('submit', function(e) {
		$('#contactForm *').fadeOut(2000);
		$('#contactForm').prepend('Your submission has been processed...');
	});
	
});
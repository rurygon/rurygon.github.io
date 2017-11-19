$(document).ready(function () {
	
	var viewWidth = $(window).width();
	
	if (viewWidth < 768) {
		$("input[type='submit']").mouseenter(function() {
			$(this).animate({
				backgroundColor: 'white',
				color: 'black'
			}, "fast");
		});

		$("input[type='submit']").mouseleave(function() {
			$(this).animate({
				backgroundColor: 'black',
				color: 'white'
			}, "fast");
		});

		$("input[type='reset']").mouseenter(function() {
			$(this).animate({
				backgroundColor: 'white',
				color: 'black'
			}, "fast");
		});
		$("input[type='reset']").mouseleave(function() {
			$(this).animate({
				backgroundColor: 'black',
				color: 'white'
			}, "fast");
		});
	}
	else {
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
	}
	
	$("#submitConfirm").hide();
	
	$('#contactForm').on('submit', function(e) {
		$('#contactForm *').fadeOut(2000).delay(2000);
		$("#submitConfirm").fadeIn(2000);
	});
	
});
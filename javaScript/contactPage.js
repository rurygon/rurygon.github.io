$(document).ready(function () {
	
	$(".submenuList").hide();
		
	$(".menuLink > a, li.submenuLink").mouseenter(function() {
		$(this).fadeTo('fast', .5);
	});
	$(".menuLink > a, li.submenuLink").mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
	
	$("#projectLink").hover(function (){
		$(this).children("ul.submenuList").slideDown("slow").show();
	}, function () {
		$(this).children("ul.submenuList").slideUp("slow");
	});
	
	
	
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
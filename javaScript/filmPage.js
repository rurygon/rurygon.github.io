$(document).ready(function () {
	//Fades picture when user hovers
	$(".pictureContainer > img").mouseenter(function() {
		$(this).animate({borderRadius: '0%'}, "fast");
		
	});
	$(".pictureContainer > img").mouseleave(function() {
		$(this).animate({borderRadius: '50%'}, "fast");
	});

});
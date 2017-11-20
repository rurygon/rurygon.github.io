$(document).ready(function () {
	
	var viewWidth = $(window).width();
	//JS for desktop only
	if (viewWidth < 768) {
		
	} else {
		//Fades picture when user hovers
		$(".pictureContainer > img").mouseenter(function() {
			$(this).animate({borderRadius: '0%'}, "fast");
		});
		$(".pictureContainer > img").mouseleave(function() {
			$(this).animate({borderRadius: '50%'}, "fast");
		});
	}

});
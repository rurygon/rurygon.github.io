$(document).ready(function () {

	var viewWidth = $(window).width();
	
	if (viewWidth > 768) {
		$(".contentBlock").mouseenter(function() {
			$(this).fadeTo('fast', .5);
		});
		$(".contentBlock").mouseleave(function() {
			$(this).fadeTo('fast', 1);
		});
	}
});
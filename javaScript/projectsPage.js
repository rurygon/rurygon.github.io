$(document).ready(function () {

	$(".contentBlock").mouseenter(function() {
		$(this).fadeTo('fast', .5);
	});
	$(".contentBlock").mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});

	/*
	$("#mainPage").hide();
	
	$("#enterButton").click(function() {
	   $('#enterSplash').fadeOut(1000, function() {
		   $('#mainPage').fadeIn(1000);
	   });
	});
	
	$("a[href='/pages/aboutPage.html']").click(function() {
		$('body').fadeOut(1000);
	});
	$("a[href='/pages/projectPage.html']").click(function() {
		$('body').fadeOut(1000);
	});
	$("a[href='/pages/contactPage.html']").click(function() {
		$('body').fadeOut(1000);
	});
	$("a[href='/pages/index.html']").click(function() {
		$('body').fadeOut(1000);
	});
	*/
});
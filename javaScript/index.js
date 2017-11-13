$(document).ready(function () {
	
	$(".submenuList").hide();
	$("#instaUN").hide();
	$("#twitterUN").hide();
		
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
	
	$("#insta").hover(function (){
		$("#instaUN").slideDown("slow").show();
	}, function () {
		$("#instaUN").slideUp("slow");
	});
	
	$("#twitter").hover(function (){
		$("#twitterUN").slideDown("slow").show();
	}, function () {
		$("#twitterUN").slideUp("slow");
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
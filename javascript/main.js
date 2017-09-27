$(document).ready(function () {
	
	$("div").removeClass("header");
	
	$(".barLinks").mouseenter(function() {
		$(this).fadeTo('fast', .5);
	});
	$(".barLinks").mouseleave(function() {
		$(this).fadeTo('fast', 1);
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
	
	var windowHeight = $('.homeContact').height() - 75;
	
	$("#desktopStage").scroll(function (){
		
		if ($(this).scrollTop() > (windowHeight)) {
			$('#headerFooter', "#desktopStage").addClass('header');
			$('#headerFooter', "#desktopStage").removeClass('footer');
		} 
		else {
			$('#headerFooter', "#desktopStage").removeClass('header');
			$('#headerFooter', "#desktopStage").addClass('footer');
		}
	});
	
	var pageHeight = $('.page').height();
	
	$("a[href='#homeLink']").click(function() {
		$("#desktopStage").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	$("a[href='#aboutLink']").click(function() {
		$("#desktopStage").animate({ scrollTop: windowHeight }, "slow");
		return false;
	});
	
	$("a[href='#projectLink']").click(function() {
		$("#desktopStage").animate({ scrollTop: windowHeight+pageHeight }, "slow");
		return false;
	});
	
	$("a[href='#contactLink']").click(function() {
		$("#desktopStage").animate({ scrollTop: windowHeight+(pageHeight*2)+75 }, "slow");
		return false;
	});
	
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
});

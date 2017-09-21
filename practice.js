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
		
	var windowHeight = $('.homeContact').height() - 75;
	
	$("#stage").scroll(function (){
		
		if ($(this).scrollTop() > (windowHeight)) {
			$('#headerFooter', "#stage").addClass('header');
			$('#headerFooter', "#stage").removeClass('footer');
		} 
		else {
			$('#headerFooter', "#stage").removeClass('header');
			$('#headerFooter', "#stage").addClass('footer');
		}
	});
	
	var pageHeight = $('.page').height();
	
	$("a[href='#homeLink']").click(function() {
		$("#stage").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	$("a[href='#aboutLink']").click(function() {
		$("#stage").animate({ scrollTop: windowHeight }, "slow");
		return false;
	});
	
	$("a[href='#projectLink']").click(function() {
		$("#stage").animate({ scrollTop: windowHeight+pageHeight }, "slow");
		return false;
	});
	
	$("a[href='#contactLink']").click(function() {
		$("#stage").animate({ scrollTop: windowHeight+(pageHeight*2)+75 }, "slow");
		return false;
	});
});
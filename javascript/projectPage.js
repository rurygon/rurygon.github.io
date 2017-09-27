$(document).ready(function () {
	$('body').hide();
	
	$('.mobMenu').hide();
	$('body').fadeIn(1000);
	
	$('.homeButton').click(function(){
		$('.mobMenu').fadeToggle();
	});
	
	$('#mobHome').click(function(){
		window.location.href="/index.html"
	});
	
	$('#mobAbout').click(function(){
		window.location.href="/pages/aboutPage.html"
	});
	
	$('#mobContact').click(function(){
		window.location.href="/pages/contactPage.html"
	});
	
});
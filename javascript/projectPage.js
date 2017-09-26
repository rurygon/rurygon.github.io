$(document).ready(function () {
	
	$('.mobMenu').hide();
	
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
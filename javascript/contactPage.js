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
	
	$('#mobProject').click(function(){
		window.location.href="/pages/projectPage.html"
	});
	
});
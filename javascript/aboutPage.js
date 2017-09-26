$(document).ready(function () {

	$('.mobMenu').hide();
	
	$('.homeButton').click(function(){
		$('.mobMenu').fadeToggle();
	});
	
	$('#mobHome').click(function(){
		window.location.href="/index.html"
	});
	
	$('#mobProject').click(function(){
		window.location.href="/pages/projectPage.html"
	});
	
	$('#mobContact').click(function(){
		window.location.href="/pages/contactPage.html"
	});
	
});
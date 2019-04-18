$(function(){
	var navbar = $('#header');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('nav-scroll');
		} else {
			navbar.addClass('nav-scroll');
		}
	});
});
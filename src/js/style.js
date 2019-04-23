//changed header by scrolling page

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

// burger menu for header (responsive for phone)

$(".nav-opener").click(function() {
	$(".nav-slide").slideToggle(400);
  });
  
  $(window).resize(function() {
	if ($(window).width() > 768) {
	  $(".nav-slide").show();
	  $(".nav-opener").hide();
	} else {
	  $(".nav-slide").hide();
	  $(".nav-opener").show();
	}
  });




//tabs 

jQuery(document).ready(function($) {
	$('.tab-content').hide();
	$('.tab-content:first').show();
	$('.tabset li:first').addClass('active');

	$('.tabset li').click(function(event){
		$('.tabset li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();

		var selectTab = $(this).find('a').attr('href');
		$(selectTab).fadeIn();
	});
});

 
	
	
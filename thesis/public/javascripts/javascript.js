
$(document).ready(function() {  
	var stickyNavTop = $('#menu').offset().top;  

	var stickyNav = function(){
		var scrollTop = $(window).scrollTop() - 35;

		if (scrollTop > stickyNavTop) {
		    $('#menu').addClass('sticky');
		    $('#header').css('background-color', 'none');
		} else {
		    $('#menu').removeClass('sticky');
		    $('#header').css('background-color', '#F1EBD6');
		}
	};
	
	stickyNav();
	
	$(window).scroll(function() {
	    stickyNav();
	});  
});
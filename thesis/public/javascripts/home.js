

$(document).ready(function () {
  	rotatePics(9);
}); 

function rotatePics(currentPhoto){
	var numberOfPhotos = $('.imageslider').length;
	currentPhoto = currentPhoto % numberOfPhotos;

	

	$('.imageslider').eq(currentPhoto).fadeOut(function(){
		// Re-order the z-index
  		$('.imageslider').each(function(i){
    		$(this).css('zIndex', ((numberOfPhotos - i ) + currentPhoto) % numberOfPhotos);
  		});

    	$(this).show();
 
    	setTimeout(function() {
    		rotatePics(++currentPhoto);
		}, 7000);

	});
}



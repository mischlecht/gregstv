
// Initializes the google maps function
function initialize() {
  	var myLatlng = new google.maps.LatLng(42.959892, -87.872231);

  	var mapOptions = {
    	zoom: 15,
    	center: myLatlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
  	};

  	var map = new google.maps.Map(document.getElementById('mapcanvas'), mapOptions);

	var marker = new google.maps.Marker({
    	position: myLatlng,
    	map: map,
    	title: 'Hello World!'
	});
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;;
function init() {
	var el = document.getElementById('border');
	var myjob = new google.maps.LatLng(41.99667,-87.83406);
	var mapOptions = {
		center: myjob,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	});
}

google.maps.event.addDomListener(window, 'load', init);
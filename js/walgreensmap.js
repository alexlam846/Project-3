function init() {
	var el =document.getElementById('border');
	var myjob = new google.maps.Map(document.getElementById("myjob"), {
		center: { lat: 41.99667, lng: -87.83406};
		zoom: 8;
	});
}

google.maps.event.addDomListener(window, 'load', init);
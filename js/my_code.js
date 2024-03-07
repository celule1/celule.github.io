var map = L.map('map').fitWorld();
	var i=1;
	var urlParams = new URLSearchParams(window.location.search);
    var lat = parseFloat(urlParams.get('lat'));
    var lon =  parseFloat(urlParams.get('lon'));
    var azimuth = parseInt(urlParams.get('azimuth'));
    var radius = parseInt(urlParams.get('radius'));
    var angle =parseInt(urlParams.get('angle'));

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);
	map.setView(new L.LatLng(lat, lon), 8);
	setLocation();

	function onLocationFound(e) {
		var radius = e.accuracy / 2;

		L.marker(e.latlng).addTo(map)
			.bindPopup("Esti la o distanta de " + radius + " metri fata de acest punct.").openPopup();

		L.circle(e.latlng, radius).addTo(map);
	}

	function onLocationError(e) {
		alert(e.message);
	}

	function myLocation()
	{
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 20});
	}
	function setLocation()
			{
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 25,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);
					
						
					map.setView(new L.LatLng(lat, lon), 14);
					L.marker([lat, lon],{opacity:0.7}).addTo(map)
					.bindPopup(i+"")
					.openPopup();
					i++;
					var sector = L.circle([lat, lon], {
													color: 'red',
													radius: radius,
													weight: 1
												})
						.setSector(azimuth, angle)
						.bindPopup('Localizarea tintei')
						.addTo(map);
				
					map.fitBounds(sector.getBounds().pad(0.1));
			
			}
			
			function eraseLocation()
			{
				
				map.remove();
				map = new L.Map('map');
			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);
				map.setView(new L.LatLng(46.10, 25.10), 8); //center of Romania
			}
	
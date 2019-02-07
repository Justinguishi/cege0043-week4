var userMarker;

function trackLocation(){
	if (navigator.geolocation){
		navigator.geolocation.watchPosition(showPosition);
		} else{
			document.getElementById('showLocation').innerHTML='Geolocation is not supported by this browser';}}

function showPosition(position){alert('You are tracking your location');
	if (userMarker){mymap.removeLayer(userMarker);}
	userMarker=L.marker([position.coords.latitude,position.coords.longitude],{icon:testMarkerPink}).addTo(mymap).bindPopup('<b>I am here!</b>'+
	[position.coords.latitude,position.coords.longitude]);}
	
	   var testMarkerPink=L.AwesomeMarkers.icon({
	   icon:'play',
	   markerColor:'pink'});

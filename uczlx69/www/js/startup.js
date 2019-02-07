var userMarker;
var userCircle;
var userPolygon;

function trackAndCircle(){
	if (navigator.geolocation){
		navigator.geolocation.watchPosition(showPosition, addPointLinePoly);
		} else{
			document.getElementById('showLocation').innerHTML='Geolocation is not supported by this browser';}}

function showPosition(position){
	if (userMarker){mymap.removeLayer(userMarker);}
	userMarker=L.marker([position.coords.latitude,position.coords.longitude],{icon:testMarkerRed}).addTo(mymap).bindPopup('<b>I am here!</b>'+
	[position.coords.latitude,position.coords.longitude]);
	userCircle=L.circle([position.coords.latitude,position.coords.longitude],500,{
	   color:'red',
	   fillColor:'#f03',
	   fillOpacity:0.5
	   }).addTo(mymap).bindPopup('I am a circle.');
  }
	
	   var testMarkerRed=L.AwesomeMarkers.icon({
	   icon:'play',
	   markerColor:'red'});

//userPolygon=L.polygon([[position.coords.latitude,position.coords.longitude],[51.503,-0.06],[51.51,-0.047]],{color:'red',fillColor:"#f03",fillOpacity:0.5}).addTo(mymap).bindPopup('I am a polygon');
var userMarker

function trackLocation(){
if (navigator.geolocation){
navigator.geolocation.watchPosition(showPosition);}
else{
document.getElementById('showLocation').innerHTML='Geolocation is not supported by this browser'}}

<<<<<<< HEAD
function showPosition(position){alert('You are tracking your location');
	if (userMarker){mymap.removeLayer(userMarker);}
	userMarker=L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap).bindPopup('<b>I am here!</b>');}
=======
function showPosition(position){
	if (userMarker){mymap.removeLayer(userMarker);}
userMarker=L.marker([position.coords.latitude,position.coords.longitude]).addTo(mymap).bindPopup('<b>I am here!</b>');}
>>>>>>> master


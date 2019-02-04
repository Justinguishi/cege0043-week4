function  addPointLinePoly(){
	alert("You're clicking to add point line and polygon");
	L.marker([51.5,-0.09]).addTo(mymap).bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
	L.circle([51.508,-0.11],500,{
	   color:'red',
	   fillColor:'#f03',
	   fillOpacity:0.5
	   }).addTo(mymap).bindPopup('I am a circle.');
	   var myPolygon=L.polygon([[51.509,-0.08],[51.503,-0.06],[51.51,-0.047]],
	   {color:'red',fillColor:"#f03",fillOpacity:0.5}).addTo(mymap).bindPopup('I am a polygon');
}












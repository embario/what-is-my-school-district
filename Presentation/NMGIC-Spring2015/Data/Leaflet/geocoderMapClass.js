( function( window, undefined, url ) {
  
  
  function geocoder(url) {
	this.url=url;
	 url = typeof url !== 'undefined' ? url : "http://dmdview/ArcGIS/rest/services/AddressLocator/GeocodeServer/findAddressCandidates";
	var b = document.getElementsByTagName('body')[0];
var first = document.createElement('div');
var second = document.createElement('div');
var addressSearchBox = document.createElement('div');

first.id = "first";
second.id = "second";
addressSearchBox.id = "AddressSearchBox";

b.appendChild(first);
first.appendChild(second);
second.appendChild(addressSearchBox);

var text = "<center><b>Address:</b><input type='text' id='addr' name='to'><button id='search' >Search</button><center>"
addressSearchBox.innerHTML=text;

var textbox = document.getElementById("addr");
var button = document.getElementById("search");


function GeocodeAddress(){
			addressFromAddressSearchBox=document.getElementById("addr").value;
			var params = "Street="+addressFromAddressSearchBox+"&f=json&outSR=4326";
			
		
			if (window.XMLHttpRequest)
 			 {
 				 http=new XMLHttpRequest();
 			 }
			else
 			 {
 				 http=new ActiveXObject("Msxml2.XMLHTTP");   
 			 }
			

			http.open("POST", url, true);
			http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
				var thexy= JSON.parse(http.responseText);
				var yousearchedfor = L.marker([thexy.candidates[0].location.y,thexy.candidates[0].location.x]).addTo(map).bindPopup('<h3>'+addressFromAddressSearchBox+'</h3>').openPopup();
				map.setView([thexy.candidates[0].location.y,thexy.candidates[0].location.x],18);
			}//end if
			}
		http.send(params);
		}




button.onclick=function geocode(){
				GeocodeAddress();
				
       				}

textbox.onkeypress=function handleKeyPress(e){
 			var key=e.keyCode || e.which;
  			if (key==13){
			GeocodeAddress();
				
       				}}
   
    
    
   
   
    
  }
  

  window.geocoder = geocoder;
  
} )( window );
( function( window, undefined, url ) {



String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

	function geocoder(url) {
		this.url=url;
		url = typeof url !== 'undefined' ? url : "http://coagisweb.cabq.gov/arcgis/rest/services/locators/CABQ_Composite/GeocodeServer/findAddressCandidates";
		var b = document.getElementsByTagName('body')[0];
		var first = document.createElement('div');
		var second = document.createElement('div');
		var addressSearchBox = document.createElement('div');

		first.id = "first";
		second.id = "second";
		addressSearchBox.id = "AddressSearchBox";
	
		// $.ajax({

		// 	url: "ElemSchools.geojson",

		// 	dataType: 'json',

  //   //upon success extraction of data
  //   success: function (data) {

  //       //create a new geojson layer
  //       geojson = new L.GeoJSON(data, {

  //       	onEachFeature: function(feature, layer){

  //                // console.log(feature);
  //            }

  //        });


  //       //add the layer to the map
  //       //geojson.addTo(map);




  //   }, error: function(jqXHR, textStatus, errorThrown) {
  //   	console.log(errorThrown);
  //   	console.log(textStatus);
  //   }

// });

b.appendChild(first);
first.appendChild(second);
second.appendChild(addressSearchBox);

var text = "<center><b>Enter an address to find its school districts:</b><input type='text' id='addr' name='to'><button id='search' >Search</button><center>"
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
					var yousearchedfor = L.marker([thexy.candidates[0].location.y,thexy.candidates[0].location.x]).addTo(map)


					var url = "http://coagisweb.cabq.gov/arcgis/rest/services/public/Schools/MapServer/1/query";
					var params="where=&text=&objectIds=&time=&geometry=" + yousearchedfor._latlng.lng + "%2C+" + yousearchedfor._latlng.lat + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson"
				//var params = "f=json";

				http=new XMLHttpRequest();
				http.open("POST", url, true);

				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http.onreadystatechange = function() {
					if(http.readyState == 4 && http.status == 200) {
						result= JSON.parse(http.responseText);
						elemSchoolName = result.features[0].attributes.SCHOOLSERVICEAREAS;		
						
						var url = "http://coagisweb.cabq.gov/arcgis/rest/services/public/Schools/MapServer/2/query";
						var params="where=&text=&objectIds=&time=&geometry=" + yousearchedfor._latlng.lng + "%2C+" + yousearchedfor._latlng.lat + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson"
				//var params = "f=json";

				http=new XMLHttpRequest();
				http.open("POST", url, true);

				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http.onreadystatechange = function() {
					if(http.readyState == 4 && http.status == 200) {
						result= JSON.parse(http.responseText);
						
						midSchoolName = result.features[0].attributes.SCHOOLSERVICEAREAS;		
						
				// Start high school

						var url = "http://coagisweb.cabq.gov/arcgis/rest/services/public/Schools/MapServer/3/query";
						var params="where=&text=&objectIds=&time=&geometry=" + yousearchedfor._latlng.lng + "%2C+" + yousearchedfor._latlng.lat + "&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&relationParam=&outFields=&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson"
				//var params = "f=json";

				http=new XMLHttpRequest();
				http.open("POST", url, true);

				http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				http.onreadystatechange = function() {
					if(http.readyState == 4 && http.status == 200) {
						result= JSON.parse(http.responseText);
						
						highSchoolName = result.features[0].attributes.SCHOOLSERVICEAREAS;
						console.log(highSchoolName.toProperCase());		
						yousearchedfor.bindPopup('<h3>'+addressFromAddressSearchBox.toProperCase()+'</h3>' + "Elementary: " + elemSchoolName.toProperCase() + "<br>Middle: " + midSchoolName.toProperCase() + "<br>High: " + highSchoolName.toProperCase()).openPopup();


					}}
					http.send(params);	


					// End high school


				}}
				http.send(params);	



			}}
			http.send(params);	


					//console.log(turf.inside(pt1, ))


					// for (feature in geojson.features){
						//console.log("hi");
						//console.log(feature);
					// }

					//console.log(geojson.features);

				//console.log(pt1);
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
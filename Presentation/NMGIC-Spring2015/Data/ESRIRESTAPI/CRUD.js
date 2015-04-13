function CRUD(url){  //url should look like: http://dmdview/ArcGIS/rest/services/PaulFeaturewgs84/FeatureServer/0   the methods add appropriate /function to add, delete..

	this.url=url;
	
	
}//end function CRUD

CRUD.prototype={

	add: function(addFeature){  ////needs to look like [{"geometry":{"x":-106,"y":35}, "attributes":{"name":"paul","number":123}}]
		var addparams = "features="+addFeature+"&f=json"; 
		var addurl=this.url+"/addFeatures";
		alert(addFeature);
		var http;
		if (window.XMLHttpRequest){
   			http=new XMLHttpRequest();
		}
	
		else {
  			http=new ActiveXObject("Msxml2.XMLHTTP");   
  		}	
		http.open("POST", addurl, true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
				alert(http.responseText);
			}
		}
		http.send(addparams);

	}, //end ADD
	
	update: function(updateFeature){
		var updateparams = "features="+updateFeature+"&f=json";
		var updateurl=this.url+"/updateFeatures";
		var http;
		if (window.XMLHttpRequest){
   			http=new XMLHttpRequest();
		}
	
		else {
  			http=new ActiveXObject("Msxml2.XMLHTTP");   
  		}	
		http.open("POST", updateurl, true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
				console.log(http.responseText);
			}
		}
		http.send(updateparams);
	}, //end UPDATE

	delete: function(deleteFeature){  //takes objectid
		var deleteparams = "objectIds="+deleteFeature+"&f=json";
		var deleteurl=this.url+"/deleteFeatures";
		var http;
		if (window.XMLHttpRequest){
   			http=new XMLHttpRequest();
		}
	
		else {
  			http=new ActiveXObject("Msxml2.XMLHTTP");   
  		}	
		http.open("POST", deleteurl, true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.onreadystatechange = function() {
			if(http.readyState == 4 && http.status == 200) {
				console.log(http.responseText);
			}
		}
		http.send(deleteparams);
	}, //end DELETE

	query: function(){

	} // end QUERY


};//end CRUD.prototype

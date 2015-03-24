ESRI Leaflet Examples
======================

##header for each example
**bold**
* list item
* list item
* list item

##2-Edit.html
This example loads an ESRI Feature Service. On a map click, the point is converted to GeoJSON and added.

```js
map.on("click",function(e){
	var temp=L.marker(e.latlng);
	pt.addFeature(temp.toGeoJSON(), function(error, response) {
 	     console.log(error, response);
 	   });
});
```
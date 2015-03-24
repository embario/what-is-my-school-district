ESRI REST API
======================
Examples using the ESRI REST API

##2-AJAX.html
This example shows how to make an AJAX call to ESRI REST endpoint and get JSON back.

##3-AJAXmapit.html
This example takes the previous one step further and passes the results of the AJAX call to a function that maps the data.

##4-CRUD.html
This example shows how to create a class for making the ESRI REST AJAX calls.
```js
var myFeat = new CRUD("URL OF ENDPOINT");
myFeat.delete(OBJECTID);
myFeat.add(Feature); 
myFeature.update(Feature);
```

Features need to be formatted:
```js
feature = '[{"geometry":{"x":-106,"y":35}, "attributes":{"name":"paul","number":123}}]';
```
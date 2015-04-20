var myPlugin={
	
	sayHi:function (){alert("hi");},
	m:function(){L.marker([35,-106]).addTo(map);},
	mm:function(x,y){L.marker([x,y]).addTo(map);}
}
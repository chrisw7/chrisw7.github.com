var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

var map = AmCharts.makeChart( "mapdiv", {
  "type": "map",

  "dataProvider": {
	"map": "worldLow",
	//starting zoom
	"zoomLevel": 2.13,
	"zoomLongitude": -69,
	"zoomLatitude": 36,
	"areas": [
		{ "id": "CA", "color": "#b2b2b2" },
		{ "id": "GY", "color": "#b2b2b2" },
		{ "id": "GB", "color": "#b2b2b2" }
		
	],
	//Visible flight line (GY > GB > CA)
	"lines": [ {
	  "id": "line1",
	  "arc": -0.85,
	  "alpha": 0.3,
	  "latitudes": [ 6.8013, 53.4084, 43.5448 ],
	  "longitudes": [ -58.1551, -2.9916, -80.2482 ]
	}, {
	//Invisible flight line (GY > GB > CA)
	  "id": "line2",
	  "alpha": 0,
	  "color": "#000000",
	  "latitudes": [ 6.8013, 53.4084, 43.5448 ],
	  "longitudes": [ -58.1551, -2.9916, -80.2482 ]
	} ],
	//Map markers
	"images": [ {
		"svgPath": targetSVG,
		"title": "University of Waterloo",
		"latitude": 43.4723,
		"longitude": - 80.5449,
		"color": "#000",
		"scale": 0.8,
		"alpha": 0.7,
	}, {
		"svgPath": targetSVG,
		"title": "MIT/Harvard",
		"titlePosition": "left",
		"latitude": 42.3736,
		"longitude": -71.1097,
		"color": "#cd143c",
		"scale": 0.8,
		"alpha": 0.7,
	}, {
		"svgPath": targetSVG,
		"title": "McMaster University",
		"latitude": 43.2609,
		"longitude": -79.9192,
		"color": "#ee7600",
		"scale": 0.8,
		"alpha": 0.7,
	}, {
		"type": "circle",
		"title": "Georgetown",
		"latitude": 6.8013,
		"longitude": -58.1551,
		"color": "#31849b",
		"width": 6
	}, {
		"type": "circle",
		"title": "Liverpool",
		"titlePosition": "left",
		"latitude": 53.4084,
		"longitude": -2.9916,
		"color": "#31849b",
		"width": 6
	},{
		"type": "circle",
		"title": "Guelph",
		"titlePosition": "left",
		"latitude": 43.5448,
		"longitude": -80.2482,
		"color": "#31849b",
		"width": 6
	}, {
		"type": "circle",
		"title": "Anna Maria Island, FL",
		"latitude": 27.5041,
		"longitude": -82.7145,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Melbourne, FL",
		"latitude": 28.0836,
		"longitude": -80.6081,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Paris",
		"latitude": 48.8566,
		"longitude": 2.3522,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Hawaii",
		"latitude": 19.8968,
		"longitude": -155.5828,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Trinidad & Tobago",
		"latitude": 10.6918,
		"longitude": -61.2225,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Barbados",
		"latitude": 13.1939,
		"longitude": -59.5432,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "New York City, NY",
		"latitude": 40.712776,
		"longitude": -74.005974,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Silver Spring, MD",
		"latitude": 39.045753,
		"longitude": -76.641273,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Quebec City",
		"latitude": 46.813877,
		"longitude": -71.207977,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "London",
		"latitude": 51.507351,
		"longitude": -0.127758,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Birmingham",
		"latitude": 52.482899,
		"longitude": -1.893460,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Reading",
		"latitude": 51.454266,
		"longitude": -0.978130,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Jamaica",
		"latitude": 18.109581,
		"longitude": -77.297508,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "PEI",
		"latitude": 46.516731,
		"longitude": -63.4168,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "New Brunswick",
		"latitude": 46.565315,
		"longitude": -66.461914,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Turks & Caicos",
		"latitude": 21.407580,
		"longitude": -71.173070,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "St. Thomas",
		"latitude": 18.338097,
		"longitude": -64.894096,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "St. Lucia",
		"latitude": 13.9094,
		"longitude": -60.9789,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "St. Kitts",
		"latitude": 17.3578,
		"longitude": -62.7830,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "St. Martten",
		"latitude": 18.034710,
		"longitude": -63.075480,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Bahamas",
		"latitude": 25.034281,
		"longitude": -77.396278,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Cuba",
		"latitude": 21.521757,
		"longitude": -77.781166,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Edinburgh",
		"latitude": 55.9533,
		"longitude": -3.1883,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Dundee",
		"latitude": 56.4620,
		"longitude": -2.9707,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Cambridge",
		"latitude": 52.205338,
		"longitude": 0.121817,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Mohogany Bay, Roatan",
		"latitude": 16.3248,
		"longitude": -86.4959,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Belize",
		"latitude": 17.1899,
		"longitude": -88.4976,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Grand Cayman, Cayman Islands",
		"latitude": 19.3222,
		"longitude": -81.2409,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Cozumel, Mexico",
		"latitude": 20.4230,
		"longitude": -86.9223,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Bonfim, Brazil",
		"latitude": 3.363,
		"longitude": -59.99,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Boston, MA",
		"latitude": 42.3601,
		"longitude": -71.0589,
		"color": "#31849b",
		"width": 6
	}, {
		"type": "circle",
		"title": "Buffalo, NY",
		"latitude": 42.8864,
		"longitude": -78.8784,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Ann Arbor, MI",
		"latitude": 42.2808,
		"longitude": -83.7430,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Orlando, FL",
		"latitude": 28.5383,
		"longitude": -81.3792,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Dorchester, NH",
		"latitude": 43.794361,
		"longitude": -71.933573,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Atlanta, GA",
		"latitude": 33.7490,
		"longitude": -84.3880,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Sudbury",
		"latitude": 46.4917,
		"longitude": -80.9930,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Sault Ste. Marie",
		"latitude": 46.5136,
		"longitude": -84.3358,
		"color": "#000",
		"width": 4
	}, {
		"type": "circle",
		"title": "Portland",
		"latitude": 43.6591,
		"longitude": -70.2568,
		"color": "#000",
		"width": 4
	},
	
	//flight animations
	{	
		"id": "plane1",
		"svgPath": planeSVG,
		"positionOnLine": 0,
		"color": "#000000",
		"alpha": 0.2,
		"animateAlongLine": true,
		"lineId": "line2",
		"flipDirection": false,
		"loop": false,
		"scale": 0.02,
		"positionScale": 1.3,
		"listeners": [ {
			"event": "animationEnd",
			"method": function( e ) {
				if (e.lineSegment > 0){
					e.image.deleteObject();
				}
			}
		} ]
	}, {
		"id": "plane2",
		"svgPath": planeSVG,
		"positionOnLine": 0,
		"color": "#585869",
		"animateAlongLine": true,
		"lineId": "line1",
		"flipDirection": false,
		"loop": false,
		"scale": 0.02,
		"positionScale": 1.8,
		"listeners": [ {
			"event": "animationEnd",
			"method": function( e ) {
				if (e.lineSegment > 0){
					e.image.deleteObject();
				}
			}
		} ]
	} ]
  },
  
  //hover settings  
  "areasSettings": {
	"autoZoom": true,
	"rollOverOutlineColor": "#31849b",
	"selectedColor": "#848484"
  }, 
  
  "imagesSettings": {
	"color": "#585869",
	"rollOverColor": "#585869",
	"selectedColor": "#585869",
	"pauseDuration": 0.4,
	"animationDuration": 7,
	"adjustAnimationSpeed": true
  },
  
  "linesSettings": {
	"color": "#585869",
	"alpha": 0.4
  }		  
} );
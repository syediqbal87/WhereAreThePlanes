var ShuttleGPS = 
{
    "features": [
    {"geometry": {
          "type": "Point",
          "coordinates": [-80.68044,28.52494]},
     "type": "Feature",
          "properties": {
	       "url": "https://www.kennedyspacecenter.com/explore-attractions/shuttle-a-ship-like-no-other",
	       "description": "Kennedy Space Center Visitor Complex",
	       "marker-symbol": "landing",
	       "title": "Atlantis"	}},
	
    {"geometry": {
          "type": "Point",
          "coordinates": [-77.44532,38.91143]},
     "type": "Feature",
          "properties": {
	       "url": "https://airandspace.si.edu/collection-objects/orbiter-space-shuttle-ov-103-discovery",
	       "description": "Steven F. Udvar-Hazy Center",
	       "marker-symbol": "landing",
	       "title": "Discovery"	}},	
		   
	{"geometry": {
          "type": "Point",
          "coordinates": [-118.28731,34.01619]},
     "type": "Feature",
          "properties": {
	       "url": "https://californiasciencecenter.org/exhibits/air-space/space-shuttle-endeavour",
	       "description": "California Science Center",
	       "marker-symbol": "landing",
	       "title": "Endeavour"	}},	
	
    {"geometry": {
          "type": "Point",
          "coordinates": [-74.00181,40.76519]},
     "type": "Feature",
          "properties": {
	       "url": "https://www.intrepidmuseum.org/Space_Shuttle_Pavilion",
	       "description": "Intrepid Sea Air & Space Museum",
	       "marker-symbol": "landing",
	       "title": "Enterprise"	}}
	]
}

function onEachFeature(feature, layer) {
	layer.bindPopup("<a href='"  + feature.properties.url + "'>" +
					feature.properties.title + "</a><br>" 		 + 
					feature.properties.description)
}
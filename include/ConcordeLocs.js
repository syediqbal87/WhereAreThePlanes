var ConcordeGPS = 
{
  "features": [
	{"geometry": {
		"type": "Point",
		"coordinates": [2.42731900,48.94405700]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.museeairespace.fr/aller-plus-haut/collections/bac-sud-aviation-concorde-prototype-001-f-wtss/",
		 "description": "001 (F-WTSS)",
		 "title": "National Air and Space Museum"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-2.63713200,51.01505100]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.fleetairarm.com/aviation-museum-concorde.aspx",
		 "description": "002 (G-BSST)",
		 "title": "Fleet Air Arm Museum"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [0.13542300,52.09602100]},
   "type": "Feature",
        "properties": {
		 "url": "",
		 "description": "101 (G-AXDN)",
		 "title": "Imperial War Museum"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [2.37200600,48.71582800]},
   "type": "Feature",
        "properties": {
		 "url": "",
		 "description": "102 (F-WTSA)",
		 "title": "Musée Delta"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [1.36050800,43.65948000]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.toulouse-visit.com/step-aboard-concorde",
		 "description": "201 (F-WTSB)",
		 "title": "Musée Aeroscopia (Airbus Factory)"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-0.46518000,51.35524500]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.brooklandsmuseum.com/concorde",
		 "description": "202 (G-BBDG)",
		 "title": "Brooklands Museum"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-2.28459900,53.35342200]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.runwayvisitorpark.co.uk/visit-us/explore-our-aircraft/",
		 "description": "204 (G-BOAC)",
		 "title": "Runway Visitor Park"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-77.44425600,38.91144400]},
   "type": "Feature",
        "properties": {
		 "url": "https://airandspace.si.edu/collection-objects/concorde-fox-alpha-air-france",
		 "description": "205 (F-BVFA)",
		 "title": "Steven F. Udvar-Hazy Center"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-2.71981400,55.99594200]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.nms.ac.uk/national-museum-of-flight/",
		 "description": "206 (G-BOAA)",
		 "title": "National Museums Scotland"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [8.89748200,49.23934100]},
   "type": "Feature",
        "properties": {
		 "url": "https://sinsheim.technik-museum.de/en/concorde",
		 "description": "207 (F-BVFB)",
		 "title": "Sinsheim Auto & Technik Museum"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-0.43300900,51.46699000]},
   "type": "Feature",
        "properties": {
		 "url": "https://londonairtravel.com/2018/08/25/concorde-london-heathrow/",
		 "description": "208 (G-BOAB)",
		 "title": "Heathrow Airport"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [1.36050800,43.65948000]},
   "type": "Feature",
        "properties": {
		 "url": "",
		 "description": "209 (F-BVFC)",
		 "title": "Musée Aeroscopia (Airbus Factory)"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-74.00186400,40.76568400]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.intrepidmuseum.org/The-Intrepid-Experience/Exhibits/Concorde.aspx",
		 "description": "210 (G-BOAD)",
		 "title": "Intrepid Sea-Air-Space Museum"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-59.48784000,13.07990500]},
   "type": "Feature",
        "properties": {
		 "url": "",
		 "description": "212 (G-BOAE)",
		 "title": "Grantley Adams International Airport - CLOSED"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [2.43463500,48.94670100]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.museeairespace.fr/aller-plus-haut/collections/aerospatiale-bae-concorde-sierra-delta-213-f-btsd-air-france/",
		 "description": "213 (F-BTSD)",
		 "title": "National Air and Space Museum"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-122.29985700,47.51993700]},
   "type": "Feature",
        "properties": {
		 "url": "",
		 "description": "214 (G-BOAG)",
		 "title": "Museum of Flight"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [2.55323200,49.01062500]},
   "type": "Feature",
        "properties": {
		 "url": "https://www.heritageconcorde.com/charles-de-gaulle",
		 "description": "215 (F-BVFF)",
		 "title": "Charles de Gaulle Airport"
	}},
	{"geometry": {
		"type": "Point",
		"coordinates": [-2.57825400,51.52322900]},
   "type": "Feature",
        "properties": {
		 "url": "",
		 "description": "216 (G-BOAF)",
		 "title": "Aerospace Bristol"
	}}
	]
}

function onEachFeature(feature, layer) {
	layer.bindPopup("<a href='"  + feature.properties.url + "'>" +
					feature.properties.title + "</a><br>" 		 + 
					feature.properties.description)
}
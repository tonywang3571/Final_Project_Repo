// Add console.log to check to see if our code is working.
console.log("Working");

// Order does matter when creating multi-layer maps

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the satellite view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds layers of the maps.
let baseMaps = {
  Street: streets,
  Satellite: satelliteStreets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [45.51179, -122.67563],
  zoom: 12,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing our data URL
let airbnbData = "https://raw.githubusercontent.com/tonywang3571/Final_Project_Repo/tonyapp2/Resources/testing50airbnb2.json";

// Grabbing our GeoJSON data.
d3.json(airbnbData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h4> Location: " + feature.geometry.coordinates[1] + ", " + feature.geometry.coordinates[0] +
                      "</h4> <hr> <p> Price: "+ feature.properties.price + 
                      "</p> <p> Bedrooms: " + feature.properties.bedrooms +
                      "</p> <p> Accommodates: " + feature.properties.accommodates + 
                      "</p> <p> Bathrooms: " + feature.properties.bathrooms +
                      "</p> <p> Neighborhood: " + feature.properties.neighbourhood +
                      "</p> <p> Website: " + "<a href='" + feature.properties.website_url + "'>" + feature.properties.website_url +
                      "</a> </p>");
    }
  }).addTo(map);
});


// Add console.log to check to see if our code is working.
console.log("logic.js is working");

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
let airbnbData = "https://raw.githubusercontent.com/tonywang3571/Final_Project_Repo/master/Resources/testing50airbnb2.json";


// Build markers function?
function buildmarkers() {
// Grabbing our GeoJSON data.
d3.json(airbnbData).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h6> Location: " + feature.geometry.coordinates[1] + ", " + feature.geometry.coordinates[0] +
                      "</h6> <hr> <p style='margin:8px'> Price: "+ feature.properties.price + 
                      "</p> <p style='margin:8px'> Bedrooms: " + feature.properties.bedrooms +
                      "</p> <p style='margin:8px'> Accommodates: " + feature.properties.accommodates + 
                      "</p> <p style='margin:8px'> Bathrooms: " + feature.properties.bathrooms +
                      "</p> <p style='margin:8px'> Neighborhood: " + feature.properties.neighbourhood +
                      "</p> <p style='margin:8px'> Website: " + "<a href='" + feature.properties.website_url + "'>" + feature.properties.website_url +
                      "</a> </p>");
    }
  }).addTo(map);
});




// Map filtering function
function mapClick() {

  // grab the user input values from the filters
  let minprice = d3.select("#price").property("value");
  let maxPrice = d3.select("#max_price").property("value");
  let beds = d3.select("#bedrooms").property("value");
  let accom = d3.select("#accommodates").property("value");
  let baths = d3.select("#bathrooms").property("value");
  // let sqft = d3.select("#sqft").property("value");

  let filteredMap = airbnbData
  console.log(d3.json(filteredMap))
  console.log("map click working 2")
  // checks to see which (if any) type of value user entered
  if (minprice) {
      filteredMap = filteredMap.filter(row => row.feature.properties.price >= minprice);
  };

  if (maxPrice) {
      filteredMap = filteredMap.filter(row => row.feature.properties.price <= maxPrice && row.feature.properties.price >= minprice);
      // console.log(maxPrice)
      // console.log(minprice)
  };

  if (beds) {
      filteredMap = filteredMap.filter(row => row.feature.properties.bedrooms >= beds);
  };

  if (accom) {
      filteredMap = filteredMap.filter(row => row.feature.properties.accommodates >= accom);
  };

  if (baths) {
      filteredMap = filteredMap.filter(row => row.feature.properties.bathrooms >= baths);
  };

  // if (sqft) {
  //   filteredMap = filteredMap.filter(row => row.sqft >= sqft);
  // };

  // Rebuild the table using the filtered data
  //@NOTE: if no date was entered, then filteredMap will
  // just be original tableData.
  buildmarkers(filteredMap);
  
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn2").on("click", mapClick);

};

// build markers on webpage load
buildmarkers(airbnbData);

console.log("logic test 6")


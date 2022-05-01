// Add console.log to check to see if our code is working.
console.log("logic.js is working");

// Order does matter when creating multi-layer maps

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // Create the satellite view tile layer that will be an option for our map.
// let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// 	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
// 	maxZoom: 18,
// 	accessToken: API_KEY
// });

// // Create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds layers of the maps.
let baseMaps = {
  Street: streets,
  // Satellite: satelliteStreets,
  // Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [45.51179, -122.67563],
  zoom: 12,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// Accessing our data URL
// let airbnbData = "https://raw.githubusercontent.com/tonywang3571/Final_Project_Repo/master/Resources/airbnb_geojson_data.json";
let coord = zillow_coord_data;
let filtered_coord = coord;


// Build markers function
function buildmarkers(marker_pops) {
// Grabbing our GeoJSON data.
// d3.json(airbnbData).then(function(data) {
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h6> Location: " + feature.properties.address + 
//                       "</h6> <hr> <p style='margin:8px'> Price: "+ feature.properties.price + 
//                       "</p> <p style='margin:8px'> Bedrooms: " + feature.properties.bedrooms +
//                       "</p> <p style='margin:8px'> Accommodates: " + feature.properties.accommodates + 
//                       "</p> <p style='margin:8px'> Bathrooms: " + feature.properties.bathrooms +
//                       "</p> <p style='margin:8px'> Neighborhood: " + feature.properties.neighbourhood +
//                       "</p> <p style='margin:8px'> Website: " + "<a href='" + feature.properties.website_url + "'>" + feature.properties.website_url +
//                       "</a> </p>");
//     }
//   }).addTo(map);
// });

  // function testfilterfunction(data) {
  //   // grab the user input values from the filters
  //   let baths_map = d3.select("#bathrooms").property("value");
  //   // console.log(baths_map)
  //   // console.log(data.bathrooms)

  //   if (data.bathrooms >= baths_map) {console.log("hellow")};


  // };

  marker_pops.forEach(function(data) {
  L.marker(data.coordinates, {
    weight: 4,
    color: "orange",
  })
  .bindPopup("<h6> Location: " + data.address + 
            "</h6> <hr> <p style='margin:8px'> Price: "+ data.price + 
            "</p> <p style='margin:8px'> Bedrooms: " + data.bedrooms +
            "</p> <p style='margin:8px'> Accommodates: " + data.accommodates + 
            "</p> <p style='margin:8px'> Bathrooms: " + data.bathrooms +
            "</p> <p style='margin:8px'> Neighborhood: " + data.neighbourhood +
            "</p> <p style='margin:8px'> Website: " + "<a href='" + data.website_url + "'>" + data.website_url +
            "</a> </p>")
    .addTo(map);
});
};


// Map filtering function
function mapClick() {


  // grab the user input values from the filters
  let minprice_map = d3.select("#price").property("value");
  let maxprice_map = d3.select("#max_price").property("value");
  let beds_map = d3.select("#bedrooms").property("value");
  let accom_map = d3.select("#accommodates").property("value");
  let baths_map = d3.select("#bathrooms").property("value");
  let hoodname_map = d3.select("#neighborhood").property("value");
  let sqft = d3.select("#square_foot").property("value");
  let ppsqft = d3.select("#price_per_square_foot").property("value");

  // code that could be used for geoJSON. Could be progression compared to current code. 
  // let filteredMap = "https://raw.githubusercontent.com/tonywang3571/Final_Project_Repo/master/Resources/airbnb_geojson_data.json";
  // if (baths_map) {feature = feature.filter(row => [row].properties.bathrooms >= baths_map)};

  let filtered_coord = coord;


  // checks to see which (if any) type of value user entered
  if (minprice_map) {filtered_coord = filtered_coord.filter(row => row.price >= minprice_map)};
  if (maxprice_map) {filtered_coord = filtered_coord.filter(row => row.price <= maxprice_map && row.price >= minprice_map)};
  if (beds_map) {filtered_coord = filtered_coord.filter(row => row.bedrooms >= beds_map)};
  if (accom_map) {filtered_coord = filtered_coord.filter(row => row.accommodates >= accom_map)};
  if (baths_map) {filtered_coord = filtered_coord.filter(row => row.bathrooms >= baths_map)};
  if (hoodname_map != "Select Neighborhood") {filtered_coord = filtered_coord.filter(row => row.neighborhood == hoodname_map)};
  if (sqft) {filtered_coord = filtered_coord.filter(row => row.square_foot >= sqft)};
  if (ppsqft) {filtered_coord = filtered_coord.filter(row => row.price_per_square_foot >= ppsqft)};

console.log(filtered_coord);

  // Rebuild the table using the filtered data
  // @NOTE: if no date was entered, then filteredMap will
  // just be original tableData.
  buildmarkers(filtered_coord);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn2").on("click", mapClick);


// build markers on webpage load
// buildmarkers();

// console.log("logic test 5")


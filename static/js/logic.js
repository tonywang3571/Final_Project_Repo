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
let airbnbData = "https://raw.githubusercontent.com/tonywang3571/Final_Project_Repo/master/Resources/airbnb_geojson_data.json";
console.log(airbnbData);

// Build markers function?
// function buildmarkers() {
// // Grabbing our GeoJSON data.
// d3.json(airbnbData).then(function(data) {
// //   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function(feature, layer) {
//       // console.log(layer);
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
// };


// Map filtering function
function mapClick() {



  // grab the user input values from the filters
  // let minprice_map = d3.select("#price").property("value");
  // let maxprice_map = d3.select("#max_price").property("value");
  // let beds_map = d3.select("#bedrooms").property("value");
  // let accom_map = d3.select("#accommodates").property("value");
  let baths_map = d3.select("#bathrooms").property("value");
  // let sqft = d3.select("#sqft").property("value");

  let filteredMap = "https://raw.githubusercontent.com/tonywang3571/Final_Project_Repo/master/Resources/airbnb_geojson_data.json";

  // console.log(minprice_map)
  // console.log(maxprice_map)
  // console.log(beds_map)
  // console.log(accom_map)
  // console.log(baths_map)
  // console.log(filteredMap)


  d3.json(filteredMap).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {filter: mapfilterfunction}, {
      onEachFeature: function(feature, layer) {
        // console.log(layer);
        layer.bindPopup("<h6> Location: " + feature.properties.address + 
                        "</h6> <hr> <p style='margin:8px'> Price: "+ feature.properties.price + 
                        "</p> <p style='margin:8px'> Bedrooms: " + feature.properties.bedrooms +
                        "</p> <p style='margin:8px'> Number of Guests: " + feature.properties.accommodates + 
                        "</p> <p style='margin:8px'> Bathrooms: " + feature.properties.bathrooms +
                        "</p> <p style='margin:8px'> Neighborhood: " + feature.properties.neighbourhood +
                        "</p> <p style='margin:8px'> Website: " + "<a href='" + feature.properties.website_url + "'>" + feature.properties.website_url +
                        "</a> </p>");
      }
    }).addTo(map);
    function mapfilterfunction(feature) {
      // map.removeLayer(feature);



      if (feature.properties.bathrooms >= baths_map) return true

 
    };


  });

  // checks to see which (if any) type of value user entered
  // if (minprice) {
  //     filteredMap = filteredMap.filter(row => row.feature.properties.price >= minprice);
  // };
  // if (maxprice) {
  //     filteredMap = filteredMap.filter(row => row.feature.properties.price <= maxprice && row.feature.properties.price >= minprice);
  // };
  // if (beds) {
  //     filteredMap = filteredMap.filter(row => row.feature.properties.bedrooms >= beds);
  // };
  // if (accom) {
  //     filteredMap = filteredMap.filter(row => row.feature.properties.accommodates >= accom);
  // };
  // if (baths_map) {
  //     filteredMap = filteredMap.filter(row => row.feature.properties.bathrooms >= baths_map);
  // };
  // if (sqft) {
  //   filteredMap = filteredMap.filter(row => row.sqft >= sqft);
  // };

  // Rebuild the table using the filtered data
  // @NOTE: if no date was entered, then filteredMap will
  // just be original tableData.
  // buildmarkers(filteredMap);

};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn2").on("click", mapClick);


// build markers on webpage load
// buildmarkers();

console.log("logic test 5")


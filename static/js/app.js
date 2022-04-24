// load data from js file
const tableData = data3;
console.log("app.js is working");

// get table references
var tbody = d3.select("tbody");



// build data table
function buildTable(data) {
  // clear out any existing data
  tbody.html("");
  let number = 0
  // loop through each object in the data and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // append a row to the table body
    let row = tbody.append("tr");
    number += 1
    // console.log(number);

    // loop through each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });


    // Object.values(dataRow).forEach((val) => {
    //   let cell = row.append("td");
    //   // console.log(val);
    //   console.log(Object.values(dataRow)[6]);

    //   // NEED TO ASK RJ ABOUT THIS
    //   if (cell.text(val.includes('https:'))) {
    //     cell.text("This is a website5")
    //   }
    //   else {
    //     cell.text(val);
    //   };
    // });





  });

  // Count number of rows and display the results.
  // console.log(number);
  document.getElementById("results").innerHTML = number;

  // update data table with user input values
  function handleClick() {

    // grab the user input values from the filters
    let minprice = d3.select("#price").property("value");
    let maxPrice = d3.select("#max_price").property("value");
    let beds = d3.select("#bedrooms").property("value");
    let accom = d3.select("#accommodates").property("value");
    let baths = d3.select("#bathrooms").property("value");
    // let sqft = d3.select("#sqft").property("value");

    let filteredData = tableData;

    // checks to see which (if any) type of value user entered
    if (minprice) {
        filteredData = filteredData.filter(row => row.price >= minprice);
    };

    if (maxPrice) {
        filteredData = filteredData.filter(row => row.price <= maxPrice && row.price >= minprice);
        // console.log(maxPrice)
        // console.log(minprice)
    };

    if (beds) {
        filteredData = filteredData.filter(row => row.bedrooms >= beds);
    };

    if (accom) {
        filteredData = filteredData.filter(row => row.accommodates >= accom);
    };

    if (baths) {
        filteredData = filteredData.filter(row => row.bathrooms >= baths);
    };

  //   if (sqft) {
  //     filteredData = filteredData.filter(row => row.sqft >= sqft);
  // };

    // Rebuild the table using the filtered data
    //@NOTE: if no date was entered, then filteredData will
    // just be original tableData.
    buildTable(filteredData);
    
  };

  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
};

// Build the table when the page loads
buildTable(tableData);


// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#neighborhood");

//   // Use the list of sample names to populate the select options
//   d3.json(data3).then((data) => {
//     console.log(data);
//     var sampleNames = data.feature.properties.neighbourhood;
//     console.log(sampleNames)

//     sampleNames.forEach((name) => {
//       selector
//         .append("option")
//         .text(name)
//         .property("value", name);
//     });
//   });
// }

// // Initialize the dashboard
// init();




console.log("Test number 1")

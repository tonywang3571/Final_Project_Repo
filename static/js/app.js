// load data from js file
const tableData = airbnb_data;
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
      // console.log(Object.values(dataRow)[6]);
    });

    // let count = 0
    // Object.values(dataRow).forEach((val) => {
    //   let cell = row.append("td");
    //   count += 1
    //   console.log(count);
    //   if (count % 7 == 0) {
    //     cell.text(val);
    //     document.getElementsByTagName("td")[6].innerHTML = '<a href="' + val + '">' + val + '</a>';
    //   }
    //   else {
    //     cell.text(val);
    //   }

    // });




  });

  // Count number of rows and display the results.
  // console.log(number);
  document.getElementById("results").innerHTML = number;

  // update data table with user input values
  function handleClick() {

    // grab the user input values from the filters
    let minprice = d3.select("#price").property("value");
    let maxprice = d3.select("#max_price").property("value");
    let beds = d3.select("#bedrooms").property("value");
    let accom = d3.select("#accommodates").property("value");
    let baths = d3.select("#bathrooms").property("value");
    let hoodname = d3.select("#neighborhood").property("value");
    // let sqft = d3.select("#sqft").property("value");

    let filteredData = tableData;

    // checks to see which (if any) type of value user entered
    if (minprice) {
        filteredData = filteredData.filter(row => row.price >= minprice);
    };

    if (maxprice) {
        filteredData = filteredData.filter(row => row.price <= maxprice && row.price >= minprice);
        // console.log(maxprice)
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

    if (hoodname != "Select Neighborhood") {
      filteredData = filteredData.filter(row => row.neighborhood == hoodname);
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


function ddmenu() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#neighborhood");

  let airbnb_data_neighborhood = "https://raw.githubusercontent.com/tonywang3571/Final_Project_Repo/master/Resources/airbnb_data_neighborhood.json"
  // Use the list of neighborhood names to populate the select options
  d3.json(airbnb_data_neighborhood).then((data) => {
    var sampleHood = data.neighborhood;

    sampleHood.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
  });
}

// Initialize the dropdown menu
ddmenu();

console.log("app.js test 1")

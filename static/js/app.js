// from data.js
const tableData = data3;
console.log("app.js is working");

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
};

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let inputElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let inputID = inputElement.attr("id");
    console.log(inputID);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    
    
    if (inputID == "price") {
      console.log("id=price tags")
      // filters["price"] = inputValue;
      // let filteredData = tableData;

      // Object.entries(filters["price"]).forEach(([key, value]) => {

      //   filteredData = filteredData.filter(row => row[key] <= value)
      // });
    }
    else {
      if (inputValue) {
        // filters[inputID] = inputValue.toLowerCase();
        filters[inputID] = inputValue;
 
      } 
      else {
        delete filters[inputID];
      };
    };




    // if (inputValue) {
    //   // filters[inputID] = inputValue.toLowerCase();
    //   filters[inputID] = inputValue;
    // } 
    // else {
    //   delete filters[inputID];
    // };
    console.log(filters)
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable(filters);
  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable(filters) {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      
      filteredData = filteredData.filter(row => row[key] >= value)
      console.log(key, value)
    });

    // Basically the same thing as previous Object.entries().
    // for (let [key, value] of Object.entries(filters)) {
    //   filteredData = filteredData.filter(row => row[key] === value)
    //   console.log(key, value)
    // }
    
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData)

  };
  
// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);

console.log("end app.js script")






// // FILTER BUTTON TO FILTER INSTEAD OF AUTO FILTER

// // import the data from data.js
// const tableData = data2;
// console.log(tableData)

// // Reference the HTML table using d3 (Data-Driven Document)
// var tbody = d3.select("tbody");

// // Create function to iterate through the list of data(object) and append into a table format.
// function buildTable(data) {
//     // First, clear out any existing data to prevent duplicates.
//     tbody.html("");

//     // Next, loop through each object in the data
//     // Append a row and cells for each value
//     data.forEach((dataRow) => {
//         let row = tbody.append("tr");

//         // Loop through each field in the dataRow
//         // and add each value as a table cell (td)
//         Object.values(dataRow).forEach((val) => {
//             let cell = row.append("td");
//             cell.text(val);
//             }
//         );
//     });   

//     // Function to filter data by date
//     function handleClick() {

//         // Grab the datetime value from the filter
//         // let date = d3.select("#datetime").property("value");
//         // let min_price = d3.select("#price").property("value");
//         // let max_price = d3.select("#price").property("value");
//         let beds = d3.select("bedrooms").property("value");
//         let accommodates = d3.select("accomodates").property("value");
//         let bathrooms = d3.select("bathrooms").property("value");
//         let filteredData = tableData;

//         // Check to see if a date was entered and filter data by date
//         if (beds) {
//             // Appply 'filter' to data table to keep rows where
//             // 'datetime' value matches the filter value
//             filteredData = filteredData.filter(row => row.bedrooms === beds);
//         };

//         // Rebuild the table using the filtered data
//         //@NOTE: if no date was entered, then filteredData will
//         // just be original tableData.
//         buildTable(filteredData);
//     };

//     // Attach an event to listen for the form button
//     d3.selectAll("#filter-btn").on("click", handleClick);

// }

// // Build the table when the page loads
// buildTable(tableData);

# Research Statement
This document describes the anticipated outcome of this project, and answers the following for deliverable 1:
* Document reasoning for selecting dataset (Purpose/Thesis)
* Provide description of source data (Data)
* Detail questions the team hopes to answer with the data (Goals)

## Purpose/Thesis
We will build a machine learning model from a Zillow dataset that predicts potential house sale price. The data from that model will then pass into a user-facing app that functions as a feasibility calculator for renting out properties on airbnb.

## Goals
The goals of this project include:
* Predict the sale price of a property via a machine learning model
* Calculate the potential ROI for airbnb rental price of a property
   * Based on parameters and data points from the existing Zillow/Airbnb data
   * Provide users an interactive experience to view potential property for investment and ROI
* Visualization/Marketing
   * List Price by Neighborhood (Avg. and Median Price) and potential revenue based on occupancy rate
   * Ability to view Airbnb listings and prices
* Optional: Determine applicability of model to other markets
   * Ex. If the model is accurate for the Portland market, is the same model also accurate in Chicago, or would changes need to be made?
* Optional: Additional machine learning model on airbnb data

## Data
We have chosen the below datasets based on the:
* Number of data points
* Completeness of data
* Ability to link the datasets (based on column names & location overlap - Portland)

### Datasets
**airbnb Data**
* Portland_airbnb_InsideAirbnb
   * Taken from: http://insideairbnb.com/get-the-data/
* Description of Data
   * InsideAirbnb provides quarterly data for the last year for each region from airbnb. This dataset provides assumed active listings as of December 20, 2021 for Portland, Oregon.

**Zillow Data**
* Portland Housing Prices/Sales
   * https://www.kaggle.com/datasets/threnjen/portland-housing-prices-sales-jul-2020-jul-2021
* Description of Data
   * This file is RAW, uncleaned data scraped with the Zillow API. It comes with nearly 500 columns. Column descriptions are not provided and must be researched or intuitively deduced. Users of this data will be practicing their data massaging, cleaning and feature selection skills, in addition to the later EDA and modeling.
   * Source of data: Scraped with the Apify Zillow API by Petr Cermak at https://apify.com/petr_cermak/zillow-api-scraper in July 2021
   
**Merged Zillow | Airbnb Data**
* Using Google Maps Reverse GeoCoding API, we used the longitude and latitude from each data set above to determine the address and Neighborhood for both data sets.
   * Subsequently we did an SQL inner join of the Zillow table for address and the Airbnb table for Neighborhood.

## Machine Learning

The Zillow data shows to be best modeled using multivariate linear regression with MinMaxScaler and manually selected features. Future iterations of the model will include automatic evaluation of features with scikit-learn and other methods.

Our goal is to tie in the ML model to the interactive website via a calculator where the user input various features and the model will return a predicted house price. Based on features and price range the user is interested in, the user will then be able to navigate the interactive maps and tableau embedded calculators to find listings that meet those criteria.

## Dashboard App

We have created an interactive website with different pages that can be explored. Under the AirBnb Finder  page (Zillow Data is current a copy page of the AirBnb Finder page), we have:
   * Working filter tables to find locations that are >= the user input (<= for max price).
   * Total number of locations will be displayed for how many results per the filters entered
   * Working map with popup marks displaying location info and 'clickable' website link to the webpage for each location.

The Tableau Data page contains information performed on tableau that has been embedded and displayed into it's own separate page. 

Link to Tableau Dashboard: https://public.tableau.com/views/PortlandAirBNBZillow/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link

Currently there are three parts to the story dashboard. First tab provides a visualization of all the Airbnb listings and their price on a map. The second tab shows different visualizations that relate to the Portland Neighborhoods and their median and average price listings. Also we start to look the effect of occupancy rate on the potential revenue for the year based on listing price.

The third tab presents a multi-parameter visualization that allows users to input critical information to help calculate a few ROI metrics that are display as the user hovers any property. Ideally users will take the information provided in the hover and information from other parts of the website to determine the best property for their investment.

And the test page is used to test different code without getting too confused when applying, adding, adjusting, and/or testing code. (test page will be removed before deploying web app).


## Presentation Slide Deck

Link to Presentation Slide Deck: https://docs.google.com/presentation/d/198GWH3660tuCBZ9znKDuYYyTH_VFLki2wxeM7Go8K9k/edit?usp=sharing


## Parking Lot Items for Development

Things to come:
   * Dropdown menu bar for filtering neighborhoods
   * Allowing a single click of a button to filter both the table AND the map's popup markers.
   * Edit and add info to Home page on project details and what the purpose of this web app is used for.
   * Taking existing ML model for predicting house prices and connecting to interface on website
   * Further analysis and visualization of the merged Zillow/Airbnb data that will understand the maximum Cap Rate for each property. 
   * Further analysis and visualization on narrowing down the price range of property that will be conducive to getting a Cap Rate of 10% and 15%.
   * Further analysis and visualization on narrowing down what the minimum occupancy threshold that will be conducive to getting a Cap Rate of 10% and 15%.


Hopeful things to come:
   * Zillow Data page map will have option to display both zillow data popup markers and airbnb popup markers.
   * Zillow Data page will include a function to filter by square foot and price per square foot.

Really will be lucky if we can add the following:
   * A page that shows the best neighborhoods for visitors to see in Portland and links to various sightseeing items.
   * A content aggregator that will scrape articles from google on real estate news in Portland.


## Team Organizational Structure
Our team intends to take a very collaborative approach to this project. Though one person will be the lead for each of the 4 roles each week, all other team members will review and provide input to the work the others complete.

## Communication Plan
Our primary method of communication is via Slack, where we provide status updates and post questions to others in the group. In addition to communicating via Slack, our team has set up the project timeline and requirements in ClickUp, a project management software. The expectation of each of the members of the group is that they will adhere to all deliverable deadlines, and will ask for help from the group to complete any tasks that may delay submission of a deliverable. 

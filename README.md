# A City of Neighborhoods: Discovering Real Estate Investment Opportunities in Portland, Oregon

## Executive Summary
* [Investor Presentation](https://docs.google.com/presentation/d/198GWH3660tuCBZ9znKDuYYyTH_VFLki2wxeM7Go8K9k/edit?usp=sharing)
* [Website](https://portland-airbnb-zillow-finder.herokuapp.com/)
* [Tableau Dashboard](https://public.tableau.com/views/PortlandAirBNBZillow/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link)

## Project Overview
We will evaluate data from AirBNB and Zillow datasets to analyze potential opportunities for real estate investment in the Portland, Oregon area. Our intent is to build a machine learning model that predicts potential AirBNB price for the Zillow dataset. The predicted data from that model, along with the original datasets, will then pass into a user-facing app that details investment opportunites.

## Goals
The goals of this project include:
* Predict the price of a property via a machine learning model
* Calculate the potential ROI for airbnb rental price of a property
   * Based on parameters and data points from the existing Zillow/AirBNB data
   * Provide users with an interactive experience to explore potential properties for investment
* Visualization
   * View listings on an interactive map
   * Include listing information with their respective properties on the map
* Future State: Determine applicability of model to other markets
   * Is the model accurate for other major cities?

## Data
### Raw Datasets
**AirBNB Data**
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

### Cleaned Datasets
**Merged Zillow | Airbnb Data**
Using Google Maps Reverse GeoCoding API, we used the longitude and latitude from each data set above to determine the address and Neighborhood for both data sets. We then did a SQL inner join of the Zillow table for address and the Airbnb table for Neighborhood. The cleaned datasets can be found under the [Resources](https://github.com/tonywang3571/Final_Project_Repo/tree/master/Resources) folder:
* [Cleaned Zillow Dataset](https://github.com/tonywang3571/Final_Project_Repo/blob/master/Resources/cleaned_zillow_google_api.csv)
* [Cleaned AirBNB Dataset](https://github.com/tonywang3571/Final_Project_Repo/blob/master/Resources/cleaned_arbnb_google_api.csv)

## Machine Learning
Details on the machine learning process can be found on the "[Machine Learning Overview](https://github.com/tonywang3571/Final_Project_Repo/blob/master/Machine%20Learning/MachineLearning_Overview.md)" page.

## Website
Our [interactive website](https://portland-airbnb-zillow-finder.herokuapp.com/) is designed as a one-stop-shop for all types of investors. It provides an opportunity to explore properties based on user-set criteria for exploratory investors and recommended properties to explore for passive investors.

The "Explore Investment Opportunities" page contains information visualized with [Tableau](https://public.tableau.com/views/PortlandAirBNBZillow/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link) where investors can set their own criteria to find potential properties. The last section of the [Tableau](https://public.tableau.com/views/PortlandAirBNBZillow/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link) dashboard contains the recommended properties, which are recommended based on their average predicted price per night.

## Technology Overview

* Communication: Click Up, Slack
* Data Sources: Kaggle.com and InsideAirBnB.com
* Data ETL: Juypter Notebooks, Pandas, Matplotlib, sklearn, numpy, scipy
* Databases: Postgres DB and SQL Lite
* Machine Learning: Scikit-Learn
* Web Component: Javascript, CSS, HTML, Heroku, JSON, Bootstrap, Google Maps and Places API, Flask App, Plotly
* Visualization Component: Tableau
* Presentation Slides: Google Slides
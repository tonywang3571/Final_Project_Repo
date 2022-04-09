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
* Calculate the potential airbnb rental price of a property
   * Based on other properties in the area
   * Can be tied to Zillow ML model output pass through
   * May look into additional machine learning model that is placed on the airbnb dataset
* Visualization/Marketing
   * Heatmap for market saturation
   * Heatmap for rental/sale price
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
   
### Team Organizational Structure
Our team intends to take a very collaborative approach to this project. Though one person will be the lead for each of the 4 roles each week, all other team members will review and provide input to the work the others complete.
#### Communication Plan
Our primary method of communication is via Slack, where we provide status updates and post questions to others in the group. In addition to communicating via Slack, our team has set up the project timeline and requirements in ClickUp, a project management software. The expectation of each of the members of the group is that they will adhere to all deliverable deadlines, and will ask for help from the group to complete any tasks that may delay submission of a deliverable. 

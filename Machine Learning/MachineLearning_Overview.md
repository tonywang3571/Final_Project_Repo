# Evaluation of Machine Learning Models for Zillow/AirBNB Datasets
The goal of machine learning on the Zillow and AirBNB datasets is to predict potential prices for each dataset. The final deliverable of machine learning will be to predict AirBNB prices for the Zillow dataset.

A supervised regression model will be used since the data for both datasets is continuous and labeled.

## Data Preprocessing
The data for the Machine Learning (ML) model was prepared in [this notebook](https://github.com/tonywang3571/Final_Project_Repo/blob/master/ETL/ARBNB_ZILLOW.ipynb). Numerical columns were ensured to have a numerical value type, and categorical columns were grouped by type encoding in the ML model (ex. changed PORTLAND & Portland city name options to Portland only). Rows with null values were dropped from the data frame, and it was confirmed that there were no duplicate rows.

### Scaling
There was variety in the scale of each of the columns; for example, bed/bath options were single digit numerical values, but zipcode had a scale 10000x that. To ensure numerical values were weighed equally, Standard scaling and MinMax scaling were tested on the datasets. Both scalers returned identical results, so either scaler was a viable option. The StandardScaler was selected for models where scaling was required (ex. linear regression and SVM modeling).

## Feature Selection
We used correlation heatmaps (see below) and overlap of columns between datasets to determine which columns should be included for analysis. To allow for prediction of the Zillow data within the AirBNB model, we also had to narrow the columns in the model to only be columns that were in both datasets. This resulted in a model that analyzed bathrooms, bedrooms, google zipcode, and google neighborhood. For future iterations of the model, we could identify datasets that had a larger overlap of columns so that more features could be included.

### Zillow Correlation Heatmaps
#### Original Dataset
![image](https://user-images.githubusercontent.com/94259442/166345210-1a481efd-ae89-40e7-83f8-51090ac3bbad.png)

#### Feature Selection Applied
![image](https://user-images.githubusercontent.com/94259442/166345253-087b5f2f-7532-4c11-9d58-aaa52f494d85.png)

### AirBNB Correlation Heatmaps
#### Original Dataset
![image](https://user-images.githubusercontent.com/94259442/166345281-6f457098-30d4-4d74-9804-ebfcf98db10b.png)

#### Feature Selection Applied
![image](https://user-images.githubusercontent.com/94259442/166345309-8137e11f-90b0-49cb-9902-f3c833d8b725.png)

## Training and Testing Set Selection
Training and testing data was selected using `train_test_split` from `sklearn.model_selection`. We are using an 80/20 train/test ratio and a random state of 573.

## Model Comparisons
We tested four different regression models: multivariate linear regression, SVM regression, Random Forest, and Decision Tree. The model with the best fit for the Zillow data was the Random Forest Model. The model with the best fit for the AirBNB data was the Multivariate Linear Regression. The table below details the statistical analysis of each of the models.

![image](https://user-images.githubusercontent.com/94259442/166345379-b0d4c153-91f3-49c1-9ee6-66c65df578c7.png)


## Predictive Tool
The AirBNB model was used to determine potential AirBNB price for the houses listed on the Zillow dataset. The results of the predictive tool were then utilized to identify the top listings for highest potential ROI based on average AirBNB listing price ($136/night) and occupancy (aka days rented per year) rate (82%) in Portland, Oregon. There were 55 listings returned that met these criteria, and would be the recommended targets for investors. The top listings can be found [here](https://github.com/tonywang3571/Final_Project_Repo/blob/master/Resources/TopListings.csv)

The criteria for predicting the best investment locations could be tailored to the need of the investor. For example, one could restrict the price of the house, choose a specific number of bedrooms or bathrooms, or choose the neighborhood where the property should be located.

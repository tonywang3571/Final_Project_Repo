## Data Preprocessing
The data for the Machine Learning (ML) model was prepared in the ARBNB_ZILLOW.ipynb. Numerical columns were ensured to have a numerical value type, and categorical columns were grouped by type for hot encoding in the ML model (ex. changed PORTLAND & Portland city name options to Portland only). Rows with null values were dropped from the data frame, and it was confirmed that there were no duplicate rows.

### Scaling
The scale of the dataset had a large range of variety. For example, bed/bath options were single digit numerical values, but zipcode had a scale 10000x that. To ensure numerical values were weighed equally, Standard scaling and MinMax scaling were test on the dataset. Once run through the model, the MinMaxScaler slightly outweighed the StandardScaler since the model returned a slightly higher adjusted r-squared value and a slightly lower Root Mean Squared Error.

## Feature Selection
For deliverable 2, feature selection was completed manually. We identified columns that we did not believe would be a relevant input to the model (ex. latitude, longitude, and zillow url) and dropped them from the analyzed dataframe. Then, the model was evaluated on all possible remaining variables. For deliverable 3, we will evaluate all features with methods such as PCA and decision trees, and then analyze a dataframe with the best fit variables.

## Training and Testing Set Selection
Training and testing data was selected using `train_test_split` from `sklearn.model_selection`. We are using an 80/20 train/test ratio and a random state of 573.

## Current Model Overview
The Zillow data shows to be best modeled using multivariate linear regression with a MinMaxScaler and manually selected features. As is currently modeled, the RMSE shows an average ~$67k difference in price between actual and predicted values. The model returns a minimum absolute difference of $16.00 and a maximum absolute difference of $1,124,604.

## Future Model Goals
Future iterations of the model will include automatic evaluation of features with scikit-learn and other methods. The intent is that this would reduce the RMSE and provide a better fit model. 

Our goal is to tie in the ML model to the user-facing website via a calculator where the user can input various features and the model will return a predicted house price. Based on the features and price range the user is interested in, the user will then be able to navigate an interactive map to find listings that meet those criteria.
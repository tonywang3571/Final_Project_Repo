
# Notes on the merged data from AirBNB and Zillow

## What did it provide us

• AirBNB Price Listing
• Zillow Price for Property
• Address of Listing
• Neighborhood in which Property is Located

## How can we use this data for further analysis

1.) We can determine the maximum revenue for the property. By taking the AirBNB List Price and multiply it by 365 (total days in year) that will give us the maximum revenue they could earn with this property.

2.) We can try to determine how many days the listing has to be utilized to be profitable and deliver a good ROI.

3.) We can backwards engineer the missing key variables that go into determining ROI. We are using a few ROI metrics in this project. Let me explain each of them and how we can backwards engineer them to possibly find out some of the key data points we do not have.

    Cap Rate is an ROI metric is also known as the capitalization rate, which helps you quickly gain insights to compare rental investment opportunities. It represents the rate of your return and can be calculated by dividing your Net Operating Income by the price of the property.

        We have one of the key data points to determine Cap Rate ROI and that is the Price of the Property.

        But we do not have the Net Operating Income data point.

    Net Operating Income (NOI): The net operating income or NOI represents how profitable your investment is. It can be calculated by subtracting the gross income minus your operating expenses for the property.

        We know what the maximum gross income is by taking the AirBNB List Price * 365. But we do not have the annual operating expenses data point. But we can hypothetically assign a value that is realistically the monthly operating expense and project the annual expense.

        By doing this hypothetical data point then it allows us to determine an NOI for the Listing. 

        And in turn would allows us to take the NOI and the Price of the Property and then determine the best case scenario for the Cap Rate for the property.

        Obviously this would be if all the stars aligned type of analysis but provides one scenario to take into account. But it allows us to now know a Cap Rate that is the maximum for the property. This will help us further down the line in our analysis.


    Let's try to this with one of the properties from the merged AirBNB | Zillow data set. The property is in the South Portland area at the address of 1436 SE Rex St. and the AirBNB List Price is $97 with the Zillow Price of the Property at $630,000.

    So we know the Property Price of $630,000 which we need for our analysis and we know the maximum gross income of $35,405 ($97 * 365). If we say the hypothetical estimated monthly cost is $1,000 per month, and the annual costs per year is $12,000 that allows us to take a step towards understanding the best case scenario of the Cap Rate.

        Let's figure the Net Operating Income based our assumptions:

        Net Operating Income = Gross Income - Annual Costs

        Net Operating Income = $35,405 - $12,000

        Net Operating Income = $23,405

    That would be our best case scenario of NOI. Now lets use that to figure out our best case scenario on Cap Rate.

        Cap Rate = Net Operating Income / Property Price

        Cap Rate = $23,405 / $630,000

        Cap Rate = 3.7%

    That is not a good sign for this property that its best the Cap Rate is only 3.7%

    But what this excercise does do is it tells us the key data points to analyze in our buy decisions:

        1.) Price of Property is extremely important obviously. It would be good to find a price range that is more conducive to having a better Cap Rate.

        2.) The Listing Price is the next variable. And based on the data we have currently it provides us the ability to narrow a range for the listing by neighborhood.

        3.) Occupancy Rate will be the biggest unknown in our analysis. If you are able to narrow in on points 1 & 2 then it lessens the need for higher performance on Occupancy Rate. If you do not choose the right property price then it adversely affects the minimum number for price listing and occupancy rate.

        4.) Monthly Operating Costs is possibly the most stable of the variables. Average monthly utilities rates in Portland Oregon in 2021 were $188 per month for heating and electric. Monthly average internet costs were $66. Again finding a property that does not require a lot of maintainence or rehab and one that does not have any extra expenses that are too high such as HOA fees, insurance, and cost to market the listing.

    
    Action Items to take next:

    1.) Analysis on the properties from the merge data set and based on our assumptions determine the best Rate Cap and NOI scenario.

    2.) Possibly create model where we use the median AirBNB Price for the Neighborhood, our hypothetical Annual Cost, and try a range of 20 to 50 percent occupancy to determine the best price range of a property that will deliver a Cap Rate close to or higher than 10%. Repeat this excercise to see if we can get any close to or higher than 15%.

    3. Once we have a property price range then we can start to understand what is the minimum performance for occupancy we will need to acheive the desired Cap Rate percentage.

    








import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

Sales_Price = float(input('Enter sales price of house in US dollars: '))

Down_Payment =  float(input('Enter down payment as a percentage of Sales Price, e.g. 5 for 5%: '))

Loan_Amount = Sales_Price*(1-Down_Payment/100)

Mortgage_Type =  float(input('Enter mortgage type in years, e.g 15 for 15 years: '))

Loan_Term = int(12*Mortgage_Type)

Interest_Rate =  float(input('Enter loan interest rate as a percentage, e.g 4 for 4%: '))

R = 1 +(Interest_Rate)/(12*100)

X = Loan_Amount*(R**Loan_Term)*(1-R)/(1-R**Loan_Term)

Monthly_Interest = []

Monthly_Balance  = []
for i in range(1,Loan_Term+1):
    Interest = Loan_Amount*(R-1)
    Loan_Amount = Loan_Amount - (X-Interest)
    Monthly_Interest = np.append(Monthly_Interest,Interest)
    Monthly_Balance = np.append(Monthly_Balance, Loan_Amount)

print("The Home Sales Price is: = " + str('$')+ str(Sales_Price))
print("The Down Payment as a Percentage of Sales Price is: = " + str(Down_Payment)+str(' %'))
print("The Loan Amount is: = " + str(Sales_Price*(1-Down_Payment/100))+str(' %'))
print("The Interest Rate on Annual Percentage Basis is: = " + str(Interest_Rate)+str(' %'))
print("The duration of this loan, that is the Loan Term (in months) is: = " + str(Loan_Term)+str(' months'))
print("Monthly Payment for this Mortgage(P & I) is: = " + str('$')+str(np.round(X,2)))
print("Total interest paid over life cycle of the loan is: = " + str('$') + str(np.round(np.sum(Monthly_Interest),2)))

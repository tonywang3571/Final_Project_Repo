# Convert database file to csv file
# Python SQL toolkit and Object Relational Mapper

# Import dependencies
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, inspect, func

# Dependencies
import pandas as pd
import json
import csv
import os
#pd.options.mode.chained_assignment = None  # default='warn'
import sqlite3


# Read sqlite query results into a pandas DataFrame
con = sqlite3.connect("airbnb.db")
df = pd.read_sql_query("SELECT * from airbnb", con)

# Verify that result of SQL query is stored in the dataframe
print(df.head())

# Add a variable to load a file from a path.
# file_to_load = os.path.join("Resources", "Test_50_AIRBNB_Data.csv")
# # Add a variable to save the file to a path.
# file_to_save = os.path.join("Resources", "testing50airbnb.json")
file_to_save2 = os.path.join("Resources", "testing_final_db.csv")

# # csv to geoJSON file format
# # open file to read
# with open(file_to_load, "r") as f:
#     reader = csv.reader(f)
#     header = next(reader)
#     info = []
#     data = {"type":"FeatureCollection", "features":info}
#     # for loop to append needed data into a json file
#     for row in reader:
#         info.append(        
#             {"type":"Feature",
#             "properties":{"price":row[15],
#                         "bedrooms":row[13],
#                         "accommodates":row[11],
#                         "bathrooms":row[12],
#                         "neighborhood":row[7],
#                         "website_url":row[1]},
#             "geometry":{"type":"Point",
#                         "coordinates":[float(row[9]), float(row[8])]}
#             }
#         )

# csv to json file format
# open file to read
# with open(file_to_load, "r") as f:
#     reader = csv.reader(f)
#     header = next(reader)
#     data = []
#     # for loop to append needed data into a json file
#     for row in reader:
#         data.append(    
#             {"coordinates":[float(row[8]), float(row[9])],
#             "price":int(row[15]),
#             "bedrooms":int(row[13]),
#             "accommodates":int(row[11]),
#             "bathrooms":float(row[12]),
#             "neighborhood":row[7],
#             "website_url":row[1]
#             }
#         )
    

# with open (file_to_save, "w") as f:
#     json.dump(data, f, indent=4)

with open (file_to_save2, "w") as f:
    json.dump(df, f, indent=4)    




con.close()


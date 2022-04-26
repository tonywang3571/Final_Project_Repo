# Covert CSV file to JSON file
# Converted 50 airbnb data from csv to json

from ast import NotIn
import json
import csv
from operator import not_
import os

# Add a variable to load a file from a path.
file_to_load = os.path.join("Resources", "cleaned_arbnb_google_api.csv")

# # Add a variable to save the file to a path.
# file_to_save = os.path.join("Resources", "airbnb_geojson_data.json")
# file_to_save2 = os.path.join("Resources", "airbnb_data.js")
file_to_save3 = os.path.join("Resources", "airbnb_data_neighborhood.json")

# csv to geoJSON file format
# open file to read
# with open(file_to_load, "r") as f:
#     reader = csv.reader(f)
#     header = next(reader)
#     info = []
#     data = {"type":"FeatureCollection", "features":info}
#     # for loop to append needed data into a json file
#     for row in reader:
#         info.append(        
#             {"type":"Feature",
#             "properties":{"address":row[32],
#                         "price":row[14],
#                         "bedrooms":row[12],
#                         "accommodates":row[10],
#                         "bathrooms":row[11],
#                         "neighborhood":row[6],
#                         "website_url":row[0]},
#             "geometry":{"type":"Point",
#                         "coordinates":[float(row[8]), float(row[7])]}
#             }
#         )

# # Save data as a new file
# with open (file_to_save, "w") as f:
#     json.dump(data, f, indent=4)


# with open(file_to_load, "r") as f:
#     reader = csv.reader(f)
#     header = next(reader)
#     data = []
#     # for loop to append needed data into a json file
#     for row in reader:
#         data.append(    
#             {"address":row[32],
#             "price":float(row[14]),
#             "bedrooms":float(row[12]),
#             "accommodates":int(row[10]),
#             "bathrooms":float(row[11]),
#             "neighborhood":row[6],
#             "website_url":row[0]
#             }
#         )
    
# with open (file_to_save2, "w") as f:
#     json.dump(data, f, indent=4)   


with open(file_to_load, "r") as f:
    reader = csv.reader(f)
    header = next(reader)
    list = []
    data = {"neighborhood":list}
    # for loop to append needed data into a json file
    for row in reader:
        if row not in list:
            list.append(row[6])

    list.sort()

# Save data as a new file
with open (file_to_save3, "w") as f:
    json.dump(data, f, indent=4)  
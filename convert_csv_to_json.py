# Covert CSV file to JSON file
# Converted 50 airbnb data from csv to json

import json
import csv
import os

# Add a variable to load a file from a path.
file_to_load = os.path.join("Resources", "Test_50_AIRBNB_Data.csv")
# # Add a variable to save the file to a path.
file_to_save = os.path.join("Resources", "testing50airbnb.json")
file_to_save2 = os.path.join("Resources", "testing50airbnb.js")

# open file to read
with open(file_to_load, "r") as f:
    reader = csv.reader(f)
    header = next(reader)
    data = []
    # for loop to append needed data into a json file
    for row in reader:
        data.append({"coordinates": [row[8], row[9]],
        "price": row[15],
        "bedrooms": row[13],
        "accommodates": row[11],
        "bathrooms": row[12],
        "neighbourhood": row[7],
        "website_url": row[1]})

with open (file_to_save, "w") as f:
    json.dump(data, f, indent=4)

with open (file_to_save2, "w") as f:
    json.dump(data, f, indent=4)

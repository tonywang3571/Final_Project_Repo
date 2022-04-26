# Covert CSV file to JSON file
# Converted 50 airbnb data from csv to json

import json
import csv
import os

# Add a variable to load a file from a path.
file_to_load = os.path.join("Resources", "cleaned_zillow_google_api.csv")
# # Add a variable to save the file to a path.
file_to_save = os.path.join("Resources", "zillow_geojson_data.json")
file_to_save2 = os.path.join("Resources", "zillow_data.js")

# csv to geoJSON file format
# open file to read
with open(file_to_load, "r") as f:
    reader = csv.reader(f)
    header = next(reader)
    info = []
    data = {"type":"FeatureCollection", "features":info}
    # for loop to append needed data into a json file
    for row in reader:
        info.append(        
            {"type":"Feature",
            "properties":{"address":row[0],
                        "price":row[12],
                        "bedrooms":row[4],
                        "bathrooms":row[3],
                        "square_foot":row[8],
                        "price_per_square_foot":row[13],
                        "neighborhood":row[22],
                        "website_url":row[17]},
            "geometry":{"type":"Point",
                        "coordinates":[float(row[9]), float(row[7])]}
            }
        )

# Save data as a new file
with open (file_to_save, "w") as f:
    json.dump(data, f, indent=4)

# csv to json file format
# open file to read
with open(file_to_load, "r") as f:
    reader = csv.reader(f)
    header = next(reader)
    data = []
    # for loop to append needed data into a json file
    for row in reader:
        data.append(    
            {"address":row[0],
            "price":int(row[12]),
            "bedrooms":float(row[4]),
            "bathrooms":float(row[3]),
            "square_foot":float(row[8]),
            "price_per_square_foot":float(row[13]),
            "neighborhood":row[22],
            "website_url":row[17]
            }
        )
    
# Save data as a new file
with open (file_to_save2, "w") as f:
    json.dump(data, f, indent=4)    

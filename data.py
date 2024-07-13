import csv
import json

# Process locations data
loc_csv_file = open("data/locations.csv", "r")
loc_json_file = open("data/locations.json", "w")

locations_csv = csv.DictReader(loc_csv_file)

locations_list = []
for row in locations_csv:
    # print(row["Lat"], row["Lng"])
    locations_list.append(row)

print(locations_list)

# locations_json = json.dumps({"locations": [row for row in locations_list]})
locations_json = json.dumps({"locations": locations_list})
loc_json_file.write(locations_json)

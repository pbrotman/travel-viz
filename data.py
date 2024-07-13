import csv
import json

def csv_to_json(data_name, in_csv_path, out_json_path):
    csv_file = open(in_csv_path, "r")
    json_file = open(out_json_path, "w")

    data_csv = csv.DictReader(csv_file)

    data_list = []
    for row in data_csv:
        data_list.append(row)

    data_json = json.dumps({data_name: data_list})
    json_file.write(data_json)

csv_to_json("locations", "data/locations.csv", "data/locations.json")
csv_to_json("visits", "data/visits.csv", "data/visits.json")
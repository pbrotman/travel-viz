// Data, as JSON (converted from CSV by data.py)
const locations_init = [{"Name": "Kuala Lumpur", "Lat": "3.1319", "Lng": "101.6841", "Country": "Malaysia"}, {"Name": "Malacca", "Lat": "2.1896", "Lng": "102.2501", "Country": "Malaysia"}, {"Name": "Singapore", "Lat": "1.3521", "Lng": "103.8198", "Country": "Singapore"}, {"Name": "Cameron Highlands", "Lat": "4.4679", "Lng": "101.3848", "Country": "Malaysia"}, {"Name": "Penang", "Lat": "5.4141", "Lng": "100.3285", "Country": "Malaysia"}, {"Name": "Langkawi", "Lat": "6.2934", "Lng": "99.7247", "Country": "Malaysia"}, {"Name": "Ko Lipe", "Lat": "6.4886", "Lng": "99.3049", "Country": "Thailand"}, {"Name": "Ko Lanta", "Lat": "7.6065", "Lng": "99.0353", "Country": "Thailand"}, {"Name": "Phi Phi", "Lat": "7.7407", "Lng": "98.7784", "Country": "Thailand"}, {"Name": "Phuket", "Lat": "7.8804", "Lng": "98.3923", "Country": "Thailand"}, {"Name": "Khao Sok", "Lat": "8.9777", "Lng": "98.6382", "Country": "Thailand"}, {"Name": "Surat Thani", "Lat": "9.1341", "Lng": "99.1431", "Country": "Thailand"}]
const visits_init = [{"Location": "Kuala Lumpur", "Arrive": "05 Dec 2023", "Depart": "07 Dec 2023"}, {"Location": "Malacca", "Arrive": "07 Dec 2023", "Depart": "10 Dec 2023"}, {"Location": "Singapore", "Arrive": "10 Dec 2023", "Depart": "13 Dec 2023"}, {"Location": "Kuala Lumpur", "Arrive": "13 Dec 2023", "Depart": "14 Dec 2023"}, {"Location": "Cameron Highlands", "Arrive": "14 Dec 2023", "Depart": "16 Dec 2023"}, {"Location": "Penang", "Arrive": "16 Dec 2023", "Depart": "21 Dec 2023"}, {"Location": "Langkawi", "Arrive": "21 Dec 2023", "Depart": "25 Dec 2023"}, {"Location": "Ko Lipe", "Arrive": "25 Dec 2023", "Depart": "27 Dec 2023"}, {"Location": "Ko Lanta", "Arrive": "27 Dec 2023", "Depart": "02 Jan 2024"}, {"Location": "Phi Phi", "Arrive": "02 Jan 2024", "Depart": "03 Jan 2024"}, {"Location": "Phuket", "Arrive": "03 Jan 2024", "Depart": "05 Jan 2024"}, {"Location": "Khao Sok", "Arrive": "05 Jan 2024", "Depart": "08 Jan 2024"}, {"Location": "Surat Thani", "Arrive": "08 Jan 2024", "Depart": "08 Jan 2024"}]

// Define Visit and Location objects
class Visit {
    constructor(arrive, depart){
        this.arrive = new Date(arrive),
        this.depart = new Date(depart),
        this.nights = Math.round((this.depart.getTime() - this.arrive.getTime()) / (1000 * 3600 * 24))
    }
}

class Location {
    constructor(name, lat, lng, country, visits = []){
        this.name = name,
        this.latLng = L.latLng(lat, lng),
        this.country = country,
        this.visits = visits,
        this.addVisit = (vis) => {this.visits.push(vis);}
        this.getNights = function(){
            return this.visits.map(vis => vis.nights).reduce((tot, cur) => tot + cur)
        }
    }
}

// Generate JSON of location objects.
let locations_json = {}
locations_init.forEach((loc) => locations_json[loc.Name] = (new Location(loc.Name, loc.Lat, loc.Lng, loc.Country)));

// Generate visit objects and assign to location.
visits_init.forEach((vis) => {locations_json[vis["Location"]].addVisit(new Visit(vis.Arrive, vis.Depart))});

// Convert locations JSON to array.
let locations = Object.keys(locations_json).map((key) => locations_json[key]);

console.log(locations_json);
console.log(locations);
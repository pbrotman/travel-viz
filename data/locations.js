// Data, as JSON (converted from CSV by data.py)
const locations_init = 
[{"Name": "Kuala Lumpur", "Lat": "3.1319", "Lng": "101.6841", "Country": "Malaysia"}, {"Name": "Malacca", "Lat": "2.1896", "Lng": "102.2501", "Country": "Malaysia"}, {"Name": "Singapore", "Lat": "1.3521", "Lng": "103.8198", "Country": "Singapore"}, {"Name": "Cameron Highlands", "Lat": "4.4679", "Lng": "101.3848", "Country": "Malaysia"}, {"Name": "Penang", "Lat": "5.4141", "Lng": "100.3285", "Country": "Malaysia"}, {"Name": "Langkawi", "Lat": "6.2934", "Lng": "99.7247", "Country": "Malaysia"}, {"Name": "Ko Lipe", "Lat": "6.4886", "Lng": "99.3049", "Country": "Thailand"}, {"Name": "Ko Lanta", "Lat": "7.6065", "Lng": "99.0353", "Country": "Thailand"}, {"Name": "Phi Phi", "Lat": "7.7407", "Lng": "98.7784", "Country": "Thailand"}, {"Name": "Phuket", "Lat": "7.8804", "Lng": "98.3923", "Country": "Thailand"}, {"Name": "Khao Sok", "Lat": "8.9777", "Lng": "98.6382", "Country": "Thailand"}, {"Name": "Surat Thani", "Lat": "9.1341", "Lng": "99.1431", "Country": "Thailand"}, {"Name": "Bangkok", "Lat": "13.7563", "Lng": "100.5018", "Country": "Thailand"}, {"Name": "Sukhothai", "Lat": "17.0076", "Lng": "99.8264", "Country": "Thailand"}, {"Name": "Chiang Mai", "Lat": "18.7883", "Lng": "98.9853", "Country": "Thailand"}, {"Name": "Pai", "Lat": "19.3581", "Lng": "98.4405", "Country": "Thailand"}, {"Name": "Mae Hong Son", "Lat": "19.2990", "Lng": "97.9676", "Country": "Thailand"}, {"Name": "Mae Cham", "Lat": "18.4993", "Lng": "98.3627", "Country": "Thailand"}, {"Name": "Chiang Rai", "Lat": "19.9105", "Lng": "99.8406", "Country": "Thailand"}, {"Name": "Huay Xia", "Lat": "20.2628", "Lng": "100.4340", "Country": "Laos"}, {"Name": "Pak Beng", "Lat": "19.8990", "Lng": "101.1419", "Country": "Laos"}, {"Name": "Luang Prabang", "Lat": "19.8833", "Lng": "102.1387", "Country": "Laos"}, {"Name": "Vang Vieng", "Lat": "18.9213", "Lng": "102.4487", "Country": "Laos"}, {"Name": "Vientiane", "Lat": "17.9757", "Lng": "102.6331", "Country": "Laos"}, {"Name": "Nong Khai", "Lat": "17.8646", "Lng": "102.7310", "Country": "Thailand"}, {"Name": "Siem Reap", "Lat": "13.3633", "Lng": "103.8564", "Country": "Cambodia"}, {"Name": "Phnom Penh", "Lat": "11.5564", "Lng": "104.9282", "Country": "Cambodia"}, {"Name": "Sihanoukville", "Lat": "10.6268", "Lng": "103.5116", "Country": "Cambodia"}, {"Name": "Ko Rong", "Lat": "10.6658", "Lng": "103.2729", "Country": "Cambodia"}, {"Name": "Jakarta", "Lat": "-6.1944", "Lng": "106.8229", "Country": "Indonesia"}, {"Name": "Yogyakarta", "Lat": "-7.8014", "Lng": "110.3648", "Country": "Indonesia"}, {"Name": "Malang", "Lat": "-7.9666", "Lng": "112.6326", "Country": "Indonesia"}, {"Name": "Surabaya", "Lat": "-7.2575", "Lng": "112.7521", "Country": "Indonesia"}]
const visits_init = 
[{"Location": "Kuala Lumpur", "Arrive": "05 Dec 2023", "Depart": "07 Dec 2023"}, {"Location": "Malacca", "Arrive": "07 Dec 2023", "Depart": "10 Dec 2023"}, {"Location": "Singapore", "Arrive": "10 Dec 2023", "Depart": "13 Dec 2023"}, {"Location": "Kuala Lumpur", "Arrive": "13 Dec 2023", "Depart": "14 Dec 2023"}, {"Location": "Cameron Highlands", "Arrive": "14 Dec 2023", "Depart": "16 Dec 2023"}, {"Location": "Penang", "Arrive": "16 Dec 2023", "Depart": "21 Dec 2023"}, {"Location": "Langkawi", "Arrive": "21 Dec 2023", "Depart": "25 Dec 2023"}, {"Location": "Ko Lipe", "Arrive": "25 Dec 2023", "Depart": "27 Dec 2023"}, {"Location": "Ko Lanta", "Arrive": "27 Dec 2023", "Depart": "02 Jan 2024"}, {"Location": "Phi Phi", "Arrive": "02 Jan 2024", "Depart": "03 Jan 2024"}, {"Location": "Phuket", "Arrive": "03 Jan 2024", "Depart": "05 Jan 2024"}, {"Location": "Khao Sok", "Arrive": "05 Jan 2024", "Depart": "08 Jan 2024"}, {"Location": "Surat Thani", "Arrive": "08 Jan 2024", "Depart": "08 Jan 2024"}, {"Location": "Bangkok", "Arrive": "08 Jan 2024", "Depart": "13 Jan 2024"}, {"Location": "Sukhothai", "Arrive": "13 Jan 2024", "Depart": "15 Jan 2024"}, {"Location": "Chiang Mai", "Arrive": "15 Jan 2024", "Depart": "23 Jan 2024"}, {"Location": "Pai", "Arrive": "23 Jan 2024", "Depart": "25 Jan 2024"}, {"Location": "Mae Hong Son", "Arrive": "25 Jan 2024", "Depart": "26 Jan 2024"}, {"Location": "Mae Cham", "Arrive": "26 Jan 2024", "Depart": "27 Jan 2024"}, {"Location": "Chiang Mai", "Arrive": "27 Jan 2024", "Depart": "28 Jan 2024"}, {"Location": "Pai", "Arrive": "28 Jan 2024", "Depart": "30 Jan 2024"}, {"Location": "Chiang Mai", "Arrive": "30 Jan 2024", "Depart": "31 Jan 2024"}, {"Location": "Chiang Rai", "Arrive": "31 Jan 2024", "Depart": "3 Feb 2024"}, {"Location": "Huay Xia", "Arrive": "3 Feb 2024", "Depart": "4 Feb 2024"}, {"Location": "Pak Beng", "Arrive": "4 Feb 2024", "Depart": "5 Feb 2024"}, {"Location": "Luang Prabang", "Arrive": "5 Feb 2024", "Depart": "9 Feb 2024"}, {"Location": "Vang Vieng", "Arrive": "9 Feb 2024", "Depart": "12 Feb 2024"}, {"Location": "Vientiane", "Arrive": "12 Feb 2024", "Depart": "12 Feb 2024"}, {"Location": "Nong Khai", "Arrive": "12 Feb 2024", "Depart": "12 Feb 2024"}, {"Location": "Bangkok", "Arrive": "13 Feb 2024", "Depart": "13 Feb 2024"}, {"Location": "Siem Reap", "Arrive": "13 Feb 2024", "Depart": "17 Feb 2024"}, {"Location": "Phnom Penh", "Arrive": "17 Feb 2024", "Depart": "21 Feb 2024"}, {"Location": "Sihanoukville", "Arrive": "21 Feb 2024", "Depart": "21 Feb 2024"}, {"Location": "Ko Rong", "Arrive": "21 Feb 2024", "Depart": "25 Feb 2024"}, {"Location": "Sihanoukville", "Arrive": "25 Feb 2024", "Depart": "25 Feb 2024"}, {"Location": "Phnom Penh", "Arrive": "25 Feb 2024", "Depart": "26 Feb 2024"}, {"Location": "Kuala Lumpur", "Arrive": "26 Feb 2024", "Depart": "29 Feb 2024"}, {"Location": "Jakarta", "Arrive": "29 Feb 2024", "Depart": "4 Mar 2024"}, {"Location": "Yogyakarta", "Arrive": "4 Mar 2024", "Depart": "7 Mar 2024"}, {"Location": "Malang", "Arrive": "7 Mar 2024", "Depart": "10 Mar 2024"}, {"Location": "Surabaya", "Arrive": "10 Mar 2024", "Depart": "11 Mar 2024"}, {"Location": "Kuala Lumpur", "Arrive": "11 Mar 2024", "Depart": "13 Mar 2024"}]

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
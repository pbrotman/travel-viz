// Data, as JSON (converted from CSV by data.py)
const trips_init = 
[{"Name": "Southeast Asia"}];
const locations_init = 
[{"Name": "Kuala Lumpur", "Lat": "3.1319", "Lng": "101.6841", "Country": "Malaysia"}, {"Name": "Malacca", "Lat": "2.1896", "Lng": "102.2501", "Country": "Malaysia"}, {"Name": "Singapore", "Lat": "1.3521", "Lng": "103.8198", "Country": "Singapore"}, {"Name": "Cameron Highlands", "Lat": "4.4679", "Lng": "101.3848", "Country": "Malaysia"}, {"Name": "Penang", "Lat": "5.4141", "Lng": "100.3285", "Country": "Malaysia"}, {"Name": "Langkawi", "Lat": "6.2934", "Lng": "99.7247", "Country": "Malaysia"}, {"Name": "Ko Lipe", "Lat": "6.4886", "Lng": "99.3049", "Country": "Thailand"}, {"Name": "Ko Lanta", "Lat": "7.6065", "Lng": "99.0353", "Country": "Thailand"}, {"Name": "Phi Phi", "Lat": "7.7407", "Lng": "98.7784", "Country": "Thailand"}, {"Name": "Phuket", "Lat": "7.8804", "Lng": "98.3923", "Country": "Thailand"}, {"Name": "Khao Sok", "Lat": "8.9777", "Lng": "98.6382", "Country": "Thailand"}, {"Name": "Surat Thani", "Lat": "9.1341", "Lng": "99.1431", "Country": "Thailand"}, {"Name": "Bangkok", "Lat": "13.7563", "Lng": "100.5018", "Country": "Thailand"}, {"Name": "Sukhothai", "Lat": "17.0076", "Lng": "99.8264", "Country": "Thailand"}, {"Name": "Chiang Mai", "Lat": "18.7883", "Lng": "98.9853", "Country": "Thailand"}, {"Name": "Pai", "Lat": "19.3581", "Lng": "98.4405", "Country": "Thailand"}, {"Name": "Mae Hong Son", "Lat": "19.2990", "Lng": "97.9676", "Country": "Thailand"}, {"Name": "Mae Cham", "Lat": "18.4993", "Lng": "98.3627", "Country": "Thailand"}, {"Name": "Chiang Rai", "Lat": "19.9105", "Lng": "99.8406", "Country": "Thailand"}, {"Name": "Huay Xia", "Lat": "20.2628", "Lng": "100.4340", "Country": "Laos"}, {"Name": "Pak Beng", "Lat": "19.8990", "Lng": "101.1419", "Country": "Laos"}, {"Name": "Luang Prabang", "Lat": "19.8833", "Lng": "102.1387", "Country": "Laos"}, {"Name": "Vang Vieng", "Lat": "18.9213", "Lng": "102.4487", "Country": "Laos"}, {"Name": "Vientiane", "Lat": "17.9757", "Lng": "102.6331", "Country": "Laos"}, {"Name": "Nong Khai", "Lat": "17.8646", "Lng": "102.7310", "Country": "Thailand"}, {"Name": "Siem Reap", "Lat": "13.3633", "Lng": "103.8564", "Country": "Cambodia"}, {"Name": "Phnom Penh", "Lat": "11.5564", "Lng": "104.9282", "Country": "Cambodia"}, {"Name": "Sihanoukville", "Lat": "10.6268", "Lng": "103.5116", "Country": "Cambodia"}, {"Name": "Ko Rong", "Lat": "10.6658", "Lng": "103.2729", "Country": "Cambodia"}, {"Name": "Jakarta", "Lat": "-6.1944", "Lng": "106.8229", "Country": "Indonesia"}, {"Name": "Yogyakarta", "Lat": "-7.8014", "Lng": "110.3648", "Country": "Indonesia"}, {"Name": "Malang", "Lat": "-7.9666", "Lng": "112.6326", "Country": "Indonesia"}, {"Name": "Surabaya", "Lat": "-7.2575", "Lng": "112.7521", "Country": "Indonesia"}]
const visits_init = 
[{"Location": "Kuala Lumpur", "Arrive": "05 Dec 2023", "Depart": "07 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Malacca", "Arrive": "07 Dec 2023", "Depart": "10 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Singapore", "Arrive": "10 Dec 2023", "Depart": "13 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Kuala Lumpur", "Arrive": "13 Dec 2023", "Depart": "14 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Cameron Highlands", "Arrive": "14 Dec 2023", "Depart": "16 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Penang", "Arrive": "16 Dec 2023", "Depart": "21 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Langkawi", "Arrive": "21 Dec 2023", "Depart": "25 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Ko Lipe", "Arrive": "25 Dec 2023", "Depart": "27 Dec 2023", "Trip": "Southeast Asia"}, {"Location": "Ko Lanta", "Arrive": "27 Dec 2023", "Depart": "02 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Phi Phi", "Arrive": "02 Jan 2024", "Depart": "03 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Phuket", "Arrive": "03 Jan 2024", "Depart": "05 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Khao Sok", "Arrive": "05 Jan 2024", "Depart": "08 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Surat Thani", "Arrive": "08 Jan 2024", "Depart": "08 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Bangkok", "Arrive": "08 Jan 2024", "Depart": "13 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Sukhothai", "Arrive": "13 Jan 2024", "Depart": "15 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Chiang Mai", "Arrive": "15 Jan 2024", "Depart": "23 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Pai", "Arrive": "23 Jan 2024", "Depart": "25 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Mae Hong Son", "Arrive": "25 Jan 2024", "Depart": "26 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Mae Cham", "Arrive": "26 Jan 2024", "Depart": "27 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Chiang Mai", "Arrive": "27 Jan 2024", "Depart": "28 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Pai", "Arrive": "28 Jan 2024", "Depart": "30 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Chiang Mai", "Arrive": "30 Jan 2024", "Depart": "31 Jan 2024", "Trip": "Southeast Asia"}, {"Location": "Chiang Rai", "Arrive": "31 Jan 2024", "Depart": "3 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Huay Xia", "Arrive": "3 Feb 2024", "Depart": "4 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Pak Beng", "Arrive": "4 Feb 2024", "Depart": "5 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Luang Prabang", "Arrive": "5 Feb 2024", "Depart": "9 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Vang Vieng", "Arrive": "9 Feb 2024", "Depart": "12 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Vientiane", "Arrive": "12 Feb 2024", "Depart": "12 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Nong Khai", "Arrive": "12 Feb 2024", "Depart": "12 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Bangkok", "Arrive": "13 Feb 2024", "Depart": "13 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Siem Reap", "Arrive": "13 Feb 2024", "Depart": "17 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Phnom Penh", "Arrive": "17 Feb 2024", "Depart": "21 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Sihanoukville", "Arrive": "21 Feb 2024", "Depart": "21 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Ko Rong", "Arrive": "21 Feb 2024", "Depart": "25 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Sihanoukville", "Arrive": "25 Feb 2024", "Depart": "25 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Phnom Penh", "Arrive": "25 Feb 2024", "Depart": "26 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Kuala Lumpur", "Arrive": "26 Feb 2024", "Depart": "29 Feb 2024", "Trip": "Southeast Asia"}, {"Location": "Jakarta", "Arrive": "29 Feb 2024", "Depart": "4 Mar 2024", "Trip": "Southeast Asia"}, {"Location": "Yogyakarta", "Arrive": "4 Mar 2024", "Depart": "7 Mar 2024", "Trip": "Southeast Asia"}, {"Location": "Malang", "Arrive": "7 Mar 2024", "Depart": "10 Mar 2024", "Trip": "Southeast Asia"}, {"Location": "Surabaya", "Arrive": "10 Mar 2024", "Depart": "11 Mar 2024", "Trip": "Southeast Asia"}, {"Location": "Kuala Lumpur", "Arrive": "11 Mar 2024", "Depart": "13 Mar 2024", "Trip": "Southeast Asia"}];
const transits_init =
[{"Start": "Kuala Lumpur", "End": "Malacca", "Mode": "Bus", "Date": "07 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Malacca", "End": "Singapore", "Mode": "Bus", "Date": "10 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Singapore", "End": "Kuala Lumpur", "Mode": "Bus", "Date": "13 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Kuala Lumpur", "End": "Cameron Highlands", "Mode": "Bus", "Date": "14 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Cameron Highlands", "End": "Penang", "Mode": "Bus", "Date": "16 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Penang", "End": "Langkawi", "Mode": "Plane", "Date": "21 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Langkawi", "End": "Ko Lipe", "Mode": "Boat", "Date": "25 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Ko Lipe", "End": "Ko Lanta", "Mode": "Boat", "Date": "27 Dec 2023", "Trip": "Southeast Asia"}, {"Start": "Ko Lanta", "End": "Phi Phi", "Mode": "Boat", "Date": "2 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Phi Phi", "End": "Phuket", "Mode": "Boat", "Date": "3 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Phuket", "End": "Khao Sok", "Mode": "Bus", "Date": "5 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Khao Sok", "End": "Surat Thani", "Mode": "Van", "Date": "8 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Surat Thani", "End": "Bangkok", "Mode": "Plane", "Date": "8 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Bangkok", "End": "Sukhothai", "Mode": "Bus", "Date": "13 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Sukhothai", "End": "Chiang Mai", "Mode": "Bus", "Date": "15 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Chiang Mai", "End": "Pai", "Mode": "Motorbike", "Date": "23 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Pai", "End": "Mae Hong Son", "Mode": "Motorbike", "Date": "25 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Mae Hong Son", "End": "Mae Cham", "Mode": "Motorbike", "Date": "26 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Mae Cham", "End": "Chiang Mai", "Mode": "Motorbike", "Date": "27 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Chiang Mai", "End": "Pai", "Mode": "Motorbike", "Date": "28 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Pai", "End": "Chiang Mai", "Mode": "Van", "Date": "30 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Chiang Mai", "End": "Chiang Rai", "Mode": "Bus", "Date": "31 Jan 2024", "Trip": "Southeast Asia"}, {"Start": "Chiang Rai", "End": "Huay Xia", "Mode": "Bus", "Date": "3 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Huay Xia", "End": "Pak Beng", "Mode": "Boat", "Date": "4 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Pak Beng", "End": "Luang Prabang", "Mode": "Boat", "Date": "5 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Luang Prabang", "End": "Vang Vieng", "Mode": "Train", "Date": "9 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Vang Vieng", "End": "Vientiane", "Mode": "Bus", "Date": "12 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Vientiane", "End": "Nong Khai", "Mode": "Bus", "Date": "12 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Nong Khai", "End": "Bangkok", "Mode": "Sleeper Train", "Date": "12 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Bangkok", "End": "Siem Reap", "Mode": "Van", "Date": "13 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Siem Reap", "End": "Phnom Penh", "Mode": "Bus", "Date": "17 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Phnom Penh", "End": "Sihanoukville", "Mode": "Van", "Date": "21 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Sihanoukville", "End": "Ko Rong", "Mode": "Boat", "Date": "21 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Ko Rong", "End": "Sihanoukville", "Mode": "Boat", "Date": "25 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Sihanoukville", "End": "Phnom Penh", "Mode": "Van", "Date": "25 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Phnom Penh", "End": "Kuala Lumpur", "Mode": "Plane", "Date": "26 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Kuala Lumpur", "End": "Jakarta", "Mode": "Plane", "Date": "29 Feb 2024", "Trip": "Southeast Asia"}, {"Start": "Jakarta", "End": "Yogyakarta", "Mode": "Train", "Date": "4 Mar 2024", "Trip": "Southeast Asia"}, {"Start": "Yogyakarta", "End": "Malang", "Mode": "Train", "Date": "7 Mar 2024", "Trip": "Southeast Asia"}, {"Start": "Malang", "End": "Surabaya", "Mode": "Train", "Date": "10 Mar 2024", "Trip": "Southeast Asia"}, {"Start": "Surabaya", "End": "Kuala Lumpur", "Mode": "Plane", "Date": "11 Mar 2024", "Trip": "Southeast Asia"}];

// Define Trip, Location, Visit and Transit objects
class Trip {
    constructor(name, visits = [], transits = []){
        this.name = name,
        this.visits = visits,
        this.transits = transits,
        this.getLocations = () => visits.map((vis) => vis.location)
    }
}

class Location {
    constructor(name, lat, lng, country, visits = []){
        this.name = name,
        this.latLng = L.latLng(lat, lng),
        this.country = country,
        this.visits = visits,
        this.getNights = function(){
            return this.visits.map(vis => vis.nights).reduce((tot, cur) => tot + cur)
        }
    }
}

class Visit {
    constructor(location, arrive, depart, trip, transits = {}){
        this.location = location,
        this.arrive = new Date(arrive),
        this.depart = new Date(depart),
        this.trip = trip,
        this.transits = transits,
        this.nights = Math.round((this.depart.getTime() - this.arrive.getTime()) / (1000 * 3600 * 24))
    }
}

class Transit {
    constructor(start, end, mode, date, trip){
        this.start = start, // reference to location object
        this.end = end, // reference to location object
        this.date = new Date(date),
        this.trip = trip,
        this.mode = mode
    }
}

// Create Trips, assign to JSON.
let trips_json = {};
trips_init.forEach((trp) => trips_json[trp.Name] = new Trip(trp.Name));
console.log(trips_json);

// Create Locations, assign to JSON.
let locations_json = {};
locations_init.forEach((loc) => locations_json[loc.Name] = new Location(loc.Name, loc.Lat, loc.Lng, loc.Country));

// Create Visits, assign to Trip and Location.
visits_init.forEach((vis) => {
    let visit = new Visit(vis.Location, vis.Arrive, vis.Depart, vis.Trip);
    trips_json[visit.trip].visits.push(visit);
    locations_json[visit.location].visits.push(visit);
});

// Create Transits (with references to Locations), assign to Trip, Visits, and transits array.
let transits = [];

transits_init.forEach((trs) => {
    let transit = new Transit(locations_json[trs["Start"]], locations_json[trs["End"]], trs.Mode.toLowerCase(), trs.Date, trs.Trip);
    let thisTrip = trips_json[transit.trip];

    thisTrip.transits.push(transit);
    thisTrip.visits.forEach((vis) => {
        if(vis.location === transit.start.name & vis.depart.getTime() === transit.date.getTime()){
            vis.transits.depart = transit;
        }
        if(vis.location === transit.end.name & vis.arrive.getTime() === transit.date.getTime()){
            vis.transits.arrive = transit;
        }
    })
    transits.push(transit);
});

console.log(transits);

// Convert locations JSON to array.
let locations = Object.keys(locations_json).map((key) => locations_json[key]);

console.log(locations_json);
console.log(locations);
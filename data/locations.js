class Location {
    constructor(name, lat, long, country){
        this.name = name,
        this.latLng = L.latLng(lat, long),
        this.country = country
    }
}

let locations = [
    new Location("Kuala Lumpur", 3.1319, 101.6841, "Malaysia"),
    new Location("Malacca", 2.1896, 102.2501, "Malaysia"),
    new Location("Singapore", 1.3521, 103.8198, "Singapore")
]
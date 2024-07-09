class Visit {
    constructor(arrive, depart){
        this.arrive = new Date(arrive),
        this.depart = new Date(depart),
        this.nights = this.depart.getDate() - this.arrive.getDate()
    }
}

class Location {
    constructor(name, lat, long, country, visits = []){
        this.name = name,
        this.latLng = L.latLng(lat, long),
        this.country = country,
        this.visits = visits,
        this.getNights = function(){
            return this.visits.map(vis => vis.nights).reduce((tot, cur) => tot + cur)
        }
    }
}

let locations = [
    new Location("Kuala Lumpur", 3.1319, 101.6841, "Malaysia", [
        new Visit("5 Dec 2023", "7 Dec 2023"),
        new Visit("13 Dec 2023", "14 Dec 2023"),
    ]),
    new Location("Malacca", 2.1896, 102.2501, "Malaysia", [
        new Visit("7 Dec 2023", "10 Dec 2023"),
    ]),
    new Location("Singapore", 1.3521, 103.8198, "Singapore", [
        new Visit("10 Dec 2023", "13 Dec 2023"),
    ])
]

console.log(locations);
// console.log(locations[2].getNights())
console.log(locations.map(loc => loc.getNights()));
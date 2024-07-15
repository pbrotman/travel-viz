/* MAP */

// Instantiate map
var map = L.map('map');

// Define map starting bounds
map.fitBounds([
    [21.904, 96.059],
    [-9.819, 119.853]
]).zoomIn(1)

// Get map tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Color by country
let countryColor = function(country){
    switch(country){
        case "Malaysia":
            return("gold");
        case "Singapore":
            return("white");
        case "Thailand":
            return("blue");
        case "Laos":
            return("green");
        case "Cambodia":
            return("#E49B0F"); //Gamboge
        case "Indonesia":
            return("red");
    }
}

// Plot locations
let locationCircles = locations.map((loc) => {
    let locCircle = L.circle([loc.latLng.lat, loc.latLng.lng], {
        stroke: true,
        weight: 1,
        color: countryColor(loc.country),
        fillColor: countryColor(loc.country),
        fillOpacity: .8,
        // radius: 30000,
        radius: 10000 * loc.getNights(),
    }).addTo(map);
    return(locCircle);
});

console.log(locationCircles);
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

// // Plot a circle (test)
// var circle = L.circle([3.1489, 101.6926], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// Color by country
let countryColor = function(country){
    switch(country){
        case "Malaysia":
            return("red");
        case "Singapore":
            return("white");
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
        radius: 30000
    }).addTo(map);
    return(locCircle);
});

console.log(locationCircles);
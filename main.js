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


// Plot locations
let locationCircles = locations.map((loc) => {
    let locCircle = L.circle([loc.coords.lat, loc.coords.long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    return(locCircle);
});

console.log(locationCircles);
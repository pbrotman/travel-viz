/* MAP */

// Instantiate map
var map = L.map('map');

// Define map starting bounds
map.fitBounds([
    [21.904, 96.059],
    [-9.819, 119.853]
]).zoomIn(1)

// Get map tiles

// https://www.reddit.com/r/gis/comments/4cmt5y/comment/d1jlpn8/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
// https://leaflet-extras.github.io/leaflet-providers/preview/
var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// Color by country
let countryColor = function(country){
    switch(country){
        case "Malaysia":
            return("Gold");
        case "Singapore":
            return("Silver");
        case "Thailand":
            return("RoyalBlue");
        case "Laos":
            return("Green");
        case "Cambodia":
            return("#E49B0F"); //Gamboge
        case "Indonesia":
            return("IndianRed");
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
        // radius: 10000 * loc.getNights(),
        radius: 20000 * Math.sqrt(loc.getNights()),
    }).addTo(map);
    return(locCircle);
});

console.log(locationCircles);
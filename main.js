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

function styleTransit(trs){
    let style = {}
    if(trs.mode == "plane"){
        style = {
            weight: 2,
            color: "grey",
            opacity: .5,
        };
    } else {
        style = {
            weight: 1,
            color: "black",
            opacity: .8,
        };
    }
    return style
}

// Plot transits
let transitLines = transits.map((trs) => {
    let trsLine = L.polyline([trs.start.latLng, trs.end.latLng], 
        styleTransit(trs)).addTo(map);
    return(trsLine)
})

// // With L.curve
// let transitLines = transits.map((trs) => {
//     let trsLine = L.curve([ "M", [trs.start.latLng.lat, trs.start.latLng.lng],
//         "L", [trs.end.latLng.lat, trs.end.latLng.lng],
//         "Z"
//     ], styleTransit(trs))
//         .addTo(map);
//     return(trsLine)
// })

// L.DomEvent.on(map, "click", (e) => console.log(e.latlng));

// console.log(transitLines);

// Plot transit midpoints
// let transitMidpoints = transits.map((trs) => {
//     let trsMidpoint = L.circle([(trs.start.latLng.lat+trs.end.latLng.lat)/2, (trs.start.latLng.lng+trs.end.latLng.lng)/2]).addTo(map);
//     return(trsMidpoint);
// })
// let transitMidlines = transits.map((trs) => {
//     let trsLine = L.polyline([[trs.start.latLng.lat, trs.start.latLng.lat], [trs.end.latLng.lat, trs.end.latLng.lat]], 
//         styleTransit(trs)).addTo(map);
//     return(trsLine);
// })

// let transitMidlines = transits.map((trs) => {
//     let trsLine = L.polyline([[trs.start.latLng.lng, trs.end.latLng.lat], [trs.end.latLng.lng, trs.start.latLng.lat]], 
//         styleTransit(trs)).addTo(map);
//     return(trsLine)
// })

// // Pick up here:
// let transitMidpoints = transits.map((trs) => {
//     const y_start = trs.start.latLng.lat;
//     const x_start = trs.start.latLng.lng;

//     const y_end = trs.end.latLng.lat;
//     const x_end = trs.end.latLng.lng;

//     const y_mid = (y_start+y_end)/2;
//     const x_mid = (x_start+x_end)/2;

//     const trsMidpoint = L.latLng([y_mid, x_mid]);
//     const slope = (y_end-y_start)/(x_end-x_start);
//     const slope_inv = -1/slope; //slope inverse

//     let c = .5;

//     const x_delta = c/Math.sqrt(1+slope_inv^2);
//     const y_delta = slope_inv*c/Math.sqrt(1-slope_inv^2);

//     if(slope_inv<1){
//         let trsBisector = L.polyline([[x_mid+x_delta, y_mid+y_delta], [x_mid-x_delta, y_mid-y_delta]]).addTo(map);
//     }
    

//     let trsMidpointCircle = L.circle(trsMidpoint).addTo(map);

//     // let trsBisector = L.polyline([[trsMidpoint.lat+scaler*Math.sign(-1/slope), trsMidpoint.lng+scaler], [trsMidpoint.lat-scaler*Math.sign(-1/slope), trsMidpoint.lng-scaler]]).addTo(map);
//     // let trsBisector = L.polyline([[trsMidpoint.lat-scaler/slope, trsMidpoint.lng+scaler], [trsMidpoint.lat+scaler/slope, trsMidpoint.lng-scaler]]).addTo(map);

//     return(trsBisector);
// })
// console.log(transitMidpoints);

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
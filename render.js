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
            return("Gray");
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
    switch(trs.mode){
        case "plane":
            style.weight = 2;
            style.color = "grey";
            style.opacity = .5;
            style.dashArray = "8";
            break;
        case "boat":
            style.dashArray = "3";
        default:
            style.weight = 1;
            style.color = "black";
            style.opacity = .8;
    }
    return style
}

// Plot transits
let transitLines = transits.map((trs) => {

    //Line
    let trsLine = L.polyline([trs.start.latLng, trs.end.latLng], 
        styleTransit(trs));
    trsLine.addTo(map);

    //Tooltip
    let toolTip = L.tooltip()
        .setLatLng(trsLine.getCenter())
        .setContent(`
            <b> ${trs.date.toDateString()} </b> <br/>
            ${trs.start.name} &rarr; ${trs.end.name}<br/>
            `);
    trsLine.on("mouseover", () => {
        toolTip.addTo(map);
    });
    trsLine.on("mouseout", () => {
        toolTip.remove();
    });

    return(trsLine)
})

console.log(transitLines);

// Plot locations
let locationCircles = locations.map((loc) => {

    // Circle
    let locCircle = L.circle([loc.latLng.lat, loc.latLng.lng], {
        stroke: true,
        weight: 1,
        color: countryColor(loc.country),
        fillColor: countryColor(loc.country),
        fillOpacity: .8,
        radius: 20000 * Math.sqrt(loc.getNights()),
    })
    locCircle.addTo(map);

    // Display visit dates in tooltip
    function datesTooltip(vis){
        if(vis.arrive.date.getTime() === vis.depart.date.getTime()){
            return vis.arrive.date.toDateString();
        } else {
            return `${vis.arrive.date.toDateString()} - ${vis.depart.date.toDateString()}`
        }
    }

    // Tooltip
    let toolTip = L.tooltip()
        .setLatLng(loc.latLng)
        .setContent(`
            <b>${loc.name} - ${loc.country}</b> <br/>
            Nights stayed: ${loc.getNights()} <br/>
            Dates visited: ${loc.visits.map((vis) => `<br/> <li>${datesTooltip(vis)}`)}
            `);
    locCircle.on("mouseover", () => {
        toolTip.addTo(map);
    });
    locCircle.on("mouseout", () => {
        toolTip.remove();
    });

    return(locCircle);
});

console.log(locationCircles);
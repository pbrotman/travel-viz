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

        // Southeast Asia
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

        // Americas
        case "Guatemala":
            return("DarkGreen");
        case "Costa Rica":
            return("LightSkyBlue");

        // Europe
        case "France":
            return("DodgerBlue");
        case "Germany":
            return("DimGray");
            // return("Black");
        case "Hungary":
            return("OliveDrab");
        case "Austria":
            return("Crimson");
        case "Slovakia":
            return("Black");
        case "Czechia":
            return("GoldenRod");
        case "Netherlands":
            return("Orange");
        case "United Kingdom":
            return("FireBrick");
        case "Ireland":
            return("Green");
        case "Switzerland":
            return("Gray");

        // Middle East
        case "Turkey":
            return("IndianRed")
        case "Israel":
            return("RoyalBlue")
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

// Format visit and transit dates in tooltips
function datesTooltip(start, end){
    if(start.date.getTime() === end.date.getTime()){
        return start.date.toDateString();
    } else {
        return `${start.date.toDateString()} - ${end.date.toDateString()}`
    }
}

// Plot transits
let transitLines = transits.map((trs) => {

    // Line
    let trsLine = L.polyline([trs.start.location.latLng, trs.end.location.latLng], 
        styleTransit(trs));
    trsLine.addTo(map);

    // Tooltip
    let toolTip = L.tooltip()
        .setLatLng(trsLine.getCenter())
        .setContent(`
            <b> ${datesTooltip(trs.start, trs.end)} </b> <br/>
            ${trs.start.location.name} &rarr; ${trs.end.location.name}<br/>
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

    function circleRadius(loc){
        const c = 20000;
        const nights = loc.getNights();
        const theta = loc.latLng.lat * Math.PI/180;
        const distortion = (1/Math.cos(theta))**2; // Mercator distortion = sec^2(lat) -- https://www.marksmath.org/classes/common/MapProjection.pdf

        return c * Math.sqrt(nights < 36 ? nights/distortion : 36/distortion)
    }

    // Circle
    let locCircle = L.circle([loc.latLng.lat, loc.latLng.lng], {
        stroke: true,
        weight: 1,
        color: countryColor(loc.country),
        fillColor: countryColor(loc.country),
        fillOpacity: .8,
        radius: circleRadius(loc),
    })
    locCircle.addTo(map);

    // Tooltip
    let toolTip = L.tooltip()
        .setLatLng(loc.latLng)
        .setContent(`
            <b>${loc.name} - ${loc.country}</b> <br/>
            Nights stayed: ${loc.getNights()} <br/>
            Dates visited: ${loc.visits.map((vis) => `<br/> <li>${datesTooltip(vis.arrive, vis.depart)}`)}
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
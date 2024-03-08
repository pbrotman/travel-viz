// var map = L.map('map').setView([51.505, -0.09], 13);
var map = L.map('map');

map.fitBounds([
    [21.904, 96.059],
    [-9.819, 119.853]
]).zoomIn(1)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var circle = L.circle([3.1489, 101.6926], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
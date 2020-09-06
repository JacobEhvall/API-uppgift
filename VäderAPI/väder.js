
// let coordinate = navigator.geolocation.getCurrentPosition();
// let [latitude , longitude] = coordinate.coords;
// console.log(longitude,latitude);

const url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json'
const cityURL = 'https://geocode.xyz/58.5812,16.158/?geoit=json'

function getData() {
    fetch(url) 
    .then(response => response.json())
    .then(response => renderWeatherTable(response))
}
function getCity() {
    fetch(cityURL) 
    .then(response => response.json())
    .then(response => renderCity(response))
}

function renderWeatherTable(response){
    console.log(response);
    let paragraphElement = document.getElementById("timeParagraph");
    paragraphElement.innerHTML = response.approvedTime;

    let parameters = response.timeSeries[0].parameters;

    let temperature = parameters.find(p => p.name === 't');
    console.log(temperature);

    let tempParagraph = document.getElementById("tempParagraph");
    tempParagraph.innerHTML = temperature.values[0];

    let coordinates = document.getElementById("coordinate");
    coordinates.innerHTML = response.geometry.coordinates;
}

function renderCity(response){
    console.log(response);
    let city = document.getElementById("city");
    city.innerHTML = response.city;
}

getData();
getCity();
// pseudo
// subtract 25.71 from all nth-children
// if rotateY is 0, then rotateY next is 334.24

const carousel = document.querySelector('#carousel');
const rotate = document.querySelector('.rotate');
const face = document.querySelector('.face');
let faceNumber = 1;
const submit = document.querySelector('#cityName');

// get city name from input
// cityName.addEventListener('')

// rotate carousel event
carousel.addEventListener('click', function() {
  let angle = -25.71 * faceNumber;
  carousel.style.transform  = 'rotateY(' + angle + 'deg)';
  faceNumber ++;
});


// let temperatureValue = document.querySelector("temperature-value");
let faces = document.querySelector('#carousel').children;

// on window load
window.addEventListener("load", () => {
  let lat;
  let long;
  let forecast;
  // test for location permission in browser
  if (navigator.geolocation) {
    // then get current location from browser
    navigator.geolocation.getCurrentPosition(position => {
    console.log(position); //check
    lat = position.coords.latitude;
    long = position.coords.longitude;
    // use the lat and long in the api call to the National Weather Service
    const api = `https://api.weather.gov/points/${lat},${long}`;
    // query NWS for lat long forecast link, convert, log
    fetchJson(api)
    .then(getLocationData)
      // get the forecast data and display that shit
    .then(getForecast);
  }); // end navigator position function
  } // end if
}); // end listener


// ---------- FUNCTIONS ---------- //

// basic fetch function
async function fetchJson(url) {
    return await fetch(url)
        .then(response => {
          return response.json()
        });
}

// get location from browser and display in html
async function getLocationData(data) {
  console.log(data);
  locationJson = data;
  const locationData = data.properties.relativeLocation.properties;
  let cityText = locationData.city;
  let stateText = locationData.state;
  let location = cityText + ', ' + stateText;
  faces[1].innerText = location;
  forecast = data.properties.forecast; // new url for next fetch
  return forecast;
}

// use forecast url to retrieve weather data and display in html
async function getForecast(url) {
  fetchJson(url)
  .then(data => {
    console.log(data); // check data if needed
    // NWS returns an array of 1 week 12-hour weather forecasts, 14 forecasts in total
    getTemp(data);
  });
};

// gets the actual data and fills the html
async function getTemp(data) {
  for (let count = 0; count < 15; count++) {
    let currentTemp = data.properties.periods[count].temperature;
    let currentTempUnit = data.properties.periods[count].temperatureUnit;
    let currentTimeDescription = data.properties.periods[count].name;
    let currentDate = data.properties.periods[count].endTime.substring(5,10);
    let currentForecast = data.properties.periods[count].detailedForecast;
    // console.log(currentTemp);
    faces[count].innerHTML = '<p>'+ currentDate + '</p><p>' + currentTimeDescription + '</p><p>' + currentTemp + ' ' + currentTempUnit + '</p><p id="forecast">' + currentForecast + '</p>'; // add temp to html
  }
}

// async function postTemp(currentTemp) {
//   temperatureValue.innerText = currentTemp;
// }

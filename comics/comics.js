const urlBase = 'https://gateway.marvel.com:443/v1/public/comics?dateRange=';
const publicKey = '&ts=1&apikey=dae4c1317b848eda146eb22581408a90&hash=8dd4442844cb9b218c781096e6511f78';
const button = document.querySelector('#button');
const input = document.querySelector('#date');

button.addEventListener('click', function() {
  // make the url
    let date = input.value;
    let yearAndMonth = date.substring(0,7);
    let year = date.substring(0,4);
    let month = date.substring(5,7);
    let numberOfDays = daysInMonth(month,year);
    let dateRange = yearAndMonth + '-01,' + yearAndMonth + '-' + numberOfDays;
    let finalUrl = urlBase + dateRange + publicKey;
    console.log(finalUrl);
    // get the data
    fetchJson(finalUrl);

    // https://gateway.marvel.com:443/v1/public/comics?dateRange=2013-01-03%2C%202013-01-03&apikey=dae4c1317b848eda146eb22581408a90
  // fetchJson(url);
})

//basic fetch function called in event listener on search button
async function fetchJson(url) {
    return await fetch(url)
        .then(data => data.json())
        .then(console.log(data))
}



// get number of days in month for range search -  from https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
// // July
// daysInMonth(7,2009); // 31
// // February
// daysInMonth(2,2009); // 28
// daysInMonth(2,2008); // 29

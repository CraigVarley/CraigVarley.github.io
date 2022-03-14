// url vars
const urlBase = 'https://gateway.marvel.com:443/v1/public/comics?dateRange=';
const publicKey = 'dae4c1317b848eda146eb22581408a90';
const privateKey = '8d39bee708b40dac6f4b2b33a19a6bbb3f111e3c';
var timestamp = new Date().getTime();
const hashString = timestamp + privateKey + publicKey;
var md5 = CryptoJS.MD5(hashString).toString(); // see cryptojs script adsed in html
var urlEnd = '&ts=' + timestamp + '&apikey=' + publicKey + '&hash=' + md5;
// DOm vars
const button = document.querySelector('#button');
const input = document.querySelector('#date');
const comic = document.querySelector("#comic");

button.addEventListener('click', function() {
  // make the url
    let date = input.value;
    let yearAndMonth = date.substring(0,7);
    let year = date.substring(0,4);
    let month = date.substring(5,7);
    // see func below, this gets number of days in month
    let numberOfDays = daysInMonth(month,year);
    let dateRange = yearAndMonth + '-01,' + yearAndMonth + '-' + numberOfDays;
    let finalUrl = urlBase + dateRange + urlEnd;
    console.log(finalUrl);
    // get the data
    fetchJson(finalUrl)
      .then(getComicCoverUrl)
      .then(showComicCover)

    // https://gateway.marvel.com:443/v1/public/comics?dateRange=2013-01-03%2C%202013-01-03&apikey=dae4c1317b848eda146eb22581408a90
  // fetchJson(url);
})

//basic fetch function called in event listener on search button
async function fetchJson(url) {
    return await fetch(url)
      .then(data => data.json())
}

// gets the jpg url from the json and return
function getComicCoverUrl(data) {
  // gets length of array then makes random number for cover
  let marvelJson = data;
  let comicCoverArray = marvelJson.data.results;
  let comicCoverArrayLength = comicCoverArray.length;
  // console.log('array length =' + comicCoverArrayLength);
  let comicRandomItem = getRandomInt(comicCoverArrayLength);
  let comicCoverPath = marvelJson.data.results[comicRandomItem].thumbnail.path;
  let comicCoverUrl = comicCoverPath + '.jpg';
  return comicCoverUrl;
}

// adds html to 
function showComicCover(image) {
  var cover = image;
  console.log('cover: ' + cover);
  comic.innerHTML = '<img id="comic-cover" src=' + cover + '></img>';
}

// get number of days in month for range search -  from https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
// Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}
// example: July
// daysInMonth(7,2009); // 31

//get random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

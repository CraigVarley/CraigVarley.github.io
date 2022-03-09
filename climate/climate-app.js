const click = document.querySelector('#click');

main.addEventListener('click', function() {
  fetch('https://www.ncdc.noaa.gov/cdo-web/api/v2/locationcategoryid=CITY:weaverville', {
    headers:{'token':'emrfzZqRZkaJvDVKrvdBbXVnAYlkOZuw'}
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));

});

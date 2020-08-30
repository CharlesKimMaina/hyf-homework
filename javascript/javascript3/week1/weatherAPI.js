document.getElementById("getWeather").addEventListener("click", getWeather);

function getWeather() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=83213d88197c73f0c991024226083a52"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

//the function above outputs the current London weather

document
  .getElementById("getCopenhagenWeather")
  .addEventListener("click", getCopenhagenWeather);
function getCopenhagenWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=83213d88197c73f0c991024226083a52"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

//the function outputs the current Copenhagen weather.

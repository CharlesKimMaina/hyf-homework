const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const temperature = document.querySelector(".temperature");
const windSpeed = document.querySelector(".windSpeed");
const cloudyStatus = document.querySelector(".cloudyStatus");
const sunrise = document.querySelector(".sunrise");

button.addEventListener("click", function () {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&APPID=83213d88197c73f0c991024226083a52"
  )
    .then((response) => response.json())
    .then((data) => {
      const nameValue = data.name;
      const temperatureValue = data.main.temp;
      const windSpeedValue = data["wind"]["speed"];
      const cloudyStatusValue = data["weather"][0]["description"];
      const sunriseValue = data["sys"][2] || [3];

      name.innerHTML = nameValue;
      temperature.innerHTML = temperatureValue;
      windSpeed.innerHTML = windSpeedValue;
      cloudyStatus.innerHTML = cloudyStatusValue;
      sunrise.innerHTML = sunriseValue;
    })

    .catch((err) => alert("You have typed wrong city name"));
});

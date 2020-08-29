const logLocation = document.getElementById("btn6");
logLocation.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  });
});
console.log(logLocation);

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.7187072, lng: 12.4256256 },
    zoom: 8,
  });
}

console.log(map);

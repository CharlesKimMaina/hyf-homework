const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelPeriod(travelInformation) {
  return travelInformation.destinationDistance / travelInformation.speed;
}

function caltravelTime() {
  time = travelInformation.destinationDistance / travelInformation.speed;
  let rhours = Math.floor(time) * 60;
  minutes = (time % 1) * 100;
  rminutes = Math.floor(minutes);
  return rhours + rminutes;
}

function timeConvert(caltravelTime) {
  let num = caltravelTime;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + " hours and " + rminutes + " minutes";
}

const travelTime = timeConvert(544);
console.log(travelTime); // 4 hours and 42 minutes

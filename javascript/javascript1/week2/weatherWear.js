/*The function whatToWear has only 1 parameter
       which is temperature. If the temperature is below 
       6 degrees celcius, the function calls you to wear a 
       winter bjacket. If the temperature is between 6 to 15 
       degrees celicius, the function tells you to a normal 
       jacket. If the temperature is over 15 degrees celcius,
      the function tells you to wear t-shirt and shorts*/

function whatToWear(temp) {
  if (temp <= 0) {
    console.log("It's freezing cold, wear winter jacket");
  } else if (temp < 14) {
    console.log("Its cold; wear a normal jacket");
  } else {
    console.log("Wear shorts and T-shirt, the weather is good");
  }
}
whatToWear(-5);
whatToWear(8);
whatToWear(18);
whatToWear(28);

//HouseyPrice (A House price estimator)

function costOfHouse() {
  const houseWide = prompt("What is the width of your house?");
  const houseDeep = prompt("What is the depth of your house?");
  const houseHigh = prompt("What is the height of your house?");
  const gardenSizeInM2 = prompt("What is your garden size?");
  const volumeInMeters = houseWide * houseDeep * houseHigh;
  const costOfHouse = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  alert(costOfHouse);
}
costOfHouse();

/* The formula above prompts users to supply their housewidth, housedepth, househeight and garden size, it then
automatically calculates the cost of their house. After running the formular on browser; Peter is overpaying. The real value of his house is 2,030,000and
Julie is underpaying; the real cost of her house is 1,121,000 */

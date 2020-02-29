//Age-fying; a future age calculator
let yearOfBirth = 1989;
let YearFuture = 2027;
let age = YearFuture - yearOfBirth;
console.log("You are " + age + " years old ");

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2019;
let dogYearFuture = 2027;
let dogAge = dogYearFuture - dogYearOfBirth;
let dogInHumanYears = dogAge * 7;

let shouldShowResultsInDogYears = console.log(
  "Your dog will be " + dogAge + " human years old in " + dogYearFuture
);
console.log(
  "Your dog will be " + dogInHumanYears + " dog years old in " + dogYearFuture
);

//HouseyPrice (A House price estimator)

/* The formula below prompts users to supply their hosusewidth, housedepth, househeigh and garden size, it then
automatically calculates the cost of their house. After running the formular on browser; Peter is overpaying. The real value of his house is 2,030,000and
Julie is underpaying; the real cost of her house is 1,121,000 */

function costOfHouse() {
  let houseWide = prompt("What is the width of your house?");
  let houseDeep = prompt("What is the depth of your house?");
  let houseHigh = prompt("What is the height of your house?");
  let gardenSizeInM2 = prompt("What is your garden size?");
  let volumeInMeters = houseWide * houseDeep * houseHigh;
  let costOfHouse = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  alert(costOfHouse);
}
costOfHouse();

//Ez Namey StartUp generator.

let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Tropez",
  "Checkpoint",
  "Charlies",
  "Comphoo",
  "Shine",
  "Rise",
  "Reminesce"
];
let secondWords = [
  "archers",
  "",
  "Network",
  "Sons",
  "Brothers",
  "Gicks",
  "parlour",
  "success",
  "center",
  "quest"
];

const randomNumber = Math.floor(Math.random() * 10) + 0;
let companyFirstWorld = firstWords[randomNumber];
let companySecondWorld = secondWords[randomNumber];

let startupName = companyFirstWorld + " " + companySecondWorld;
let characters = startupName.length;
console.log(
  "The startup name: " +
    '"' +
    startupName +
    '"' +
    " contains " +
    characters +
    " characters"
);

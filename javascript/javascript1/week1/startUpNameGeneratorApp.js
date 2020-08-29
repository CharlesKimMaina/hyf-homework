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
  "Reminesce",
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
  "quest",
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

console.log(3);

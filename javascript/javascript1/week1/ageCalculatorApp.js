//Age-fying; a future age calculator
const yearOfBirth = 1989;
const YearFuture = 2027;
const age = YearFuture - yearOfBirth;
console.log("You are " + age + " years old ");

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2019;
const dogYearFuture = 2027;
const dogAge = dogYearFuture - dogYearOfBirth;
const dogInHumanYears = dogAge * 7;

const shouldShowResultsInDogYears = console.log(
  "Your dog will be " + dogAge + " human years old in " + dogYearFuture
);
console.log(
  "Your dog will be " + dogInHumanYears + " dog years old in " + dogYearFuture
);

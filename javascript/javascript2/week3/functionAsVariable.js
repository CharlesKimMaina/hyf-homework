//calling functions from an array of function
const arrayFunctions = [
  //array consisting of  functions declaration
  function funcOne() {
    console.log("This is function by declaration one");
  },
  function funcTwo() {
    console.log("This is  function declaration two");
  },
  function funcThree() {
    console.log("This is  function by declaration three");
  },
];

for (let i = 0; i < arrayFunctions.length; i++) {
  //applyed for loop to call each function
  arrayFunctions[i]();
}

//array consisting of function expression doing simple maths
const arrayOfFunctions = [
  (functionOne = function () {
    const sum = 18 + 26;
    console.log(sum);
  }),
  (functionTwo = function () {
    const multiplication = 7 * 36;
    console.log(multiplication);
  }),
  (functionThree = function () {
    const division = 1956 / 4;
    console.log(division);
  }),
];

//array consisting of function expressions
arrayOfFunctions.forEach((fun) => console.log(fun));

//To output the simple arithmetics products results done by the 3 functions.
arrayOfFunctions.forEach((fun) => fun());

//Create an object of the function with functionName as the key and function syntax body as is value.
const objectFunctions = {
  firstFunction: (firstFunc = function () {
    console.log("This is object function one");
  }),
  secondFunction: (secondFunc = function () {
    console.log("This is object function two");
  }),
  thirdFunction: (thirdFunc = function () {
    console.log("This is object function three");
  }),
};
//calling each function
objectFunctions.firstFunction();
objectFunctions.secondFunction();
objectFunctions.thirdFunction();

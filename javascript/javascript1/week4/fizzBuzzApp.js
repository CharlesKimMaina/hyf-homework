//when you use return then you can omit else
function gimmeFizzBuzzNumber(number, fizzNumber, buzzNumber) {
  //const fizzNumber = 3;
  //const buzzNumber = 5;
  if (number % fizzNumber === 0 && number % buzzNumber === 0) {
    return "FizzBuzz";
  }
  if (number % fizzNumber === 0) {
    return "Fizz";
  }
  if (number % buzzNumber === 0) {
    return "Buzz";
  }
  return number;
}

let arrayResult = [];
for (let i = 1; i <= 100; i++) {
  const result = gimmeFizzBuzzNumber(i, 15, 18);
  arrayResult.push(result);
}
console.log(arrayResult);

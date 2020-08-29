function longestPalindrome(str) {
  const string = str.toLowerCase();
  if (str.length < 5) {
    return null;
  }

  let palindrome = "";

  for (let i = 0; i < string.length; i++) {
    for (let z = 1; z <= string.length - i; z++) {
      if (string.substr(i, z) === stringReverser(string, i, z)) {
        if (z > palindrome.length) {
          palindrome = string.substr(i, z);
        }
      }
    }
  }

  if (!palindrome) {
    return null;
  }

  return palindrome;
}
function stringReverser(stringToReverse, start, length) {
  const reversed = stringToReverse
    .substr(start, length)
    .split("")
    .reverse()
    .join("");
  return reversed;
}

let resultP = longestPalindrome("madaadam");
console.log(resultP);

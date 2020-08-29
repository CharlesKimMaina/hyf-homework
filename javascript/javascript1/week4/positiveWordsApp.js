const allowedPositiveWords = [
  "fantastic",
  "jovial",
  "amazing",
  "awesome",
  "merry",
];
const allowedNegativeWords = [
  "dismay",
  "sorrow",
  "depressed",
  "dejected",
  "unhappy",
  "disappoint",
];

function getSentimentScore(incomingString) {
  let result = {
    score: 0,
    positiveWords: [],
    negativeWords: [],
  };
  const wordsInString = incomingString.split(" ");
  console.log("wordsInString = ", wordsInString);
  for (let i = 0; i < wordsInString.length; i++) {
    const myWord = wordsInString[i];
    if (allowedPositiveWords.includes(myWord)) {
      result.score++;
      result.positiveWords.push(myWord);
    } else if (allowedNegativeWords.includes(myWord)) {
      result.score--;
      result.negativeWords.push(myWord);
    } else {
      console.log("nothing happend");
    }
  }
  return result;
}

const sentimentScoreObject = getSentimentScore(
  "I am a angry super awesome happy"
);
console.log(sentimentScoreObject);

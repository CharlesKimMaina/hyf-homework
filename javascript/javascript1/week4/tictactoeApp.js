//Tic Tac Toe

function getRenderedGame(position) {
  const renderedGame = [];
  for (let i = 0; i < position.length; i++) {
    const star = "*" + position[i].join("*") + "*"; // applying join method
    renderedGame.push(star);
  }
  return "*******\n" + renderedGame.join("\n") + "\n*******";
}
// console with example
const position = [
  ["o", " ", "x"],
  ["o", " ", "x"],
  [" ", " ", "x"],
];
console.log(getRenderedGame(position));

//Determining the winner
function getGameinfo(position) {
  const gameInfo = {};

  function getGameResult(position, player) {
    if (
      position[0][0] === player &&
      position[1][0] === player &&
      position[2][0] === player
    ) {
      return true;
    } else if (
      position[0][1] === player &&
      position[1][1] === player &&
      position[2][1] === player
    ) {
      return true;
    } else if (
      position[0][2] === player &&
      position[1][2] === player &&
      position[2][2] === player
    ) {
      return true;
    } else if (
      position[0][0] === player &&
      position[1][1] === player &&
      position[2][2] === player
    ) {
      return true;
    } else if (
      position[0][0] === player &&
      position[0][1] === player &&
      position[0][2] === player
    ) {
      return true;
    } else if (
      position[1][0] === player &&
      position[1][1] === player &&
      position[1][2] === player
    ) {
      return true;
    } else if (
      position[2][0] === player &&
      position[2][1] === player &&
      position[2][2] === player
    ) {
      return true;
    } else {
      return false;
    }
  }

  if (getGameResult(position, "x")) {
    gameInfo.winner = "x";
    gameInfo.loser = "o";

    gameInfo.hasEnded = true;
    gameInfo.nextPlayer = false;
  } else if (getGameResult(position, "o")) {
    gameInfo.winner = "o";
    gameInfo.loser = "x";

    gameInfo.hasEnded = true;
    gameInfo.nextPlayer = false;
  } else {
    gameInfo.winner = undefined;
    gameInfo.loser = undefined;

    gameInfo.hasEnded = false;
    gameInfo.nextPlayer = "x";
  }

  return gameInfo;
}

console.log(getGameinfo(position));

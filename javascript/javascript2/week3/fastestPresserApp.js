const LJackpot = document.getElementById("plyL");
const SJackpot = document.getElementById("plyS");
const btn8 = document.getElementById("btn8");
const gameTime = document.getElementById("gameTime");
const winner = document.getElementById("winner");
const medalPrize = document.querySelector("p");
const reset = document.getElementById("reset");

let trophy = true;
let countL = 0;
let countS = 0;

let keypress = (e) => {
  if (trophy) {
    if (event.target.id == "btn8") {
      if (e.code === "KeyL") {
        countL++;
        LJackpot.innerHTML = countL;
      }
      if (e.code === "KeyS") {
        countS++;
        SJackpot.innerHTML = countS;
      }
    }
  } else {
    if (countL > countS) {
      winner.innerHTML = `Player L  wins by:${countL - countS} points`;
    } else if (countL === countS) {
      winner.innerHTML = "The game is draw.";
    } else {
      winner.innerHTML = `Player S wins by ${countS - countL} points`;
    }
  }
};

//Event Function

const clickEventFunction = () => {
  const gameShot = gameTime.value * 1000;

  setTimeout(() => {
    //time out  function

    trophy = false;
  }, gameShot);
};

btn8.addEventListener("click", clickEventFunction);

reset.addEventListener("click", () => {
  // reset the game.
  console.log(reset);
});

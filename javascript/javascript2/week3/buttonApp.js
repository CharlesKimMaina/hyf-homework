function myFunction() {
  setTimeout(() => {
    console.log("Callback after 2.5 second");
    // document.querySelector("body").innerHTML = "Script loaded";
  }, 2500);
}

const buttonCountUp = function (event) {
  console.log(buttonCountUp);
};

const buttonCountDown = function (event) {
  console.log(buttonCountDown);
};

document.getElementById("btn1").addEventListener("click", buttonCountUp);
document.getElementById("btn2").addEventListener("click", buttonCountDown);
document.getElementById("btn3").addEventListener("click", myFunction);
console.log("btn1", "btn2", "btn3");

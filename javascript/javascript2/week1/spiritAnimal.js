const nameInput = document.getElementById("nameInput");
const nameId = document.getElementById("nameId");
const body = document.querySelector("body");
const randomNames = ["jumbo", "horse", "lion", "rabbit"];

nameId.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * randomNames.length);
  let randomName = randomNames[randomIndex];
  let h1 = document.createElement("h1");
  h1.innerText = `${nameInput.value} - ${randomName}`;
  body.appendChild(h1);
  nameInput.value = "";
});

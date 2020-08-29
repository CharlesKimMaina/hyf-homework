const favouriteDishes = [
  "bread",
  "barflychickie",
  "pizza",
  "fastpokies",
  "veggies",
  "rostiebeef",
  "lasagne",
];
const body = document.querySelector("body");
console.log(favouriteDishes);
const ul = document.createElement("ul");
console.log(ul);
body.appendChild(ul);

for (let i = 0; i < favouriteDishes.length; i++) {
  const liTag = document.createElement("li");
  liTag.innerHTML = favouriteDishes[i];
  ul.appendChild(liTag);
}

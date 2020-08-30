const input = document.getElementById("input-textbox");
const button = document.getElementById("btn");
const gifTagUl = document.getElementById("gifImage");
const inputNumber = document.getElementById("input-number");

function displayGif() {
  if (input.value === "") {
    alert("Please enter a real word");
    return;
  }
  if (input.value || inputNumber.value) {
    fetchGif(input.value);
  }
}
button.addEventListener("click", displayGif);
const fetchGif = (searchWord) => {
  const url = new URL("https://api.giphy.com/v1/gifs/search");
  let params;
  if (inputNumber.value) {
    params = {
      q: searchWord,
      api_key: "KxWzTYm52uDfZC9cZ8OIoBVk4NI7jubT",
      limit: inputNumber.value,
    };
  } else {
    params = {
      q: searchWord,
      api_key: "KxWzTYm52uDfZC9cZ8OIoBVk4NI7jubT",
    };
  }

  url.search = new URLSearchParams(params).toString();
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      gifTagUl.innerHTML = "";
      result.data.forEach((gif) => {
        let imgTag = document.createElement("img");
        imgTag.setAttribute("src", gif.images.original.url);
        const li = document.createElement("li");
        li.appendChild(imgTag);
        gifTagUl.appendChild(li);
      });
    });
};

const express = require("express");
const app = express();

app.get("/numbers/add", (request, response) => {
  const first = parseInt(request.query.first);
  const second = parseInt(request.query.second);
  let sum = parseInt(first + second);
  if (!isNaN(first) && first > 0 && !isNaN(second) && second > 0) {
    let sum = first + second;
    response.send(`The result: ${sum}`);
  } else {
    response.send("The values you added should be more than 0");
  }
});

app.get("/numbers/multiply", (request, response) => {
  const first = parseInt(request.query.first);
  const second = parseInt(request.query.second);
  let product = parseInt(first * second);
  if (!isNaN(first) && first > 0 && !isNaN(second) && second > 0) {
    let product = first * second;
    response.send(`The result: ${product}`);
  } else {
    response.send("The values you multiplied should have a product larger than 0");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listerning on port ${port}`);
});

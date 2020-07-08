const express = require("express");
const app = express();

app.get("/numbers/add", (req, res) => {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  let sum = parseInt(first + second);
  if (!isNaN(first) && first > 0 && !isNaN(second) && second > 0) {
    let sum = first + second;
    res.send(`The result: ${sum}`);
  } else {
    res.send("The values you added should be more than 0");
  }
});

app.get("/numbers/multiply", (req, res) => {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  let product = parseInt(first * second);
  if (!isNaN(first) && first > 0 && !isNaN(second) && second > 0) {
    let product = first * second;
    res.send(`The result: ${product}`);
  } else {
    res.send("The values you multiplied should have a product larger than 0");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listerning on port ${port}`);
});

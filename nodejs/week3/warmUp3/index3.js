const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Calculator using req.body

app.get("/calculator", (req, res) => {
  const method = req.body.method;
  const arrayOfNumbers = Object.values(req.query);
  const merged = [].concat.apply([], arrayOfNumbers);
  const numbersToCalculate = merged.map(Number);

  if (method === "add") {
    const sumOfNumbers = numbersToCalculate.reduce((total, num) => total + num);
    res.send(`Adition answer is ${sumOfNumbers}`);
  } else if (method === "subtract") {
    const subtractionOfNumbers = numbersToCalculate.reduce(
      (total, num) => total - num
    );
    res.send(`Substraction answer is ${subtractionOfNumbers}`);
  } else if (method === "multiply") {
    const productOfNumbers = numbersToCalculate.reduce(
      (total, num) => total * num
    );
    res.send(`Multiplication answer is ${productOfNumbers}`);
  } else if (method === "divide") {
    const divisionOfNumbers = numbersToCalculate.reduce(
      (total, num) => total / num
    );
    res.send(`Division answer is ${divisionOfNumbers}`);
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

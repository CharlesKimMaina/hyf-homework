const app = require("./app");
//const app = require("./app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Meal-Sharing App listening on port ${port}...`);
});

const express = require("express");
const router = express.Router();
const app = express();

const meals = require("./routes/meals");
const reservations = require("./routes/reservations");
const reviews = require("./routes/reviews.js");
const cheapMeals = require("./routes/cheap-meals.js");
const largeMeals = require("./routes/large-meals.js");
const randommeal = require("./routes/randommeal.js");
const randomReservation = require("./routes/randomReservation");

const mealswithID = require("./routes/mealswithID.js");
const reservationsWithID = require("./routes/reservationsWithID");
const reviewsWithID = require("./routes/reviewsWithID.js");
const mealPrice = require("./routes/mealPrice");
const mealsTitle = require("./routes/mealsTitle");
const mealsCreatedAfter = require("./routes/mealsCreatedAfter");
const mealsLimit = require("./routes/mealsLimit");

app.use("/meals", meals);
app.use("/reservations", reservations);
app.use("/reviews", reviews);
app.use("/cheap-meals", cheapMeals);
app.use("/large-meals", largeMeals);
app.use("/randommeal", randommeal);
app.use("/randomReservation", randomReservation);

app.use("/meals", mealswithID);
app.use("/reservationsid", reservationsWithID);
app.use("/reviewsid", reviewsWithID);
app.use("/meals/mealPrice", mealPrice);
app.use("/meals/title", mealsTitle);
app.use("/meals/createdAfter", mealsCreatedAfter);
app.use("/meals/limit", mealsLimit);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});

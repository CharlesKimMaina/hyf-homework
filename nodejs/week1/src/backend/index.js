const express = require("express");
const router = express.Router();
const app = express();

const meals = require("./routes/meals");
const reservations = require("./routes/reservations");
const reviews = require ("./routes/reviews.js");
const cheapMeals = require("./routes/cheap-meals.js");
const largeMeals = require("./routes/large-meals.js");
const randommeal = require("./routes/randommeal.js");
const randomReservation = require("./routes/randomReservation");


app.use("/meals", meals);
app.use("/reservations", reservations);
app.use("/reviews", reviews);
app.use("/cheap-meals", cheapMeals);
app.use("/large-meals", largeMeals);
app.use("/randommeal", randommeal);
app.use("/randomReservation", randomReservation);



const port = process.env.PORT || 3000;

app.listen (port, () =>{
console.log (`listening on port ${port}...`)
})
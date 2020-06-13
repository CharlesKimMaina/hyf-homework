const express = require("express");
const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");

const app = express();

app.get("/meals", (req, res)=>{
    res.json(meals);
});

app.get("/reservations", (req, res)=>{
    res.json(reservations);
});

app.get("/cheap-meals", (req, res)=>{
    cheapMeals = meals.filter((cheapmeal)=>{
        return cheapmeal.price < 65;
    });
    res.json(cheapMeals);
});

app.get("/large-meals", (req, res)=>{
    largeMeals = meals.filter((largermeal)=>{
        return largermeal.maxNumberOfGuests>7;
    });
    res.json(largeMeals)
});

app.get("/meals", (req, res)=>{
    const randommeal = meals[Math.floor(Math.random() * meals.length)];
    res.json(randommeal);
});

app.get("/reservations", (req, res)=>{
    const randomReservation = 
    reservations[Math.floor(Math.random() * reservations.length)];
    res.json(randomReservation);
});

app.get("/reviews", (req, res)=>{
    res.json(reviews);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
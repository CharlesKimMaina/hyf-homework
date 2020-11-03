const express = require("express");
const meals = require("./data/meals.json");
const reservations = require("./data/reservations.json");
const reviews = require("./data/reviews.json");

const app = express();

app.get("/", async (req, res) => {
    res.send("Meal Sharing Web App");
});

app.get("/meals", (req, res) =>{
    const mealWithReview = meals.map(meal => {
    meal.reviews = reviews.filter(review => review.mealId === meal.id);
    return meal;}       
)
res.send(mealWithReview);
}); 
    

app.get("/reservations", (req, res)=>{
    res.send(reservations);
});

app.get("/cheap-meals", (req, res)=>{
    cheapMeals = meals.filter((cheapmeal)=>{
        return cheapmeal.price < 80;
    });
    res.send(cheapMeals);
});

app.get("/large-meals", (req, res)=>{
    largeMeals = meals.filter((largermeal)=>{
        return largermeal.maxNumberOfGuests>8;
    });
    res.send(largeMeals)
});

app.get("/meal", (req, res)=>{
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    res.send(randomMeal);
});

app.get("/reservation", (req, res)=>{
    const randomReservation = 
    reservations[Math.floor(Math.random() * reservations.length)];
    res.send(randomReservation);
});

app.get("/reviews", (req, res)=>{
    res.send(reviews);
});

module.exports = app;

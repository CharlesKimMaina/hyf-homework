
const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json")

router.get("/", (req, res)=>{
    cheapMeals = meals.filter(cheapMeal => cheapMeal.price < 65)   
    res.json(cheapMeals)});


module.exports = router;



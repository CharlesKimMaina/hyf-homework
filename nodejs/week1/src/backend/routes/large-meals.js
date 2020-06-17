const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

router.get("/", (req, res)=>{
    largeMeals = meals.filter((largermeal)=>{
        return largermeal.maxNumberOfGuests > 7;
    });
    res.json(largeMeals)
});

module.exports = router;

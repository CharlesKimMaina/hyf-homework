const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

//Get all meals
router.get("/", (req, res)=>{
    res.json(meals);
});

    
module.exports = router;
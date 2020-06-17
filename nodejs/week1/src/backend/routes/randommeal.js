
const express = require("express");
const meal = require("../data/meals.json");
const router = express.Router();


router.get("/", (req, res)=>{
    const randommeal = meals[Math.floor(Math.random() * meals.length)];
    res.json(randommeal);
    });
    

module.exports = router;
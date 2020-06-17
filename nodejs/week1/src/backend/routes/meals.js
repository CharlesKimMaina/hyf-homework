const express = require("express");
const meals = require("../data/meals");
const router = express.Router();

router.get("/", (req, res)=>{
    res.json(meals);
});

module.exports = router;
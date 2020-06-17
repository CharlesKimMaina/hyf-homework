
const express = require("express");
const reviews = require("../data/reviews");
const router = express.Router();

router.get("/", (req, res)=>{
    res.json(reviews);
});

module.exports = router;
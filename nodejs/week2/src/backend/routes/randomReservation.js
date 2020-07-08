const express = require("express");
const randomReservation = require("../data/reservations.json");
const router = express.Router();


router.get("/", (req, res)=>{
    const randomReservation = 
    reservations[Math.floor(Math.random() * reservations.length)];
    res.json(randomReservation);
    });
    

module.exports = router;
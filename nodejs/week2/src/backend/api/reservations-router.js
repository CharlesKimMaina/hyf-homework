const express = require("express");
const reservations = require("../data/reservations");
const router = express.Router();


//Get all reservations
router.get("/", (req, res)=>{
    res.json(reservations);
});


//Respond with the json for the reservations with the corresponding id
router.get("/:id", (req, res) => {
    const reservationid = reservations.find(
      (r) => r.id === parseInt(req.params.id)
    );
    if (!reservationid)
      res.status(404).send("Oops no reservation that matches that Id");
    res.send(reservationid);
  });


// Get a Random Reservation
router.get("/", (req, res)=>{
    const randomReservation = 
    reservations[Math.floor(Math.random() * reservations.length)];
    res.json(randomReservation);
    });

module.exports = router;
const express = require("express");
const reservations = require("../data/reservations.json");
const router = express.Router();

//Respond with the json for the reservations with the corresponding id
router.get("/:id", (req, res) => {
  const reservationid = reservations.find(
    (r) => r.id === parseInt(req.params.id)
  );
  if (!reservationid)
    res.status(404).send("Oops no reservation that matches that Id");
  res.send(reservationid);
});

module.exports = router;

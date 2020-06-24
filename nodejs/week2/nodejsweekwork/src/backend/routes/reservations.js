const express = require("express");
const reservations = require("../data/reservations");
const router = express.Router();

router.get("/", (req, res)=>{
    res.json(reservations);
});

module.exports = router;
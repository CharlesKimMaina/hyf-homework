const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

// Respond with the json for all the meals.
// maxPrice	- Get meals that has a price smaller than maxPrice - /meals?maxPrice=90

router.get("/", (req, res) => {
  const maxPrice = parseFloat(req.query.maxPrice);
  const mealPrice = meals.filter((m) => {
    return m.price <= maxPrice;
  });
  res.json(mealPrice);
});

module.exports = router;

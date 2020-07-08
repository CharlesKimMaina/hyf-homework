const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

// Respond with the json for all the meals.
// limit - Only specific number of meals - /meals?limit=4

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  if (limit >= 0) {
    mealsLimit = meals.slice(0, limit);
  }
  res.send(mealsLimit);
});

module.exports = router;

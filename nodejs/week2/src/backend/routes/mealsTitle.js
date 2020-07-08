const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

// Respond with the json for all the meals.
// title - Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde - /meals?title="Indian platter"

router.get("/", (req, res) => {
  const title = req.query.title;
  if (title != undefined) {
    meals1 = meals.filter((m) => {
      return m.title.toLowerCase().includes(title.toLowerCase());
    });
    res.send(meals1);
  }
});

module.exports = router;

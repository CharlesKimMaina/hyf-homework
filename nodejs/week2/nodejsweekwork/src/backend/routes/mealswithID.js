const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

//Respond with the json for the meal with the corresponding id
router.get("/:id", (req, res) => {
  const mealId = meals.find((m) => m.id === parseInt(req.params.id));

  if (!mealId) {
    res.status(404).send("Oops no meal matches that Id");
  }
  res.send(mealId);
});

module.exports = router;

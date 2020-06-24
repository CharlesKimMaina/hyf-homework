const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();

// Respond with the json for all the meals.
// createdAfter	- Get meals that has been created after the date - /meals?createdAfter=2019-04-05

router.get("/", (req, res) => {
  const dateQuery = Date.parse(req.query.createdAfter);
  const mealsCreatedAfter = meals.filter(
    (meal) => Date.parse(meal.createdAt) > dateQuery
  );
  if (mealsCreatedAfter.length === 0) {
    return res
      .status(404)
      .send(`No meal that has been created after ${dateQuery}`);
  } else {
    return res.json(mealsCreatedAfter);
  }
});

module.exports = router;

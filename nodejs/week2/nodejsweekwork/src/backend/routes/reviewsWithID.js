const express = require("express");
const reviews = require("../data/reviews");
const router = express.Router();

router.get("/:id", (req, res) => {
  const reviewsid = reviews.find((r) => r.id === parseInt(req.params.id));
  if (!reviewsid) res.status(404).send("Oops no review that matches that Id");
  res.send(reviewsid);
});

module.exports = router;

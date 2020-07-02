const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { returning } = require("../database");

//get all reviews
router.get("/", async (request, response) => {
  try {
    // // knex syntax for selecting table records.
    const allReviews = await knex("reviews").select("*");
    response.json(allReviews);
  } catch (error) {
    throw error;
  }
});

//Adds a new review
router.post("/", async (req, res) => {
  try {
    const newReviews = await knex("reviews").insert(req.body);
    res.json(newReviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reviewsById = await knex("reviews").where(req.params);
    res.json(reviewsById);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedReviews = await knex("reviews")
      .where(req.params)
      .update(req.body);
    res.json(updatedReviews);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedReviews = await knex("reviews").where(req.params).del();
    res.json(deletedReviews);
  } catch (error) {
    throw error;
  }
});

module.exports = router;

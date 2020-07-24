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

router.get("/:id", async (req, res) => {
  try {
    const { id } = parseInt(req.params);
    const reviewById = await knex("reviews").where({ id });
    res.json(reviewById);
  } catch (error) {
    throw error;
  }
});

//Adds a new review
router.post("/", async (req, res) => {
  const { title, description, stars, meal_id, created_date } = req.body;
  const newReview = {
    title,
    description,
    stars,
    meal_id,
    created_date,
  };
  try {
    await knex("reviews").insert(newReview);
    res.send("New review added");
  } catch (error) {
    res.send("Error: " + error);
  }
});

//how to update reviews
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

//how to delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedReviews = await knex("reviews").where(req.params).del();
    res.json(deletedReviews);
  } catch (error) {
    throw error;
  }
});

module.exports = router;

const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/titles", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//Gets all meals
router.get("/", async (req, res) => {
  try {
    const allmeals = await knex("meals").select("*");
    res.json(allmeals);
  } catch (error) {
    throw error;
  }
});

//Gets meal by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const find = await knex("meals").where({ id });
    res.json(find);
  } catch (error) {
    throw error;
  }
});

//posts a new object to the meals table
router.post("/", async (req, res) => {
  const { name, phonenumber, email, title, price } = req.body;
  try {
    knex
      .insert(req.body)
      .into("meals")
      .then((data) => {
        res.send("successful update");
      });
  } catch (error) {
    error.send("Unable to save that entry into the database");
  }
});

//PUT meals
router.put("/:id", async (req, res) => {
  try {
    await knex("meals")
      .update(req.body)
      .where({ id: req.params.id })
      .then(() => {
        res.send("success");
      });
  } catch (error) {
    throw error;
  }
});

//delete
router.delete("/:id", async (req, res) => {
  const delMeal = knex("meals").where({ id: req.params.id }).del();
  res.send("deleted");
});

module.exports = router;

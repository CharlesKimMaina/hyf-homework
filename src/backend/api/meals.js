const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

//Get all meals
router.get("/", async (req, res) => {
  try {
    const mealslist = await knex("meals").select("*");
    res.send(mealslist);
  } catch (error) {
    throw error;
  }
});

router.get("/titles", async (request, response) => {
  try {
    // knex syntax for selecting table records.
    const titles = await knex("meals").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//GET api/meals/ query parameters

router.get("/", async function (req, res) {
  const {
    maxPrice,
    title,
    availableReservations,
    createdAfter,
    limit,
  } = req.query;
  const mealTitles = await knex.select("*").table("meals");

  if (Object.keys(req.query).length === 0) {
    res.send(mealTitles);
  }

  if (maxPrice) {
    try {
      const maxPriceMeals = await knex(meals)
        .select("*")
        .where("price", "<", maxPrice);
      console.log(maxPriceMeals);
      res.send(maxPriceMeals);
    } catch (error) {
      error;
    }
  } else if (title) {
    try {
      const titles = await knex(meals)
        .select("*")
        .where("title", "like", `%${title}%`);
      console.log(titles);
      res.send(titles);
    } catch (error) {
      error;
    }
  } else if (availableReservations === "true") {
    try {
      const availableReservationsMeal = await knex
        .select("*")
        .sum({
          sumTotal: "reservations.number_of_guests",
        })
        .table("meals")
        .join("reservations", {
          "meals.id": "reservations.meal_id",
        })
        .groupBy("meals.title")
        .having("sumTotal", ">", "Max_reservations");
      console.log(availableReservationsMeal);
      res.send(availableReservationsMeal);
    } catch (error) {
      error;
    }
  } else if (createdAfter) {
    try {
      const datecreated = await knex
        .select("*")
        .table("meals")
        .where("created_date", "<", createdAfter);
      console.log(datecreated);
      res.send(datecreated);
    } catch (error) {
      error;
    }
  } else if (limit) {
    try {
      const limitMeals = await knex.select("*").table("meals").limit(limit);
      console.log(limitMeals);
      res.send(limitMeals);
    } catch (error) {
      error;
    }
  }
});

//Adds a new meal
router.post("/", async (req, res) => {
  const meal = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    when: req.body.when,
    Max_reservation: req.body.Max_reservation,
    price: req.body.price,
    created_date: req.body.created_date,
  };
  await knex("meals").insert(req.body);
});

//Get meals with id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mealWithIDb = await knex("meals").where({ id });
    res.json(mealWithIDb);
  } catch (error) {
    throw error;
  }
});

//Updates the meal by id
router.put("/:id", async (req, res) => {
  try {
    const updatedMeal = await knex("meals").where(req.params).update(req.body);
    res.json(updatedMeal);
  } catch (error) {
    throw error;
  }
});

//Deletes the meal by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedMeal = await knex("meals").where(req.params).del();
    res.json(deletedMeal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;

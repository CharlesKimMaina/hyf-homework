const express = require("express");
const meals = require("../data/meals.json");
const router = express.Router();  
   

router.get("/", async (request, response) => {
  const maxPrice = request.query.maxPrice;
  const queryTitle = request.query.title;
  const dateQuery = request.query.createdAfter;
  const queryLimit = request.query.limit;

  if (maxPrice) {
    const parsedPrice = parseInt(maxPrice);
    if (!isNaN(parsedPrice)) {
      const cheaperMeal = meals.filter(
        (meal) => meal.price < maxPrice
      );
      if (cheaperMeal.length === 0) {
        return response.json(404).send("No meals that costs within that price range");
      } 
      return response.json(cheaperMeal);
    }  
  if (queryTitle) {
    const mealsWithCertainTitle = meals.filter((meal) =>
      meal.title.toLowerCase().includes(queryTitle.toLowerCase())
    );
    if (mealsWithCertainTitle.length === 0) {
      return response
        .status(404).send(`No meal matched with the word ${queryTitle}`);
    } 
    response.json(mealsWithCertainTitle);
  }
  if (dateQuery) {
    const mealsCreatedAfter = meals.filter(
      (meal) => Date.parse(meal.createdAt) > Date.parse(dateQuery)
    );
    if (mealsCreatedAfter.length === 0) {
      return response
        .status(404).send(`No meal that has been created after ${dateQuery}`);
    } 
    return response
                .status(200)
                .send(mealsCreatedAfter);
  }
  if (queryLimit) {
    const showMealsWithinLimit = meals.filter(
      (meal) => meal.id <= parseInt(queryLimit)
    );
    if (showMealsWithinLimit.length === 0) {
      return response.status(404).send(`Bad request, ${queryLimit} is not a number`);
    } 
    response
    .status(200)
    .send(showMealsWithLimit);
  }
  response.send(meals);
}
});      

  

  //Get a specific meal by its ID
router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id)
      const mealsid = meals.find((m) => m.id === parseInt(request.params.id));
  if (!mealsid) response.status(404).send("Oops no meal that matches that Id");
  response.send(mealsid);
});



/*//Get all meals
router.get("/", async (request, response)=>{
    console.log(meals);
    response.json(meals);
}
  });*/


/*router.get('/:mealPrice', async (request, response) => {
  const maxPrice = 90; 
  const mealPrice = parseInt(request.query.mealPrice);
  if (!isNaN(maxPrice)) {
    const mealPrice = meals.filter(meal => meal.price < maxPrice);  
    response.json(mealPrice);
  } else {
    response.status(400).send('Please write a number as maxPrice');
  }          
  });*/




  module.exports = router;

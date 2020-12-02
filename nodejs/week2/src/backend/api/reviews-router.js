
const express = require("express");
const reviews = require("../data/reviews");
const router = express.Router();



//Respond with the json for all reviews
router.get("/", (request, response)=>{
    response.json(reviews);
});


//Respond with the json for the review with the corresponding id
router.get("/:id", (request, response) => {
    const reviewsid = reviews.find((r) => r.id === parseInt(request.params.id));
    if (!reviewsid) response.status(404).send("Oops no review that matches that Id");
    response.send(reviewsid);
  });



module.exports = router;
window.handleReviewRequest = () => {
  document.body.innerHTML = `
  <header>Meal Sharing app
  <ul>
  <a href="/" data-navigo>Home</a>
   <a href="meals" data-navigo>Meals</a>
    <a href="meal/1" data-navigo>Reservation</a>
    <a href="about" data-navigo>About</a>
    <a href="reviews" data-navigo>Reviews</a>
    <footer>Copyright@2020</footer>
  </ul>
  </header>

    <h1>Please leave your review</h1>
    
  <form id="reviewForm">
    <input name="title" id="title" placeholder="title"></input>
    <input name="description" id="description" placeholder="description"></input>
    <input name="stars" id="stars" placeholder="stars"></input>
    <input name="meal_id" id="meal_id" placeholder="meal_id"></input>
    <input name="created_at" id="created_at" placeholder="created_at"></input>
    <button type="submit" onClick="makeNewReview()">Submit review</button>
  </form>
    `;
};

function makeNewReview() {
  console.log("here");
  const insertTitle = document.getElementById("title");
  const insertDescription = document.getElementById("description");
  const insertStars = document.getElementById("stars");
  const insertmeal_id = document.getElementById("meal_id");
  const insertCreatedAt = document.getElementById("created_at");

  let insertReviews = {
    title: insertTitle.value,
    description: insertDescription.value,
    stars: insertStars.value,
    meal_id: insertmeal_id.value,
    created_date: insertCreatedAt.value,
  };

  fetch("/api/reviews", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(insertReviews),
  })
    .then((resp) => {
      console.log(resp);
      alert("Your review is submited succesfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

/*window.handleMealRequest = (params, query) => {
  fetch(`/api/meals/${params.id}${query.availableReservations}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.length === 0) {
        fetch(`/api/meals/${params.id}`)
          .then((res) => res.json())
          .then(
            (res) =>
              (document.body.innerHTML = `
                      <header class="meal">
                          <h1>Meals Information</h1>
                          <div>
                              <a href="/" data-navigo>Home</a>
                              <a href="/meals" data-navigo>Meals</a> 
                          </div>
                      </header>
              
                      <main class="meal">
                          <h3>Meal name:   ${res[0].title}</h2>
                          <p>Description: ${res[0].description}</p>
                          <p>Price :${res[0].price}</p>
                          <footer class="meal">
                          <p>Telephone</p>
                          <p>Adress</p>
                      </footer>`)
          );
      } else {
        document.body.innerHTML = `
                  <header class="meal">
                      <h1>Meals Information</h1>
                      <div>
                          <a href="/" data-navigo>Home</a>
                          <a href="/meals" data-navigo>Meals</a> 
                      </div>
                  </header>
                  <main class="meal">
                      <h3>Meal name:   ${res[0].title}</h3>
                      <p>Description: ${res[0].description}</p>
                      <p>Price : ${res[0].price} kr</p>
                      <form class="reservation" id="form">
                      <h3>Reserve for this meal</h3>
                      <div class="reserveInput">
                          <input type="number" class="guests" id="guests" name="number_of_guests" placeholder="Number of guests">
                      </div>
                      <div class="reserveInput">
                          <input type="datetime" class="created_date" name="for_when" id="created_at" placeholder="Created date"/>
                      </div>
                      <div class="reserveInput">
                          <input type="text" class="name" id="name" name="name" placeholder="Name">
                      </div>
                      <div class="reserveInput">
                          <input type="email" class="email" name="email" id="email" placeholder="Email">
                      </div>
                      <div class="reserveInput">
                          <input type="text" class="phone" name="phone_number" id="phonenumber" placeholder="Phonenumber">
                      </div>
                  </form>
                  <div>
                      <button type="submit" class="bookButton" id="button" onClick="makeNewReservaton(${res[0].id})">Book seat</button>   
                  </div>
              </main>
              <footer class="meal">
                  <p>Telephone</p>
                  <p>Adress</p>
              </footer>`;
      }
    });
};*/

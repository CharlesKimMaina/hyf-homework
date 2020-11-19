const deleteMeal = (id) => {
  fetch(`/api/meals/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    });
};

window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <header>Meal Sharing app
  <ul>
  <a href="/" data-navigo>Home</a>
   <a href="meals" data-navigo>Meals</a>
    <a href="meal/1" data-navigo>Reservation</a>
    <a href="about" data-navigo>About</a>
    <footer>Copyright@2020</footer>
  </ul>
  </header>

    <h1>Meals</h1>`;

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then((response) => response.json())
    .then((meals) => {
      const ul = document.createElement("ul");
      meals.forEach((meal) => {
        const li = document.createElement("li");
        li.innerHTML = `${meal.title} DKK ${meal.price} <a href="meal/${meal.id}"> </a>
        <button> <a href="meal/${meal.id}"> Details for ${meal.title}</a></button>`;
        ul.appendChild(li);
      });
      document.body.appendChild(ul);
    });
};

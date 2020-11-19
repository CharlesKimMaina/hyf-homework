window.handleMealRequest = (params) => {
  fetch(`/api/meals/${params.id}`)
    .then((response) => response.json())
    .then((meal) => {
      document.body.innerHTML = `
     <h1>Meal with id ${params.id}</h1>
     <p><a href="/" data-navigo>Back<a/></p>

    <form  id="create-contact">
    <input type="text" id="name" placeholder="name"/>
    <input type="text" id="phonenumber" placeholder="phone..."/>
    <input type="text" id="email" placeholder="Email..." />
    <button>Book Seat</button>
    </form>;
     `;

      const customerName = document.querySelector("#name").value;
      const customerPhonenumber = document.querySelector("#phonenumber").value;
      const customerEmail = document.querySelector("#email").value;

      const data = {
        name: customerName,
        phonenumber: customerPhonenumber,
        email: customerEmail,
      };

      fetch("api/meals", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      router.updatePageLinks();
    });
};

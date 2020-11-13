window.handleHomeRequest = () => {
  document.body.innerHTML = `
  <header>Meal Sharing app
  <ul>
    <a href="/" data-navigo>Home</a>
    <a href="meals" data-navigo>Meals</a>
    <a href="meal/1" data-navigo>Reservation</a>
    <footer>Copyright@2020</footer>
  </ul>
  </header>
    ___________________________________________________________________________________________
    
    `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
};

window.handleHomeRequest = () => {
  document.body.innerHTML = `
  <header>
  <ul class="mealApp">
    <a href="/" data-navigo>Home</a>
    <a href="meals" data-navigo>Meals</a>
    <a href="meal/1" data-navigo>Reservation</a>
    <a href="review" data-navigo>Review</a>
    </ul>

    <div class="container">
      <div class="row">
        <h1>Welcome to CHARLIE'S RESTAURANT</h1>

        <p>We showcase our best meals offers for our larger Copenhagen customers. 
        Our services are very pocket friendly in terms of pricing, and we are within your reach, WELCOME!.</p>
        </header>
       
       
       
    <div class="mealsGallery">
<div class="galleries">
<h4>OUR MEALS</h4>
</div>
<div class="mealOffers">

<div class="mealRows">
  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal1"src = "https://i.imgur.com/FFsAHlO.jpeg" alt="beef stew"></a>  
    <a href="meals" data-navigo> <h4 class="mealTitle">beef stew</h4></a>
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal2"src = "https://i.imgur.com/A2suaKR.jpg" alt="barflychikie stew"></a>
  <a href="meals" data-navigo><h4 class="mealTitle">barflychikie stew</h4></a>    
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal3"src = "https://i.imgur.com/asdBEJV.jpg" alt="veggies"></a>    
  <a href="meals" data-navigo><h4 class="mealTitle">veggies</h4></a>
    <p>This is one of the meals in our menu</p>
  </div>
</div>
  <br>

  <div class="mealRows2">
  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal4"src = "https://i.imgur.com/jqFcPyp.jpg" alt="barflychikie"></a>   
  <a href="meals" data-navigo><h4 class="mealTitle">barflychikie</h4></a>
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal5"src = "https://i.imgur.com/OkaVFd3.jpeg" alt="fastpokies"></a>    
  <a href="meals" data-navigo><h4 class="mealTitle">fastpokies</h4></a>
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal6"src = "https://i.imgur.com/wJHeI7f.jpeg" alt="rostieporkies"></a>
  <a href="meals" data-navigo><h4 class="mealTitle">rostieporkies</h4></a>    
    <p>This is one of the meals in our menu</p>
  </div>
  </div>
  <br>


  <div class="mealRows3">
  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal7"src = "https://i.imgur.com/MwGBT7s.jpg" alt="fish lasagne"></a>
  <a href="meals" data-navigo><h4 class="mealTitle">fish lasagne</h4></a>  
  <p>This is one of the meals in our menu</p>
</div>

<div class="col-1">
<a href="meals" data-navigo><img class ="meal8"src = "https://i.imgur.com/0XYC9J4.jpeg" alt="fish fly"></a>
<a href="meals" data-navigo><h4 class="mealTitle">fish fly</h4></a>  
  <p>This is one of the meals in our menu</p>
</div>

<div class="col-1">
<a href="meals" data-navigo><img class ="meal9"src = "https://i.imgur.com/WlU3ug3.jpeg" alt="egg cookies"></a>
<a href="meals" data-navigo><h4 class="mealTitle">egg cookies</h4></a>  
  <p>This is one of the meals in our menu</p>
</div>
</div>
<br>

<div class="mealRows4">
<div class="col-1">
<a href="meals" data-navigo><img class ="meal1"src = "https://i.imgur.com/0gGt9HM.jpg" alt="potatoes mix"></a>
<a href="meals" data-navigo> <h4 class="mealTitle">potatoes mix</h4></a>   
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal2"src = "https://i.imgur.com/IpX4wCe.jpg" alt="danskmel"></a>
  <a href="meals" data-navigo><h4 class="mealTitle">danskmel</h4></a>    
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal3"src = "https://i.imgur.com/H1xXNCB.jpeg" alt="deer meat"></a> 
  <a href="meals" data-navigo><h4 class="mealTitle">deer meat</h4></a>     
    <p>This is one of the meals in our menu</p>
  </div>
</div>

<div class="mealRows5">
<div class="col-1">
<a href="meals" data-navigo><img class ="meal1"src = "https://i.imgur.com/UztvRoG.jpg" alt="rice curry"></a>
<a href="meals" data-navigo><h4 class="mealTitle">rice curry</h4></a>    
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal2"src = "https://i.imgur.com/c5EqfiI.jpg" alt="barflychikie stew"></a>
  <a href="meals" data-navigo><h4 class="mealTitle">barflychikie stew</h4></a>    
    <p>This is one of the meals in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal3"src = "https://i.imgur.com/MdBRpKO.jpg" alt="wines"></a> 
  <a href="meals" data-navigo><h4 class="mealTitle">wines</h4></a>    
    <p>These are some of the wines in our menu</p>
  </div>
</div>

<div class="mealRows6">
<div class="col-1">
<a href="meals" data-navigo><img class ="meal1"src = "https://i.imgur.com/xzGKqSW.jpg" alt="beers and booze"></a> 
<a href="meals" data-navigo><h4 class="mealTitle">beers and booze</h4></a>     
    <p>These are some of the beers in our menu</p>
  </div>

  <div class="col-1">
  <a href="meals" data-navigo><img class ="meal2"src = "https://i.imgur.com/O6YDzI3.jpeg" alt="whisky flavours"></a>
  <a href="meals" data-navigo><h4 class="mealTitle">whisky flavours</h4></a>
    
    <p>These are some of the whiskies in our menu</p>
  </div>
  </div>

  </div>
</div>

</div>
  
     
    <div class="findUs">
       <h2>Find Us Below</h2>
          <div><a class="about-link" href="https://github.com/CharlesKimMaina" target="_blank">Github</a></div>          
          <div><a class="about-link" href="https://www.linkedin.com/in/charles-kimani-maina-49913b59/" target="_blank">LinkedIn</a></div>
       </div>

       <div class="about-link go-project-link"><p><a href="/" target="_blank">Best meals offers in larger Copenhagen...</a></p></div>
       
    </div>
      
  </div>
        </div>
    </div>


    <footer>Copyright@2020</footer>
  
    ___________________________________________________________________________________________
    
    `;

  // if any links are added to the dom, use this function
  // make the router handle those links.
};

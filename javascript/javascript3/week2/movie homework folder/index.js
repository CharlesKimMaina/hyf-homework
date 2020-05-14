const badMoviesCatalogue = document.getElementById("badMovies");
const badMoviesPost2000Catalogue = document.getElementById("badMoviesYears");

const url = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"

const movies = fetch(url)
.then((response)=>response.json())
.then((movies)=>{
    const badMoviesTitle = movies 
.filter((movie)=>movie.rating <4)
.map((movie)=>`<li>${movie.title}</li>`);
badMoviesCatalogue.innerHTML = `Bad movies catalogue: ${badMoviesTitle.join("")}`;

const badMoviesPost2000Title = movies 
.filter((movie)=>movie.rating <4 && movie.year>=2000)
.map((movie)=>`<li>${movie.title}</li>`);
badMoviesPost2000Catalogue.innerHTML = `Bad movies post2000 catalogue: 
${badMoviesPost2000Title.join("")}`;

})

const badMoviesTally = async()=>{
    const response = await fetch (url);
    const movies = await response.json();
    const badMovies = movies.filter((movie)=>movie.rating<4);
    const badMoviesPost2000 = movies.filter((movie)=>movie.year>=2000);
    return {badMovies, badMoviesPost2000};

};

const badMoviesFunction = async () => {
    try {
      const { badMovies, badMoviesPost2000 } = await badMoviesTally();
      console.log(badMovies);
      console.log(badMoviesPost2000);
    } catch (err) {
      console.log(err);
    }
  };
  
  badMoviesFunction();
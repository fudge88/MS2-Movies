const movies = document.getElementById("movies");

//input box -whatever the user enters
const searchMovies = (search) => {

    //to use interpolation the back ticks are used, the search will now be reactive
fetch(`https://www.omdbapi.com/?s=${search}&apikey=b619899`)
  .then(response => response.json())
  .then((data) => {
      console.log(data);
      //iterating from this point down
    data.Search.forEach((result) => {
        //creating <li> for the html to display the info requested
      const movie = `<div class="card"> 
        <img src="${result.Poster}" alt="">
        <h3>${result.Title}</h3>
        <p>${result.Year}</p>
      </div>`;
      //put the info into the <ul> on index.html
      //beforeend- if the new results are to be placed at the top we would use afterbegin
      //movie is the list item that was created at line 10
      movies.insertAdjacentHTML("beforeend", movie);
    });
  });
};

//targeting the input text bar
const searchForm = document.getElementById("searchForm");
//listening for 'submit' to trigger an event  32-39
searchForm.addEventListener("submit", (event) => {
//preventing the form submit function from defaulting
event.preventDefault();
//targeting the input field
const inputText = document.getElementById("searchText");
//clears the previous search results 
movies.innerHTML = "";

//calling the function defined at line 4, and replacing with the new resaults
//line 39 starts process from line 4-22
searchMovies(inputText.value);
inputText.value = "";
});


//categories:

const order = document.getElementById("page2");

const orderMovies = (search) => {

fetch(`https://www.omdbapi.com/?s=${search}&apikey=b619899`)
  .then(response => response.json())
  .then((data) => {
      console.log(data);
    data.Search.forEach((result) => {
      const coll = `<div class="order-card" data-title=${result.Title} data-year=${result.Year}> 
        <img src="${result.Poster}" alt="">
        <h3>${result.Title}</h3>
        <p>${result.Year}</p>
      </div>`;
      order.insertAdjacentHTML("beforeend", coll);
    });
  });
};

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", (event) => {
event.preventDefault();
const orderText = document.getElementById("orderText");
order.innerHTML = "";

orderMovies(orderText.value);
orderText.value = "";
});

const nf = document.getElementById("newBtn");
const ao = document.getElementById("alphaBtn");

nf.addEventListener("click", (event)=> {
    console.log(event.currentTarget);
    Array.from(document.querySelectorAll(".order-card[data-year]"))
    .sort(({dataset:{year:a}}, {dataset:{year:b}}) => b.localeCompare(a))
    .forEach((item) =>
    item.parentNode.appendChild(item));
});
ao.addEventListener("click", (event)=> {
    console.log(event.currentTarget);
    Array.from(document.querySelectorAll(".order-card[data-title]"))
    .sort(({dataset:{title:a}}, {dataset:{title:b}}) => a.localeCompare(b))
    .forEach((item) =>
    item.parentNode.appendChild(item));
});
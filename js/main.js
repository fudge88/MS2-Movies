const movies = document.getElementById("movies");

//input box -whatever the user enters
const searchMovies = (search) => {

    //to use interpolation the back ticks are used, the search will now be reactive
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=b619899`)
        .then(response => response.json())
        .then((data) => {
        //iterating from this point down
        data.Search.forEach((result) => {
        //creating <li> for the html to display the info requested
             const movie = createMovieCard(result);
                //put the info into the <ul> on index.html
                //beforeend- if the new results are to be placed at the top we would use afterbegin
                 //movie is the list item that was created at line 10
         movies.insertAdjacentHTML("beforeend", movie);
        });
    });
};

function createMovieCard(result){
    let the_movie = `<div class="container card" data-title=${result.Title} data-year=${result.Year}> 
    <div class="imageBox">
                <img src="${result.Poster}" alt="">
                </div>
                <div class="movieDataBox"
                <h3>${result.Title}</h3>
                <p>${result.Year}</p>
                </div>
                </div>`;
    return the_movie;
        

}

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


//order function
//the buttons to sort the order of the films
//newest to old
const nuberOrder = document.getElementById("newBtn");
//alphabetical order a-b
const alphaOrder = document.getElementById("alphaBtn");

//click event added
numberOrder.addEventListener("click", (event)=> {
    //targeting the year parameter provided by the api's array
    Array.from(document.querySelectorAll(".card[data-year]"))
    //sorting data from newest to oldest 
    .sort(({dataset:{year:a}}, {dataset:{year:b}}) => b.localeCompare(a))
    .forEach((item) => item.parentNode.appendChild(item));
});
//click event added
alphaOrder.addEventListener("click", (event)=> {
    //targeting the title parameter provided by the api's array
    Array.from(document.querySelectorAll(".card[data-title]"))
    //sorting data in alphabetical order, a-b
    .sort(({dataset:{title:a}}, {dataset:{title:b}}) => a.localeCompare(b))
    .forEach((item) => item.parentNode.appendChild(item));
});
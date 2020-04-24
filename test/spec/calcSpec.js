function movieMuncher (){
    return "Movie muncher!";
}

describe ("Movie muncher", function (){
    it("says Boo", function(){
        expect (movieMuncher()).toEqual("Movie muncher!");
    });
});


describe ("createMovieCard", function (){
    it("creates a movie card", function (){
        var movie = {Poster: "rjfeirfieirj", Title: "Title", Year: 2020};
        var movieCard = 
`<div class="card" data-title=${result.Title} data-year=${result.Year}> 
    <div class="imageBox">
                <img src="${result.Poster}" alt="">
                </div>
                <div class="movieDataBox">
                <h3>${result.Title}</h3>
                <p>${result.Year}</p>
                </div>
                </div>`;
        expect (createMovieCard(movie)).toEqual(movieCard);
    });
});

function add(a, b){
    return a + b;
}

describe("add", function(){
    it("adds 2 variables", function(){
        expect(add(2, 8)).toEqual(10);
    });
});

describe("add", function(){
    it("adds 2 variables", function(){
        var a = 2;
        var b = 8;
        expect(add(a, b)).toEqual(10);
    });
});

describe("add", function(){
    it("adds 2 variables", function(){
        var a = 2;
       	var b = 8;
        var result = 10;
        expect(add(a, b)).toEqual(result);
    });
});
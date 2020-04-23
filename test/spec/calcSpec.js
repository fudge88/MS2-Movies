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
        let movie = {Poster: "rjfeirfieirj", Title: "Title", Year: 2020};
        var movieCard = 
        `<div class="card" data-title=Title data-year=2020> 
            <img src="rjfeirfieirj" alt="">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
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
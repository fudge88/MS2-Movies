function movieMuncher (){
    return "Movie muncher!";
}

describe ("Movie muncher", function (){
    it("says Boo", function(){
        expect (movieMuncher()).toEqual("Movie muncher!");
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
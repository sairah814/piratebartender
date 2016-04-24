$(document).ready(function () {
    /*
    Strong ingredients: "Glug of rum", "slug of whisky", "splash of gin"
    Salty ingredients: "Olive on a stick", "salt-dusted rim", "rasher of bacon"
    Bitter ingredients: "Shake of bitters", "splash of tonic", "twist of lemon peel"
    Sweet ingredients: "Sugar cube", "spoonful of honey", "splash of cola"
    Fruity ingredients: "Slice of orange", "dash of cassis", "cherry on top"
    */

    /*
    first randomly generate a number

    */

    function randomIndex(max, min) { //generates a random number between the range provided; will be used to randomly choose an ingredient from each of the pantry categories
        var index = Math.floor() * (max - min) + min;
        return index;
    }

    var Pantry = {
        strong: ["Glug of rum", "slug of whisky", "splash of gin"],
        salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
        bitter: ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
        sweet: ["Sugar cube", "spoonful of honey", "splash of cola"],
        fruity: ["Slice of orange", "dash of cassis", "cherry on top"]
    }

    var userAnswers = [];
    var pantrysize = Object.keys(Pantry).length;
    $("#submit").click(function () {

        for (i = 0; i < pantrysize; i++) {
            //if the answer to the question is yes then take that id and compare it to the items in the pantry.
            //when you find a match, randomly generate a number and select the pantry item corresponding to that

        }
    });
});

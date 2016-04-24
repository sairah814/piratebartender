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

    var randomIndex = function (max, min) { //generates a random number between the range provided; will be used to randomly choose an ingredient from each of the pantry categories
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }

    function testFunction(text) {
        var message = "This is the " + text;
        return message;
    }

    var Pantry = {
        strong: ["Glug of rum", "slug of whisky", "splash of gin"],
        salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
        bitter: ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
        sweet: ["Sugar cube", "spoonful of honey", "splash of cola"],
        fruity: ["Slice of orange", "dash of cassis", "cherry on top"]
    }

    var userAnswers = [];
    var userPreferences = [];
    var pantrysize = Object.keys(Pantry).length;
    $("#submit").click(function () {
        var index = 0;
        $('select').each(function () {
            userAnswers.push($(this).val());
            if (userAnswers[index] === 'yes') {
                //console.log(index);
                userPreferences.push($(this).attr('name'));
                //console.log("Current preferences are" + userPreferences + "because of " + userAnswers[index]);
                index += 1;
            } else {
                index += 1;
            }
        });
        var pantrychoice = randomIndex(2, 0);
        console.log(pantrychoice);
        var testmessage = testFunction("hello");
        console.log(testmessage);
        //console.log(userAnswers);
        //console.log(userPreferences);
        /*var concoction = [];
        for (i = 0; i < userPreferences.length; i++) {
            var preference = userPreferences[i];
            var pantrychoice = randomIndex(2, 0);
            console.log(pantrychoice);
        }*/
    });
});

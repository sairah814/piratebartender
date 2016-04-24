$(document).ready(function () {

    function randomIndex(max, min) { //generates a random number between the range provided; will be used to randomly choose an ingredient from each of the pantry categories
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }

    var Pantry = {
        strong: ["Glug of rum", "slug of whisky", "splash of gin"],
        salty: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
        bitter: ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
        sweet: ["Sugar cube", "spoonful of honey", "splash of cola"],
        fruity: ["Slice of orange", "dash of cassis", "cherry on top"]
    }

    function createDrink {
        for (i = 0; i < userPreferences.length; i++) {
            var preference = userPreferences[i]; //records the preference like "salty"
            var pantrychoice = randomIndex(2, 0);

        }
        //console.log(pantrychoice);
        //console.log(userAnswers);
        //console.log(userPreferences);
        /*var concoction = [];
        for (i = 0; i < userPreferences.length; i++) {
            var preference = userPreferences[i];
            var pantrychoice = randomIndex(2, 0);
            console.log(pantrychoice);
        }*/
    }

    var userAnswers = [];
    var userPreferences = [];
    var pantrysize = Object.keys(Pantry).length;
    $("#submit").click(function () {
        var index = 0;
        $('select').each(function () {
            userAnswers.push($(this).val());
            if (userAnswers[index] === 'yes') {
                userPreferences.push($(this).attr('name'));
                index += 1;
            } else {
                index += 1;
            }
        });
        //now call the createdrink function
        //then call the display drink function
    });
});

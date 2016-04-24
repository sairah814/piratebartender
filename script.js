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

    function createDrink() {
        var drink = [];
        for (i = 0; i < userPreferences.length; i++) {
            var preference = userPreferences[i]; //records the preference like "salty"
            var pantryIndex = randomIndex(2, 0);
            var ingredient = Pantry[preference][pantryIndex]; //finds preference key in object and then returns only value at index
            drink.push(ingredient);
        }
        return drink;
    }

    function displayDrink(ingredients) {
        for (i = 0; i < ingredients.length; i++) {
            $("#drink").append("<p>" + ingredients[i] + "</p>");
        }
    }

    var userAnswers = [];
    var userPreferences = [];
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
        var newDrink = createDrink();
        displayDrink(newDrink);
    });
});

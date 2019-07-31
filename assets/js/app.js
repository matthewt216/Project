var categoryArray = [];
var category = "";
var restaurantArray = [];
var restaurantSelection = "";

//Onclick function for Start button on the first page
$("#start").on("click", function(){

    

});

//Onclick function for Continue button on second page that takes you to randomizing category
$("#continue").on("click", function(){

    chooseCategory ();

});

//Function to randomly choose category
function chooseCategory () {

    category = categoryArray[Math.floor(Math.random() * categoryArray.length)];

    $("#category").text("Your category for today is " + category);

}

//Onclick function for Accept and Decline buttons on the "Your Category Is" Page
$("#accept").on("click", function(){

    chooseRestaurant ();

});

$("#decline").on("click", function(){

});

//Function to randomly choose restaurant
function chooseRestaurant () {

    restaurantSelection = restaurantArray[Math.floor(Math.random() * restaurantArray.length)];

    $("#category").text("Your restaurant for today is " + restaurantSelection);

}

//Onclick function for Awesome and Another Restaurant buttons on "Your Restaurant Is" Page
$("#awesome").on("click", function(){

});

$("#another").on("click", function(){

});
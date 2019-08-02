var baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?'


var category = $(".checkbox:checked").val()
var cat = ['japanese', 'korean', 'thai']
var radius = '16093'
var longitude = -118.243683
var latitude = 34.052235
var token = 'FfXel153kC1OSu3tNMLQbqKmooHhpPrKhHudPPbmk4ZG3WQao-nKITd4kmR9lcW9MtAtuUOJgtoOWf-oO0KiLbHkquE-9Aj0TQJHHDW-B4HYFqTG42lgwjraNKw8XXYx'



//Random function

function getRandomItem(cat) {

    return cat[Math.floor(Math.random() * cat.length)]; 
    
}

var yourCategory = getRandomItem(cat);

//Onclick function for Continue button on second page that takes you to randomizing category
 
$("#continue").on("click", function () {

    var yourCategory = getRandomItem(cat);

    console.log("Your category for today is: " + yourCategory);

});

//Onclick function for Accept and Decline buttons on the "Your Category Is" page

$("#accept").on("click", function () {

    $.ajax({
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", 'Bearer ' + token);
        },
        type: 'GET',
        url: baseUrl + "&categories=" + yourCategory + '&radius=' + radius + '&latitude=' + latitude + '&longitude=' + longitude + '&categories=' + cat + '&price=1',
        dataType: 'json',
    
    }).then(function (response) {

        var businesses = response.businesses;

        var myRandom = getRandomItem(businesses);

        console.log("Your restaurant for today is:");
        console.log(myRandom);
     
    }); 

});

$("#decline").on("click", function () {

    console.log(yourCategory);
    cat.splice(cat.indexOf(yourCategory), 1);
    console.log(cat);
    yourCategory = getRandomItem(cat);
    console.log(yourCategory);
});


//Onclick function for Awesome and Another Restaurant buttons on "Your Restaurant Is" Page
$("#awesome").on("click", function () {

    console.log("Awesome, enjoy your meal!");

    var showRestaurant;

});

$("#notquite").on("click", function () {

    

});
var baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term='

//var term = //$(#term-input).text().val()
//var category = $(".checkbox:checked").val()
var cat = ['japanese', 'korean', 'thai']
var radius = '16093'
var longitude = -118.243683
var latitude = 34.052235
var token = 'FfXel153kC1OSu3tNMLQbqKmooHhpPrKhHudPPbmk4ZG3WQao-nKITd4kmR9lcW9MtAtuUOJgtoOWf-oO0KiLbHkquE-9Aj0TQJHHDW-B4HYFqTG42lgwjraNKw8XXYx'

$.ajax({
    beforeSend: function (request) {
        request.setRequestHeader("Authorization", 'Bearer ' + token);
    },
    type: 'GET',
    url: baseUrl + cat + '&radius=' + radius + '&latitude=' + latitude + '&longitude=' + longitude + '&categories=' + cat + '&price=1',
    dataType: 'json',

}).then(function (response) {
    console.log(response)

});

//Onclick function for Start button on the first page

$("#start").on("click", function () {

    $("#start").remove();
    $("#greeting").remove();

    //Append loaction input, categories, and budget

});

//Onclick function for Continue button on second page that takes you to randomizing category
 
$("#continue").on("click", function () {

    //Remove location input, categories, and budget

    //Remove loading gif from app - defeats the purpose of saving time

     chosenCategory(cat);

});

//Choose random category

function chosenCategory(cat) {

    return cat[Math.floor(Math.random() * cat.length)]; 
}

console.log(chosenCategory(cat));

var yourCategory = chosenCategory(cat);

$("#yourCategory").text("Your category for today is: " + yourCategory);

//Onclick function for Accept and Decline buttons on the "Your Category Is" page

$("#accept").on("click", function () {

});

$("#decline").on("click", function () {

});


//Choose random restaurant

// //var term = //$(#term-input).text().val()
// //var category = $(".checkbox:checked").val()
// var cat = 'japanese'
// var radius = '16093'
// var longitude = -118.243683
// var latitude = 34.052235
// var token = 'FfXel153kC1OSu3tNMLQbqKmooHhpPrKhHudPPbmk4ZG3WQao-nKITd4kmR9lcW9MtAtuUOJgtoOWf-oO0KiLbHkquE-9Aj0TQJHHDW-B4HYFqTG42lgwjraNKw8XXYx'

// $.ajax({
//     beforeSend: function (request) {
//         request.setRequestHeader("Authorization", 'Bearer ' + token);
//     },
//     type: 'GET',
//     url: baseUrl + cat + '&radius=' + radius + '&latitude=' + latitude + '&longitude=' + longitude + '&categories=' + cat + '&price=1',
//     dataType: 'json',

// }).then(function (response) {
//     console.log(response)

//     var results = response.businesses;
//     var randomCategory = "";

//     for (var i = 0; i < results.length; i++) {

//         randomCategory = results[i].categories[Math.floor(Math.random() * results[i].categories.length)];
//         console.log(randomCategory);

//     }
// });


// //Onclick function for Awesome and Another Restaurant buttons on "Your Restaurant Is" Page
// $("#awesome").on("click", function () {

// });

// $("#another").on("click", function () {

// });
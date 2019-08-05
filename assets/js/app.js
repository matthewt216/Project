$("#locationform").hide(); // hides all of the pages to come in the future
$("#listrow1").hide();
$("#prices").hide();
$("#choice").hide();
$("#result").hide();

var bar = false; // declares the variables for the categories false to indicate that those categories were not selected
var pizza = false;
var rice = false;
var med = false;
var chicken = false;
var desserts = false;
var salad = false;
var seafood = false;
var search;
var curlat;
var curlong;
var yelpapi = config.APISECRET; // declares variables to hold the apis to conceal them
var googleapi = config.GOOGLE;
var pricearray = [];
var one = false;
var two = false;
var three = false;
var four = false;
var chosenfood;

$("#delete").on("click", function(){
   $("#history").empty();
   $("#history").append("<th>Previous Searches</th>");
});
$("#submit1").on("click", function(){ // clicking submit1 results in hiding the nameform and showing the locationform
    event.preventDefault();
    name = $("#name").val();
    console.log(name);
    if (name != ""){
        $("#hello").html("<h1>Hello " + name + "!</h1>");
    }
    else {
        $("#hello").html("<h1>Hello!</h1>");
    }
    $("#nameform").hide();
    $("#locationform").show();
});
function getLocation() { // gets current position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    }
    else {
        console.log("Not supported");
    }
}
function setPosition (position) { // sets the variables curlat and curlong to the location coordinates of the person's current position
    curlat = position.coords.latitude;
    curlong = position.coords.longitude;
    console.log(curlat + " " + curlong);
    location1 = {lat: curlat, lng: curlong};
}
$("#submit2").on("click", function(){ // 
    event.preventDefault(); // forbids the page to refresh after clicking on the submit2 button
    location1 = $("#location").val();
    if ($("#location").val() === ""){
        getLocation();
        $("#locationform").hide();
        $("#listrow1").show();
    }
    else {
        console.log(location1);
        $("#locationform").hide();
        $("#listrow1").show();
    }
});
$("#submit3").on("click", function(){
    if (bar === false && pizza === false && rice === false && med === false && chicken === false && desserts === false && salad === false && seafood === false && $("#typedchoice").val() === ""){
        $("#listrow1").show();
    }
    else {
        $("#prices").show();
        $("#listrow1").hide();
    }
    if (bar === false && pizza === false && rice === false && med === false && chicken === false && desserts === false && salad === false && seafood === false){
        search = $("#typedchoice").val().trim();
    }
    for (a = 0; a < search.length; a++){
        if (search.charAt(a) === " "){
            search = search.substring(0, a) + search.substring(a + 1);
            console.log(search);
        }
    }
})
$("#reset1").on("click", function(){
    console.log(name);
});
$("#back1").on("click", function(){
    $("#nameform").show();
    $("#locationform").hide();
});
$("#back2").on("click", function(){
    $("#locationform").show();
    $("#listrow1").hide();
})
$("#back3").on("click", function(){
    $("#listrow1").show();
    $("#prices").hide();
})
$("#back4").on("click", function(){
    $("#prices").show();
    $("#choice").hide();
    $("#namecomp").text(""); 
    $("#rating").text("");
    $("#rest").attr("src", "");
})
$("#resetall").on("click", function(){ // basically sets everything to their original forms
    $("#result").hide();
    $("#nameform").show();
    $("#name").val("");
    $("#location").val("");
    $("#bar").css("background-color", "#4CAF50");
    $("#pizza").css("background-color", "#4CAF50");
    $("#rice").css("background-color", "#4CAF50");
    $("#med").css("background-color", "#4CAF50");
    $("#chicken").css("background-color", "#4CAF50");
    $("#desserts").css("background-color", "#4CAF50");
    $("#salads").css("background-color", "#4CAF50");
    $("#seafood").css("background-color", "#4CAF50");
    $("#d1").css("background-color", "#4CAF50");
    $("#d2").css("background-color", "#4CAF50");
    $("#d3").css("background-color", "#4CAF50");
    $("#d4").css("background-color", "#4CAF50");
    $("#rest").attr("src", "");
    $("#namecomp").text("");
    $("#directions").text("");
    bar = false;
    pizza = false;
    rice = false;
    med = false;
    chicken = false;
    desserts = false;
    salad = false;
    seafood = false;
    foodarray = [];
    search = "";
    $("#typedchoice").val("");
    one = false;
    two = false;
    three = false;
    four = false;
    pricearray = [];
    $("#namecomp").text(""); 
    $("#rating").text("");
});

$(".cbtn").on("click",function ()
{
var currentStatus = $(this).attr("data-status");
console.log(currentStatus)
if (currentStatus == "unactive")
{
    $(this).css("background-color", "#ffd560");
    $(this).attr("data-status", "active")	

} else if (currentStatus == "active"){
     
     $(this).attr("data-status", "unactive")	

    $(this).css("background-color", "#ffc107");
}

}
);

$("#burgers").on("click", function () {
    if (burgers === false )
    {

       // $(this).css("background-color", "black");
        // $("#pizza").css("background-color", "rgb(228, 235, 143)");
        // $("#rice").css("background-color", "white");
        // $("#med").css("background-color", "white");
        // $("#chicken").css("background-color", "white");
        // $("#desserts").css("background-color", "white");
        // $("#salads").css("background-color", "white");
        // $("#seafood").css("background-color", "white");
        burgers = true; 
        chicken = false;
        dessert = false;
        japanese = false;
        korean = false;
        mexican = false;
$("#bar").on("click", function(){ // clicking on the bar button results in all of the other category buttons to be set to the #4CAF50 color 
    if (bar === false){
        $(this).css("background-color", "red");
        $("#pizza").css("background-color", "#4CAF50");
        $("#rice").css("background-color", "#4CAF50");
        $("#med").css("background-color", "#4CAF50");
        $("#chicken").css("background-color", "#4CAF50");
        $("#desserts").css("background-color", "#4CAF50");
        $("#salads").css("background-color", "#4CAF50");
        $("#seafood").css("background-color", "#4CAF50");
        bar = true; 
        pizza = false;
        rice = false;
        med = false;
        chicken = false;
        desserts = false;
        salad = false;
        seafood = false;
        search = "bar"; // sets the search variable to the string "bar"
    }
    else{
        // $(this).css("background-color", "white"); // the button is unclicked and is white when bar is true
        burgers = false; // sets the bar variable back to false

    }
})


$("#chicken").on("click", function () {
    if (chicken === false) {
        $(this).css("background-color", "rgb(228, 235, 143)");
        // $("#bar").css("background-color", "white");
        // $("#rice").css("background-color", "white");
        // $("#med").css("background-color", "white");
        // $("#chicken").css("background-color", "white");
        // $("#desserts").css("background-color", "white");
        // $("#salads").css("background-color", "white");
        // $("#seafood").css("background-color", "white");
        chicken = true;
        burgers = false; 
        dessert = false;
        japanese = false;
        korean = false;
        mexican = false;
        pizza = false;
        sandwiches = false;
        thai = false;
        vegeterian = false;
        search = "chicken";
    }
    else {
        // $(this).css("background-color", "white");
        $(this).css("background-color", "#4CAF50"); // the button is unclicked and is #4CAF50 when bar is true
        bar = false; // sets the bar variable back to false
    }
})
$("#pizza").on("click", function(){
    if (pizza === false){
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "#4CAF50");
        $("#rice").css("background-color", "#4CAF50");
        $("#med").css("background-color", "#4CAF50");
        $("#chicken").css("background-color", "#4CAF50");
        $("#desserts").css("background-color", "#4CAF50");
        $("#salads").css("background-color", "#4CAF50");
        $("#seafood").css("background-color", "#4CAF50");
        pizza = true;
        bar = false; 
        rice = false;
        med = false;
        chicken = false;
        desserts = false;
        salad = false;
        seafood = false;
        search = "pizza";
    }
    else{
        $(this).css("background-color", "#4CAF50");
        pizza = false;
    }
})
$("#rice").on("click", function(){
    if (rice === false){
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "#4CAF50");
        $("#pizza").css("background-color", "#4CAF50");
        $("#med").css("background-color", "#4CAF50");
        $("#chicken").css("background-color", "#4CAF50");
        $("#desserts").css("background-color", "#4CAF50");
        $("#salads").css("background-color", "#4CAF50");
        $("#seafood").css("background-color", "#4CAF50");
        rice = true;
        bar = false; 
        med = false;
        chicken = false;
        desserts = false;
        salad = false;
        seafood = false;
        pizza = false;
        search = "rice";
    }
    else{
        $(this).css("background-color", "#4CAF50");
        rice = false;
    }
})
$("#med").on("click", function(){
    if (med === false){
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "#4CAF50");
        $("#rice").css("background-color", "#4CAF50");
        $("#pizza").css("background-color", "#4CAF50");
        $("#chicken").css("background-color", "#4CAF50");
        $("#desserts").css("background-color", "#4CAF50");
        $("#salads").css("background-color", "#4CAF50");
        $("#seafood").css("background-color", "#4CAF50");
        rice = false;
        bar = false; 
        med = true;
        chicken = false;
        desserts = false;
        salad = false;
        seafood = false;
        pizza = false;
        search = "mediterranean";
    }
    else{
        $(this).css("background-color", "#4CAF50");
        med = false;
    }
})
$("#chicken").on("click", function(){
    if (chicken === false){
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "#4CAF50");
        $("#rice").css("background-color", "#4CAF50");
        $("#med").css("background-color", "#4CAF50");
        $("#pizza").css("background-color", "#4CAF50");
        $("#desserts").css("background-color", "#4CAF50");
        $("#salads").css("background-color", "#4CAF50");
        $("#seafood").css("background-color", "#4CAF50");
        chicken = true;
        rice = false;
        bar = false; 
        med = false;
        desserts = false;
        salad = false;
        seafood = false;
        pizza = false;
        search = "chicken";
    }
    else{
        $(this).css("background-color", "#4CAF50");
        chicken = false;
    }
})
$("#desserts").on("click", function(){
    if (desserts === false){
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "#4CAF50");
        $("#rice").css("background-color", "#4CAF50");
        $("#med").css("background-color", "#4CAF50");
        $("#chicken").css("background-color", "#4CAF50");
        $("#pizza").css("background-color", "#4CAF50");
        $("#salads").css("background-color", "#4CAF50");
        $("#seafood").css("background-color", "#4CAF50");
        desserts = true;
        rice = false;
        bar = false; 
        med = false;
        chicken = false;
        salad = false;
        seafood = false;
        pizza = false;
        search = "dessert";
    }
    else{
        $(this).css("background-color", "#4CAF50");
        desserts = false;
    }
})
$("#salads").on("click", function(){
    if (salad === false){
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "#4CAF50");
        $("#rice").css("background-color", "#4CAF50");
        $("#med").css("background-color", "#4CAF50");
        $("#chicken").css("background-color", "#4CAF50");
        $("#desserts").css("background-color", "#4CAF50");
        $("#pizza").css("background-color", "#4CAF50");
        $("#seafood").css("background-color", "#4CAF50");
        salad = true;
        rice = false;
        bar = false; 
        med = false;
        chicken = false;
        desserts = false;
        seafood = false;
        pizza = false;
        search = "salad"
    }
    else{
        $(this).css("background-color", "#4CAF50");
        salad = false;
    }
})
$("#seafood").on("click", function(){
    if (seafood === false){
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "#4CAF50");
        $("#rice").css("background-color", "#4CAF50");
        $("#med").css("background-color", "#4CAF50");
        $("#chicken").css("background-color", "#4CAF50");
        $("#desserts").css("background-color", "#4CAF50");
        $("#salads").css("background-color", "#4CAF50");
        $("#pizza").css("background-color", "#4CAF50");
        seafood = true;
        rice = false;
        bar = false; 
        med = false;
        chicken = false;
        desserts = false;
        salad = false;
        pizza = false;
        search = "seafood";
    }
    else{
        $(this).css("background-color", "#4CAF50");
        seafood = false;
    }
})
var choice = 0; // the default for choice is 0
$("#d1").on("click", function(){ // clicking on the first money value results in its button being set to the color red while the other money buttons are set to #4CAF50
    if (one === false){
        $(this).css("background-color", "red");
        pricearray.push("1")
        one = true;
    }
    else if (one === true){
        $(this).css("background-color", "#4CAF50");
        pricearray.splice(pricearray.indexOf("1"), 1);
        one = false;
    }
})


$(".ccbtn").on("click",function ()
{
var currentStatus = $(this).attr("data-status");
console.log(currentStatus)
if (currentStatus == "unactive")
{
    $(this).css("background-color", "#86e29b");
    $(this).attr("data-status", "active")	

} else if (currentStatus == "active"){
     
     $(this).attr("data-status", "unactive")	
    $(this).css("background-color", "#28a745");
    choice = 0;
}
}
);



var choice = 0; // the default for choice is 0
$("#d1").on("click", function(){ // clicking on the first money value results in its button being set to the color red while the other money buttons are set to white
   // $(this).css("background-color", "rgb(66, 202, 139)");
    // $("#d2").css("background-color", "white");
    // $("#d3").css("background-color", "white");
    // $("#d4").css("background-color", "white");
    choice = 1; // sets the choice value to 1 to indicate to the app that the user picked the first money option
    console.log(choice);
});
$("#d2").on("click", function(){
    if (two === false){
        $(this).css("background-color", "red");
        pricearray.push("2")
        two = true;
    }
    else if (two === true){
        $(this).css("background-color", "#4CAF50");
        pricearray.splice(pricearray.indexOf("2"), 1);
        two = false;
    }
});
$("#d3").on("click", function(){
    if (three === false){
        $(this).css("background-color", "red");
        pricearray.push("3")
        three = true;
    }
    else if (three === true){
        $(this).css("background-color", "#4CAF50");
        pricearray.splice(pricearray.indexOf("3"), 1);
        three = false;
    }
});
$("#d4").on("click", function(){
    if (four === false){
        $(this).css("background-color", "red");
        pricearray.push("4")
        four = true;
    }
    else if (one === true){
        $(this).css("background-color", "#4CAF50");
        pricearray.splice(pricearray.indexOf("4"), 1);
        four = false;
    }
});
var pricestring = pricearray.toString();
var foodarray = []; // sets an empty array to foodarray
var queryURL;
$("#submit4").on("click", function(){ // clicking on the submit4 button 
    $("#agree").hide();
    $("#decline").hide();
    console.log(pricearray);
    console.log(pricearray.toString());
    if (one === false && two === false && three === false && four === false){
        $("#prices").show();
    }
    else{
        $("#prices").hide();
        $("#choice").show();
    }
    console.log(search);
    if ($("#location").val() === ""){ // sets the location to its latitude and longitude values if the location value is blank
        queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+search+"&latitude=" + curlat + "&longitude=" + curlong + "&price=" + pricearray.toString();
    }
    else{ // sets the location to the location value
        queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+search+"&location=" + location1 + "&price=" + pricearray.toString();
    }
    $.ajax({ // ajax calls the queryURL in yelp to get the data
        url: queryURL,
        headers: {
         'Authorization': 'Bearer ' + yelpapi // authorizes the user to use the yelp api
        },
        method: "GET",
        dataType: "json",
        success: function(data){
            var resources1 = data.businesses; 
            console.log(data);
            for (i = 0; i < resources1.length; i++){
                foodarray.push(resources1[i]);
            }
            curlat = data.region.center.latitude; // sets the latitude and longitude to the current location based on what the user inputed into the location form
            curlong = data.region.center.longitude;
            console.log(curlat);
            console.log(curlong);
            console.log(foodarray);
            chosenfood = foodarray[Math.floor(Math.random() * foodarray.length)]; // randomly chooses an element from the foodarray array
            $("#rest").attr("src", chosenfood.image_url); // sets the src for the element with the rest id to the image for the chosenfood
            $("#rest").attr("alt", "LOADING"); // sets the src to LOADING if the image has not shown
            $("#namecomp").text("Your proposed restaurant is: " + chosenfood.name); // shows the proposed restuarant
            $("#rating").text("Rating (out of 5 stars): " + chosenfood.rating + " stars (# of reviews: " + chosenfood.review_count + ")");
            $("#agree").show();
            $("#decline").show();
            console.log(queryURL);
        }
    });
});
$("#typedchoice").on("click", function(){
    bar = false; // declares the variables for the categories false to indicate that those categories were not selected
    pizza = false;
    rice = false;
    med = false;
    chicken = false;
    desserts = false;
    salad = false;
    seafood = false;
    $("#bar").css("background-color", "#4CAF50");
    $("#pizza").css("background-color", "#4CAF50");
    $("#rice").css("background-color", "#4CAF50");
    $("#med").css("background-color", "#4CAF50");
    $("#chicken").css("background-color", "#4CAF50");
    $("#desserts").css("background-color", "#4CAF50");
    $("#salads").css("background-color", "#4CAF50");
    $("#seafood").css("background-color", "#4CAF50");
});
$("#agree").on("click", function(){ // clicking on agree leads the user to the map page with the directions
    $("#result").show();
    $("#choice").hide();
    console.log(chosenfood);
    $("#locator1").text("Your directions to " + chosenfood.name);
    var row = $("<tr>");
    row.append($("<td>").text(chosenfood.name + " in " + chosenfood.location.city + ", " + chosenfood.location.state));
    $("#history").append(row);
    initMap(); // creates the map
});
$("#decline").on("click", function(){ // clicking on decline goes back to the array and deletes the declined item and randomly chooses another item
    if (foodarray.length != 1){
        foodarray.splice(foodarray.indexOf(chosenfood), 1);
        console.log(foodarray);
        chosenfood = foodarray[Math.floor(Math.random() * foodarray.length)];
        $("#namecomp").text("Your proposed restaurant is: " + chosenfood.name);
        $("#rest").attr("src", chosenfood.image_url);
        $("#rating").text("Rating (out of 5 stars): " + chosenfood.rating + " stars (# of reviews: " + chosenfood.review_count + ")"); // displays the rating and the number of reviews
        console.log(queryURL);
    }
    else {
        console.log("Stop"); // stops whenever the foodarray is 1; this ensures that the user knows when the list ends and stop clicking on the decline button
    }
});
function initMap() { // creates a map from google
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: ((curlat + chosenfood.coordinates.latitude) / 2), lng: ((curlong + chosenfood.coordinates.longitude) / 2)} // creates the center using the averages of the position of the person and the position of the restaurant
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directions")); 
    var control = document.getElementById('floating-panel');
    
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
    calculateAndDisplayRoute(directionsService, directionsDisplay); // calls the calculateanddisplayroute function
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) { // calculates and displays the route on the google map
    var selectedMode = "DRIVING"; // sets the mode to driving
    directionsService.route({ // calculates the route and displays the route onto the google map
      origin: location1, 
      destination: {lat: chosenfood.coordinates.latitude, lng: chosenfood.coordinates.longitude}, 
      travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      } else { // if anything fails, the console lets you know
        console.log('Directions request failed due to ' + status);
      }
    });
}

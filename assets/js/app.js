$("#locationform").hide();
$("#listrow1").hide();
$("#prices").hide();
$("#choice").hide();
$("#result").hide();

var bar = false;
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
var yelpapi = config.APISECRET;
var googleapi = config.GOOGLE;
$("#submit1").on("click", function(){
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
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    }
    else {
        console.log("Not supported");
    }
}
function setPosition (position) {
    curlat = position.coords.latitude;
    curlong = position.coords.longitude;
    console.log(curlat + " " + curlong);
    location1 = {lat: curlat, lng: curlong};
}
$("#submit2").on("click", function(){
    event.preventDefault();
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
    $("#prices").show();
    $("#listrow1").hide();
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
})
$("#resetall").on("click", function(){
    $("#result").hide();
    $("#nameform").show();
    $("#name").val("");
    $("#location").val("");
    $("#bar").css("background-color", "white");
    $("#pizza").css("background-color", "white");
    $("#rice").css("background-color", "white");
    $("#med").css("background-color", "white");
    $("#chicken").css("background-color", "white");
    $("#desserts").css("background-color", "white");
    $("#salads").css("background-color", "white");
    $("#seafood").css("background-color", "white");
    $("#d1").css("background-color", "white");
    $("#d2").css("background-color", "white");
    $("#d3").css("background-color", "white");
    $("#d4").css("background-color", "white");
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
});
$("#bar").on("click", function(){
    if (bar === false){
        $(this).css("background-color", "red");
        bar = true;
        search = "bar";
    }
    else{
        $(this).css("background-color", "white");
        bar = false;
    }
})
$("#pizza").on("click", function(){
    if (pizza === false){
        $(this).css("background-color", "red");
        pizza = true;
        search = "pizza";
    }
    else{
        $(this).css("background-color", "white");
        pizza = false;
    }
})
$("#rice").on("click", function(){
    if (rice === false){
        $(this).css("background-color", "red");
        rice = true;
        search = "rice";
    }
    else{
        $(this).css("background-color", "white");
        rice = false;
    }
})
$("#med").on("click", function(){
    if (med === false){
        $(this).css("background-color", "red");
        med = true;
        search = "mediterranean";
    }
    else{
        $(this).css("background-color", "white");
        med = false;
    }
})
$("#chicken").on("click", function(){
    if (chicken === false){
        $(this).css("background-color", "red");
        chicken = true;
        search = "chicken";
    }
    else{
        $(this).css("background-color", "white");
        chicken = false;
    }
})
$("#desserts").on("click", function(){
    if (desserts === false){
        $(this).css("background-color", "red");
        desserts = true;
        search = "dessert";
    }
    else{
        $(this).css("background-color", "white");
        desserts = false;
    }
})
$("#salads").on("click", function(){
    if (salad === false){
        $(this).css("background-color", "red");
        salad = true;
        search = "salad"
    }
    else{
        $(this).css("background-color", "white");
        salad = false;
    }
})
$("#seafood").on("click", function(){
    if (seafood === false){
        $(this).css("background-color", "red");
        seafood = true;
        search = "seafood";
    }
    else{
        $(this).css("background-color", "white");
        seafood = false;
    }
})
var choice = 0;
$("#d1").on("click", function(){
    $(this).css("background-color", "red");
    $("#d2").css("background-color", "white");
    $("#d3").css("background-color", "white");
    $("#d4").css("background-color", "white");
    choice = 1;
    console.log(choice);
});
$("#d2").on("click", function(){
    $(this).css("background-color", "red");
    $("#d1").css("background-color", "white");
    $("#d3").css("background-color", "white");
    $("#d4").css("background-color", "white");
    choice = 2;
    console.log(choice);
});
$("#d3").on("click", function(){
    $(this).css("background-color", "red");
    $("#d1").css("background-color", "white");
    $("#d2").css("background-color", "white");
    $("#d4").css("background-color", "white");
    choice = 3;
    console.log(choice);
});
$("#d4").on("click", function(){
    $(this).css("background-color", "red");
    $("#d1").css("background-color", "white");
    $("#d2").css("background-color", "white");
    $("#d3").css("background-color", "white");
    choice = 4;
    console.log(choice);
});
var foodarray = [];
var chosenfood;
var queryURL;
$("#submit4").on("click", function(){
    $("#prices").hide();
    $("#choice").show();
    console.log(search);
    if ($("#location").val() === ""){
        queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+search+"&latitude=" + curlat + "&longitude=" + curlong + "&price=" + choice;
    }
    else{
        queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+search+"&location=" + location1 + "&price=" + choice;
    }
$.ajax({
    url: queryURL,
    headers: {
        'Authorization': 'Bearer ' + yelpapi
    },
    method: "GET",
    dataType: "json",
    success: function(data){
        var resources1 = data.businesses;
        console.log(data);
        for (i = 0; i < resources1.length; i++){
            foodarray.push(resources1[i]);
        }
        curlat = data.region.center.latitude;
        curlong = data.region.center.longitude;
        console.log(curlat);
        console.log(curlong);
        console.log(foodarray);
        chosenfood = foodarray[Math.floor(Math.random() * foodarray.length)];
        $("#rest").attr("src", chosenfood.image_url);
        $("#rest").attr("alt", "LOADING");
        $("#namecomp").text("Your proposed restaurant is: " + chosenfood.name);
        console.log(queryURL);
    }
});
});
$("#agree").on("click", function(){
    $("#result").show();
    $("#choice").hide();
    console.log(chosenfood);
    $("#locator1").text("Your directions to " + chosenfood.name);
    var row = $("<tr>");
    row.append($("<td>").text(chosenfood.name + " in " + chosenfood.location.city + ", " + chosenfood.location.state));
    $("#history").append(row);
    initMap();
});
$("#decline").on("click", function(){
    if (foodarray.length != 1){
        foodarray.splice(foodarray.indexOf(chosenfood), 1);
        console.log(foodarray);
        chosenfood = foodarray[Math.floor(Math.random() * foodarray.length)];
        $("#namecomp").text("Your proposed restaurant is: " + chosenfood.name);
        $("#rest").attr("src", chosenfood.image_url);
        console.log(queryURL);
    }
    else {
        console.log("Stop");
    }
});
function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: ((curlat + chosenfood.coordinates.latitude) / 2), lng: ((curlong + chosenfood.coordinates.longitude) / 2)}
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directions"));
    var control = document.getElementById('floating-panel');
    
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var selectedMode = "DRIVING";
    directionsService.route({
      origin: location1, 
      destination: {lat: chosenfood.coordinates.latitude, lng: chosenfood.coordinates.longitude}, 
      travelMode: google.maps.TravelMode[selectedMode]
    }, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        console.log('Directions request failed due to ' + status);
      }
    });
  }
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
var location_name;
var location1;


$("#submit1").on("click", function () {
    event.preventDefault();
    name = $("#name").val();
    console.log(name);
    if (name != "") {
        $("#hello").html("<h1>Hello " + name + "!</h1>");
    }
    else {
        $("#hello").html("<h1>Hello!</h1>");
    }
    $("#nameform").hide();
    $("#locationform").show();
    getLocation();

});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    }
    else {
        console.log("Not supported");
    }
}

function setPosition(position) {
    curlat = position.coords.latitude;
    curlong = position.coords.longitude;
    console.log(curlat + " " + curlong);
    location1 = { lat: curlat, lng: curlong };
    var geocoder = new google.maps.Geocoder;

    geocodeLatLng(geocoder);
}


function geocodeLatLng(geocoder) {
    var latlng = { lat: curlat, lng: curlong };

    geocoder.geocode({ 'location': latlng }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {
                
              location_name = results[0].address_components[2].long_name
            
              $("input[id=location]").val(location_name)

                console.log(location_name)
                };
            } else {
                window.alert('No results found');
            }
    })
    };

$("#submit2").on("click", function () {
    event.preventDefault();

   // location1 = $("#location").val();
    if ($("#location").val() === "") {
        $("#locationform").hide();
        $("#listrow1").show();
    }
    else {
       // console.log(location1);
        $("#locationform").hide();
        $("#listrow1").show();
    }
});
$("#submit3").on("click", function () {
    $("#prices").show();
    $("#listrow1").hide();
})
$("#reset1").on("click", function () {
    console.log(name);
});
$("#back1").on("click", function () {
    $("#nameform").show();
    $("#locationform").hide();
});
$("#back2").on("click", function () {
    $("#locationform").show();
    $("#listrow1").hide();
})
$("#back3").on("click", function () {
    $("#listrow1").show();
    $("#prices").hide();
})
$("#back4").on("click", function () {
    $("#prices").show();
    $("#choice").hide();
})
$("#resetall").on("click", function () {
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
$("#bar").on("click", function () {
    if (bar === false) {
        $(this).css("background-color", "red");
        $("#pizza").css("background-color", "white");
        $("#rice").css("background-color", "white");
        $("#med").css("background-color", "white");
        $("#chicken").css("background-color", "white");
        $("#desserts").css("background-color", "white");
        $("#salads").css("background-color", "white");
        $("#seafood").css("background-color", "white");
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
        $(this).css("background-color", "white"); // the button is unclicked and is white when bar is true
        bar = false; // sets the bar variable back to false
    }
})
$("#pizza").on("click", function () {
    if (pizza === false) {
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "white");
        $("#rice").css("background-color", "white");
        $("#med").css("background-color", "white");
        $("#chicken").css("background-color", "white");
        $("#desserts").css("background-color", "white");
        $("#salads").css("background-color", "white");
        $("#seafood").css("background-color", "white");
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
    else {
        $(this).css("background-color", "white");
        pizza = false;
    }
})
$("#rice").on("click", function () {
    if (rice === false) {
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "white");
        $("#pizza").css("background-color", "white");
        $("#med").css("background-color", "white");
        $("#chicken").css("background-color", "white");
        $("#desserts").css("background-color", "white");
        $("#salads").css("background-color", "white");
        $("#seafood").css("background-color", "white");
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
    else {
        $(this).css("background-color", "white");
        rice = false;
    }
})
$("#med").on("click", function () {
    if (med === false) {
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "white");
        $("#rice").css("background-color", "white");
        $("#pizza").css("background-color", "white");
        $("#chicken").css("background-color", "white");
        $("#desserts").css("background-color", "white");
        $("#salads").css("background-color", "white");
        $("#seafood").css("background-color", "white");
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
    else {
        $(this).css("background-color", "white");
        med = false;
    }
})
$("#chicken").on("click", function () {
    if (chicken === false) {
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "white");
        $("#rice").css("background-color", "white");
        $("#med").css("background-color", "white");
        $("#pizza").css("background-color", "white");
        $("#desserts").css("background-color", "white");
        $("#salads").css("background-color", "white");
        $("#seafood").css("background-color", "white");
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
    else {
        $(this).css("background-color", "white");
        chicken = false;
    }
})
$("#desserts").on("click", function () {
    if (desserts === false) {
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "white");
        $("#rice").css("background-color", "white");
        $("#med").css("background-color", "white");
        $("#chicken").css("background-color", "white");
        $("#pizza").css("background-color", "white");
        $("#salads").css("background-color", "white");
        $("#seafood").css("background-color", "white");
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
    else {
        $(this).css("background-color", "white");
        desserts = false;
    }
})
$("#salads").on("click", function () {
    if (salad === false) {
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "white");
        $("#rice").css("background-color", "white");
        $("#med").css("background-color", "white");
        $("#chicken").css("background-color", "white");
        $("#desserts").css("background-color", "white");
        $("#pizza").css("background-color", "white");
        $("#seafood").css("background-color", "white");
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
    else {
        $(this).css("background-color", "white");
        salad = false;
    }
})
$("#seafood").on("click", function () {
    if (seafood === false) {
        $(this).css("background-color", "red");
        $("#bar").css("background-color", "white");
        $("#rice").css("background-color", "white");
        $("#med").css("background-color", "white");
        $("#chicken").css("background-color", "white");
        $("#desserts").css("background-color", "white");
        $("#salads").css("background-color", "white");
        $("#pizza").css("background-color", "white");
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
    else {
        $(this).css("background-color", "white");
        seafood = false;
    }
})
var choice = 0; // the default for choice is 0
$("#d1").on("click", function(){ // clicking on the first money value results in its button being set to the color red while the other money buttons are set to white
    $(this).css("background-color", "red");
    $("#d2").css("background-color", "white");
    $("#d3").css("background-color", "white");
    $("#d4").css("background-color", "white");
    choice = 1; // sets the choice value to 1 to indicate to the app that the user picked the first money option
    console.log(choice);
});
$("#d2").on("click", function () {
    $(this).css("background-color", "red");
    $("#d1").css("background-color", "white");
    $("#d3").css("background-color", "white");
    $("#d4").css("background-color", "white");
    choice = 2;
    console.log(choice);
});
$("#d3").on("click", function () {
    $(this).css("background-color", "red");
    $("#d1").css("background-color", "white");
    $("#d2").css("background-color", "white");
    $("#d4").css("background-color", "white");
    choice = 3;
    console.log(choice);
});
$("#d4").on("click", function () {
    $(this).css("background-color", "red");
    $("#d1").css("background-color", "white");
    $("#d2").css("background-color", "white");
    $("#d3").css("background-color", "white");
    choice = 4;
    console.log(choice);
});
var foodarray = []; // sets an empty array to foodarray
var chosenfood;
var queryURL;
$("#submit4").on("click", function () {
    $("#prices").hide();
    $("#choice").show();
    console.log(search);
    queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + search + "&latitude=" + curlat + "&longitude=" + curlong + "&price=" + choice;

    // if ($("#location").val() === "") {

    //     queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + search + "&latitude=" + curlat + "&longitude=" + curlong + "&price=" + choice;
    // }
    // else {
    //     queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + search + "&location=" + location1 + "&price=" + choice;
    // }
    $.ajax({
        url: queryURL,
        headers: {
            'Authorization': 'Bearer ' + yelpapi
        },
        method: "GET",
        dataType: "json",
        success: function (data) {
            var resources1 = data.businesses;
            console.log(data);
            for (i = 0; i < resources1.length; i++) {
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
$("#agree").on("click", function () {
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

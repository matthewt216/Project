 //Retrieve Latitude and Longitude coordinates
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

  //Google geocoder convert long and lat       
      var geocoder = new google.maps.Geocoder;

      function geocodeLatLng(geocoder) {
        var latlng = {lat: pos.lat, lng: pos.lng};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
                //We can be specific what type of results we want.The console log shows the city name of current location.
                
                console.log(results[0].address_components[2].long_name)

    
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      }

      geocodeLatLng(geocoder)

    })


};
    
    var baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term='
    //var term = //$(#term-input).text().val()
    var cat = 'japanese'
    var radius = '16093'
    var longitude = -118.243683
    var latitude = 34.052235
 var token = 'FfXel153kC1OSu3tNMLQbqKmooHhpPrKhHudPPbmk4ZG3WQao-nKITd4kmR9lcW9MtAtuUOJgtoOWf-oO0KiLbHkquE-9Aj0TQJHHDW-B4HYFqTG42lgwjraNKw8XXYx'
   
    $.ajax({

        beforeSend: function(request) {
            request.setRequestHeader("Authorization", 'Bearer ' + token);
          },

        type        : 'GET',
        url         : baseUrl + cat + '&radius=' + radius + '&latitude='+latitude + '&longitude=' + longitude + '&categories=' + cat + '&price=1',
        dataType    : 'json',

    }).then(function(results){
        console.log(results)
    }) 
    
    

       





































































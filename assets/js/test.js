  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      var geocoder = new google.maps.Geocoder;
      
      function geocodeLatLng(geocoder) {
        var latlng = {lat: pos.lat, lng: pos.lng};
        geocoder.geocode({'location': latlng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
         
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

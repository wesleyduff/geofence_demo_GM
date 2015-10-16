    /*Display Map*/
    var map;
    var gposition;
    window.initMap = function() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 42.5079541, lng: -83.0683519},
            zoom: 8
        });
        
    }
    var x = document.getElementById("demo");
    getLocation();
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        gposition = position;
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude; 
    }
    
    function testLocation(){
     /* GEO FENCE */
        var mapWithGeofences, readyEvent, path;
        mapWithGeofences = mapWithGeofences || new GMaps({
          el : '#geofences',
          lat : 42.5079541,
          lng : -83.0683519,
          zoom : 12
        });

        path = [
          [30.402361, -97.658330],
          [30.402068, -97.658668],
          [30.401637, -97.658993],
          [30.401628, -97.658239],
          [30.402181, -97.657952]
        ];
    
        var polygon = new google.maps.Polygon({
          paths: GMaps.arrayToLatLng(path),
          map: mapWithGeofences.map
        });
    
        var isInside = mapWithGeofences.checkGeofence(gposition.coords.latitude, gposition.position.coords.longitude, polygon);


        console.log(isInside);   
    }
    }
    

   
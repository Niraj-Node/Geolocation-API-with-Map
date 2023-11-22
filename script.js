var variable1 = document.getElementById("coordinates");
var variable2 = document.getElementById("map");
function getLocation() 
{
    if(navigator.geolocation) {
        variable1.innerHTML = "Allow permission to the application to make use of location services";
        navigator.geolocation.getCurrentPosition(showLoc, errHand);
    }
    else {
        variable1.innerHTML = "Your browser doesn't supports geolocation services";
    }
}

function showLoc(pos) 
{
    variable1.innerHTML =
    "Latitude: " +
    pos.coords.latitude +
    "<br>Longitude: " +
    pos.coords.longitude;
    latt = pos.coords.latitude;
    long = pos.coords.longitude;

    //This line creates a LatLng object using the latitude (latt) and longitude (long)
    //The LatLng object represents a geographic point on the Earth's surface.
    var lattlong = new google.maps.LatLng(latt, long);
    var OPTions = {
        center: lattlong,
        zoom: 15,
        mapTypeControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL,
        },
    };
    var mapg = new google.maps.Map(
        variable2,
        OPTions
    );
    var markerg = new google.maps.Marker( {
        position: lattlong,
        map: mapg,
        title: "You are here!",
    } );
}

function errHand(err) 
{
    switch(err.code) 
    {
        case err.PERMISSION_DENIED:
        variable1.innerHTML =
            "The application doesn't have the permission" +
            " to make use of location services";
        break;
        case err.POSITION_UNAVAILABLE:
        variable1.innerHTML = "The location of the device is uncertain";
        break;
        case err.TIMEOUT:
        variable1.innerHTML = "The request to get user location timed out";
        break;
        case err.UNKNOWN_ERROR:
        variable1.innerHTML =
            "Time to fetch location information exceeded" +
            "the maximum timeout interval";
        break;
    }
}

function reset() 
{
    if(variable1.innerHTML!="") 
    {
        variable1.innerHTML="";
        variable2.innerHTML="";
    }
    else 
    {
        alert("Nothing to Erase");
    }
}
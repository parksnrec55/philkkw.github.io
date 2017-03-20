// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url:"https://api.wunderground.com/api/f2d1c7032fa51e18/geolookup/conditions/q/" + lat + "," + long + ".json",
        dataType : "jsonp",
        success : function(data){
            console.log(data);
            var location = data['location']['city'];
            var state = data['location']['state'];
            var temp_f = data['current_observation']['temp_f'];
            var current = data['current_observation']['weather'];
            var feels_like = data['current_observation']['feelslike_f'];
            var pressure = data['current_observation']['pressure_in'];

            var cityDisplay = $('#cityDisplay');
            cityDisplay.html(location + ", " + state);
            var currentTemp = $('#currentTemp');
            currentTemp.html(Math.round(temp_f) + "&deg;F");
            var summary = $('#summary');
            summary.html(current);
            var add1 = $('#add1');
            add1.html("Feels like " + Math.round(feels_like) + "&deg;F");
            var add2 = $('#add2');
            add2.html("Pressure: " + pressure + "\"");



        }






    });
      $("#cover").fadeOut(250);



  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});

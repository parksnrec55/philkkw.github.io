jQuery(document).ready(function ($){
  $.ajax({
    url : "https://api.wunderground.com/api/f2d1c7032fa51e18/conditions/q/CO/Denver.json",
    dataType : "jsonp",
    success : function(data){
      console.log(data);
      var location = data['Franklin']['City'];
      var temp_f = data['Franklin']['High'];
      console.log("Current Temperature in " + location + " is: " + temp_f);

      var locName = $('#locName');
      var highTemp = $('#highTemp');
      var tempMessage = $('#tempMessage');

      locName.html(location);
      highTemp.html(temp_f);
      tempMessage.html("Current Temperature in " + location + " is: " + temp_f);
    }
  });
});

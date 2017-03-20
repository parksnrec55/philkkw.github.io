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
        url:"http://api.wunderground.com/api/f2d1c7032fa51e18/geolookup/conditions/forecast/hourly/q/" + lat + "," + long + ".json",
        dataType : "jsonp",
        success : function(data){
            console.log(data);
            var location = data['location']['city'];
            var state = data['location']['state'];
            //var high = data['forecast']['simpleforecast']['forecastday[0]']['high']['farenheit'];
            console.log(data.forecast.simpleforecast.forecastday[0]);
            var forecast = data.forecast.simpleforecast.forecastday[0];
            var dayhigh = forecast.high.fahrenheit;
            var forecastConditions = forecast.conditions;
            console.log(dayhigh);
            var daylo = forecast.low.fahrenheit;
            var current = data['current_observation']['weather'];
            var currenticon = data['current_observation']['icon_url'];
            var currentTemp = data['current_observation']['temp_f'];
            console.log(currenticon);
            var feels_like = data['current_observation']['feelslike_f'];
            var pressure = data['current_observation']['pressure_in'];
            var precipitation = data['current_observation']['precip_today_string'];
            var windspeed = forecast.avewind.mph;
            var windir = forecast.avewind.dir;
            var clat = data['location']['lat'];
            var clong = data['location']['lon'];
            var zippy = data['location']['zip'];

            var city = $('#city');
            city.html("Forecast for " + location + ", " + state);
            var hightemp = $('#hightemp');
            hightemp.html("High: " + dayhigh + "&deg;<sup>F</sup>");
            var lotemp = $('#lotemp');
            lotemp.html("Lo: " + daylo + "&deg;<sup>F</sup>")
            var conditionsnow = $('#conditionsnow');
            conditionsnow.html("Now: " + current + " | " + currentTemp + "&deg;<sup>F</sup>");
            var foreCond = $('#foreCond');
            foreCond.html("Forecast: " + forecastConditions);
            var precip = $('#precip');
            precip.html("Precipitation: " + precipitation);
            var wind = $('#wind');
            wind.html("Wind: " + windspeed + "mph");
            var winddir = $('#winddir');
            winddir.html("Direction: " + windir);
            var latx = $('#latx');
            latx.html("Latitude: " + clat);
            var longx = $('#longx');
            longx.html("Longitude: " + clong);
            var zip = $('#zip');
            zip.html("ZIP: " + zippy);

            //hourly data parsing
            var zero = data.hourly_forecast[0].temp.english;
            var one = data.hourly_forecast[1].temp.english;
            var two = data.hourly_forecast[2].temp.english;
            var three = data.hourly_forecast[3].temp.english;
            var four = data.hourly_forecast[4].temp.english;
            var five = data.hourly_forecast[5].temp.english;
            var six = data.hourly_forecast[6].temp.english;
            var seven = data.hourly_forecast[7].temp.english;
            var eight = data.hourly_forecast[8].temp.english;
            var nine = data.hourly_forecast[9].temp.english;
            var ten = data.hourly_forecast[10].temp.english;
            var eleven = data.hourly_forecast[11].temp.english;
            var twelve = data.hourly_forecast[12].temp.english;
            var thirteen = data.hourly_forecast[13].temp.english;
            var fourteen = data.hourly_forecast[14].temp.english;
            var fifteen = data.hourly_forecast[15].temp.english;
            var sixteen = data.hourly_forecast[16].temp.english;
            var seventeen = data.hourly_forecast[17].temp.english;
            var oneeight = data.hourly_forecast[18].temp.english;
            var onenine = data.hourly_forecast[19].temp.english;
            var twenty = data.hourly_forecast[20].temp.english;
            var twoone = data.hourly_forecast[21].temp.english;
            var twotwo = data.hourly_forecast[22].temp.english;
            var twothree = data.hourly_forecast[23].temp.english;

            var hzero = data.hourly_forecast[0].FCTTIME.hour;
            var hone = data.hourly_forecast[1].FCTTIME.hour;
            var htwo = data.hourly_forecast[2].FCTTIME.hour;
            var hthree = data.hourly_forecast[3].FCTTIME.hour;
            var hfour = data.hourly_forecast[4].FCTTIME.hour;
            var hfive = data.hourly_forecast[5].FCTTIME.hour;
            var hsix = data.hourly_forecast[6].FCTTIME.hour;
            var hseven = data.hourly_forecast[7].FCTTIME.hour;
            var height = data.hourly_forecast[8].FCTTIME.hour;
            var hnine = data.hourly_forecast[9].FCTTIME.hour;
            var hten = data.hourly_forecast[10].FCTTIME.hour;
            var heleven = data.hourly_forecast[11].FCTTIME.hour;
            var htwelve = data.hourly_forecast[12].FCTTIME.hour;
            var hthirteen = data.hourly_forecast[13].FCTTIME.hour;
            var hfourteen = data.hourly_forecast[14].FCTTIME.hour;
            var hfifteen = data.hourly_forecast[15].FCTTIME.hour;
            var hsixteen = data.hourly_forecast[16].FCTTIME.hour;
            var hseventeen = data.hourly_forecast[17].FCTTIME.hour;
            var honeeight = data.hourly_forecast[18].FCTTIME.hour;
            var honenine = data.hourly_forecast[19].FCTTIME.hour;
            var htwenty = data.hourly_forecast[20].FCTTIME.hour;
            var htwoone = data.hourly_forecast[21].FCTTIME.hour;
            var htwotwo = data.hourly_forecast[22].FCTTIME.hour;
            var htwothree = data.hourly_forecast[23].FCTTIME.hour;





            //hourly data passing to html
            var zeroo = $('#zeroo');
            zeroo.html(hzero + ":00-<br>" + zero + "&deg;");
            var onee = $('#onee');
            onee.html(hone + ":00-<br>" + one + "&deg;");
            var twoo = $('#twoo');
            twoo.html(htwo + ":00-<br>" + two + "&deg;");
            var threee = $('#threee');
            threee.html(hthree +":00-<br>" + three + "&deg;");
            var fourr = $('#fourr');
            fourr.html(hfour + ":00-<br>" + four + "&deg;");
            var fivee = $('#fivee');
            fivee.html(hfive + ":00-<br>" + five + "&deg;");
            var sixx = $('#sixx');
            sixx.html(hsix + ":00-<br>" + six + "&deg;");
            var sevenn = $('#sevenn');
            sevenn.html(hseven + ":00-<br>" + seven + "&deg;");
            var eightt = $('#eightt');
            eightt.html(height + ":00-<br>" + eight + "&deg;");
            var ninee = $('#ninee');
            ninee.html(hnine + ":00-<br>" + nine + "&deg;");
            var tenn = $('#tenn');
            tenn.html(hten + ":00-<br>" + ten + "&deg;");
            var elevenn = $('#elevenn');
            elevenn.html(heleven + ":00-<br>" + eleven + "&deg;");
            var twelvee = $('#twelvee');
            twelvee.html(htwelve + ":00-<br>" + twelve + "&deg;");
            var thirteenn = $('#thirteenn');
            thirteenn.html(hthirteen + ":00-<br>" + thirteen + "&deg;");
            var fourteenn = $('#fourteenn');
            fourteenn.html(hfourteen + ":00-<br>" + fourteen + "&deg;");
            var fifteenn = $('#fifteenn');
            fifteenn.html(hfifteen + ":00-<br>" + fifteen + "&deg;");
            var sixteenn = $('#sixteenn');
            sixteenn.html(hsixteen + ":00-<br>" + sixteen + "&deg;");
            var seventeenn = $('#seventeenn');
            seventeenn.html(hseventeen + ":00-<br>" + seventeen + "&deg;");
            var oneeightt = $('#oneeightt');
            oneeightt.html(honeeight + ":00-<br>" + oneeight + "&deg;");
            var oneninee = $('#oneninee');
            oneninee.html(honenine + ":00-<br>" + onenine + "&deg;");
            var twentyy = $('#twentyy');
            twentyy.html(htwenty + ":00-<br>" + twenty + "&deg;");
            var twoonee = $('#twoonee');
            twoonee.html(htwoone + ":00-<br>" + twoone + "&deg;");
            var twotwoo = $('#twotwoo');
            twotwoo.html(htwotwo + ":00-<br>" + twotwo + "&deg;");
            var twothreee = $('#twothreee');
            twothreee.html(htwothree + ":00-<br>" + twothree + "&deg;");








        }






    });
      $("#cover").fadeOut(250);



  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});

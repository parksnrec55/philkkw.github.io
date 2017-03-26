$('#searchbox').keyup(function(){
  var value = $('#searchbox').val();
  var rExp = new RegExp(value, "i");
    $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
      console.log(data);
      // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="https://api.wunderground.com/api/f2d1c7032fa51e18/geolookup/conditions/forecast/hourly' + val.l + '.json" title="Click to get weather for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    });
    output += '</ol>';
    $("#searchResults").html(output);
    $("#searchResults").on("click", "a", function (evt) {
      evt.preventDefault();
      var urltest = $(this).attr('href');
      console.log(urltest);
      $.getJSON( urltest, function( weatherdata ) {
        $("#searchResults").hide();
        console.log(weatherdata);

        var location = weatherdata['location']['city'];
        var state = weatherdata['location']['state'];
        //var high = data['forecast']['simpleforecast']['forecastday[0]']['high']['farenheit'];
        console.log(weatherdata.forecast.simpleforecast.forecastday[0]);
        var forecast = weatherdata.forecast.simpleforecast.forecastday[0];
        var dayhigh = forecast.high.fahrenheit;
        var forecastConditions = forecast.conditions;
        console.log(dayhigh);
        var daylo = forecast.low.fahrenheit;
        var current = weatherdata['current_observation']['weather'];
        var currenticon = weatherdata['current_observation']['icon_url'];
        var currentTemp = weatherdata['current_observation']['temp_f'];
        console.log(currenticon);
        var feels_like = weatherdata['current_observation']['feelslike_f'];
        var pressure = weatherdata['current_observation']['pressure_in'];
        var precipitation = weatherdata['current_observation']['precip_today_string'];
        var windspeed = forecast.avewind.mph;
        var windir = forecast.avewind.dir;
        var clat = weatherdata['location']['lat'];
        var clong = weatherdata['location']['lon'];
        var zippy = weatherdata['location']['zip'];

        var city = $('#city');
        city.html("Forecast for " + location + ", " + state);
        document.title = location + ", " + state + " | WeatherBlast";
        var hightemp = $('#hightemp');
        hightemp.html("High: " + dayhigh + "&deg;<sup>F</sup>");
        var lotemp = $('#lotemp');
        lotemp.html("Lo: " + daylo + "&deg;<sup>F</sup>")
        var conditionsnow = $('#conditionsnow');
        conditionsnow.html("Now: " + current + " | " + currentTemp + "&deg;<sup>F</sup>");
        var foreCond = $('#foreCond');
        foreCond.html("Today's Forecast: " + forecastConditions);
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
        var zero = weatherdata.hourly_forecast[0].temp.english;
        var one = weatherdata.hourly_forecast[1].temp.english;
        var two = weatherdata.hourly_forecast[2].temp.english;
        var three = weatherdata.hourly_forecast[3].temp.english;
        var four = weatherdata.hourly_forecast[4].temp.english;
        var five = weatherdata.hourly_forecast[5].temp.english;
        var six = weatherdata.hourly_forecast[6].temp.english;
        var seven = weatherdata.hourly_forecast[7].temp.english;
        var eight = weatherdata.hourly_forecast[8].temp.english;
        var nine = weatherdata.hourly_forecast[9].temp.english;
        var ten = weatherdata.hourly_forecast[10].temp.english;
        var eleven = weatherdata.hourly_forecast[11].temp.english;
        var twelve = weatherdata.hourly_forecast[12].temp.english;
        var thirteen = weatherdata.hourly_forecast[13].temp.english;
        var fourteen = weatherdata.hourly_forecast[14].temp.english;
        var fifteen = weatherdata.hourly_forecast[15].temp.english;
        var sixteen = weatherdata.hourly_forecast[16].temp.english;
        var seventeen = weatherdata.hourly_forecast[17].temp.english;
        var oneeight = weatherdata.hourly_forecast[18].temp.english;
        var onenine = weatherdata.hourly_forecast[19].temp.english;
        var twenty = weatherdata.hourly_forecast[20].temp.english;
        var twoone = weatherdata.hourly_forecast[21].temp.english;
        var twotwo = weatherdata.hourly_forecast[22].temp.english;
        var twothree = weatherdata.hourly_forecast[23].temp.english;

        var hzero = weatherdata.hourly_forecast[0].FCTTIME.hour;
        var hone = weatherdata.hourly_forecast[1].FCTTIME.hour;
        var htwo = weatherdata.hourly_forecast[2].FCTTIME.hour;
        var hthree = weatherdata.hourly_forecast[3].FCTTIME.hour;
        var hfour = weatherdata.hourly_forecast[4].FCTTIME.hour;
        var hfive = weatherdata.hourly_forecast[5].FCTTIME.hour;
        var hsix = weatherdata.hourly_forecast[6].FCTTIME.hour;
        var hseven = weatherdata.hourly_forecast[7].FCTTIME.hour;
        var height = weatherdata.hourly_forecast[8].FCTTIME.hour;
        var hnine = weatherdata.hourly_forecast[9].FCTTIME.hour;
        var hten = weatherdata.hourly_forecast[10].FCTTIME.hour;
        var heleven = weatherdata.hourly_forecast[11].FCTTIME.hour;
        var htwelve = weatherdata.hourly_forecast[12].FCTTIME.hour;
        var hthirteen = weatherdata.hourly_forecast[13].FCTTIME.hour;
        var hfourteen = weatherdata.hourly_forecast[14].FCTTIME.hour;
        var hfifteen = weatherdata.hourly_forecast[15].FCTTIME.hour;
        var hsixteen = weatherdata.hourly_forecast[16].FCTTIME.hour;
        var hseventeen = weatherdata.hourly_forecast[17].FCTTIME.hour;
        var honeeight = weatherdata.hourly_forecast[18].FCTTIME.hour;
        var honenine = weatherdata.hourly_forecast[19].FCTTIME.hour;
        var htwenty = weatherdata.hourly_forecast[20].FCTTIME.hour;
        var htwoone = weatherdata.hourly_forecast[21].FCTTIME.hour;
        var htwotwo = weatherdata.hourly_forecast[22].FCTTIME.hour;
        var htwothree = weatherdata.hourly_forecast[23].FCTTIME.hour;





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
      })

      });

  });
});

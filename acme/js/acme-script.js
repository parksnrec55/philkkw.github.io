$(function() {
    $("#nav-items").append('<li id="home"><a href="link">Home</a></li>');


  $.getJSON('js/acme.json',function(result) {
      $.each(result.navigation, function(i, nav){
          console.log(result);
          var name = result.navigation[i].nameshort;
          console.log(name);

          $("#nav-items").append('<li id="' + name.toLowerCase() + '"><a href="link">' + name + '</a></li>');
          console.log(name.toLowerCase());
          console.log("<li id=\"" + name.toLowerCase() + "\"><a href=\"#\">" + name + "</a></li>")
      })
      console.log("Success");
  }).fail(function() {
      console.log("Error");
  });
    
    $('#home').click( function( event ){
        event.preventDefault();
        $('#homecontent').hide();
      })
    $("#anvil").click( function ( event ){
        event.preventDefault();
        $("#homecontent").hide();
    })






  document.title = 'JS IS WORKING';
})

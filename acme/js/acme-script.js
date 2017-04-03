$(function() {
    $("#nav-items").append('<li><a href="link">Home</a></li>');


  $.getJSON('js/acme.json',function(result) {
      $.each(result.navigation, function(i, nav){
          console.log(result);
          var name = result.navigation[i].name;
          console.log(name);

          $("#nav-items").append('<li id="#' + name.toLowerCase + '"><a href="link">' + name + '</a></li>');
      })
      console.log("Success");
  }).fail(function() {
      console.log("Error");
  });





  document.title = 'JS IS WORKING';
  $('#nav-items').append("<li><a href=\"link\">LINKER</a></li>")
})

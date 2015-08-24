$(document).ready(function(){


              function practice (){

              }
              $("#cover").fadeOut(7000);
              $("#container").fadeIn(500);
              $("#cover").css("display","none");

              function song(){
                alert("yep");
              }

              $("h1").click(song);
              $("img").click(song);

  });
  var widget = SC.Widget(document.getElementById('song'));
  $('h1').click(function() {
    widget.pause();
  });

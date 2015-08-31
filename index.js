$(document).ready(function(){

$("#container").fadeIn(500);

/*var foo = document.getElementById("noColor");*/

function colorChange() {

  document.getElementById("noColor").id = "space";

  document.getElementById("dinoA").id="dinoB";

  document.getElementById("space").style.WebkitAnimation = "change 7s infinite";

  document.getElementById("space").style.animation = "change 7s infinite";

}

function backToWhite(){
  alert("yep");
  /*document.getElementById("space").id = "noColor";*/

}

$("#noColor").click(colorChange);
$("#space").click(backToWhite);
/*$("#dinoB").click(backToWhite);*/

});


var widget = SC.Widget(document.getElementById('dino'));
$('.content').click(function() {
  widget.toggle();
});

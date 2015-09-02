$(document).ready(function(){

  function songA(){
    if($("#grindin").is(":visible")){
    $(".music").css("display","none");
    $("header").css("display","none");
    $("#social").css("display","none");
    $("#boxA").css("display","flex");
    $("#buttonBoxA").slideToggle("slow");}


    else{

    $("#buttonBoxA").slideToggle("slow" , function(){
    $(".music").fadeIn("slow");
    $("header").css("display","");
    $("#social").css("display","");
    $("#boxA").css("display","none");}
    )}
  }

  function songB(){
    if($("#pop").is(":visible")){
    $(".music").css("display","none");
    $("header").css("display","none");
    $("#social").css("display","none");
    $("#boxB").css("display","flex");
    $("#buttonBoxB").slideToggle("slow");}


    else{

    $("#buttonBoxB").slideToggle("slow" , function(){
    $(".music").fadeIn("slow");
    $("header").css("display","");
    $("#social").css("display","");
    $("#boxB").css("display","none");}
  )}
}

function songC(){
  if($("#money").is(":visible")){
  $(".music").css("display","none");
  $("header").css("display","none");
  $("#social").css("display","none");
  $("#boxC").css("display","flex");
  $("#buttonBoxC").slideToggle("slow");}


  else{

  $("#buttonBoxC").slideToggle("slow" , function(){
  $(".music").fadeIn("slow");
  $("header").css("display","");
  $("#social").css("display","");
  $("#boxC").css("display","none");}
)}
}

function songD(){
  if($("#money").is(":visible")){
  $(".music").css("display","none");
  $("header").css("display","none");
  $("#social").css("display","none");
  $("#boxD").css("display","flex");
  $("#buttonBoxD").slideToggle("slow");}


  else{

  $("#buttonBoxD").slideToggle("slow" , function(){
  $(".music").fadeIn("slow");
  $("header").css("display","");
  $("#social").css("display","");
  $("#boxD").css("display","none");}
)}
}



            function pink(){
                $("body").css("backgroundImage","none");
                $("body").css("background-color", "rgb(255,20,147)");
                $(".music").css("color","rgb(255,20,147)");
                $("#grindin").css("color","rgb(255,200,255)");
                $(".nav li a").css("color","rgb(255,20,147)");
                $(".nav li").css("border","rgb(255,20,147)");
                $("footer").css("display","none");
              }

              function green(){
                $("body").css("backgroundImage","none");
                $("body").css("background-color", "rgb(50,205,50)");
                $(".music").css("color","rgb(50,205,50)");
                $("#pop").css("color","rgb(48,128,20)");
                $(".nav li a").css("color","rgb(50,205,50)");
                $(".nav li").css("border","rgb(50,205,50)");
                $("footer").css("display","none");
              }

              function blue(){
                $("body").css("backgroundImage","none");
                $("body").css("background-color", "rgb(0,255,255)");
                $(".music").css("color","rgb(0,255,255)");
                $("#money").css("color","rgb(0,128,128)");
                $(".nav li a").css("color","rgb(0,255,255)");
                $(".nav li").css("border","rgb(0,255,255)");
                $("footer").css("display","none");
              }

              function orange(){
                $("body").css("backgroundImage","none");
                $("body").css("background-color", "rgb(255,128,0)");
                $(".music").css("color","rgb(255,128,0)");
                $("#move").css("color","rgb(205,102,0)");
                $(".nav li a").css("color","rgb(255,128,0)");
                $(".nav li").css("border","rgb(255,128,0)");
                $("footer").css("display","none");

              }

              function normal(){
                $("body").css("backgroundImage","");
                $("body").css("background-color", "");
                $(".music").css("color","");
                $("#grindin").css("color","");
                $(".nav li a").css("color","");
                $(".nav li").css("border","");
                $("footer").css("display","");
              }




              $("#grindin p").mouseenter(pink);
              $("#pop p").mouseenter(green);
              $("#money p").mouseenter(blue);
              $("#move p").mouseenter(orange);
              $(".music p").mouseleave(normal);
              $(".first p").click(songA);
              $(".second p").click(songB);
              $(".third p").click(songC);
              $(".fourth p").click(songD);


  });

  var widget = SC.Widget(document.getElementById('SCboxA'));
  $('p').click(function() {
    widget.pause();
  });

  var widgetB=
  SC.Widget(document.getElementById('SCboxB'));
    $('p').click(function() {
      widgetB.pause();
  });

  var widgetC=
  SC.Widget(document.getElementById('SCboxC'));
    $('p').click(function() {
      widgetC.pause();
  });

  var widgetD=
  SC.Widget(document.getElementById('SCboxD'));
    $('p').click(function() {
      widgetD.pause();
  });

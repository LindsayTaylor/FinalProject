$(document).ready(function(){

  /*$(window).load(function(){
     $('#imageID').fadeOut('slow',function(){
           setTimeout(function(){
              $(this).fadeOut('slow');*/

              /*function practice (){

              }

              $("#container").fadeIn(7000);*/




              function pink(){
                $("body").css("backgroundImage","none");
                $("body").css("background-color", "rgb(255,20,147)");
                $(".music").css("color","rgb(255,20,147)");
                $("#grindin").css("color","rgb(255,200,255)");
                $(".nav li a").css("color","rgb(255,20,147)");
                $(".nav li").css("border","rgb(255,20,147)");
              }

              function green(){
                $("body").css("backgroundImage","none");
                $("body").css("background-color", "rgb(255,20,147)");
                $(".music").css("color","rgb(255,20,147)");
                $("#grindin").css("color","rgb(255,200,255)");
                $("#header").css("display","none");
              }


              function normal(){
                $("body").css("backgroundImage","");
                $("body").css("background-color", "");
                $(".music").css("color","");
                $("#grindin").css("color","");
                $(".nav li a").css("color","");
                $(".nav li").css("border","");
              }


              $("#popsound p").mouseenter(green);
              $("#grindin p").mouseenter(pink);
              $(".music p").mouseleave(normal);


  });

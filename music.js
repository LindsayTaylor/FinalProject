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

              function songA(){
                $(".music").css("display","none");
                $("header").css("display","none");
                $("#social").css("display","none");
                $("#boxA").css("display","flex");
                $("#buttonBox").slideDown("slow");

                /*$("#buttonBox").css("display","block");
                $(".buttonBox p").css("display","block");                 $("#grindinsound").css("display","block");
                $("#grindinsound p").css("display","block");
                $("iframe").css("display","block");*/
              }



              /*function toStarter(){
                /*if($(".soundcloud").css("display") == "inline-block");
                if(event.target.grindinsound) {
                    return;
                {
                  alert("yep");
                }*/


              $("#grindin p").mouseenter(pink);
              $("#pop p").mouseenter(green);
              $("#money p").mouseenter(blue);
              $("#move p").mouseenter(orange);
              $(".music p").mouseleave(normal);
              $("#grindin p").click(songA);

              $("#container").click(toStarter);


  });

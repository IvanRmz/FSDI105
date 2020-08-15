$(function(){
    "use strict";
    $("main").on({
        click: function(){
            $(this).addClass("red-bg");
        },
        mouseenter: function(){
            $(this).addClass("active");
        },
        mouseleave: function(){
            $(this).removeClass("active red-bg");
        }
    });
});

var text = $("main h2").text();
console.log(text);
$("main h2").text("Hello World");
// $("main h2").hmtl("<h1>Hello World</h1>");

//chllenge: click on the footer and change the h2 text


    $("footer").on(
        "click",
        function(){
            $("main h2").html("<h1>Ivan Ramirez</h1>");
        }
    );

    $("footer").on(
        "click",
        function(){
            $("main h2").html("<h1>Ivan Ramirez</h1>");
        }
    );
    var change = false;
    $("header #logo").on(
        "click",
        function(){
            change = !change;
            $(this).attr("src",(change ? "https://team-hamster.co.uk/wp-content/uploads/2018/07/cropped-TEAM-HAMSTER-FUNDRAISING-LOGO-VECTOR-1-1.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqsxPgQO8qjJN7M2WuyUdraFFN1ys0IqB_yw&usqp=CAU"));
        }
    );
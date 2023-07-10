"use strict"

/* 
    JQuery fur créé
*/

const btnSlide = $("#slide");

btnSlide.on("click", slideTitle);
function slideTitle() 
{
    $("h1").slideToggle(1000, function()
    {
        console.log('toggle terminé');
    })
    
    const color = btnSlide.css("background-color") == "rgb(255,0,0)" ? "green":"red";
    btnSlide.css("background-color", color);
}
$("#fade").on("click", fadeSpan);
function fadeSpan()
{
    $("h1 span").fadeToggle();
}
$("h1 span").on("mousenter mouseleave", function()
{
    if(e.type == "mousenter)")
        $(this).css("font-size", "4rem");
    else
    $(this).css("font-size", "");
});

$("document").ready(function()
{
    $("#load").on("click", function(){
        $("ol").hide(200);

        // $.ajax("") est le fetch de JQuery
        $.ajax("liste.json")
            .done(data => {
                data.forEach(d=> {
                    $("<li>").text(d).appendTo($("ol"));
                }); // fin forEach
                $("ol").show(500);
            })// fin done
            .fail(err => console.error(err))
            .always(() => console.log("requête terminée"));
    })//fin click
    $("#anime").on("click", function ()
    {
        $(this).css("position", "absolute");
        $(this).animate({
            width: "50vw",
            height: "5rem",
            top: "+=50px",
            left: "-=50px",
        }, 500)
    })
});//fin ready
<<<<<<< HEAD
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
=======
"use strict";
/* 
    JQuery fut créé en 2006 par John Resig,
    Il est représenté par la phrase "Faire plus en écrivant moins"
    Il permet de faire du JS plus rapidement et plus simplement.

    Enfin ceci était vrai à l'époque car JS a bien évolué et gère pas mal de choses maintenant.
    Ici nous allons voir certaines bases de JQuery, mais si vous souhaitez l'approfondir, 
    La documentation officiel se trouve sur "https://jquery.com"

    jquery peut être utilisé via CDN, en téléchargeant le fichier minimifié, ou via NPM.
    Quoi qu'il en soit, pensez à bien le mettre avant vos propres fichiers JS.

    JQuery reste du JS, donc toute les fonctions JS classique fonctionnent.
    Seul certains objets peuvent différer des objets JS classique.
*/

/* 
    $("") sert à la fois pour "querySelectorAll" et pour "createElement";
    $("div") selectionne toute les div.
    $("<div>") crée une nouvelle div.
*/
const btnSlide = $("#slide");
/* 
    .on() remplace le "addEventListener()"
*/
btnSlide.on("click", slideTitle);
function slideTitle()
{
    /* 
        Certains effets classiques des animations CSS, tel que "fade", "slide" ou "hide" sont implémenté de base dans jquery.
        Cela avec les méthodes "slideIn()", "slideOut()", "slideToggle()" et de même pour les autres.
        On pourra donner en argument, une durée pour l'animation, puis optionnellement une fonction à lancer une fois l'animation terminé.
    */
    $("h1").slideToggle(1000, function(){
        console.log("toggle terminé");
        /* 
            Pour accèder aux propriétés CSS avec jquery, on utilisera la méthode ".css()"
            Elle prendra 1 seul argument, si on veut récupérer la valeur.
            Et deux arguments si on veut la modifier:
                .css("color"), on va récupérer la couleur.
                .css("color", "red") on va modifier la couleur.
        */
        const color = btnSlide.css("background-color")=="rgb(255, 0, 0)"?"green":"red";
        btnSlide.css("background-color", color);
    });
>>>>>>> 24655cf326b90f96d12acf096b781d50603be2b0
}
$("#fade").on("click", fadeSpan);
function fadeSpan()
{
<<<<<<< HEAD
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
=======
    /* 
        Au contraire de javascript, si il y a plusieurs éléments selectionnés,
        jQuery s'occupera lui même d'ajouter les évènements à chacun d'entre eux.
        Pas besoin de créer de boucle.
    */
    $("h1 span").fadeToggle();
}
/* 
    Avec jquery je peux ajouter plusieurs évènements d'un coup:
*/
$("h1 span").on("mouseenter mouseleave", function(e){
    // en jquery, je n'utiliserais pas "this" mais "$(this)"
    if(e.type == "mouseenter")
        $(this).css("font-size", "4rem");
    else
        $(this).css("font-size", "");
});
/* 
    $("document").ready() est un classique de jquery,
    Il est utilisé pour attendre que le document est fini de charger avant de lancer son script.
    De nos jours un "defer" suffit.
*/
$("document").ready(function(){
    $("#load").on("click", function(){
        $("ol").hide(200);
        /* 
            $.ajax("") est le fetch de jQuery
            on le fera suivre des méthodes ".done()", ".fail()" et ".always()"
            qui sont l'équivalent de ".then()", "catch()" et "finally()"
        */
        $.ajax("liste.json")
            .done(data=>{
                data.forEach(d => {
                    /* 
                        Pour chaque donnée du tableau du fichier json,
                        je crée une nouvelle balise "li",
                        à laquelle j'insert le text de mon tableau,
                        et que j'ajoute à mon ol.

                        appendTo est l'équivalent de append en jquery,
                        si ce n'est que le parent et l'enfant sont inversé.
                    */
                    $("<li>").text(d).appendTo($("ol"));
                }); // fin foreach
                $("ol").show(500);
            }) // fin done
            .fail(err=>console.error(err))
            .always(()=>console.log("requête terminé"));
    }) // fin on click
    $("#anime").on("click", function(){
        $(this).css("position", "absolute");
        /* 
            la fonction animate de jquery diffère de celle de javascript
            Elle se contente de prendre en premier argument un objet contenant les valeurs à modifier, 
            et en second, la durée de l'animation.
            On notera qu'on peut lui donner des valeur à augmenter ou diminuer.
        */
>>>>>>> 24655cf326b90f96d12acf096b781d50603be2b0
        $(this).animate({
            width: "50vw",
            height: "5rem",
            top: "+=50px",
<<<<<<< HEAD
            left: "-=50px",
        }, 500)
    })
});//fin ready
=======
            left: "-=50px"
        },500);
    }); // fin on click
}); // fin ready
>>>>>>> 24655cf326b90f96d12acf096b781d50603be2b0

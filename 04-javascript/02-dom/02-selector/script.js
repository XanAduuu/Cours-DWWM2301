"use strict";

/* 
    document.getElementsByTagName
    permet de récupérer tous les éléments dont le nom de la balise vaut le paramètre donné:
    Ici j'ai mit en paramètre "li"
    Il est allé chercher tous les li de la page.

    Peu importe si il y a qu'un seul élément ou plusieurs, ils seront rangé dans un objet appelé "HTMLCollection".
*/
const li = document.getElementsByTagName("li");
console.log(li, li[0]);
// Pour en modifier un élément, je dois bien indiquer lequel je souhaite modifier
li[0].textContent = "Marbre";

/* 
    document.getElementsByClassName fonctionnera de la même façon que getElementsByTagName 
    Mais en prenant en paramètre non pas la balise mais une classe de l'élément.

    Là aussi, peu importe qu'il y ai qu'un seul ou plusieurs résultats,
    ils seront rangé dans l'objet HTMLCollection.
*/
const p = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(p, p1);

/* 
    getElementById va récupérer l'élément HTML qui possède l'id donné en paramètre.
    Ici on en a forcément qu'un, donc pas de HTMLCollection.
*/
const h1 = document.getElementById("mainTitle");
console.log(h1);
/* 
    querySelector va selectionner le premier élément qui correspond à son paramètre.
    En paramètre il prendra un string contenant n'importe quel selecteur CSS.
*/
const p2 = document.querySelector(".marche2");
// const p2 = document.querySelector("main > p:nth-of-type(2)");
// const p2 = document.querySelector("main > p.marche2.step");
console.log(p2);

/* 
    Pour selectionner plusieurs éléments, avec mes selecteurs CSS
    Je pourrais utiliser document.querySelectorAll

    à la différence des autres méthodes de selection, 
    on obtient pas un objet "HTMLCollection"
    Mais un tableau "NodeList"
*/
const liBis = document.querySelectorAll("footer li");
console.log(liBis, liBis[1]);

/* 
    On n'est pas obligé de faire notre recherche dans tout le document.
    Si on a déjà un élément selectionné, on peut faire notre recherche dans celui ci:
*/
const header = document.querySelector('header');
// Ici j'ai selectionné mon header, puis je cherche le h1 dans le header
const h = header.querySelector('h1');

// ? -------- quelques selecteurs bonus -----------------

// Selectionne le prochain élément frère en HTML, ici le main
console.log(header.nextElementSibling);
// Selectionne ce qui suit dans le HTML, ici un saut à la ligne.
console.log(header.nextSibling);
// Selectionne l'élément frère précédent, ici le second li.
console.log(liBis[2].previousElementSibling);
// Selectionne l'élément parent, ici le body.
console.log(header.parentElement);
// retourne un objet "HTMLCollection" contenant tous les enfants directe
console.log(header.children);
// Selectionne le parent le plus proche correspondant au selecteur CSS donné en paramètre.
console.log(liBis[1].closest("footer"));

// ? --------------- Supprimer ou déplacer -----------------
// * Si on tente d'append un élément déjà présent en HTML, il sera déplacé
// header.append(liBis[0]);
// * Supprime l'élément du HTML.
// liBis[1].remove();
// * Il existe toujours dans ma variable.
console.log(liBis);

// * Il existe aussi :
// header.removeChild(h);
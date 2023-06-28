"use strict";
// const h1 = document.getElementById("mainTitle");
const h1 = document.querySelector("#mainTitle");
console.log(h1);
/* 
    Via Javascript, on peut modifier tous les attributs de nos éléments HTML.
*/
// ? ----------------- L'attribut Style ---------------------
/* 
    Pour modifier le CSS d'un élément HTML, 
    On utilisera la propriété ".style"
    On la fera ensuite suivre du nom de la propriété CSS que l'on souhaiter changer :
        ".style.color = 'red';"
    ! Attention, les propriétés CSS en plusieurs mots, sont remplacé par une version en camelCase.
        ".style.backgroundColor = 'blue';"

    Cela ajoutera à l'élément HTML, l'attribut "style" pour placer du CSS inline,
    CSS qui aura donc la priorité sur le CSS classique.
*/
h1.style.backgroundColor = "rgb(123, 45, 98)";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0, 0, 0, 0.3)";
h1.style.fontSize = "5rem";

// * Si on se trompe sur le nom de la propriété... aucune erreur n'est envoyé.
h1.style.couleur = "blue"; // Mais cela n'aura aucun effet
// * De même si je me trompe sur la valeur :
h1.style.color = "rgbaa(255, 255, 255, 0.8)";

// ? -------------- les classes -----------------------

/* 
    Pour modifier les classes, nous avons deux propriétés possibles:
    "className" me retourne un string de toute les classes de l'élément.
    "classList" me retourne un tableau "DomTokenList" contenant toute les classes 
    "DomTokenList" possède des fonctions spécifique à la gestion de classe.
*/
console.log(h1.className, h1.classList);
// .add() ajoute la (ou les) classe passée(s) en paramètre
h1.classList.add("banane");
// .remove() retire la (ou les) classe passée(s) en paramètre
h1.classList.remove("banane");
/* 
    toggle ajoute la classe si elle n'existe pas
    ou la retire si elle existe.
    Optionnellement on peut rajouter en second paramètre, 
        un boolean qui a true l'ajoutera forcément 
        ou à false le retirera forcément.
*/
h1.classList.toggle("banane");
// .contains() retourne true si la classe passé en paramètre est présente, et false dans le cas contraire.
console.log(h1.classList.contains("banane"));

// ? --------------------- Les autres attributs -------------------
/* 
    Les autres attributs peuvent être obtenu et / ou modifié de deux façons.
        soit directement via leur nom,
        soit via les fonctions "getAttribute()" et "setAttribute()"
*/
console.log(h1.id, h1.getAttribute("id"));

h1.id += "2";
// h1.setAttribute("id", h1.getAttribute("id")+"2");

const a = document.querySelector("footer ul li a");
console.log(a);
// J'ajoute l'attribut target="_blank" à mon "a";
a.setAttribute("target", "_blank");
// Je récupère le href de mon "a"
console.log(a.getAttribute("href"));

// * Exception à cela, les data attributs vont passé par une propriété spécifique appelé "dataset"

console.log(a.dataset.color);
// Je change la valeur de mon data-color
a.dataset.color = " yellow";
// Pour créer un data-attribute supplémentaire, il me suffit d'indiquer son nom :
a.dataset.bidule = "Je ne sert à rien";
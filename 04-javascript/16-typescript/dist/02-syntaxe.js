"use strict";
/*
    Le principal apport de typescript, c'est dans son nom, c'est le typage.
    C'est à dire que comme dans de nombreux langages (java par exemple),
    Il va nous falloir indiquer le type de nos variables et arguments.
*/
const mot = "Bonjour";
const chiffre = 45;
const bool = true;
const nu = null;
/*
    On peut aussi indiquer ce que contiendra un tableau :
*/
const arr1 = ["truc", "bidule"];
/*
    Si une variable peut contenir n'importe quel type de donnée, on pourra utiliser le mot clef "any".
    Mais on évitera au maximum de l'utiliser, cela faisant perdre son sens au typage.
*/
let truc = 5;
truc = "bidule";
/*
    Si une variable ou un tableau peut contenir deux types (ou plus) précis,
    on pourra utiliser le caractère "|"
*/
const arr2 = ["truc", 34];
/*
    Pour typer un objet, cela devient un peu plus conséquent.
    On va devoir indiquer chaque propriété et chaque valeur.

    l'ajout d'un "?" sur une propriété indique qu'elle sera optionnelle.
*/
const person = { prenom: "Maurice" };
/*
    Si notre objet peut avoir des propriétés supplémentaires,
    on peut lui indiquer ainsi :
*/
const person2 = { prenom: "Charle", nom: "Dupont", age: 54 };
/*
    Ici j'ai indiquer que les noms des propriété (key) seront des strings,
    Et que leurs valeurs seront soit des string, soit nombres.

    Dans le cas d'une instanciation de classe, on peut simplement utiliser le nom de la classe comme type.
*/
const today = new Date();
/* si une fonction est placé dans une variable, il faudra aussi l'indiquer: */
const salut = function () { };
/*
    En parlant de fonction, voici le moment de typer nos arguments et valeurs de retour.
    le typage de la valeur de retour, se fait après les parenthèses de la fonction, et avant les accolades.
*/
function clickMe(e) {
    console.log("Merci de cliquer sur ", e.target);
}
// document.addEventListener("click", clickMe);
/*
    La fonction attendant un "PointerEvent",
    elle refuse l'évènement "click" qui donnera un "MouseEvent"
*/
document.addEventListener("pointerdown", clickMe);
/*
    si une fonction est déclaré dans une variable.
    On pourra typer ses arguments et valeur de retour ainsi :
*/
const compte = function (nom) {
    return nom.length;
};
/*
    On pourra aussi indiquer qu'un argument est en lecture seule.
    C'est à dire qu'il ne peut pas être modifié
*/
function tri(arg) {
    // Impossible de trier un tableau en readonly
    // arg.sort()
    // Mais je peux trier sa copie
    [...arg].sort();
}
/*
    La plupart du temps, indiquer le type d'une variable est optionnelle.
    TS est capable de le définir selon la première valeur donnée :
*/
let a = 5;
// a = "test";
/*
    Mais parfois TS peut se tromper ou avoir des doutes.
    Il faudra donc lui préciser ouvertement :
*/
// const btn1 = document.querySelector("#compte");
// btn1.style.color = "red";
/*
    Ici querySelector indique qu'il retourne soit "null" soit "Element".
    or nous savons que nous avons selectionné un "HTMLElement" qui existe belle et bien.
    
    Il existe plusieurs façon de l'indiquer à typescript :
*/
// préciser le retour de notre fonction :
const btn1 = document.querySelector("#compte");
btn1.style.color = "red";
// On aura le même résultat avec :
const btn2 = document.querySelector("#compte");
btn2.style.color = "red";
// On peut aussi annuler la possibilité que le résultat soit "null"
const btn3 = document.querySelector("#compte");
// La valeur de retour reste "Element"
// btn3.style.color = "red";
// Ou changer juste une des valeurs de retour:
const btn4 = document.querySelector("#compte");

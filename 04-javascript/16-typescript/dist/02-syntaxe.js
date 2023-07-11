"use strict";
/*
    Le principal apport de TS c'est dans son nom, c'est le typage.
    C'est a dire, comme de nombreux langages (java par exemple) il va nous falloir indiquer le type de nos variables et arguments
*/
const mot = "Bonjour";
const chiffre = 45;
const bool = true;
const nu = null;
/*
5   on peut aussi indiquer ce que contiendra un tableau:
*/
const arr1 = ["truc", "bidule"];
/*
    Si une variable peut contenir n'importe quel type de données, on pourra utiliser le mot clef "any"
    Mais on évitera au maximum de l'utiliser cela faisna tperdre son sens au typage.
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
    on va devoir indiquer chaque propriété et chaque valeur.

    L'ajout d'un "?" sur une propriété indique qu'elle sera optionnelle.

*/
const person = { prenom: "Maurice" };
/*
    SI notre objet peut avoir des propriétés supplémentaires on puet lui indiquer ainsi:
 */
const person2 = { prenom: "Charles", nom: "Dupont", age: 54 };
/*
    Ici j'ai indiqué que les noms des propriétés seront des strings et que leurs valeurs seront soit des stings soit des nombres.
    Dans de le cas d'un instanciation de classes on peut simplement utiliser le nom de la classe comme type :
*/
const today = new Date();
/*
    Si une fonction est palcée dans une variable il faudra aussi lui indiquer :
*/
const salut = function () { };
/*
    En parlant de fonction, voici le moment de typer nos arguments et valeurs de retour.
    Le typage de la valeur de retour se faire après les paranthèses de la fonction et avant les accolades
*/
function clickMe(e) {
    console.log("Merci de cliquer sur", e.target);
}
// document.addEventListener("click", clickMe);
/*
    La fonction attendant un "PointerEvent"
    elle refuse l'évènement "click" qui donnera un "mouseEvent"

*/
document.addEventListener("pointerdown", clickMe);

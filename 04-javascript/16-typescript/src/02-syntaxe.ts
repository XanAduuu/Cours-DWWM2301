"use strict";

/* 
    Le principal apport de TS c'est dans son nom, c'est le typage.
    C'est a dire, comme de nombreux langages (java par exemple) il va nous falloir indiquer le type de nos variables et arguments
*/

const mot: string = "Bonjour";
const chiffre : number = 45;
const bool: boolean = true;
const nu: null = null;

/* 
5   on peut aussi indiquer ce que contiendra un tableau:
*/

const arr1: string[] = ["truc", "bidule"];

/* 
    Si une variable peut contenir n'importe quel type de données, on pourra utiliser le mot clef "any"
    Mais on évitera au maximum de l'utiliser cela faisna tperdre son sens au typage.
*/

let truc: any = 5;
truc = "bidule";

/* 
    Si une variable ou un tableau peut contenir deux types (ou plus) précis,
    on pourra utiliser le caractère "|"

*/

const arr2: (string|number)[] = ["truc", 34];

/* 
    Pour typer un objet, cela devient un peu plus conséquent.
    on va devoir indiquer chaque propriété et chaque valeur.

    L'ajout d'un "?" sur une propriété indique qu'elle sera optionnelle.

*/

const person: {prenom:string, age?:number}= {prenom: "Maurice"};

/* 
    SI notre objet peut avoir des propriétés supplémentaires on puet lui indiquer ainsi:
 */

const person2: {prenom:string, [key:string]:string|number} = {prenom:"Charles", nom:"Dupont", age:54};

/* 
    Ici j'ai indiqué que les noms des propriétés seront des strings et que leurs valeurs seront soit des stings soit des nombres.
    Dans de le cas d'un instanciation de classes on peut simplement utiliser le nom de la classe comme type :
*/

const today: Date = new Date();

/* 
    Si une fonction est palcée dans une variable il faudra aussi lui indiquer :
*/

const salut: Function = function(){};

/* 
    En parlant de fonction, voici le moment de typer nos arguments et valeurs de retour.
    Le typage de la valeur de retour se faire après les paranthèses de la fonction et avant les accolades
*/

function clickMe(e:PointerEvent): void
{
    console.log("Merci de cliquer sur", e.target);
}

// document.addEventListener("click", clickMe);

/* 
    La fonction attendant un "PointerEvent"
    elle refuse l'évènement "click" qui donnera un "mouseEvent"

*/


document.addEventListener("pointerdown", clickMe);

/* 
    Si une fontion est déclarée dans une variable
    on pourra typer ses arguments et valeurs de retour ainsi :
*/

const compte: (nom:string)=>number = function(nom)
{
    return nom.length;
}

/* 
    On pourra ausi indiquer qu'un argument est en lecture seule
    C'est à dire, ne peut pas être modifiée
*/

function tri(arg: readonly any[]): void
{
    // Impossible de trier en read only
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
const btn1 = document.querySelector("#compte") as HTMLButtonElement;
btn1.style.color = "red";
// On aura le même résultat avec :
const btn2 = <HTMLButtonElement>document.querySelector("#compte");
btn2.style.color = "red";
// On peut aussi annuler la possibilité que le résultat soit "null"
const btn3 = document.querySelector("#compte")!;
// La valeur de retour reste "Element"
// btn3.style.color = "red";
// Ou changer juste une des valeurs de retour:
const btn4 = document.querySelector<HTMLButtonElement>("#compte");
// Ici on a bien un "HTMLButtonElement" mais il est possiblement null.
<<<<<<< HEAD
//btn4.style.color = "red";
=======
// btn4.style.color = "red";
>>>>>>> 834694e0843c26a4686215756cc7e600bf80a543

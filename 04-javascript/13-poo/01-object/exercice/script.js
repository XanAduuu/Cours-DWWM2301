<<<<<<< HEAD
"use strict"
import J from "./JustePrix.js";

J.myJustePrix;
console.log(J.myJustePrix);
document.querySelector(".appli").append(J.myJustePrix());

J.getNumber;
console.log(J.getNumber);

const input = document.querySelector("input");
input.addEventListener(input, J.startJ);



=======
import J from "./justePrix.js";

const justeP = document.querySelector("select option:nth-child(1)");

justeP.addEventListener("click", showJustePrix);

function showJustePrix()
{
    J.create();
    const input = document.querySelector("input");
    input.addEventListener("change", J.check);
}
>>>>>>> 373c85a0c1a4d94f6de58700b81b5c71d513f93d

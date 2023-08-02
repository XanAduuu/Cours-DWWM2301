import J from "./justePrix.js";

const justeP = document.querySelector("select option:nth-child(1)");

justeP.addEventListener("click", showJustePrix);

function showJustePrix()
{
    J.create();
    const input = document.querySelector("input");
    input.addEventListener("change", J.check);
}
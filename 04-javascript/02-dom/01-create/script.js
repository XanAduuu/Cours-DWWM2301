"use strict";
// --------------- DOM -----------------
/* 
    La méthode (fonction) "createElement" de l'objet "document"
    permet de créer un objet représentant une balise HTML.
    Il prendra en paramètre, un string indiquant le nom de la balise à créer.
*/
const h = document.createElement("header");
console.log(h);
// console.dir permet d'afficher le détail de l'objet sous chrome.
console.dir(h);
// l'objet obtenu existe dans notre variable, mais pas encore en HTML
const m = document.createElement("main");
const f = document.createElement("footer");
/* 
    J'indique que le html contenu dans mon header
    Devient égale au string que j'indique ici.
*/
h.innerHTML = /* html */`<h1>Super Site en JS</h1>`;
console.log(h);

f.innerHTML = /* html */ `<ul><li>MENU 1</li><li>MENU 2</li><li>MENU 3</li></ul>`;

console.log(document.body);
// On vérifie que body existe belle et bien.
if(document.body)
{
    console.log("Body est bien là !");
    /* 
        La méthode append() peut être utilisé sur n'importe quel élément HTML.
        Elle prendra en paramètre autant d'élément que souhaité,
        Que ce soit des string ou des éléments HTML.

        Elle ajoutera les éléments en paramètre à l'élément HTML qui la précède.
     */
    document.body.append(h, m, f);
}

for(let i = 0; i<5; i++)
{
    const p = document.createElement("p");
    /* 
        textContent à la différence de innerHTML n'interprêtera pas le HTML.
        exemple :
            p.textContent = "<strong>Coucou</strong>";
                Affichera : "<strong>Coucou</strong>"
            p.innerHTML = "<strong>Coucou</strong>";
                Affichera : "Coucou" en gras.
    */
    p.textContent = "<strong>Lorem</strong> ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repudiandae? Exercitationem quisquam est placeat delectus, deserunt quasi ipsam pariatur corrupti ad ab hic, sint voluptates esse quis quaerat nihil autem!";
    /* 
        appendChild a le même rôle que append
        Mais ne peut pas prendre de string
        Et ne prend qu'un seul noeud.
    */
    m.appendChild(p);
}

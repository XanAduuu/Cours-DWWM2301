"use strict";

/* 
    Le shadow DOM permet de créer un arbre DOM séparé du reste du DOM.
    Ce DOM fantôme obéit à ses propres règles, ignorant les scripts et style appliqués au DOM parent
    De même les scripts et styles appliqués au DOm fantôme n'influeront pas le DOM parent.

    Pour créer un DOM fantôme (shadow host) il suffit d'appeller sur lui la méthose "attachShadow":
        *element.attachShadow({mode:""});
        Le mode peut être "open" ou "closed"
    
        Le mode "open" rend accessible le shadowDOM depuis n'importe quel script,
        alors que "closed" le rend inaccessible.

        Cela dit la sécurité de JS laissant à désirer,
        il reste possible en trichant un peu d'accéder à un shadowDOM "closed".

*/

const open = document.querySelector('.open');
const close = document.querySelector('.close');

const shadowpen = open.attachShadow({mode:"open"});
const shadowclose = close.attachShadow({mode:"closed"});

// Accessible :
console.log(open.shadowRoot);
// Non accessible :
console.log(close.shadowRoot);


/* 
    Dans l'exemple suivant chacun des 3 h1 ne sont affectés que par le style de leur DOM

    Pour l'exemple j'utilise des feuilles de style internes, mais rien n'empêche d'en utiliser des externes.

    Le selecteur css ":host" correspondra au body de notre shadowDOM

*/

const style1 = document.createElement("style");
style1.textContent = /* CSS */
    `
        :host { text-align : right;}
        h1{ background-color: black;}
    `;
const h01 = document.createElement("h1");
h01.textContent = "Je vois des fantômes dans les ombres";
shadowpen.append(style1, h01);

const style2 = document.createElement("style");
style2.textContent = /* CSS */
    `
        :host { text-align : center;}
        h1{ text-shadow: 5px 5px 5px red;}
    `;

const h02 = document.createElement("h1");
h02.textContent = "Mon ombre cache un fantôme";
shadowclose.append(style2, h02);

/* 
    Si je tente de selectionner tous les h1 seul celui du DOM principal sera selectioné.

    Pour selectionner un élément du shadowDom il me faudra directement faire ma recherche de celui ci :
*/

const hx = document.querySelectorAll('h1');
console.log(hx);

const hx1 = shadowpen.querySelector('h1');
const hx2 = open.shadowRoot.querySelector('h1');
console.log(hx1, hx2);


/* 
    Maintenant, lion nos customs elements avec notre shadowDOM

*/

import SuperBalise from "./SuperBalise.js";
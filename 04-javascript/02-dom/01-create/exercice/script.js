"use strict";
/*  
    créer une modale en JS qui va venir se placer devant 
    le reste de la page et centré dans celle ci.
    Celle modale devra contenir un titre, un paragraphe et deux boutons
    cela en étant un minimum stylisé en css.
*/
const s = document.createElement("section");

s.innerHTML = /* html */`
<h1>Santé</h1>
<div class="section_paragraphe">
    <p>Mangez 5 fruits et légume par jour, les produits laitiers sont nos amis pour la vie, ne mangez ni trop gras, ni trop sucré, ni trop salé, l'abus d'alcool est dangereux pour la santé.</p>
</div>
<div class="block_button">
    <button>tchin tchin !</button>
    <button>Le gras c'est la vie</button>
</div>
`;
m.appendChild(s);
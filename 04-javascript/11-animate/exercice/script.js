"use strict";
/*
    Le texte doit être caché par défaut, 
    Donner l'impression de sortir de la barre au milieu
    Puis disparaître, changer le texte, faire réaparaître la barre 
    Puis refaire le slide depuis les barres avec le nouveau texte.
*/
const spans = document.querySelectorAll('span');

function blink()
{
    for(let i = 0; i < spans.length; i++)
    {
        anime2(spans[i]);
    }
}

async function anime2(sp)
{
    let indent = sp.animate({textIndent: [0]}, {duration: 2000, fill: "forwards"});
    await indent.finished;
    let blink = sp.animate({opacity: [0]}, {duration: 2000, fill: "forwards"});
    await blink.finished;
    sp.textContent = sp.dataset.text;
    blink.reverse();
    indent.play();
}
blink();
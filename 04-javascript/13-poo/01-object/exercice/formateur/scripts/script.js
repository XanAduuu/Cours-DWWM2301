"use strict";
// J'importe mes objets.
import G from "./JustePrix.js";
// je crée mes objets
const justePrix = G.create();

const select = document.querySelector('select#appli');
const appli = document.querySelector('div.appli');
// J'ajoute mon évènement et j'appelle une première fois ma fonction
select.addEventListener("input", selectAppli)
selectAppli.bind(select)();

/**
 * Affiche le projet selectionné dans le bouton select.
 */
function selectAppli()
{
    appli.firstChild?.remove();
    switch(this.value)
    {
        case "justePrix":
            appli.append(justePrix);
            break;
    }
}
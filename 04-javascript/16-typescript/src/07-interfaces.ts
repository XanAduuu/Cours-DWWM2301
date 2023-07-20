
"use strict";

/* 
    Les interfaces sont à la jonction entre les types et les classes abstraites
    à la différence de la classe abstraite, l'interface ne contient que des déclarations sans définitions.
    à la diférence des types, l'interface sera réservée aux objets.

    Les interfaces sont des plans de construction pour les classes.

    Si on tente de redéclarer un type cela entrainera une erreur
    Si on tente de redéclarer une interface cela la modifiera
*/
type chaussette = string;

// Erreur car déjà déclaré.
// type chaussette = number;

/* 
    Ici mes interfaces sont fusionnées.
*/
interface Point
{
    x: number;
    y : number;
    get(): number;

}

interface Point
{
    z: number;
}

/* 
    Avec crtl+clique je peux aller regarder les interfaces des objetx JS par exemple document.
    Si je tente d'accéder à une propriété qui n'existe paas sur document (ici chaussette)
    Ts m'indiquera une erreur
    Mais en modifiant l'interface document et indiquant que la propriété "chaussette" existe, l'erruer disparait.

    Bien évidemment cela ne modifoe pas l'obget, chaussette est undefined.
*/

interface Document
{
    chaussette: string;
}
document.chaussette;

/* 
    Sipour déclarerune interface,il suffit d'utiliser le mot clef "interface"
    Pour l'implémenter à une classe, il faudra utiliser "implements"
*/

class Point3D implements Point
{
    x = 0;
    y = 0;
    z = 0;
    get(): number
    {
        return this.x
    }
}
/* 
    On peut utiliser une interface comme type
    Et n'importe qule objet respectant les règles de l'interface sera accepté
*/

function show(p: Point){}
show(new Point3D());

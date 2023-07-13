"use strict";
/* 
    Les interfaces sont à la jonction entre les types et les classes abstraites.
    à la différence de la classe abstraite, l'interface ne contient que des déclarations, sans définition.
    à la différence des types, l'interface sera réservé aux objets.

    Les interfaces sont des plans de construction pour les classes.

    Si on tente de redéclarer un type, cela entrainera une erreur.
    Si on tente de redéclarer une interface, cela la modifiera.
*/
type chaussette = string;
// Erreur car déjà déclaré.
// type chaussette = number;
/* 
    Ici mes interfaces ont fusionnées.
*/
interface Point
{
    x: number;
    y: number;
    get(): number;
}
interface Point
{
    z: number;
}
/* 
    Avec ctrl+clique je peux aller regarder les interfaces des objets JS
    Par exemple "document".
    Si je tente d'accèder à une propriété qui n'existe pas sur document, (ici chaussette)
    TS m'indiquera une erreur.
    Mais en modifiant l'interface "Document" et indiquant que la propriété "chaussette" existe, l'erreur disparaît.

    Bien évidement, cela ne modifie pas l'objet, "chaussette" est undefined.
*/
interface Document
{
    chaussette: string;
}
document.chaussette;

/* 
    si pour déclarer une interface, il suffit d'utiliser le mot clef "interface".
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
    Et n'importe quel objet respectant les règles de l'interface sera accepté.
*/
function show(p: Point){}
show(new Point3D());

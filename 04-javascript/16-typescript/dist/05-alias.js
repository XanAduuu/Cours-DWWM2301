"use strict";
/*
    Ici j'ai déclaré un type "fruit" avec le mot clef "type"
    puis je peux utiliser ce type pour déclarer mes variables:

*/
let f = { nom: "Pomme", couleur: "rouge" };
let aF = [f, { nom: "banane", couleur: "jaune" }];
/*
    Je déclare un type "Age" que je réutilisa pour déclarer un autre type.

*/
let p = { nom: "Maurice", age: 54 };
let n = "George";
let fp = "nom";
/*
    typeof permet de créer un type qui correspond à un objet déjà créé :
    Ici "Item" vaut donc le même type que "objet".
    C'est à dire :
    {vieux:boolean, prenom:string, age:number}
*/
let objet = { vieux: true, prenom: "Maurice", age: 78 };
let p2 = { vieux: false, prenom: "Pierre", age: 23 };
// ------Generics----
function useless(arg) {
    return arg;
}
let machine = useless("Salut");
/*
    Dans ce premier cas la fonction prend n'importe quel type en argument et retourne n'importe quel type.
    Malgré tout nous voyons bien qu'elle retourne le même type que celui placé en argument, TS n'en sait rien.

    Dans un second cas, allons utiliser les generics, pour indiquer que le type reçu en argument,
    sera le même que celui retourné.

*/
function usefull(arg) {
    return arg;
}
let machine2 = usefull("Bonjour");
let machine3 = usefull(42);
function lastOf(arr) {
    return arr.at(-1);
}
let last = lastOf([23, 45, 12]);
let last2 = lastOf(["23", "45", "12"]);
/*

On peut préciser que notre generic est certes n'importe quel type,
mais qu'il doit avoir une proprité précise :

*/
function logSize(arg) {
    console.log(arg.length);
    return arg;
}
let size1 = logSize(["test"]);
let size2 = logSize("chaussette");

"use strict";
/* 
    Une des règles des développeurs,
    c'est "DRY", Don't Repeat Yourself
    TS l'a bien compris et permet de créer nos propres types ou collection de type.
*/
// ----- ALIAS -----
type Fruit = {nom: string, couleur: string};
/* 
    Ici j'ai déclaré un type "fruit" avec le mot clef "type"
    puis je peux utiliser ce type pour déclarer mes variables :
*/
let f: Fruit = {nom: "Pomme", couleur: "rouge"};
let aF: Fruit[]= [f, {nom: "banane", couleur: "jaune"}];

type Age = number|string;
type Person = {nom: string, age: Age};
/* 
    Je déclare un type "Age" que je réutilise pour déclarer un autre type.
*/
let p: Person = {nom: "Maurice", age: 54};
/* 
    Ici je déclare un type "Name" qui doit être de même type que la propriété "nom" du type "Fruit".
*/
type Name = Fruit["nom"];
let n: Name = "George";
/* 
    keyof ne donne comme possibilité de type,
    que les clefs de l'objet qui suit.
    Ici "keyof Person" indique que le type "Full" n'acceptera que les valeurs "nom" ou "age".
*/
type Full = keyof Person;
let fp: Full = "nom"

/* 
    typeof permet de créer un type qui correspond à un objet déjà créé:
    ici "Item" vaut donc le même type que "objet"
    c'est à dire :
    {vieux:boolean, prenom:string, age:number}
*/
let objet = {vieux: true, prenom: "Maurice", age: 78};
type Item = typeof objet;
let p2: Item = {vieux: false, prenom: "Pierre", age: 23};

// ----- Generics -----

function useless(arg: any): any
{
    return arg;
}
let machine = useless("Salut");
/* 
    Dans ce premier cas, la fonction prend n'importe quel type en argument
    Et retourne n'importe quel type.
    Malgré que nous voyons bien qu'elle retourne le même type que celui placé en argument, TS n'en sait rien.

    Dans un second cas, nous allons utiliser les generics, pour indiquer que le type reçu en argument, 
    sera le même que celui retourné.
*/  
function useful<Type1>(arg: Type1): Type1
{
    return arg
}
let machine2 = useful("Bonjour");
let machine3 = useful(42);
/* 
    Ici on indique que notre argument est un tableau d'un type précis.
    Et c'est ce type venant du tableau, qui est retourné.
*/
function lastOf<TypeArr>(arr: TypeArr[]): TypeArr|undefined
{
    return arr.at(-1);
}
let last = lastOf([23, 45, 12]);
let last2 = lastOf(["23", "45", "12"]);

/* 
    On peut préciser que notre generic est certes de n'importe quel type,
    mais qu'il doit avoir une propriété précise :
*/
function logSize<Type2 extends {length: number}>(arg: Type2): Type2
{
    console.log(arg.length);
    return arg;    
}

let size1 = logSize(["test"]);
let size2 = logSize("chaussette");
// let size3 = logSize(42);
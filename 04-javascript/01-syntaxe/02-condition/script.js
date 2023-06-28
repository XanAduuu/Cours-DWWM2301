"use strict";
/* 
    Math.random() retourne un chiffre aléatoire entre 0 et 1.
    Math.floor() retourne le chiffre arrondi à l'inferieur.
*/
let x = Math.floor(Math.random()*20);
console.log(x);

/* 
    Une condition commencera obligatoirement par un "if" 
    il sera suivi de parenthèses contenant la condition
    Puis d'accolades contenant l'instruction à réaliser.

    Si la condition est "true" alors l'instruction sera réalisé, 
    Si c'est false, elle sera ignoré.
*/
if(x < 10)
{
    console.log(x + " est plus petit que 10");
}
/* 
    On pourra faire suivre un if de 0 à autant que l'on souhaite de "else if()"
    Ce sont des conditions supplémentaires qui seront vérifiés uniquement si toute les précédentes sont fausses.
*/
else if(x > 10)
{
    console.log(x + " est plus grand que 10");
}
/* 
    Enfin on peut optionnellement ajouter un "else" qui ne prend aucune condition.
    Celui ci s'effectuera si tout ce qui précède est faux
*/
else
{
    console.log("x vaut 10");
}
/* 
    Si la condition n'a qu'une seule instruction à effectuer, 
    alors les accolades peuvent être oubliés.
*/
if(x < 10)
    console.log(x + " est plus petit que 10");
else if(x > 10)
    console.log(x + " est plus grand que 10");
else
    console.log("x vaut 10");

/* 
    On peut écrire une suite de condition sur une seule ligne,
    cela se nomme une ternaire.
    Il vaut mieux utiliser cela dans le cas d'opérations simples.

    syntaxe :
    condition ? true : false;
*/
let message = 
    x <= 10
    ? x + " est plus petit ou égale à 10"
    : x + " est plus grand que 10";
console.log(message);
// Attention de ne pas aller trop loin avec les ternaires au risque de perdre en lisibilité.
message = 
    x < 10 
    ? x + ' est plus petit que 10'
    : x > 10
    ? x + " est plus grand que 10"
    : "x vaut 10";
console.log(message);

// ? --------------- SWITCH -----------------------
// prompt affiche une boîte de dialogue où l'utilisateur peut rentrer un texte.
let ville = prompt("De quel ville venez-vous?");
// Si l'utilisateur appui sur "annulé" la valeur retourné sera "null"
console.log(ville);
// Si on a aucune réponse, on fixe une valeur différente à notre variable.
if(ville == null) ville = "pas de réponse";

/* 
    switch permet de vérifier plusieurs cas, 
    il prendra une variable entre ses parenthèses
    Puis autant de "case" que l'on souhaite,
        chacun représentera une valeur possible de notre variable.
        il sera suivi des instructions voulu puis d'un "break" qui mettra fin au "case"
    Ici on utilise ".toLowerCase()" pour mettre notre string en minuscule et ne pas avoir à tester tout les cas possibles (paris, Paris, PARIS...)
*/
switch(ville.toLowerCase())
{
    // Plusieurs cas sans break pour les séparer, entrainera la lecture de tout le code jusqu'au prochain break;
    case "londre":
    case "tokyo":
    case "paris":
        console.log("De la capital donc.");
        break;
    case "lille":
        console.log("La capital du nord");
        break;
    default:
        console.log('Je ne connais pas cette ville');
}

// ? ------------- Opérateur de chainage optionnelle (?.)-------------
let obj = {info: "Cet objet est un exemple", superInfo: {a:"rien"}},
    obj2 = {},
    obj3 = null;
/* 
    Ajouter un "?" avant de tenter de chaîner une propriété
    permet de vérifier si la propriétés précédente existe belle et bien.
    Cela peut éviter des erreurs comme tenter d'obtenir une propriété sur "undefined"
*/
console.log(
    obj.info,
    obj.info.superInfo,
    obj.fake?.superInfo,
    obj2.info,
    obj3?.info
);
/* 
    if(ville == null) ville = "pas de réponse";
    switch(ville.toLowerCase())

    remplaçable par :

    switch(ville?.toLowerCase())
*/
// ? ----------- opérateur de Coalescence (??) -------------------
let a, b = undefined, c = null, d = "J'aime la pizza à l'ananas";
/* 
    L'opérateur de Coalescence va vérifier si la variable précédente est 
    null ou undefined, si c'est le cas alors il affichera la valeur suivante, 
    sinon ce sera la valeur de la variable qui sera utilisé.
*/
console.log(
    a ?? "Coucou",
    b ?? "Coucou",
    c ?? "Coucou",
    d ?? "Coucou"
);
/* 
    if(ville == null) ville = "pas de réponse";

    remplaçable par :

    ville = ville ?? "pas de réponse"; 
*/
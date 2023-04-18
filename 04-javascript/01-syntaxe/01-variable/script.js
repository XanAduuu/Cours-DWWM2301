"use strict";
// Commentaire sur une seule ligne.
/* 
    Commentaires sur plusieurs lignes
    "use strict" indique au navigateur de ne pas corriger automatiquement les petites erreurs qu'il trouve,
    Ceci est totalement optionnel

    Une instruction (une ligne de code) JS peut optionnellement se terminer par ";"
    Si il n'est pas présent, c'est le saut à la ligne qui mettra fin à l'instruction.
*/
// ? --------------- Déclaration des variables -----------------
/* 
    Il existe trois mots clefs pour déclarer une variable.
    Les variables peuvent contenir n'importe quel lettre, des chiffres, et autres mais ne peuvent pas commencer par un chiffre.
*/
let banane;
// let est le mot clef le plus conseillé pour déclarer des variables.
console.log("banane :", banane);

var tomate;
// var crée des variables avec une portée plus grande.
const cerise = 5;
// * const crée une constante, donc une variable qui ne peut pas changer. Elle doit être définie en même temps que sa déclaration.
// cerise = 3; ceci retourne une erreur.

// * Je peux déclarer plusieurs variables d'un seul coup en les séparant d'une virgule :
let a, b, c;

// * On ne peut pas redéclarer une variable déjà existante :
// let a; ceci est donc une erreur

// * Je peux définir mes variables directement lors de la déclaration
var d, e = 4, f = 1;

// ? ---------------- La Portée des variables -------------------

let gLet = 1;
var gVar = 1;
{
    let hLet = 2;
    var hVar = 3;
    // Dans mon bloc, toute mes variables sont accessible.
    console.log(gLet, gVar, hLet, hVar);
    {
        // Dans mon bloc enfant, elles sont toujours accessible.
        console.log(gLet, gVar, hLet, hVar);
    }
}
// Erreur car hLet n'est pas défini
// console.log(gLet, gVar, hLet, hVar);
// Le reste est valide.
console.log(gLet, gVar, hVar);
// les déclaration en let restent dans leurs bloques et leurs descendants,
// Celles en var sont accessible partout.
// * const suit les mêmes règles que let.

{
    // On peut redéclarer des variables existante si cela se fait dans un block différent.
    let gLet = 5;
    var gVar = 5;
    console.log("Dans le block :", gLet, gVar);
}
// let reprend la valeur de sa version hors du block, alors que var a remplacé son ancienne version.
console.log("Hors du block :", gLet, gVar);

// ? ------------------ Types des variables --------------------
let num = 5,
    str = "Coucou",
    bol = true,
    arr = [],
    obj = {},
    und;

// La fonction typeof permet de vérifier le type d'une variable.
console.log("num", typeof num); // type number
console.log("str", typeof str); // type string
console.log("bol", typeof bol); // type boolean
console.log("arr", typeof arr); // type object
console.log("obj", typeof obj); // type object
console.log("und", typeof und); // type undefined

// il existe donc 5 types principaux en JS.
// les tableaux et les objets ([] et {}) bien qu'ayant un fonctionnement différent sont tous les deux de type "object"

// Javascript est un langage dit "non typé". C'est à dire que ses variables n'ont pas besoin d'être typé lors de la déclaration, et qu'elles peuvent changer à tout moment :
bol = 42;
console.log("bol MaJ", typeof bol);

// ? ------------------- chaîne de caractères -------------------
let s1 = "Coucou",
    s2 = 'Coucou',
    s3 = `Coucou`;
// Pour définir un string, on utilisera au choix "", '' ou ``;
// "" et '' n'ont aucune différence dans leur utilisation.

s1 = "L'apostrophe ne pose pas de problème ici";
s2 = 'L\'apostrophe pose un problème ici';
s1 = "Le grand ordinateur à dit \"42\"";
s2 = 'Le grand ordinateur à dit "42"';

/* 
    utiliser "" ou '' peut être utile si on a besoin de l'autre dans notre string, 
    Mais si on n'a pas le choix, on peut "échaper" un caractère en plaçant devant lui "\"
    Cela rendra le caractère inoffensif
*/

s1 = "Karl";
// En JS, le symbole de la concaténation est +
s2 = "Bonjour " + s1 + " Comment vas tu?";
console.log(s2);
// Mais on peut aussi obtenir ce même résultat avec l'interpolation.
s3 = `Bonjour ${s1} Comment vas tu?`;
console.log(s3);
// L'interpolation ne fonctionne qu'avec ``
console.log("Bonjour ${s1} Comment vas tu?");

// s1 = "Je ne peux pas
// sauter de ligne";
s3 = `Je peux très bien
    sauter des lignes`;
console.log(s3);

// ? ------------ les nombres -----------------------
// Javascript perd en précision sur les grands nombres.
console.log(9_999_999_999_999_999);
// * On peut utiliser "_" pour créer des espaces dans les nombres et faciliter la lecture.
// Il peut aussi avoir des résultats étranges avec certains nombres à virgule.
console.log(0.2 + 0.1);

// Les opérations standards disponibles sont :
console.log(
    5 + 5,
    5 - 5,
    5 * 5,
    5 / 5,
    5 % 5,
    5 ** 5
);
// % (modulo) représente le reste de la division.
// ** représente la puissance.
console.log(
    5 + "5",
    5 - "3",
    5 + "Banane",
    5 - "Banane"
);
// Si on tente d'additioner un chiffre et un string, cela deviendra une concatenation.
// Si on tente de soustraire un string à un nombre, si ce string est un nombre, aucun problème, mais si ce sont des lettres, on obtiendra "NaN"
// Not a Number
console.log(typeof NaN);
// isNan est une fonction qui répondra true si le paramètre est "NaN" et false dans le cas contraire.
console.log(isNaN(5-"chaussette"), isNaN(5-"1"));
// Infinity représente le plus grand nombre géré par JS
console.log(Infinity, -Infinity);

let n = 0;
n += 5; // équivaut à n = n + 5
n-=2;
n*=3;
n/= 4;
n %= 3;
n **= 2;
console.log(n);

n++ // équivaut à n += 1
n-- // équivaut à n -= 1
++n
--n
/* 
    Incrémenter (++) ou décrémenter (--) permet de modifier la valeur d'un nombre de 1.
    Les symboles peuvent être placé avant ou après la variable.
    Si ils sont placé avant, la modification sera faite puis le chiffre retourné,
    Si ils sont placé après, le chiffre originel sera retourné puis l'augmentation sera faite.
*/
console.log("n++",n++);
console.log("n",n);
console.log("++n",++n);
console.log("n",n);

n = 17;
// toString permet de transformer un nombre en string.
console.log(n, n.toString());
// On peut optionnellement ajouter un paramètre pour changer la base mathématique.
console.log(n, n.toString(2));

// Et inversement on peut transformer un string en nombre avec parseInt
let s = "10011101";
console.log(parseInt(s, 2));
s = "42";
console.log(parseInt(s));

// ? --------------- Les tableaux / array -------------------

let a1 = [5, "Truc", true],
    a2 = new Array(5, "Truc", true);
console.log(a1, a2);
/* 
    Pour accéder à un élément du tableau, 
    il me faut faire suivre la variable contenant le tableau, 
    de crochets [] dans lesquels j'indique l'index que je souhaite voir.
*/
console.log(a1[1]);
// .length indique la taille du tableau.
console.log(a1.length);
// Pour obtenir le dernier élément d'un tableau de taille variable.
console.log(a1[a1.length-1]);
// Depuis Ecmascript 2022 :
console.log(a1.at(-1));
// Cela fonction aussi avec un string :
console.log("Salut".at(-1), "Salut"[2]);

// push ajoute un élément à la fin du tableau.
a1.push("Bidule");
console.log(a1);
// pop retire le dernier élément du tableau.
a1.pop()
console.log(a1);
// shift retire le premier élément du tableau.
a1.shift();
console.log(a1);
// unshift ajoute un élément au début du tableau.
a1.unshift(42);
console.log(a1);

let a3 = [4, 1, 42, 8, 14];
// sort permet de trier par ordre alphabétique, mais pour les nombres...
a3.sort();
console.log(a3);
// Il sera possible d'améliorer "sort" mais on verra cela avec le cours sur les fonctions.

// Il est aussi possible d'ajouter un élément au tableau en lui indiquant l'index à prendre :
// a1[5] = "pomme";
// Mais si celui ci laisse des espaces vide ils seront comblé par des "empty slot"
a1[a1.length] = "pomme";

console.log(a1);
// Si on veut copier un tableau, on pourrait imaginer faire ceci :
let a4 = a1;
console.log(a4);
a4.push("Super Tableau !");
/*  
    Mais on se retrouve avec nos deux tableaux modifiés.
    Ce que contient notre variable n'est pas un tableau, 
    mais l'adresse où se trouve notre tableau dans la mémoire de l'ordinateur.
    Donc en copiant a1, on a copié l'adresse, et les deux variables pointent vers le même tableau.
*/
console.log(a1, a4);

let a5 = [...a1];
a5.push("Super Clone !");
console.log(a1, a5);
/* 
    Le spread operator "..." permet de décomposer un tableau.
    c'est à dire qu'il va afficher les différentes valeurs du tableau séparés d'une virgule.

    dans let a5 = [...a1];
    Je lui indique de créer un nouveau tableau [] dans lequel je met les mêmes valeurs que contenait mon tableau a1.
*/
console.log(a1, ...a1);
// Je peux aussi m'en servir pour fusionner des tableaux.
let a6 = ["pizza", ...a5, "pomme", "banane"];
console.log(a6);
// sans le spread operator, je me retrouve avec un tableau dans un tableau, un tableau multidimensionnel
let a7 = ["pizza", a5, "pomme", "banane"];
console.log(a7);
// Pour accèder à une valeur d'un tableau multidimensionnel, il me suffit d'écrire les différents index, les uns après les autres :
console.log(a7[1][3]);
// On peut avoir autant de tableau multidimensionnel que voulu :
let a8 = [[[[[["Coucou"]]]]]];
console.log(a8, a8[0][0][0][0][0][0]);

// Pour échanger des valeurs d'un tableau, il faudra passer par une variable temporaire.
let tmp = a7[0];
a7[0] = a7[3];
a7[3] = tmp;
console.log(a7);
// Ou alors :
[a7[0], a7[3]] = [a7[3], a7[0]];
console.log(a7);

// ? ------------- les objets -------------------------
/* 
    Les objets ressemblent aux tableaux mais utilise {} au lieu de [].
    Au lieu d'être indexé numériquement, on utilisera des noms de propriétés.
    ici par exemple, la propriété "nom" vaut "Dupont".
*/
let o1 = {nom: "Dupont", age: 45, loisir: ["bowling", "mahjong"]};
console.log(o1);
// Pour accèder à une propriété de mon objet, il me suffit de faire suivre sa variable d'un "." puis du nom de la propriété.
console.log(o1.nom, o1.age, o1.loisir);
// Je peux aussi utiliser la même notation que pour les tableaux :
console.log(o1["nom"], o1["age"], o1["loisir"]);

console.log(o1.loisir[0], o1["loisir"][0]);

let o2 = {vegetal: {legume: {haricot: {couleur: "vert"}}}};
// On peut avoir autant d'objet inseré dans d'autres objets que l'on souhaite.
console.log(o2.vegetal.legume.haricot.couleur);

// Comme pour les tableaux, on ne peut le copier aussi simplement que cela:
let o3 = o1;
o3.signe = "Balance";
console.log(o1, o3);
// Il nous faudra là aussi utiliser le spread operator.
let o4 = {...o1};
o4.signe = "Scorpion";
console.log(o1, o4);

// On peut transformer un tableau en objet :
console.log({...a1});
// Mais on ne peut pas faire l'inverse aussi facilement.

o4.yeux = "Vert";
/* 
    Dans le cas d'une fusion d'objet, les propriétés uniques sont ajouté mais dans celles qui sont en commun, 
    c'est la valeur qui arrive en dernière qui est gardé.
*/
let o5 = {...o1, ...o4};
console.log(o5);

// ? ------------- Les Booleans ------------------------
// Les booleans n'acceptent que deux valeurs, soit "true", soit "false".
let b1 = true, b2 = false;

// Mais il existe bien des manières de les faire apparaître :
// "Plus petit" ou "plus grand" que
console.log("1 < 2 :", 1 < 2 );
console.log("1 > 2 :", 1 > 2 );
// "Plus petit ou égale" ou "plus grand ou égale"
console.log("1 <= 2 :", 1 <= 2 );
console.log("1 >= 2 :", 1 >= 2 );
// Pour vérifier si une valeur est égale à, on utilisera 2 fois "="
console.log('1 == "1"', 1 == "1" );
// Avec 3 "=" il va comparer si le type est le même aussi
console.log('1 === "1"', 1 === "1" );
// Avec un "!" on va vérifier si cela est différent.
console.log('1 != "1"', 1 != "1" );
console.log('1 !== "1"', 1 !== "1" );

// On peut inverser un résultat en le faisant précéder d'un "!"
console.log("b1 :", b1, "b2 :", b2);
console.log("!b1 :", !b1, "!b2 :", !b2);

// On peut aussi vérifier plusieurs cas à la fois avec "et" et "ou" qui sont représentés par "&&" et "||"
console.log(true && true, true && false, false && true, false && false);
console.log(true || true, true || false, false || true, false || false);

// Il est aussi possible de regrouper certains résultats entre parenthèse.
console.log(
    true || (false && false),
    (true || false) && false
);

// On peut "court-circuiter" un code, c'est à dire empêcher l'execution d'une partie du code avec && et ||
let nb = 0;
// dans le cas d'un "&&" si le premier est faux, le second ne sera pas vérifié
console.log(true && ++nb, nb);
console.log(false && ++nb, nb);
// Dans le cas d'un "||" si le premier est true, le second ne sera pas vérifié.
console.log(true || ++nb, nb);
console.log(false || ++nb, nb);

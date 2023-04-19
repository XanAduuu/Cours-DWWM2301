"use strict";
/* 
    Pour déclarer une fonction, on utilisera le mot clef "function"
    suivi du nom de la fonction, 
    des parenthèses qui accueillerons de possibles arguments.
    puis enfin des accolades contenant le corps de la fonction.

    Une fonction simplement déclaré ne lancera aucun code.
    Pour lancer le code il faudra l'appeler.
    Pour cela on écrira son nom suivi de parenthèse.

    JS va lire une première fois le code et déclarer toute les fonctions,
    Puis relire le code et effectuer les actions demandés, 
    C'est à dire que l'on peut appeler une fonction avant sa déclaration.
    C'est une bonne pratique de placer toute les fonctions ensemble, soit en bas soit en haut du code.
*/
salut();
function salut()
{
    console.log("salut: Bonjour tout le monde !");
}
salut();
/* 
    Il existe d'autres façons de déclarer une fonction.
    à noter que toute ces autres façons, ne peuvent être appelé qu'après leurs déclaration.

    On peut ranger dans une variable, une fonction "anonyme"
    C'est à dire une fonction qui n'a pas de nom.
    Pour l'appeler on utilisera le nom de la variable.
*/
const salut2 = function()
{
    console.log("salut2: Salut les gens !");
}
salut2();
/* 
    Plutôt qu'une fonction anonyme, on pourra utiliser une fonction fléchée
    C'est à dire une fonction dont le mot clef "function" disparait
    pour laisser place à une "=>" entre la parenthèse et les accolades.
*/
const salut3 = ()=>
{
    console.log("salut3: Coucou le peuple !");
}
salut3();
/* 
    je peux aussi déclarer ma fonction en tant que propriété d'un objet.

    Si une fonction fléchée n'a qu'une seule instruction à faire,
    Je peux me passer des accolades.
*/
const salut4 = {
    salut: ()=>console.log("salut4: Hello World !")
}
salut4.salut()
// Possible, mais jamais vu, dans un tableau :
const salut5 = [
    function()
    {
        console.log("salut5: test");
    }
];
salut5[0]();

// ? ------------ les paramètres (ou arguments) ---------------
/* 
    Lorsque l'on place un argument dans la déclaration d'une variable.
        (entre parenthèses)
    lors de son appelle, les données placés entre les parenthèses seront transmise à l'argument de la fonction.
*/
function bonsoir(nom)
{
    if(nom === undefined)
    {
        console.error("Donne moi un fichu argument !");
    }
    console.log("Bonsoir "+ nom);
}
// Ici romain est transmit à l'argument "nom"
bonsoir("Romain");
// Si il manque des arguments, ceux ci seront déclaré comme "undefined"
bonsoir();
// Si trop d'arguments sont fournis, ils seront juste ignorés.
bonsoir("Maurice", "Romain");
/* 
    Chaque nouvel argument est séparé d'une virgule.
    De même pour l'appel de la fonction,
    Le premier paramètre de l'appel ira au premier argument,
    le second au second et ainsi de suite.
*/
function bonneNuit(nom1, nom2)
{
    // Bonus: ajouter du css au console.log :
    console.log("%cBonne nuit "+ nom1 + " et "+nom2, "color:blue; font-size: 4rem;");
}
bonneNuit("Patrick", "Raphael");
/* 
    On peut indiquer une valeur par défaut à un ou plusieurs paramètres.
    Pour cela je ferais suivre le nom de l'argument par un "=" puis par sa valeur par défaut.

    Si aucune valeur n'est fourni, le paramètre prendra sa valeur par défaut.
    Si une valeur est fourni, la valeur par défaut sera oublié au profit de la dite valeur.
*/
function goodBye(nom1, nom2 = "les autres")
{
    console.log("Good bye " + nom1+" et "+nom2);
}
goodBye("Kevin");
goodBye("Kevin", "Alan");
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

// console.log(1,2,4,5,23,234,43,21);
/* 
    Parfois on a besoin qu'une fonction prenne un nombre infini de paramètre.
        (comme le cas du console.log())
    Pour cela, il suffit que le dernier paramètre de la fonction soit précédé du rest operator "..."
        Cela va créer un tableau contenant tous les paramètres supplémentaires.
*/
function goodMorning(...noms)
{
    // console.log(noms);
    // toString transforme un tableau en string
    console.log("Good Morning "+noms.toString());
    // join fait de même mais en changeant le séparateur.
    console.log("Good Morning "+noms.join(" et "));
}
goodMorning("Pierre", "Paul", "Jacques", "Karl");

// ? ---- Mettre fin à une fonction, renvoyer une information ----

/* 
    On peut parfois avoir besoin de mettre fin à une fonction avant la fin de celle ci.
    Ou bien alors de retourner une information que l'on pourra utiliser ailleurs.
    Ces deux cas utilisent le même mot clef, qui est "return";
*/
function insulte(nom)
{
    if(nom == undefined)
    {
        console.error("Donne moi un nom !");
        // Placer un return seul, mettra fin à la fonction sans autre effet
        return;
        // console.log("Je ne m'affiche pas");
    }
    // Si le return est suivi d'une valeur, la fonction prendra fin en retournant cette valeur.
    return nom + " Le Poltron !";
}
insulte();
// La valeur retourné est ensuite utilisable dans une variable ou une autre fonction.
let newName = insulte("Bob");
console.log(newName);
console.log(insulte("Bil"));
/* 
    Les fonctions fléchées avec une seule instruction (sans accolade)
    ont un "return" implicite.
    C'est à dire que cette seule instruction est retourné même si le mot clef return n'est pas écrit
*/
const add = (a,b)=>a+b;
console.log(add(4,8));

// ? ----------------- Fonction callback --------------------

/* 
    Certaines fonctions, prennent en paramètre, non pas un string, un number ou autre, mais une autre fonction.
    C'est ce qu'on appelle, une fonction callback.

    Un exemple que l'on a déjà pu voir, c'est "forEach"

    Lorsque l'on met une fonction en callback d'une autre fonction, 
    on se contente d'écrire son nom, sans les parenthèses.
*/
let pr = ["Alice", "Ariel", "Mulan", "Belle"];
pr.forEach(bonsoir);
// On peut aussi utiliser une fonction anonyme
pr.forEach(function(princesse)
{
    console.log("Bienvenue "+ princesse);
});
// Ou une fonction fléchée.
pr.forEach(princesse=>console.log("Bonjour Bonjour "+ princesse));
/* 
    On peut utiliser des paramètres de fonction comme étant eux même des fonctions.
    C'est ainsi que l'on crée des fonctions callback.
*/
function compliment(salutation, nom)
{
    salutation(nom+" le magnifique");
}
// Ici "salutation" devient égale à la fonction "bonsoir"
compliment(bonsoir, "Greg");
// Là "salutation" devient égale à ma fonction fléchée.
compliment(nom=>console.log("Guttentag "+ nom), "Hanz");

// ? --------------- fonction récurcive ---------------------
/**
 * Une fonction récurcive qui s'appelle elle même pour créer un décompte.
 * @param {number} x nombre de départ
 */
function décompte(x)
{
    console.log(x--);
    if(x < 0)return;
    décompte(x);
}
décompte(5);
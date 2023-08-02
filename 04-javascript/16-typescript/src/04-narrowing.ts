"use strict";

/* 
    Le narrowing c'est le fait de réduire les possibilités de type pour nos variables
*/

function birthday(age: string|number): string
{
    // age++
    // Age peut être un string, donc l'incrémentation est une erreur
    if(typeof age === "number")
        age++;
    else
        age = parseInt(age)+1;

    return age + "ans";
}

function chaussette(droite:string|boolean, gauche:string|number): void
{
    if(droite === gauche)
        console.log("vous avez la paire !", droite, gauche);
}

function planning(date: Date|string, days: string[]|number): void
{
    if (date instanceof Date)
        date.getDate();
    if(!Array.isArray(days))
        days++
}

function clavier(e:KeyboardEvent|HTMLElement)
{
    if(typeof e === "number")
        console.log(e);

/* 
    Ici "e" est de type "never"
    Ce type indique que selon TS
    il est impossible d'arriver ici.
*/
}

/* 
    Si j'indique que ma fonction de vérification retourne un boolean
    Ts sera incapable de comprndre le role de ma fonction et ce qu'elle retourne
    En tant qu'humain, on comprend que ce boolean représente le fait de savoir si 
    notre argument est une date, mais TS lui ne comprend pas cette logique.

    On indique donc, 
    plutot que "boolean",
    que "argument is date", disant ainsi clairement à TS,
    que la valeur de retour représente la vérification d'un type.

*/

// function isDate(a:any): boolean
function isDate(a: any): a is Date
{
    return a instanceof Date;
}

function check(a:Date|HTMLElement)
{
    if(isDate(a))
        console.log(a.getDate());
}

"use strict";


/**
 * Affiche un message de salutation de la console
 * @return {void}
 * 
 */

export default function bonjour()
{
    console.log("bonjour les gens");
}

/**
 * Affiche un message de salutation de la console
 * @return {void}
 * 
 */

export function salut()
{
    console.log("Salut la population !");
}

/**
 * Affiche un message de salutation de la console
 * @param {string} name nom de la personne
 * @return {void}
 * 
 */


export function coucou(name)
{
    parler(name, "Coucou tout le monde !");
}

/**
 * Affiche un message de dans la console précédé du nom de la personne
 * 
 * @param {string} nom nom de la personne
 * @param {string} text message de la personne
 * @return {void}
 * 
 */

function parler(nom, text)
{
    console.log(`${nom} : ${text}`);
}

console.log("Salutation importé !");
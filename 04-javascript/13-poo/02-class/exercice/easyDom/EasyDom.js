"use strict";

export default class EasyDom
{
    constructor(){}
    /**
     * Créer une balise avec les attributs donnés
     * @param {string} tagName nom de la balise
     * @param {Object} attribute attibuts de la balise
     * @returns {HTMLElement}
     */
    tag(tagName, attribute = {})
    {
        const element = document.createElement(tagName);
        for(let attr in attribute)
        {
            switch(attr)
            {
                case "html":
                    element.innerHTML = attribute[attr];
                    break;
                case "text":
                    element.textContent = attribute[attr];
                    break;
                default:
                    element.setAttribute(attr, attribute[attr]);
            }

        }
        return element;
    }
    /**
     * Selectionne les éléments HTML choisi.
     * @param {string} selector selecteur CSS
     * @param {HTMLElement} parent élément HTML dans lequel rechercher
     * @returns {HTMLElement|NodeListOf<HTMLElement>}
     */
    select(selector, parent = document)
    {
        const elements = parent.querySelectorAll(selector);
        if(elements.length === 1)
        {
            return elements[0];
        }
        return elements;
    }
    /**
     * Ajoute un écouteur d'évènement sur un ou plusieurs élément HTML
     * @param {HTMLElement|NodeListOf<HTMLElement>} tags Élément HTML sur lequel ajouter un écouteur d'évènement.
     * @param {string} evenement Évènement à écouter
     * @param {Function} fonction Fonction callback à lancer.
     * @returns {void}
     */
    event(tags, evenement, fonction)
    {
        if(tags instanceof HTMLElement)
        {
            tags.addEventListener(evenement, fonction);
            return;
        }
        tags.forEach(t=>{
            t.addEventListener(evenement,fonction);
        })
    }
}
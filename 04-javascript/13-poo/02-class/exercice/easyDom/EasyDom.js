"use strict"

export default class EasyDom
{
constuctor(){}
/**
 * 
 * @param {string} tagName 
 * @param {Object} attribute
 * @returns {HTMLElement}
 */

    tag(tagName, attribute = {})
    {
        const element = document.createElement(tagName);
        for(let attr in attribute)
        {   
            switch (attr)
            {
                case "html" :
                    element.innerHTML = attribute[attr];
                    break;
                
                case "text" :
                    element.textContent = attribute[attr];
                    break;
                
                //default: 
                    //element.addEventListener
            }

        }
    }
    /**
     * Selectionne les élements HTML choisis
     * @param {string} selector 
     * @param {HTMLElement} parent 
     * @returns {HTMLElement|NodeListOf<HTMLElement>}
     */
    select(selector, parent = document)
    {
        const elements = parent.querySelectorAll(selector);
        if(elements.length === 1)
        {
            return elements[0] ;
        }
        return elements;
    }
    /**
     * Ajoute un écouteur d'évènement sur un ou plusieurs éléments HTML
     * @param {HTMLElement|NodeListOf<HTMLElement>} tags 
     * @param {string} evenement 
     * @param {Function} fonction 
     * @returns {void}
     */
    event(tags, evenement, fonction)
    {
        if(tags instanceof HTMLElement)
        {
            tags.addEventListener(evenement,fonction );
            return;
        }
        tags.forEach(t=>{
            t.addEventListener(evenement,fonction );
        })
    }

}
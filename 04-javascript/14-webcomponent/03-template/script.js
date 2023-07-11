"use strict"

const blogTemplate = document.querySelector("#blog");

const blogArticle = blogTemplate.content

const blogTitle = blogArticle.querySelector("h2");
const blogText = blogArticle.querySelector("p");
const blogSource = blogArticle.querySelector("a");

async function getBlog()

{
    const response = await fetch("blog.json");
    if(!response.ok) return;
    const articles= await response.json();
    articles.forEach(a => {
        blogTitle.textContent= a.title;
        blogText.textContent= a.content;
        blogSource.textContent = a.source;
        blogSource.href = a.source;

        const clone = blogArticle.cloneNode(true);

        document.body.append(clone);

    });

}
getBlog();


/* 
si les templates sont utilisables seuls;
les slots eux accompagnent forcément le shadowDOM

on va donc tester cela sur un webcomponent

en insérant des balises "slot" avec des attributs "name"
Puis en liant ce template au shadowDomd'un customElement

lorsque je vais appeler mon customElement si je place des balises HTML
ayant un attribut slot correspondanr a un des attribits name
alors celle ci viendra remplacer le slot

Ainsi il est possible d'insérer des éléments variables à nos templates
 */

import SuperCard from "./SuperCard.js";
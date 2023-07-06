"use strict";

export default class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        super();
        this.#setStyle();
        this.addEventListener("click", this.hide);
    }
    #setStyle()
    {
        this.style.display = "block";
        this.style.overflow = "hidden";
        this.style.backgroundColor = this.getAttribute("bg")??"red";
        this.style.transition = "height 0.3s linear";
        
        this.size = this.getBoundingClientRect();
        this.style.height = this.size.height+"px";
    }
    hide()
    {
        if(this.style.height == "1rem")
            this.style.height = this.size.height+"px";
        else
            this.style.height = "1rem";
    }
    // Cycle de vie juste pour l'exemple :
    connectedCallback()
    {
        console.log('Élément ajouté à la page')
    }
    disconnectedCallback()
    {
        console.log('Élément supprimé du DOM')
    }
    adoptedCallback()
    {
        console.log('Élément déplacé dans le document')
    }
    attributeChangedCallback(name, old, now)
    { 
        console.log(`L'attribut "${name}" est passé de : ${old} à ${now}`)
        if(name = "bg") 
            this.style.backgroundColor = this.getAttribute("bg");
    }
    static get observedAttributes(){ return ["bg", "style"] };
}
customElements.define("super-div", SuperDiv, {extends: "div"});
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
        this.style.transition = "height 0.3 s linear";

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
        console.log('Element ajouté à la page')
    }
    disconnectedCallback()
    {
        console.log('Element supprimé du DOM')
    }
    adoptedCallback()
    {
        console.log('Element déplacé dans le document')
    }
    attributeChangedCallback(name, old, now)
    {
        console.log(`L'attribut "${name}" est passé de : ${old} à ${now}`)
    }

    static get observedAttributes(){ return ["bg", "style"]};

}
customElements.define("super-div", SuperDiv, {extends: "div"});
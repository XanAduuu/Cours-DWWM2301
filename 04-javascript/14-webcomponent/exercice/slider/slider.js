"use strict";

export default class Slider extends HTMLElement
{
    /** Tableau contenant les boutons suivants et précédent du slider */
	#btns = [];
	/** Tableau contenant les points du slider */
	#dots= [];
	/** Tableau contenant toute les images du slider */
	#items= [];
    /** index de l'image actuellement active */
    #index = 0;
    /**
     * Génère un slider.
     */
    constructor()
    {
        super();
        this.attachShadow({mode:"open"})
        let images = JSON.parse(this.getAttribute("img"));
        this.slider = this.#create(images);
        const style = document.createElement("link");
        style.setAttribute("href","./slider/slider.css") ;
        style.setAttribute("rel","stylesheet");
        this.shadowRoot.append(style, this.slider);
    }
	/**
	 * Crée le slider avec autant d'élément qu'en contient 
	 * le tableau donné en argumant.
	 * @param {Array<String>} imgs Tableau contenant les sources des différentes images
	 * @returns {HTMLDivElement} div contenant le slider
	 */
	#create(imgs){
		// Crée mon slider.
		const container = document.createElement("div");
		container.classList.add("slider-container");

		const dots = document.createElement("div");
		dots.classList.add("dots");

		imgs.forEach((img, i)=>{
			const div = document.createElement("div");
			div.classList.add("items", "fade");

			const image = document.createElement("img");
			image.src = img;
			div.append(image);

			const dot = document.createElement("span");
			dot.classList.add("dot");
			dot.dataset.id = i;
			dots.append(dot);

			container.append(div);
			this.#dots.push(dot);
			this.#items.push(div);
		})
		container.append(dots);

		const next = document.createElement("a");
		next.classList.add("next");
		next.innerHTML = "&#10095;";
		this.#btns.push(next);

		const prev = document.createElement("a");
		prev.classList.add("prev");
		prev.innerHTML = "&#10094;";
		this.#btns.push(prev);

		container.append(next, prev);
		this.#init()
		return container;
	}
	/**
	 * Affiche un élément de mon slider correspondant à l'index 
	 * donnée en paramètre et cache les autres.
	 * @param {number} n index de l'image à afficher
	 */
	#showItems(n){
		// Affiche un élément de mon slider et cache les autres.
		this.#index = n> this.#items.length -1 ? 0: n<0? this.#items.length-1: n;
		
		this.#items.forEach((item, i)=>{
			item.style.display = "none";
			this.#dots[i].classList.remove("active");
		})

		this.#items[this.#index].style.display = "block";
		this.#dots[this.#index].classList.add("active");
	}
	/**
	 * Affiche l'image correspondant au bouton cliqué.
	 * @param {MouseEvent} e évènement au clique.
	 */
	#currentItem(e){
		// Affiche l'image qui correspond au point.
		let n = parseInt(e.target.dataset.id);
		this.#showItems(n);
	}
	/**
	 * Affiche l'image suivante ou précédente selon le bouton cliqué.
	 * @param {MouseEvent} e évènement au clique
	 */
	#changeItem(e){
		if(e.target.classList.contains("next")){
			this.#showItems(++this.#index);
		}else{
			this.#showItems(--this.#index);
		}
	}
	/**
	 * Ajoute les écouteurs d'évènement sur les boutons 
	 * Affiche la première image
	 */
	#init(){
		// Affiche la première image et ajoute les écouteurs d'évènment.
		this.#showItems(0);
		this.#dots.forEach(dot=>dot.addEventListener("pointerdown", this.#currentItem.bind(this)));
		this.#btns.forEach(btn=>btn.addEventListener("pointerdown", this.#changeItem.bind(this)));
	}
}
customElements.define("nwm-slider", Slider);
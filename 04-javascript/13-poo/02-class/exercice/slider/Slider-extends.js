"use strict";
import ED from "../easyDom/EasyDom.js";

export default class Slider extends ED
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
     * @param {Array<string>} images tableau de chemin vers des images
     */
    constructor(images)
    {
        super();
        this.slider = this.#create(images);
    }
	/**
	 * Crée le slider avec autant d'élément qu'en contient 
	 * le tableau donné en argumant.
	 * @param {Array<String>} imgs Tableau contenant les sources des différentes images
	 * @returns {HTMLDivElement} div contenant le slider
	 */
	#create(imgs){
		// Crée mon slider.
        const container = this.tag("div", {class:"slider-container"});
        const dots = this.tag("div", {class:"dots"});

		imgs.forEach((img, i)=>{
            const div = this.tag("div", {class:"items fade"});

            const image = this.tag("img", {src:img});
			div.append(image);

            const dot = this.tag("span", {class:"dot", "data-id":i});
			dots.append(dot);

			container.append(div);
			this.#dots.push(dot);
			this.#items.push(div);
		})
		container.append(dots);

        const next = this.tag("a", {class:"next", html: "&#10095;"});
		this.#btns.push(next);

        const prev = this.tag("a", {class:"prev", html: "&#10094;"});
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
        this.event(this.#dots, "pointerdown", this.#currentItem.bind(this));
        this.event(this.#btns, "pointerdown", this.#changeItem.bind(this));
	}
	/**
	 * Ajoute un style par défaut dans le head du document.
	 */
	static style(){
        const style = this.tag("style", {text: /* css */
`.slider-container {
	width: 100%;
	/*aspect-ratio: 16/9;*/
	height: 100%;
	position: relative;
	margin: auto;
}

.slider-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.slider-container .items {
	width: 100%;
	height: 100%;
	display: none;
}
/* Next & previous buttons */
.slider-container .prev,
.slider-container .next {
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	margin-top: -22px;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
	user-select: none;
}
.slider-container .next {
	right: 0;
	border-radius: 3px 0 0 3px;
}
.slider-container .prev:hover,
.slider-container .next:hover {
	background-color: rgba(0, 0, 0, 0.8);
}
.slider-container .dots{
	width: 100%;
	position: absolute;
	bottom: 0;
	text-align: center;
}
.slider-container .dot {
	cursor: pointer;
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
}

.slider-container .active,
.slider-container .dot:hover {
	background-color: #717171;
}`});
		document.head.append(style);
	}
}
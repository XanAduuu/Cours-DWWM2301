"use strict";
export class Slider extends HTMLElement{
    #btns = [];
    #dots = [];
    #items = [];
	#index = 0;
    constructor(){
		super();
		this.attachShadow({mode: 'open'}).appendChild(sliderTemplate.content.cloneNode(true));
		let images = JSON.parse(this.getAttribute("img"))
        this.carousel = this.#create(images);
		this.shadowRoot.append(this.carousel);
		this.init()
    }
    #create(imgs) {
		const container = document.createElement("div");
		container.classList.add("carousel-container");
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
		const prev = document.createElement("a");
		prev.classList.add("prev");
		prev.innerHTML = "&#10094;";
		this.#btns.push(next);
		this.#btns.push(prev);
		container.append(next, prev);
		return container;
    }
    #showItems(n){
		// Affiche un élément de mon carousel et cache les autres.
		this.#index = n> this.#items.length -1 ? 0: n<0? this.#items.length-1: n;
		this.#items.forEach((item, i)=>{
			item.style.display = "none";
			this.#dots[i].classList.remove("active");
		})
		this.#items[this.#index].style.display = "block";
		this.#dots[this.#index].classList.add("active");
	}
	#currentItem(e){
		// Affiche l'image qui correspond au point.
		let n = parseInt(e.target.dataset.id);
		this.#showItems(n);
	}
	#changeItem(e){
		if(e.target.classList.contains("next")){
			this.#showItems(++this.#index);
		}else{
			this.#showItems(--this.#index);
		}
	}
	init(){
		// Affiche la première image et ajoute les écouteurs d'évènment.
		this.#showItems(0);
		this.#dots.forEach(dot=>dot.addEventListener("pointerdown", this.#currentItem.bind(this)));
		this.#btns.forEach(btn=>btn.addEventListener("pointerdown", this.#changeItem.bind(this)));
	}
}
// TODO : Ajouter le HTML qui ne change pas directement dans le template.
const sliderTemplate = document.createElement('template');
sliderTemplate.innerHTML = /* HTML */`
    <link rel="stylesheet" href="./nwmCollection/slider/slider.css">
`;
customElements.define('nwm-slider', Slider);
"use strict"
import ED from "./EasyDom.js";

const ed = new ED

// Je crée une div avec 3 classes, un id et du html.
const div = ed.tag("div", {
class: "truc bidule machin",
id: "chaussette",
html: "test"
});
// Je récupère un élément html
const span = ed.select("span#specialSpan");
// Je récupère une collection d'élément html.

const spans = ed.select("span");
// J'ajoute un évènement sur une collection d'élément html
ed.event(spans, "click", (e)=>console.log("collection"));
// J'ajoute un évènement sur un seul élément html.
ed.event(span, "click", (e)=>console.log("unique"));
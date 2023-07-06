"use strict" 

import S from "./Slider.js";

S.style();

const slider = new S([
    "/ressources/images/paysage/sea.jpg",
    "/ressources/images/paysage/lava.jpg"]);
document.body.append(slider.slider);

const slider2 = new S([
    "/ressources/images/paysage/space.jpg",
    "/ressources/images/paysage/ville.jpg",
]);
document.body.append(slider2.slider);
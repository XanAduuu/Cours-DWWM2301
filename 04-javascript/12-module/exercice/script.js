"use strict";
<<<<<<< HEAD
const images = [
    "../../../ressources/images/paysage/lava.jpg",
    "../../../ressources/images/paysage/phare.jpg",
    "../../../ressources/images/paysage/sea.jpg"];
=======

const images = [
    "../../../ressources/images/paysage/lava.jpg",
    "../../../ressources/images/paysage/montagne.jpg",
    "../../../ressources/images/paysage/phare.jpg"
];
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910

window.addEventListener("click", addSlider);

async function addSlider()
{
    const sliderJs = await import("./slider.js");
    const slider = sliderJs.create(images);
    document.body.append(slider);
    sliderJs.default();
    window.removeEventListener("click", addSlider);
}
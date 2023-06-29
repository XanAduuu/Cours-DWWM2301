"use strict";
const images = [
    "../../../ressources/images/paysage/lava.jpg",
    "../../../ressources/images/paysage/phare.jpg",
    "../../../ressources/images/paysage/sea.jpg"];

window.addEventListener("click", addSlider);

async function addSlider()
{
    const sliderJs = await import("./slider.js");
    const slider = sliderJs.create(images);
    document.body.append(slider);
    sliderJs.default();
    window.removeEventListener("click", addSlider);
}
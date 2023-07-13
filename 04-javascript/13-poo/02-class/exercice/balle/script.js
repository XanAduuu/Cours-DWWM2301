"use strict";
import B from "./Balle.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const balles = [];

function resize()
{
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}
resize();
window.addEventListener("resize", resize);

canvas.addEventListener("click", ()=>balles.push(new B(canvas)));

function animation()
{
    ctx.clearRect(0,0, canvas.width, canvas.height);
    balles.forEach(balle=>balle.draw());
    requestAnimationFrame(animation);

}
// setInterval(animation, 10)
animation();
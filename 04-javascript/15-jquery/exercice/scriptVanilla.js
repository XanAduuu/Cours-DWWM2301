"use strict";
let idInterval;
document.addEventListener("DOMContentLoaded",function (event) 
{
    document.querySelectorAll("#slider ul li:nth-child(odd)").forEach(function(elem)
    {
        elem.style.background = "#aaa";
    })
    document.querySelector("#checkbox").addEventListener("change",function () {
        if(this.checked){
            idInterval = setInterval(moveRight, 1500);
        }else{
            clearInterval(idInterval)
        }
        
    });

    let slider = document.querySelector("#slider ul");
    let slideCount = slider.querySelectorAll("li").length;
    let slideWidth = slider.querySelector("li").offsetWidth;
    let slideHeight = slider.querySelector("li").offsetHeight;
    let sliderUlWidth = slideCount * slideWidth;

    document.querySelector("#slider").style.width = slideWidth+"px";
    document.querySelector("#slider").style.height = slideHeight+"px";

    slider.style.width = sliderUlWidth + "px";
    slider.style.marginLeft = -slideWidth + "px";

    slider.insertBefore(slider.lastElementChild, slider.firstChild);

    function moveLeft() {
        /* setTimeout(function(){
            slider.insertBefore(slider.lastElementChild, slider.firstChild)
        }, 200) */
        const anime = slider.animate({left:[0,slideWidth+"px"]}, {duration: 200, fill: "forwards"});
        anime.onfinish = ()=>{
            anime.cancel();
            slider.prepend(slider.lastElementChild);
        }
    };

    function moveRight() {
        /* slider.style.left = -slideWidth+'px';
        setTimeout(function(){
            slider.appendChild(slider.firstElementChild)
        }, 200) */
        const anime = slider.animate({left:[0,-slideWidth+"px"]}, {duration: 200, fill: "forwards"});
        anime.onfinish = ()=>{
            anime.cancel();
            slider.append(slider.firstElementChild);
        }
    };
    document.querySelector("a.control_prev").addEventListener("click", moveLeft);
    document.querySelector("a.control_next").addEventListener("click", moveRight);

});
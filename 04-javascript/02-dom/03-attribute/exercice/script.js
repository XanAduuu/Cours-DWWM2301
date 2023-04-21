/* 
    Exercice 1 :
    Changer la taille de chaque paragraphe du main.
    chaque paragraphe doit être plus gros que le précédent.
*/
const pSize = document.getElementsByClassName("step");
for(let i = 0; i<pSize.length; i++)
{
    // Interpolation, i+15 est inséré dans le string.
    pSize[i].style.fontSize = `${i+15}px`;
    // Concatenation, i+15 est collé au string.
    // pSize[i].style.fontSize = i+15 +"px";

}

/* 
    Exercice 2 :
    Faite apparaître la modale via une transition depuis la gauche. 
*/
const aside = document.querySelector("aside");
console.log(aside);
aside.style.transition = "left 2s";
aside.style.top = "50vh";
aside.style.left = "50vw";
/* 
    Exercice 3 :
    Faite que la couleur de fond de la modale soit aléatoire à chaque rechargement de la page.
*/
const div = document.querySelector("aside > div");
// Solution 1:
div.style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
// Solution 2:
function alea()
{
    return Math.floor(Math.random()*255);
}
div.style.backgroundColor = "rgb("+alea()+","+alea()+","+alea()+")";
// Solution 3:
const randomColor = Math.floor(Math.random()*16_777_215).toString(16);
div.style.backgroundColor = "#"+randomColor;

// Solution 4:
function randColor()
{
    return `rbg(${randNumber(255)},${randNumber(255)},${randNumber(255)})`;
}
function randNumber(max)
{
    return Math.round(Math.random()*max);
}
div.style.backgroundColor = randColor();
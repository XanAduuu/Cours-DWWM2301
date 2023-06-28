/*
    Exercice 1 :

    Faire que lors de la selection d'une couleur dans la div 2
    le texte du bouton change de couleur, 
    et lors de l'appuie sur le bouton, 
    le background de la div change de couleur.
*/
const div2 = document.querySelector(".div2");
const btn2 = div2.querySelector("button");
const input = div2.querySelector("input");

input.addEventListener("change", function(){
    btn2.style.color = input.value;
});
btn2.addEventListener("click", function(){
    div2.style.backgroundColor = input.value;
});

// Bonus offert par Romain :
function random()
{
    return Math.floor(Math.random()*(255));
}

div2.addEventListener("click", function(){
    let color = 'rgb('+random()+','+random()+','+random()+')';
    div2.style.backgroundColor = color;
});
/* 
    Exercie 2 :

    Lors du clique sur le bouton de la div 3,
    faire apparaître une modale (soit déjà créé en html/ soit que l'on crée en JS)
    Cette modale doit contenir un élément permettant de la faire disparaître.
*/
const btn3 = document.querySelector(".div3 button");
const modal = document.querySelector(".modal.m2");

btn3.addEventListener("click", function(){
    // solution 1 :
    // modal.style.display = "grid";
    // solution 2 :
    modal.classList.remove("hidden");
});

const modalBtn = document.querySelector(".modal button:last-of-type");
modalBtn.addEventListener("click", function(){
    // solution 1 :
    // modal.style.display = "none";
    // solution 2 :
    modal.classList.add("hidden");
});

// Solution 3 :
function modalToggle()
{
    modal.classList.toggle("hidden");
}
btn3.addEventListener("click", modalToggle);
modalBtn.addEventListener("click", modalToggle);

/* 
    Exercice 3 :

    Faites que tous nos li dans la nav double de taille lorsque l'on clique dessus.
    puis retournent à leurs tailles d'origine si on clique de nouveau dessus.
*/
const liste = document.querySelectorAll("nav li");
for(let i =0; i<liste.length; i++)
{
    liste[i].addEventListener("click", ()=>{
        if(liste[i].style.transform == "")
        {
            liste[i].style.transform = "scale(2)";
        }
        else
        {
            liste[i].style.transform = "";
        }
    })
}
/* 
    Exercie 4 :
    
    Utilise les évènements "mouseenter" et "mousemove" pour 
    faire que lorsque l'on passe sur le span du footer, il commence à suivre la souris
    et cela jusqu'à ce que l'on clique, il retournera alors à sa position d'origine.
*/
const foo = document.querySelector("footer > span");

foo.addEventListener("mouseenter", ()=>{
    // équivalent à window.onmousemove
    onmousemove = (e)=>{
        foo.style.position = "absolute";
        foo.style.left = e.pageX + "px";
        foo.style.top = e.pageY + "px";
    }
    // bonus :
    foo.style.transform = "translate(-50%, -50%)";
});
document.body.addEventListener("click", ()=>{
    // équivalent à window.onmousemove
    onmousemove = "";
    foo.style.position = "";
})
"use strict";
/* 
    Il existe 3 façons principales d'ajouter un écouteur d'évènement.

    * la première est d'ajouter l'attribut directement dans le HTML en lui indiquant quoi faire entre guillemets :
        <p onmouseover="console.log('Salut')"></p>
    
    * La second est en selectionnant un élément HTML dans le script et en lui ajoutant l'attribut qui correspond avec une fonction :
        const p = document.querySelector('p');
        p.onmouseover = function(){ console.log("Salut") }

    * La troisième, c'est en utilisant la méthode "addEventListener":
        p.addEventListener("mouseover", function(){ console.log("Salut") });
        * Elle prend en premier paramètre, un string contenant le nom de l'évènement à écouter, et en second la fonction à lancer.
*/
function test(event)
{
    console.log(event);
}

const h1 = document.querySelector('header > h1');

h1.onclick = test;
// Si je réutilise l'attribut d'un évènement, il éffacera le précédent.
h1.onclick = ()=>
{
    console.log("J'ai remplacé l'évènement précédent.");
}

h1.addEventListener("click", test);
let x = 0;
// Les addEventListener n'effacent pas les évènements précédents.
h1.addEventListener("click", function(e)
{
    let r = Math.floor(Math.random()*360);
    e.target.style.transform = `rotate(${r}deg)`;
    x++
    if(x==5)e.target.style.color = "red";
});
/* 
    Quelque soit la méthode utilisé, il est possible de récupérer dans la fonction appelé par l'écouteur d'évènement, 
    un paramètre sous la forme d'un objet "Event" qui contiendra toute sorte d'information sur l'évènement.
        Par exemple quel élément est la cible de l'évènement.
        Ou pour un clique, la position de la souri.
        Ou pour un appui sur le clavier, quelle touche a été appuyé.

    Si on souhaite supprimer un écouteur d'évènement, 
        pour la version avec attribut :
*/
h1.onclick = "";
// Pour le addEventListener :
h1.removeEventListener("click", test);

// Petit défaut du removeEventListener, je ne peux retirer que les évènements utilisant une fonction nommé.

// ? ----------- Input et Change ----------------
const input1 = document.querySelector('.div1 input');
const btn1 = document.querySelector('.div1 button');
/* 
    la différence entre change et input se fait lors de l'activation de ceux ci:
    * change aura lieu une fois qu'on aura quitté l'input, si sa valeur a changé.
    * input s'activera au moindre petit changement de l'input (une lettre en plus ou en moins par exemple)
*/
input1.addEventListener("change", e=>console.log(e))
input1.addEventListener("input", e=>
{
    // Les éléments HTML de formulaire ont un attribut "value" contenant leur valeur actuelle.
    console.log(e.target.value);
    if(e.target.value != "")
        btn1.textContent = e.target.value;
    else
        btn1.textContent = "CLIQUE MOI !!!";
});
// ? --------------- le mot clef "this" --------------
/* 
    Le mot clef this à l'interieur d'une fonction callback d'un évènement,
    fera référence à l'élément sur lequel on a placé l'écouteur d'évènement.

    Si on prend l'exemple suivant :
        Un écouteur au clique sur une div contenant un p.
        On clique sur le p.
            e.target vaudra p
            this vaudra div

    ! Attention, this ne fonctionne pas avec les fonctions fléchés.
*/
btn1.addEventListener("dblclick", function(){console.log(this);});
btn1.addEventListener("dblclick", ()=>console.log(this));
btn1.addEventListener("dblclick", test2);
function test2(){console.log(this);}

// ? ------------------ options ----------------------
/* 
    addEventListener peut optionnellement prendre un troisième argument.
    Celui ci sera un objet pouvant contenir plusieurs propriétés:

    once: true indique que l'évènement doit être executer qu'une seule fois.
*/
btn1.addEventListener("click", ()=>{
    h1.textContent = input1.value;
}, {once:true})

const div4 = document.querySelector('.div4');
const gp = div4.querySelector('.grandParent');
const pa = div4.querySelector('.parent');
const en = div4.querySelector('.enfant');
/* 
    Si plusieurs évènements sont activés en même temps.
    JS va travailler en deux phases, 
        en premier une phase de capture qui va des éléments parents jusqu'aux éléménts enfants, vérifiant seulement les évènements qui devraient être activé.

        Puis une phase dite "de bulle" où il va remonter de l'enfant jusqu'aux parents en activant les évènements.

        Dans l'exemple ci dessous, par défaut l'ordre sera :
            enfant > parent > grand parent > conteneur

        Mais on peut ajouter à un évènement l'option "capture" à true
        ce qui provoquera l'enclenchement de l'évènement durant la phase de capture :
            conteneur > enfant > parent > grand parent
*/
div4.addEventListener("click", ()=>console.log("div4"), {capture:true});
gp.addEventListener("click", ()=>console.log("gp"));
pa.addEventListener("click", (e)=>{
    console.log("pa");
    e.stopPropagation();
    /* 
        e.stopPropagation() permet d'arrêter la suite d'évènement,
        maintenant ma suite d'évènement ne fait plus que :
        conteneur > enfant > parent
    */
});
en.addEventListener("click", ()=>console.log("en"));

const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", e=>e.preventDefault());
/* 
    preventDefault permet de stopper l'évènement par défaut,
        dans le cas d'un lien, on ne changera pas de page,
        dans le cas d'un formulaire, il ne sera pas soumis
        ...
*/
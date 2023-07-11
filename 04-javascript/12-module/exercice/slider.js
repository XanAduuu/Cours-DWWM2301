let intervalId, slider, time;
<<<<<<< HEAD

/**
 * Prend un tableau de string et retourne un slider sous la forme d'une div
=======
/**
 * Prend un tableau de string et retourne un slider sous le forme d'une div.
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
 * @param {string[]} imgs 
 * @returns {HTMLDivElement}
 */
export function create(imgs)
{
    const container = document.createElement("div");
    container.classList.add("slider-container");

    const dots = document.createElement("div");
    dots.classList.add("dots");

<<<<<<< HEAD
    imgs.forEach((img, i )=>{
=======
    imgs.forEach((img, i)=>{
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
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
    });
<<<<<<< HEAD

=======
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
    container.append(dots);

    const next = document.createElement("span");
    next.classList.add("next");
<<<<<<< HEAD
    ProgressEvent.innerHTML = "&#10095;";

    const prev = document.createElement("span");
    next.classList.add("prev");
    ProgressEvent.innerHTML = "&#10094;";

    container.append(next, prev);
    return container;

}

/**
 * Initialise le slider
 * @param {number} timing 
 */

=======
    next.innerHTML = "&#10095;";

    const prev = document.createElement("span");
    prev.classList.add("prev");
    prev.innerHTML = "&#10094;";

    container.append(next, prev);
    return container;
}
/**
 * Initialise le slider.
 * @param {number} timing 
 */
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
export default function init(timing = 3000)
{
    time = timing;
    slider = select();
    showItems(0);
<<<<<<< HEAD
=======

>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
    slider.dots.forEach(dot=>dot.addEventListener("click", currentItem));
    slider.btns.forEach(btn=>btn.addEventListener("click", changeItem));

    startInterval();
}
/**
 * retourne un objet contenant les différents éléments du slider
 * @returns {object}
<<<<<<< HEAD
 * 
 */

function select()
{
    return{
=======
 */
function select()
{
    return {
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
        dots: document.querySelectorAll(".dot"),
        items: document.querySelectorAll(".items"),
        btns: document.querySelectorAll(".next, .prev")
    }
}
/**
 * Affiche un élément du slider et cache les autres
 * @param {number} n 
 */
<<<<<<< HEAD

function showItems(n)
{
    let index = n>slider.items.length -1?0: n<0?slider.items.length -1:n;


/* 
    if(n>slider.items.length -1)


*/
console.log(index, slider, n);
slider.items.forEach((item, i)=>{
    item.style.display="none";
    slider.dots[i].classList.remove("active");
});

slider.items[index].style.display="block" ;
slider.dots[index].classList.add("active");
}

/**
 * Affiche l'image correspondant au bouton cliqué
 * @param {MouseEvent} e
 */

=======
function showItems(n)
{
    let index = n>slider.items.length -1?0: n<0?slider.items.length -1:n;
    /* 
        La ternaire ci-dessus correspond à cela :
        if(n>slider.items.length -1)
        {
            let index = 0;
        }
        else if (n<0)
        {
            let index = slider.items.length -1;
        }
        else
        {
            let index = n;
        }
    */
    slider.items.forEach((item, i)=>
    {
        item.style.display = "none";
        slider.dots[i].classList.remove("active");
    });

    slider.items[index].style.display = "block";
    slider.dots[index].classList.add("active");
}
/**
 * Affiche l'image correspondant au bouton cliqué
 * @param {MouseEvent} e 
 */
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
function currentItem(e)
{
    clearInterval(intervalId);
    let n = parseInt(e.target.dataset.id);
    showItems(n);
}
<<<<<<< HEAD


=======
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
/**
 * Affiche l'image suivante ou précédente
 * @param {MouseEvent} e 
 */
<<<<<<< HEAD

=======
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
function changeItem(e)
{
    clearInterval(intervalId);
    let n = document.querySelector(".dot.active").dataset.id;
    if(e.target.classList.contains("next"))
    {
        showItems(++n);
    }
    else
    {
        showItems(--n);
    }
    startInterval();
}
<<<<<<< HEAD

/**
 * 
 * Clique automatiquement sur le bouton next à interval régulier
 */

=======
/**
 * Clique automatiquement sur le bouton "next" à rythme régulier.
 */
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910
function startInterval()
{
    intervalId = setInterval(()=>
    {
        slider.btns[0].click();
    }, time);
<<<<<<< HEAD
}
=======
}
>>>>>>> 7f01d68f7548e99f55404d158c660193d4434910

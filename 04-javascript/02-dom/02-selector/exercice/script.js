// ------------EXO 1 ---------------
// Déplacer la modale dans le body.
const mod = document.querySelector("aside div");
console.log(mod);

document.body.append(mod);

// ----------- EXO 2 ---------------
// modifier le texte des 3 li du footer, si possible avec une boucle.
const li2 = document.querySelectorAll("footer li");
console.log(li2);
// Solution 1 :
for(let i = 0; i<li2.length; i++)
{
    li2[i].textContent = "Easy for Me!";
}
// Solution 2:
li2.forEach(textChange);
function textChange(el)
{
    el.textContent = "Ma fonction a changé le texte !";
}

// ------------ EXO 3 --------------
// Remplacer le texte des paragraphes pair.
// Solution 1 :
const p3 = document.querySelectorAll(".step:nth-child(even)");
p3.forEach(textChange);
// Solution 2:
const p4 = document.querySelectorAll(".step");
for(let i = 1; i<p4.length; i+=2)
{
    p4[i].textContent = "Salut à tous !";
}
const input = document.querySelector('#number');
input.addEventListener("input", function()
{
    let nombre = input.value;
    console.log(nombre.toFixed(2));
    // console.log(nombre.toFixed(2)); // erreur

    /* 
        Une erreur commune en  JD c'est d'oublier que même si notre input est fait pour les nombres.
        Ce qu'il nous rend c'est le nombre sous forme de sting
    */

    nombre = parseFloat(nombre);
    console.log(nombre.toFixed(2));

    /* 
        C'est entre chose ce genre d'erreur que certains devs n'apprécient pas avec les langages non typés.
        c'est pour cette raison que typescript fut créé
    */
})
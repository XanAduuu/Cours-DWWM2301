const input = document.querySelector('#number');
input.addEventListener("input", function()
{
    let nombre = input.value;
    // console.log(nombre.toFixed(2)); // erreur
    /* 
        Une erreur commune en JS, c'est d'oublier que même si notre input est fait pour les nombres.
        Ce qu'il nous rend, c'est le nombre sous forme de string.
    */
    nombre = parseFloat(nombre);
    console.log(nombre.toFixed(2));
    /* 
        C'est entre autre chose, 
        ce genre d'erreur que certains développeurs n'apprécient pas avec les langages non typé.
        C'est pour cette raison que typescript fut créé.
    */
})
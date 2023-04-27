"use strict";
/**
    1.Le champ nom d'utilisateur doit tourner au rouge si 
    il contient autre chose que des lettres, - ou _;



    2.Le champ téléphone doit passer au rouge si le ce qui est entré
    ne correspond pas à un numéro de téléphone.

    3.Le champ email doit passer au rouge si ce qui est entré ne 
    correspond pas à un email.

    4.Ajouter une barre de progression qui change de couleur
    et se rempli à chaque fois que l'utilisateur sécurise 
    un peu plus sont mdp :
        -lettre minuscule.
        -lettre majuscule.
        -chiffre.
        -caractère spécial.
        -au moins 8 caractère.
        
    5. le champ mdp bis doit tourner au rouge si il ne correspond 
    pas au champ mdp.
    (le changement au rouge peut être personalisé autrement,
    l'important est de montrer à l'utilisateur qu'il se trompe)
 */

// exercice 1, 2 et 3

/*const userInput = document.getElementById("user");
const telInput = document.getElementById("tel");
const mailInput = document.getElementById("email");
console.log(userInput, telInput);
const regName = /^[a-zA-Z0-9]+$/;
const form = document.querySelector("form");


form.addEventListener("submit", function(event){
    let tel = telInput.value;
    let email = mailInput.value;
    let username = userInput.value;
    let isValid = regName.test(username, tel, email);
    let errorTel = "Veuillez entrer un numéro de téléphone valide";
    let errorMail = "Veuillez entrer un email valide.";
    let errorName = "Veuillez entrer un nom d'utilisateur valide.";

    if (!isValid) {
        event.preventDefault()
        telInput.style.backgroundColor = "#FF0000";
        mailInput.style.backgroundColor = "#FF0000";
        userInput.style.backgroundColor = "#FF0000";
        alert(errorTel);
        alert(errorMail);
        alert(errorName);
    }
    else {
        telInput.style.backgroundColor = "";
        mailInput.style.backgroundColor = "";
        userInput.style.backgroundColor = "";
    }
});*/

// Exercice 4 :

const password = document.getElementById("pass");
console.log(password);

password.addEventListener('keyup', function() {

    const strong = password.value;

    if (strong.length === 0) {
        document.getElementsByClassName("bar");
        document.getElementsByClassName("progress").value = "0";
        return;

    }

    // Check progress
    var prog = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/]
        .reduce((memo, test) => memo + test.test(strong), 0);

    // Length must be at least 8 chars
    if (prog > 2 && strong.length > 7) {
        prog++;
    }

    // Display it
    var progress = "bar";
    var strength = "progress";
    switch (prog) {
        case 0:
        case 1:
        case 2:
            strength = "25%";
            progress = "25";
            break;
        case 3:
            strength = "50%";
            progress = "50";
            break;
        case 4:
            strength = "75%";
            progress = "75";
            break;
        case 5:
            strength = "100% - Password strength is good";
            progress = "100";
            break;
    }
    document.getElementsByClassName("bar").innerHTML = strength;
    document.getElementsByClassName("progress").value = progress;

});
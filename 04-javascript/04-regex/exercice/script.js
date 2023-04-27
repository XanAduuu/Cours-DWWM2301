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

let password = document.getElementById("pass");
let strengthBar = document.getElementsByClassName("progress")
let display = document.getElementsByClassName("bar")

password.addEventListener("keyup", function() {
    strengthChecker(password.value);
});

let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function strengthChecker(password) {
    if (strongPassword.test(password)) {
        strengthBar.style.backgroundColor = "green";
        strengthBar.textContent = 'Strong';
    } else if (mediumPassword.test(password)) {
        strengthBar.style.backgroundColor = 'blue';
        strengthBar.textContent = 'Medium';
    } else {
        strengthBar.style.backgroundColor = 'red';
        strengthBar.textContent = 'Weak';
    }
}


/**
 * var code = document.getElementById("password");

var strengthbar = document.getElementById("meter");
var display = document.getElementsByClassName("textbox")[0];

code.addEventListener("keyup", function() {
  checkpassword(code.value);
});


function checkpassword(password) {
  var strength = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;

  }

  if (password.length < 6) {
    display.innerHTML = "minimum number of characters is 6";
  }

  if (password.length > 12) {
    display.innerHTML = "maximum number of characters is 12";
  }

  switch (strength) {
    case 0:
      strengthbar.value = 0;
      break;

    case 1:
      strengthbar.value = 25;
      break;

    case 2:
      strengthbar.value = 50;
      break;

    case 3:
      strengthbar.value = 75;
      break;

    case 4:
      strengthbar.value = 100;
      break;
  }
}
 */
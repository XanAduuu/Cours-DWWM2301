"use strict";
const JustePrix = {
    myProperty: "Juste Prix",

    myJustePrix(){

        const container = document.createElement("div");
        container.classList.add("container");
        

        const p1 = document.createElement("p");
        p1.innerHTML = "Veuillez entrer un chiffre entre 0 et 20.";

        const input= document.createElement("input");
        input.classList.add("input");

        const p2 = document.createElement("p")
        p2.classList.add("p");

        container.append(p1, input, p2);
        return container;
    },

    getNumber()
    {
        let x = Math.floor(Math.random()*20);
        return x;
    },

    startJ(){

        if(x < 10)
    {
        console.log(x + " est plus petit que 10");
    }

    else if(x > 10)
    {
        console.log(x + " est plus grand que 10");
    }

    else
    {
        console.log("x vaut 10");
    }

    }

};

export default JustePrix;

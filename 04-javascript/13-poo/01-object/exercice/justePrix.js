const justePrix = {
    create()
    {
        const div = document.createElement("div");
        div.classList.add("container");

        const input = document.createElement("input");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        this.p2 = p2;
        div.append(p1, input, p2);

        const container = document.querySelector(".appli");
        container.append(div);

        p1.innerHTML = "Veuillez entrer un chiffre entre 0 et 20";
    },
    get random()
    {
        if(!justePrix.target)
        {
            justePrix.target = Math.floor(Math.random()*20);
        }
        return justePrix.target;
    },
    check()
    {
        let random = justePrix.random;
        let numberUser = this.value;

        if(numberUser > random)
        {
            justePrix.p2.textContent = "C'est moins";
        }
        else if(numberUser < random)
        {
            justePrix.p2.textContent = "C'est plus";
        }
        else
        {
            justePrix.p2.textContent = "C'est gagné !";
        }
    }
}
export default justePrix;
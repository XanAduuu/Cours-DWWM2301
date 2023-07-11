"use strict";

export default class Calculator
{
    btns = ["AC", "DEL", "÷", 1,2,3,"*", 4,5,6,"+", 7,8,9,"-",".", 0,"="];
    constructor()
    {
        this.create();
        this.clear();
    }
    create()
    {   
        // On crée la calculatrice
        const calc = document.createElement("div");
        calc.classList.add("calculator-grid");

        // On crée l'écran d'affichage
        const output = document.createElement("div");
        output.classList.add("output");

        const prev = document.createElement("div");
        prev.classList.add("previous-operand");

        const current = document.createElement("div");
        current.classList.add("current-operand");

        output.append(prev, current);
        calc.append(output);

        this.previous = prev;
        this.current = current;

        // On crée les boutons :
        for (const b of this.btns)
        {
            const btn = document.createElement("button");
            btn.textContent = b;
            calc.append(btn);
            switch(b)
            {
                case "AC":
                    btn.classList.add("span-two");
                    btn.addEventListener("click", this.clear.bind(this));
                    break;
                case "DEL":
                    btn.addEventListener("click", this.delete.bind(this));
                    break;
                case "=":
                    btn.classList.add("span-two");
                    btn.addEventListener("click", this.compute.bind(this));
                    break;
                default :
                    if (typeof b === "number" || b === ".")
                    {
                        btn.addEventListener("click", this.appendNumber.bind(this));
                    }
                    else
                    {
                        btn.addEventListener("click", this.chooseOperation.bind(this));
                    }
            }
            btn.addEventListener("click", this.updateDisplay.bind(this));
        }
        this.calc = calc;
    }
    clear()
    {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }
    delete()
    {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(e)
    {
        if(e.target.textContent === "." && this.currentOperand.includes("."))return;
        this.currentOperand = this.currentOperand.toString() + e.target.textContent.toString();
    }
    chooseOperation(e)
    {
        if(this.currentOperand==="")return;
        if(this.previousOperand!=="")this.compute();
        this.operation = e.target.textContent;
        this.previousOperand= this.currentOperand;
        this.currentOperand = "";
    }
    compute()
    {
        let computation;

        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(prev) || isNaN(current))return;
        switch(this.operation)
        {
            case "+" :
                computation = prev+current;
                break;
            case "-":
                computation = prev-current;
                break;
            case "*":
                computation = prev*current;
                break;
            case "÷":
            case "/":
                computation = prev/current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand="";
    }
    updateDisplay()
    {
        this.current.textContent = this.getDisplayNumber(this.currentOperand);

        if(this.operation != undefined)
        {
            this.previous.textContent = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
        else
        {
            this.previous.textContent = "";
        }
    }
    getDisplayNumber(number)
    {
        const stringNumber = number.toString();
        //  Je sépare ce qui se trouve avant et après la virgule
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];

        let integerDisplay;
        if(isNaN(integerDigits))
        {
            integerDisplay = ""
        }
        else
        {
            integerDisplay = integerDigits.toLocaleString("fr", {maximumFractionDigits: 0});
        }
        if(decimalDigits != null)
        {
            return `${integerDisplay},${decimalDigits}`;
        }
        return integerDisplay;
    }
}
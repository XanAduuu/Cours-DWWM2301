"use strict";
class Truc {
    /*
        Alors que JS est limité aux propriétés (et méthodes) public et private (avec un "#"),
        TS peut déclarer avec les mots clefs suivant,
            Les propriétés (et méthode) en "public", "private" et "protected".
        Si les deux premières ne changent pas de JS,
        protected est hérité comme les "public" mais accessible uniquement à l'interieur de la classe comme les "private"

        Comme tout ajout de TS, ce n'est pas traduit en JS
    */
    prenom = "Maurice";
    nom = "Dupont";
    age = 54;
}
const t = new Truc();
t.prenom;
// t.nom;
// t.age;
class Machin extends Truc {
    constructor() {
        super();
        this.prenom;
        this.nom;
        // this.age;
    }
    /*
        Si "this" vaut normalement l'objet dans lequel il se trouve,
        Dans certains cas comme l'ajout d'un event listener,
        "this" peut valoir autre chose.
        On peut donc préciser le type de "this" en l'ajoutant entre les parenthèses de la methode, comme ci il était un argument.
    */
    faireUnTruc() {
        this.textContent;
    }
}
/*
    On va pouvoir aussi utiliser les generics sur des classes.
*/
class Collection {
    items;
    /*
        En plaçant l'accesseur "private" directement en argument,
        Cela me permet d'indiquer à TS, de créer automatiquement une propriété private qui contiendra mon argument.
        C'est l'équivalent à écrire :
            private items;
            constructor(items: T[])
            {
                this.items = items;
            }
    */
    constructor(items) {
        this.items = items;
    }
    addOne(arg) {
        this.items.push(arg);
        return this;
    }
    addMore(arg) {
        this.items.push(...arg);
        return this;
    }
}
const c = new Collection([5, 2, 9, 8]);
/*
    Petite astuce de POO, qui n'est pas liée à TS,

    Lorsqu'un méthode n'a rien à retourner,
    C'est un classique de la faire retourner "this",
    cela afin que la méthode retourne l'objet lui même,
    et qu'on puisse "chaîner les méthodes"
*/
c.addOne(42).addMore([23, 34]).addOne(98);
/*
    Notre collection a été instancié avec un tableau de nombre,
    Ses méthodes n'accepterons du coup, que des nombres.
*/
class Triangle {
    c1 = 5;
    c2 = 8;
    c3 = 2;
}
class Rectangle {
    c1 = 12;
    c2 = 20;
}
function getC1(arg) {
    return arg.c1;
}
/*
    Selon TS, Triangle est un Rectangle
    Lorsque l'on donne une classe comme type d'un argument.
    TS va seulement vérifier si toute les propriétés sont présente.
    Rectangle possède c1 et c2,
    Il attend donc un objet avec au moins ces même propriétés.
    Triangle possède c1 et c2, peu importe si c3 est présent, cela reste valide
*/
getC1(new Rectangle());
// getC1(34);
getC1(new Triangle());
/*
    Une classe abstraite, est une classe qui ne peut pas être instancié.
    Son unique rôle est donc d'être hérité.
    Elle peut aussi contenir des methodes abstraite
    C'est uné méthode dont on défini les arguments, la valeur de retour,
    Mais pas son fonctionnement.
    Elle sera à définir dans l'héritier.
*/
class Polygone {
    sides = {};
    countSide() {
        return Object.keys(this.sides).length;
    }
}
// new Polygone();
class Carre extends Polygone {
    constructor(c) {
        super();
        this.sides.c = c;
    }
    surface() {
        return this.sides.c * this.sides.c;
    }
}
const square = new Carre(5);
console.log(square.surface());
console.log(square.countSide());

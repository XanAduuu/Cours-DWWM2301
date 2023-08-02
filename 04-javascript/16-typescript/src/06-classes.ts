"use strict";

class Truc 
{

    /* 
        Alors que JS est limité aux proprités et méthode public et private (avec un "#")
        TS peut déclarer avec les mots clef suivants :
            Les propriétés (et méthodes) en "public", "private" et "protected".
        Si les deux premières ne changent pas de JS,
        protected est hérité comme les "public" mais accessible uniquement à l'intérieur de la classe comme les "private"

        Comme tout ajout de TS, ce n'est pas traduit en JS.
    
    */
    public prenom = "Maurice";
    protected nom = "Dupont";
    private age = 54;
}
const t = new Truc();
t.prenom;
// t.nom;
// t.age;

class Machin extends Truc
{
    constructor()
    {
        super();
        this.prenom;
        this.nom;
        // this.age;
    }
    /* 
        Si "this" vaut normalement l'objet dans lequel il se trouve 
        Dans certains cas comme l'ajout d'un event listener
        "this" peut valoir autre chose.
        On peut donc préciser le type de "this" en l'ajoutant entre les parenthèses de la méthodes, comme si il était un argument.
    */
    faireUnTruc(this:HTMLElement)
    {
        this.textContent
    }
}

/* 
    On va pouvoir aussi utiliser les generics sur des classes.

*/

class Collection<T>
{
    /* 
        En plaçant l'accesseur "private" directement en argument,
        Cela me permet d'indiquer à TS, de créer automatiquement un propriété private qui contiendra mon argument;
        C'est l'équivalent à écrire :
        private items;
        constructor(items: T[])
        {
            this.items = items;
        }
    */
    constructor(private items: T[]){}

    addOne(arg: T): this
    {
        this.items.push(arg);
        return this;
    }
    addMore(arg: T[]): this
    {
        this.items.push(...arg);
        return this;
    }
}

const c =  new Collection([5,2,9,8]);
/* 
    petite astuce de POO, qui n'est pas liée à TS,

    Lorsqu'une méthode n'a rien à retourner
    C'est un classique de la faire retourner "this",
    Cela afin que la méthode retourne l'objet lui même
    et qu'on puisse "chainer les méthodes"
*/

c.addOne(42).addMore([23, 34]).addOne(98);

/* 
    Notre collection a été instanciée avec un tableau de nombres,
    Ses méthodes n'accepteront du coup, que des nombres.
*/

class Triangle
{
    c1 = 5;
    c2 = 8;
    c3 = 2;
}
class Rectangle
{
    c1 = 12;
    c2 = 20;
}
function getC1(arg: Rectangle)
{
    return arg.c1;
}
/* 
    Selon TS, Triangle est un Rectangle
    Lorsqu'on donne une classe comme type d'un argument
    TS va seulement vérifier si toutes les propriétés sont présentes
    Rectangle possède c1 et c2,
    Il attend donc un objet avec aumoins ces mêmes propriétés
    Triangle posséde c1 et c2, peu importe si c3 est présent, cela reste valide.

*/
getC1(new Rectangle());
// getC1(34);
getC1(new Triangle());

/* 
    Une classe abstraite est une classe qui ne peut pas être instanciée
    Son unique rôle est donc d'être héritée.
    Elle peut aussi contenir des méthodes abstraites
    C'est une méthode dont on définit les arguments, la valeur de retour,
    mais pas son fonctionnement.
    Elle sera à définir dans l'héritier.

*/

abstract class Polygone
{
    sides: {[key:string]: number}= {}
    abstract surface(): number
    countSide(): number
    {
        return Object.keys(this.sides).length;
    }
}
// new Polygone();

class Carre extends Polygone{
    constructor(c: number)
    {
        super();
        this.sides.c = c;
    }

    surface(): number
    {
        return this.sides.c * this.sides.c
    }
}

const square = new Carre(5);
console.log(square.surface());
console.log(square.countSide());

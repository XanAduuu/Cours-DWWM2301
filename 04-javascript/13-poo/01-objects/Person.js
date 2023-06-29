/* 
    La programmation orientée objet consiste à développer notre logique et nos fonctions à l'intérieur d'objets.

    La plupart des langages demandent à passer par des classes et des constructeurs, mais en JS, on peut créer nos objets manuellement

    Ce qui ne rend pas les classes inutiles, mais on verra cela plus tard.
*/

const Person = {
    name: {
        prenom: "Maurice",
        nom: "Dupont"
    },
    age: 54,
    /* 
    
    Les setters servent à paramettrer une propriété d'un objet en la filtrant par quelconques fonctions
    Cela peut permettre d'obtenir 
    
    */
    set setAge(a)
    {
        this.age = parseInt(a);
    },

    /* 
        Le mot clef "this" dans un objet faire référence à lui même
        Ici "this.age" correspond donc à la propriété "age" de notre objet "person"
    */

    set nom(n)
    {
        this.name.nom = n.toUpperCase();
    },
    set prenom(p)
    {
        this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    },

    /* 
        Comme pour le setter, nous avons les getters quie permettent de récupérer une information filtrée par quelconque fonction

        Précédé du mot clef "get", le getter "return" forcément une information.
        Et son utilisation se fait telle une propriété :
        Person.fullName; // OK
        Person.fullname(); // Error
    
    */

    get fullName(){
        return `${this.name.prenom} ${this.name.nom}`;
    },

    /* 
        Nos objets peuvent aussi contenir des fonctions,
        pour les déclarer, aucun besoin de mot clef.
        ! Attention !
        En POO on ne parle pas de variable et de fonction d'objet mais de propriétés et méthodes d'objet.
    */

    salutation()
    {
        console.log(`Bonjour, je suis ${this.fullname} et j'ai ${this.age} ans.`);
    },
    
    anniversaire()
    {
        this.age++;
        this.salutation();
    }
};

export default Person;
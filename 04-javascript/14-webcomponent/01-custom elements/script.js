"use strict";

import SuperBalise from"./SuperBalise.js";
import SuperDiv from "./SuperDiv.js"; 

/* 
    Les custom elements permettent de créer
    nos propres éléments HTML
    On va pouvoir créer de nouvelles balises avec leurs propres règles et capacités

    Il existe deux types de custom elements :
        -les éléments personnalisés auto,omes qui héritent de "HTMLElement"
        - Les élément personnalisés intégrés qui héritent d'un éléments HTML particulier (dis, span, p, li ...)

    Pour les créer, nous allons devoir définir une classe.
    Puis hors de celle ci, appeler la méthose suivante :
        * customElements.define()

    Cette méthode prendra en premier argument, un string qui sera le nom de votre balise personnalisée
        ! IMPORTANT : Les noms des balises personnalisées doivent prendre un tiret "-"

    En second argument, elle pre,dra la classe que vous avez créée.
    Optionnellement, et cela pour les éléments personnalisés intégrés,
    elle prendra le nom de la classe dont elle hérite.

    Une fois la méthode précédent appelée, pour utiliser nos balises,
    il suffit de suivre une des façons suivantes:
        -autonome : "<nom-balise></nom-balise>"
        - intégré : <baliseParent is="nom-balise"></baliseParent>


    Il est aussi possible d'ajouter des "cycles de vie" à nos éléments HTML.
    Les cycles de vie, saont des méthodes prédéfines qui se déclenchent automatoquement 
    à certains moment précis:
        - "connectedCallback()" se déclenche quand l'élément HTML est ajouté à la page.
        - "disconnectedCallback()" se déclenche quand l'élément HTML est supprimé
        - "adoptedCallback()" Se déclenche lorsque l'élément est déplacé d'un document à un autre (avec un iframe par exemple) 
        - "attributeChangeCallback" se déclenche lorsque l'attribut ciblé est modifié.
            Il prendra 3 arguments :
                _ le premier recevra le nom de l'attibut modifié
                _ le seconde la valeur de l'attribut avant nodification
                _ le troisième la valeur de l'attribut après modification
            Pour que cela fonctionne, on devra accompagner cela d'un "get static" appelé
            "observedAttributes" qui retourne un tableau contenant les attributs à observer.

*/
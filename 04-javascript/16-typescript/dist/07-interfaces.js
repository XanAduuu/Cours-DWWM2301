"use strict";
document.chaussette;
/*
    si pour déclarer une interface, il suffit d'utiliser le mot clef "interface".
    Pour l'implémenter à une classe, il faudra utiliser "implements"
*/
class Point3D {
    x = 0;
    y = 0;
    z = 0;
    get() {
        return this.x;
    }
}
/*
    On peut utiliser une interface comme type
    Et n'importe quel objet respectant les règles de l'interface sera accepté.
*/
function show(p) { }
show(new Point3D());

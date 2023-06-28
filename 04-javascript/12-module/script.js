"use strict";

/* 
    Ecmascrpt permet l'export et impory de fonctions et objets (entre autres choses).
    Cela va permettre de pouvoir diviser nos projets en plusieurs fichiers réutilisables.
    De plus cela nous évite d'avoir plusieurs balises script dans notre html que l'on doit placer dans un ordre précis pour que cela fonctionne.

    POUR UTILISER CET EXPORT IMPORT? NOTRE FICHIER PRICINCIPAL DIT ËTRE LI2 AU html AVEC l'attribut :
    * type="module"

    ? -------- Export -----


    On va ajouter l'un des mots clefs suivant devant l'élément à exporter :
        * export
        * export default

    On peut exporter autant d'éléments que l'on souhaite, mais seul l'un d'entre eux peut profiter de "export default"

    ? --------- Import ---------
    Par défaut, l'import ne peut se trouver qu'au niveau du plus haut du code.
    C'est a dire pas dans une fonction, ni boucle , ni autre.

    Sans default dans le fichier d'export, il suffit d'utiliser le mot clef "iport", suivi d'entre accolade, séparés d'une virgule, les éléments que l'on veut importer
    Enfin on met le mot clef "from" et en string le chemin vers le fichier.
        * import {salut, coucou} from "./salutation.js";

    Si un "export default" est présent, avant les accolades, on peut donner un nom (peut importe lequel) et il sera utilisé pour importer l'élément par defaut.
        * import b, {salut, coucou} from "./salutation.js";

    On peut aussi renommer les éléments importés avec le mot clef "as":
        * import {salut as s, coucou} from './salutation';

    On peut aussi tout  importer dans un seul objet qui contiendra tous nos éléments:
        * import * as salutations from "./salutation.js";

    Si du code est présent dans le fichier export, il sera exécuté lors de l'export.
*/

import b, {salut, coucou as c} from "./salutation.js";

salut();
b();
// Un élément importé peut faire appel à des éléments non importés
c("Maurice");

/* 
    Pour faire un import sans être au top level du script,
    il ne faudra pas utiliser de mot clef "import"
    mais la fonction "import()"

    celle ci retournera une promesse et cett promesse retournera un objet contenant tout ce qui a été exporté


*/

window.addEventListener("click", hello);

async function hello()
{
    const salutation = await import("./salutation.js");
    console.log(salutation);
}

/* 
    "salutation importé" n'apparait pas une nouvelle fois,
    car le script d'un fichier importé n'est évalué qu'une seule fois,
    peu importe le nombre de fois qu'on l'importe

    On notera que "export default" est rangé dans la propriété "default"

*/

salutation.default();
salutation.coucou("Pierre");
salutation.salut();
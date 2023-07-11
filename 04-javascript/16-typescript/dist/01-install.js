"use strict";
"Use strict";
/*
Typescript est une surcouche à Javascript, c'est à dire que tout ce qui est faisable en JS est faisable en typescript.

Les fichiers Typescript utilisent l'extension .ts ils ne sont donc pas lisibles pour le navigateur.
Il faudra compiler le code avnt de le donner à lire au navigateur

------- Avantage ------
TS apporte le typage cela nous force a coder avec rigueur en indiquant le type  de chaque variable, argument...
Une fois maitrisé cela nous permet d'éviter certaines erreurs et gagner du temps
Il peut aussi nous premettre d'adapter un code moderne à de vieux navigateurs
TS n'a pas besoin d'être chargé par le site donc notre projet n'est pas allourdi.

------ Inconvénients -----

On est forcé de compiler notre code
Cela rajoute un outils supplémentaire à notre projet.

----- Installation -----
l'installation se fait via npm avec la commande suivante :
    *npm install typescript --save-dev

une fois installé vous pouvais lancer la compilation d'un fichier avec :
    *(npx) tsc pathToFile.ts

C'est une bonne convention de séparer les sources et les compilations dans des dossiers différents:
    *(npx) tsc pathToFile.ts --outDir folderName

pour éviter de retaper tout ça on peut créer à la racine de notre projet un fichier :
    * tsconfig.json

Il contiendra un objet avec les propriétés suivantes :
{
    "compilerOptions": {
        "outDir": "dist"
    },
    "files":[
        "src/01-install.ts"
    ]
}

Une fois cela fait je n'aurais plus qu'a taper :
    *(npx) tsc

Et comme avec SCSS il est possible de demander à TS de surveiller nos fichiers pour les compiler à chaque sauvegarde :
et mon programme serait prêt à être exécuté sur tous les navigateurs
    *(npx) tsc --watch
*/
const btn = document.querySelector("#compte");
let i = 0;
/* btn.addEventListener("click", ()=>{
    i++;
    ici TS provoque une erreur car textContent attend un string et i est un nombre.
    btn.textContent = i;
    btn.textContent = i.toString();
}); */
/*
    Par défault ts compile pour du js un peu agé
    faisant disparaitre let, const et fonctions fléchés entre autres choses
    Pour les remplacer par des var et des fonctions anonymes

    On peut ajouter à notre fichier de config l'option suivante :
        * "target": ES2022

    Pour indiquer vers quelles version de Ecmascript la compilation doit se faire.
        ("ESNext" permet d'indiquer au compilateur d'utiliser toujours la dernière version)
    
    Si on fait une erreur sur le nom d'une varialbel TS peut nous indiquer si le nom est ressemblant, quel est le bon nom.
    Cela dit il compilera quand même le code avec l'erreur.

    On peut lui interdire la compilation si il y a une erreur avec l'option :
        * "noEmitOnError": true

 */
//btns.style.backgroundColor = "red"; // erreur sur btns au lieu de btn
/*
    Et si on veu tun code capable de gérer n'importe quelle erreur
    On peut demander à TS d'être bien plus strict sur sa detection d'erreur avec :
        * "strict": true

    Des erreurs sont apparues dans notre code, nous allons voir dans le chapitre suivant, comment corriger cela, en attendant nous pouvons commenter notre code.

*/

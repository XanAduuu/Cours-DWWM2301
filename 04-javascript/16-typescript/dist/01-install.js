"use strict";
/*
    Typescript est une surcouche à Javscript, c'est à dire que tout ce qui est faisable en JS, est faisable en typescript.

    Les fichiers typescript utilisent l'extension ".ts"
    Ils ne sont donc pas lisible pour le navigateur.
    Il faudra compiler le code avant de le donner à lire au navigateur.

    ----- Avantage -----
    TS apporte le typage, cela nous force à coder avec rigueur, en indiquant le type de chaque variable, arguments...
    Une fois maîtrisé, cela nous permet d'éviter certaines erreurs et de gagner du temps.
    Il peut aussi nous permettre d'adapter un code moderne à de vieux navigateur.
    Typescript n'a pas besoin d'être chargé par le site, donc notre projet n'est pas allourdi.

    ----- Inconvénient -----
    On est forcé de compiler notre code.
    Cela rajoute un outil supplémentaire à notre projet.

    ----- Installation -----
    L'installation se fait via "npm" avec la commande suivante :
        * npm install typescript --save-dev

    Une fois installé, vous pouvez lancer la compilation d'un fichier avec :
        * (npx) tsc pathToFile.ts

    C'est une bonne convention de séparer les sources et les compilations dans des dossiers différents :
        * (npx) tsc pathToFile.ts --outDir folderName

    Pour éviter de retaper tout cela, on peut créer à la racine de notre projet un fichier nommé :
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

    Une fois cela fait, je n'aurais plus qu'à taper :
        * (npx) tsc
    Et comme avec SCSS, il est possible de demander à typescript, de surveiller nos fichiers pour les compiler à chaque sauvegarde :
        * (npx) tsc --watch
*/
const btn = document.querySelector("#compte");
let i = 0;

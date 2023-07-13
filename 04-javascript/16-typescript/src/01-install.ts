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
// const btn = document.querySelector("#compte");
// let i = 0;
/* btn.addEventListener("click", ()=>{
    i++;
    // Ici typescript provoque une erreur, car textContent attend un string, et "i" est un nombre.
    // btn.textContent = i;
    btn.textContent = i.toString();
}) */
/* 
    Par défaut typescript compile pour du JS un peu âgé, faisant disparaître let, const et fonction fléché pour les remplacer par des var et des fonctions anonymes.
    On peut ajouter à notre fichier de configuration l'option suivante :
        * "target": "ES2022"
    Pour indiquer vers quel version de Ecmascript la compilation doit se faire.
        ("ESNext" permet d'indiquer au compilateur d'utiliser toujours la dernière version) 

    Si on fait une erreur sur le nom d'une variable, TS peut nous indiquer si le nom est ressemblant, quel est le bon nom.
    cela dit il compilera quand même le code avec l'erreur.

    On peut lui interdire la compilation si il y a une erreur avec l'option :
        * "noEmitOnError": true
*/
// btns.style.backgroundColor = "red";
/* 
    Et si on veut un code capable de gérer n'importe quel erreur, 
    on peut demander à TS d'être bien plus strict sur sa détection d'erreur avec l'option :
        * "strict": true

    Des erreurs sont apparu dans notre code, nous allons voir dans le chapitre suivant, comment corriger cela, en attendant nous pouvons commenter notre code.
*/
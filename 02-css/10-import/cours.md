# Import CSS #

Lorsque notre CSS devient assez conséquent, cela peut être compliqué de retrouver les règles que l'on souhaite modifier.

Une possibilité pour résoudre ce problème c'est l'**import**.

Grâce à cela, nous allons pouvoir diviser notre gros fichier css en plusieurs petits et importer ceux ci dans un même fichier.

Créons un fichier "**style.css**" et puis dans un dossier **css**, créons 5 autres fichiers :

- default.css
- header.css
- main.css
- footer.css
- desktop.css

Prenons le fichier "**withoutImport.css**" et divisons son code dans nos différents fichiers:

Le reset, le root et le body dans **default.css**.
Tout ce qui est lié au header dans **header.css**.
Tout ce qui concerne le main dans **main.css**.
Tout ce qui a trait au footer dans **footer.css**.
Et enfin le responsive dans **desktop.css**.

Pour ce dernier cas, on ira même retirer la media query.

Bien sûr nous n'allons pas lier 5 fichiers css à nos pages HTML. Ne créons qu'une balise link liée à notre fichier "**style.css**" que nous avons laissé vide.

Enfin ajoutons à notre fichier css vide ceci :

```css
@import url("./css/default.css");
@import url("./css/header.css");
@import url("./css/main.css");
@import url("./css/footer.css");
@import url("./css/desktop.css") screen and (min-width: 900px);
```

Maintenant notre css fonctionne à nouveau.
La règle "**@import**" doit être placé avant toute autre CSS. Ici cela tombe bien, on y met rien d'autre.

Ensuite elle prend le chemin vers le fichier à importer.
Cela va permettre d'insérer le code contenu dans le fichier importé directement ici.

Penchons nous maintenant sur la dernière ligne.
On voit que je peux conditionner l'import avec les même règles que pour les media query.
C'est d'ailleurs pour cela que j'ai retiré la media query de mon fichier "**desktop.css**".

TODO: Ajouter les @layers

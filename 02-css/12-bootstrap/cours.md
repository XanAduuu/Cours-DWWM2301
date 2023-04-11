# Bootstrap #

Bootstrap est une bibliothèque permetant d'amorcer ses projets.
Il permet de structurer nos pages sans avoir à faire de css, et d'ajouter notre css seulement pour personnaliser les éléments.

## Installation ##

Pour l'installer il existe plusieurs façons, qui auront tous pour finalité de placer une balise link vers le css de bootstrap :

### CDN ###

Une des façons les plus simple, est de passer via un CDN. (Content Delivery Network)
C'est un serveur qui met à disposition le fichier css via un simple lien à mettre dans votre balise link :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<!-- Lien valide le 25/10/2022. -->
```

### Télécharger ###

On peut aussi se rendre sur le site, télécharger le dossier, l'extraire dans notre dossier de projet puis...

On se retrouve avec un dossier remplit de tous un tas de fichier et de dossier. Cela peut nous permettre de personnaliser certains éléments mais si on souhaite juste l'utiliser, rien de compliqué, ajoutons juste le liens vers le fichier "**bootstrap.min.css**".

Les autres fichiers css sont des versions plus légère avec certains outils en moins.

```html
<link rel="stylesheet" href="./bootstrap-5.2.2-dist/css/bootstrap.min.css">
```

### NPM ###

On peut aussi l'installer avec NPM. En ayant nodeJS installé, NPM permet l'installation de divers bibliothèques et framework.

```bash
npm install bootstrap@5.2.2
```

Ensuite cela ne diffère pas du téléchargement classique.

```html
<link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
```

## Utilisation ##

Une fois installé, il vous suffit de parcourir le site de bootstrap à la recherche des effets que vous souhaiter appliquer. Chaque propriété css a une classe dans bootstrap qui permet d'appliquer cette propriété.

On reconnaît un site utilisant bootstrap au très grand nombre de classe qui sont appliqué sur chaque élément.

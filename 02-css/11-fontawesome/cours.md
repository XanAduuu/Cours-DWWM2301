# Font Awesome #

Font awesome est une bibliothèque d'icon permetant de personnaliser ses projets.
Par exemple en important un icone de loupe pour une barre de recherche, ou des icones de réseaux sociaux.

## Installation ##

Pour l'installer il existe plusieurs façons, qui auront tous pour finalité de placer une balise link vers le css de fontawesome :

### CDN ###

Une des façons les plus simple, est de passer via un CDN. (Content Delivery Network)
C'est un serveur qui met à disposition le fichier css via un simple lien à mettre dans votre balise link :

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!-- Lien valide le 25/10/2022. -->
```

### Télécharger ###

On peut aussi se rendre sur le site, télécharger le dossier pour la version "WEB", l'extraire dans notre dossier de projet puis...

On se retrouve avec un dossier remplit de tous un tas de fichier et de dossier. Cela peut nous permettre de personnaliser certains éléments mais si on souhaite juste l'utiliser, rien de compliqué, ajoutons juste le liens vers le fichier "**all.min.css**".

Les autres fichiers css sont des versions plus légère avec certains types de logo seulement.

```html
    <link rel="stylesheet" href="./fontawesome-free-6.2.0-web/css/all.min.css">
```

### NPM ###

On peut aussi l'installer avec NPM. En ayant nodeJS installé, NPM permet l'installation de divers bibliothèques et framework.

```bash
npm install --save @fortawesome/fontawesome-free
```

Ensuite cela ne diffère pas du téléchargement classique.

```html
    <link rel="stylesheet" href="./node_modules/@fortawesome/fontawesome-free/css/all.min.css">
```

## Utilisation ##

Une fois installé, il vous suffit de parcourir le site de fontawesome à la recherche d'une icone qui vous plaît, et de copier la balise "i" avec ses classes pour l'ajouter à votre code.

Les icones importé ainsi sont considéré comme du texte, on peut changer leur taille avec "font-size" et leurs couleur avec "color".

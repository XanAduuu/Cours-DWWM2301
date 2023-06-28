# Cours sur figma #

Figma est un logiciel de maquettage disponible gratuitement en version navigateur ou bureau.

## Nouveau fichier ##

Il y a plusieurs boutons permettant de créer un nouveau fichier.
Une fois le fichier créé, nous allons créer une frame (un cadre). pour cela on appui sur le boutons en forme de grille en haut à gauche.

Cela nous fait apparaître à droite un menu permettant de créer des cadres de différentes tailles.  
Prenons une version "Bureau".

- On peut zoomer (en haut à droite) ou avec "ctrl+molette".
- On peut déplacer le cadre en utilisant l'outil "main" en haut à gauche.
- à gauche je peux renommer mon cadre. par exemple "accueil".
- Je peux créer un second cadre appelé "listUser".

## Créer des éléments ##

Imaginons que je souhaite créer un header pour mon cadre "accueil", rien de plus simple, il me suffit de selectionner l'outil "rectangle" en haut à gauche et dessiner mon rectangle.

- à droite je peux changer ses propriétés.
- à gauche je peux changer son nom.
- Je peux aussi le redimensionner à volonté.

Je vais ensuite créer une navbar dans mon header.

Ensuite je vais créer un texte avec l'outil "texte" toujours dans la barre d'outil en haut à gauche.
Selectionner sa position et pareillement avoir la possibilité de changer ses propriétés.

Je peux déplacer mes éléments avec l'outil "move" en forme de flèche en haut à gauche.
Figma m'aidera à le placer par rapport aux autres éléments déjà présent.

Je peux renommer mes éléments ainsi créé pour retrouver facilement lesquels ils sont dans la liste.

## Grouper des éléments ##

Si on continue comme cela, nous allons nous retrouver avec énormément d'éléments les un après les autres, difficile de s'y retrouver.

De plus si je veux déplacer un élément, par exemple mon header, je vais devoir déplacer les éléments un à un.

Heureusement on peut regrouper les éléments ainsi:

- Je clique sur un premier élément du groupe,
- Puis en restant appuyé sur "ctrl" je clique sur les autres éléments.
- Enfin je fais un clique droit et je choisi de grouper les éléments (ctrl+g).
- Il ne me reste plus qu'à nommer mon groupe.

Maintenant je peux déplacer mon groupe dans sa totalité.

De plus je peux en cliquant sur les petits cercles au milieu de mes éléments les déplacer et les intervertire facilement entre eux.

## les formes ##

Une fois un rectangle créé :

- si je double clique dessus, je pourrais changer sa forme via la position de ses coins.
- Si je zoom assez je verrais des cercles près des angles, ceux ci permettent de changer le border radius.
- En restant appuyé sur "CTRL" vous pouvez changer l'angle du rectangle.
- En restant appuyé sur "shift" vous garderez le ratio actuel du rectangle (avec un nouveau rectangle vous créez un carré).
- En créant ou modifiant un élément via la touche "ALT", sa taille changera selon son centre.
  
- Avec les élipses, je peux via le petit cercle réduire le cercle à un arc de cercle.
- Puis avec le point central réduire le remplissage du cercle.
  
- Si on ne choisi pas la taille de l'élément, un simple clique en fera un de taille 100/100.

Il y a bien d'autres outils comme la plume qui permet de dessiner des formes via des courbes de bezier.

## alignements ##

Si je crée maintenant 4 formes de 100/100 que j'alligne et que je les selectionnes tous.

- Je peux les déplacer ensemble via l'outil "move" mais si j'appui sur la touche "ALT" juste avant de les déplacer, je vais les dupliquer.
- En appuyant sur "shift" avant de les déplacer, je garderais l'alignement de base en ne déplaçant l'élément que verticalement ou horizontalement.

Si je les dupliques encore une fois sans vraiment me soucier de l'alignement, je peux alors tous les selectionners et voir apparaître en bas à droite de ma selection une petite grille que je peux aussi retrouver en haut à droite de l'interface. En cliquant sur celle ci, ils seront tous répartis également.

Mes éléments sont maintenant aligné entre eux, mais si je voudrais les centrer dans ma page, il me faudrait en premier lieux les grouper (ctrl+g), ensuite je n'ai plus qu'à utiliser les boutons d'alignements qui se trouvent en haut à droite.

## Copy paste déplacement ##

Si j'ai des éléments qui se répètent sur plusieurs pages, je ne vais bien évidement pas refaire tout à chaque fois. Je peux aller sélectionner mon groupe à gauche, le copier et le coller dans mon second cadre.

Si on regarde en détail les options de copie, je peux aussi copier les éléments en tant que css, svg ou png par exemple.

On peut créer des éléments hors d'un cadre pour tester des choses ou construire. Mais ensuite pour le faire entrer dans un cadre il faudra soit le déplacer dans le menu de gauche soit le déplacer directement dans le cadre jusqu'à trouver le point de rupture.

## Grilles et colonnes ##

Quand on veut être précis dans notre placement, travailler sur une feuille blanche peut être compliqué, c'est pour cela qu'on peut choisir d'afficher sur la droite un système de grille. (layout grid)

Mais cette grille peut être un peu trop détaillés pour ce que l'on souhaite faire ici. elle sera plus adapté à la création d'un logo par exemple. On peut donc cliquer sur le symbole de grille qui vient d'apparaître juste en dessous et le changer par des colonnes.

De plus on peut indiquer combien de colonnes on souhaite, beaucoup de personnes choisissent de travailler sur 12 colonnes car étant un multiple de 2, 3, 4, 6, cela laisse beaucoup de possibilité. (Ce n'est pas pour rien que le système de grid de bootstrap est sur 12).

Il n'est pas rare sur un site d'avoir des espaces vide sur les côtés, permettant de s'adapter à plusieurs tailles d'écran, on peut les reproduire sur notre grille avec l'option de marge.

## pages ##

En haut à gauche vous pouvez voir écris "page 1", on peut renommer la page et en ajouter d'autres.

Par exemple en faisant une page pour la version ordinateur, et une pour la version mobile.

## Images ##

Plaçons maintenant sur notre seconde frame, 4 carrés.

Puis grâce à l'option dans le menu rectangle, je peux selectionner plusieurs images (ici 4). Celles ci seront mis en queue, et il me suffit alors de cliquer sur mes différents carrés pour les placer.

Je peux aussi venir placer l'image directement en tant que rectangle. elle ne sera alors pas déformé mais placé entre "cover center" du dit rectangle. (ces options sont changeable à droite)

Une autre possibilité, c'est de venir placer une image au dessus d'une forme (attention les éléments au dessus dans la liste de gauche sont ceux qui seront au dessus dans le cadre).
Puis je selectionne les deux éléments et j'utilise le bouton tout en haut pour créer un masque, mes éléments sont alors groupé et l'image n'apparaît que là où se trouve la forme.

Si on souhaite appliquer cet effet sur plusieurs formes à la fois, il faudra d'abbord grouper les dites formes.

Autre point, on peut ajouter des filtres et des effets sur les images dans le menu de droite.

## Boolean Groups ##

On peut fusionner différentes formes grâce à l'option qui apparaît tout en haut lorsque de multiples formes sont selectionné en même temps.

- Union va les fusionner en une seule.
- Substract va en retirer l'une à l'autre.
- Exclude va suprimer ce qui est en comun aux deux.
- Intersect va garder seulement ce qui est en commun aux deux.

## Constraints ##

Par défaut les éléments sont placé par rapport à leur distance du haut du cadre et de la gauche de celui ci. Sur la droite on peut modifier cela dans le menu Constraints. Si on met les 4 à la fois, lors de la modification de la taille du cadre, l'élément sera étiré ou compressé pour toujours correspondre à ces distances. mais en cliquant sur la croix central, ils ne seront plus étirés et tentera de rester à sa position.

<!-- suite: https://www.youtube.com/watch?v=tJCep14PitQ&list=PLGwYGrNV4YO-juBqy0geZemATwjH5340d&index=4 -->
# Exercice Web Component #

## 1. Slider ##

Voici venu le temps de la V4 du slider !

Transformons notre Slider en Web Component pour que l'on ai juste à ajouter sa balise où nous le souhaitons.

De plus nous allons ajouter un attribut à notre balise pour qu'il soit possible de lui donner directement la liste des images voulu.

Nous utiliserons le shadowDom pour que son CSS n'impacte pas sur les autres éléments du site.

Exemple:

```html
    <nwm-slider img='["./images/sea.jpg","./images/ville.jpg","./images/space.jpg"]'></nwm-slider>
```

## 2. Créer une jauge ##

Le prochain web component sera une jauge circulaire accompagné d'un input.
L'input accueillera un nombre entre 0 et 100 et la jauge se remplira ou se réduira selon le nombre donné.

```html
<jauge-circle></jauge-circle>
```

## 3. Bonus ##

Si il vous reste du temps, prenez une balise de votre choix.
Puis créez une version amélioré de cette balise.
Par exemple :

- Un bouton avec effet hover qui change de couleur.
- Une image avec un bouton "plein écran intégré".
- Une navigation qui se transforme automatiquement en menu burger.

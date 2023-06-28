<?php 
/* 
    On a préparé le fichier "404.php" dans nos pages.
    On a préparé le fichier ".htaccess" à la racine de notre projet.
    On a préparé le fichier "routes.php" contenant toute nos url.

    Pour le cours on travail ce routeur nous même, 
    mais en situation professionnelle, rien ne sert de réinventer la roue,
    Il y a des tas de routeurs prêt à l'utilisation disponible.
*/

# On inclu nos routes :
require "./routes.php";

# $_SERVER["REQUEST_URI"] permet de récupérer l'uri de notre page
// var_dump($_SERVER["REQUEST_URI"]);

# On supprime les caractères qui n'ont rien à faire dans un url :
$url = filter_var($_SERVER["REQUEST_URI"], FILTER_SANITIZE_URL);

/* 
    Je découpe mon url en tableau avec le "?" du get en tant que séparateur.
    puis je récupère uniquement le premier élément du tableau.
*/
$url = explode("?", $url)[0];

# Je retire les possibles "/" avant et après mon string
$url = trim($url,"/");

# Je vérifie si j'ai une clef qui correspond dans mon tableau de route :
if(array_key_exists($url, ROUTES))
{
    require "pages/".ROUTES[$url];
}
else
{
    require "pages/404.php";
}

?>
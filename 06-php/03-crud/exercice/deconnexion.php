<?php 
require "../../ressources/service/_shouldBeLogged.php";
shouldBeLogged(true, "04-connexion.php");


session_destroy();
unset($_SESSION);
setcookie("PHPSESSID", "", time()-3600);
// Une fois déconnecté, je redirige l'utilisateur ailleurs.
header("Location: connexion.php");
exit;
?>
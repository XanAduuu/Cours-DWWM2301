<?php 
// On vérifie si l'utilisateur a bien le droit d'être ici
require "../ressources/service/_shouldBeLogged.php";
shouldBeLogged(true, "./exercice/connexion.php");
isSelectedUser("./02-read.php");

// On supprime l'utilisateur de la BDD
require "../ressources/service/_pdo.php";
$pdo = connexionPDO();
$sql = $pdo->prepare("DELETE FROM users WHERE idUser= ?");
$sql->execute([(int)$_GET["id"]]);

// On déconnecte l'utilisateur :
unset($_SESSION);
session_destroy();
setcookie("PHPSESID", "", time()-3600);

// On redirige l'utilisateur après quelques secondes :
header("refresh: 5;url= ./02-read.php");
$title = "CRUD - DELETE";
require "../ressources/template/_header.php";

// rowCount permet de savoir combien de lignes ont été affectées par la dernière requête.
echo $sql->rowCount(), " ligne effacée";
?>
<p>
    Vous avez bien <strong>supprimé</strong> votre compte. <br>
    Vous allez être redirigé d'ici peu.
</p>
<?php 
require "../ressources/template/_footer.php";
?>
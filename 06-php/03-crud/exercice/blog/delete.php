<?php 
// On redirige l'utilisateur si il n'est pas connecté.
require "../../../ressources/service/_shouldBeLogged.php";
shouldBeLogged(true, "../connexion.php");

// On redirige l'utilisateur si on ne sais pas quel message supprimer.
if(empty($_GET["id"]))goToListe();

require "../../../ressources/service/_pdo.php";
$pdo = connexionPDO();

$sql = $pdo->prepare("SELECT * FROM messages WHERE idMessage = ?");
$sql->execute([(int)$_GET["id"]]);
$message = $sql->fetch();

// Si on n'a pas de message ou si on est pas le propriétaire du message, on redirige l'utilisateur:
if(!$message || $_SESSION['idUser']!= $message["idUser"])goToListe();

$sql = $pdo->prepare("DELETE FROM messages WHERE idMessage = ?");
$sql->execute([(int)$_GET["id"]]);

$_SESSION["flash"] = "Votre message a bien été supprimé";
goToListe();

/**
 * Redirige l'utilisateur vers son blog.
 *
 * @return void
 */
function goToListe()
{
    header("Location: ./read.php?id=".$_SESSION["idUser"]);
    exit;
}
?>
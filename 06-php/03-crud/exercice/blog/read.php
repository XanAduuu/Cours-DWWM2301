<?php 
session_start();
// Si aucun id n'est fourni, on redirige l'utilisateur.
if(empty($_GET["id"]))
{
    header("Location: ../../02-read.php");
    exit;
}
// On récupère les messages de l'utilisateur
require_once "../../../ressources/service/_pdo.php";

$idUser = (int)$_GET["id"];
$pdo = connexionPDO();

$sql = $pdo->prepare("SELECT * FROM messages WHERE idUser = ? ORDER BY createdAt DESC");
$sql->execute([$idUser]);
$messages = $sql->fetchAll();

// L'utilisateur est-il le propriétaire de ce blog :
$isOwner = isset($_SESSION["idUser"]) && $_GET["id"] == $_SESSION["idUser"];

// On vérifie l'existence de message flash :
if(isset($_SESSION["flash"]))
{
    $flash = $_SESSION["flash"];
    unset($_SESSION["flash"]);
}

// Début HTML :
$title = " Blog !";
require "../../../ressources/template/_header.php";

// On affiche le possible message flash :
if(isset($flash))
{
    echo "<div class='flash'>$flash</div>";
}
// Si on est le propriétaire de la page, on ajoute un formulaire d'ajout de message.
if($isOwner):
?>
    <form action="create.php" method="post">
        <textarea name="message" placeholder="Nouveau Message"></textarea>
        <input type="submit" value="Envoyer" name="addMessage">
    </form>
<?php
endif;

// Si on a des messages :
if($messages):
    foreach($messages as $m):
?>
        <div class="message">
            <div class="date1">
                Ajouté le <?php echo $m["createdAt"] ?>
            </div>
            <div class="date2">
                <?php echo ($m["editedAt"]?"édité le : ".$m["editedAt"]:"") ?>
            </div>
            <p>
                <?php echo $m["message"] ?>
            </p>
            <div class="btns">
                <?php if($isOwner): ?>
                    <a href="./update.php?id=<?php echo $m["idMessage"] ?>">Éditer</a>
                    <a href="./delete.php?id=<?php echo $m["idMessage"] ?>">Supprimer</a>
                <?php endif; ?>
            </div>
        </div>
<?php
    endforeach;
// Si on a aucun message :
else: 
?>
    <p>Cet Utilisateur n'a aucun message</p>
<?php 
endif;
require "../../../ressources/template/_footer.php";
?>
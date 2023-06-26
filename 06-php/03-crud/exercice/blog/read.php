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

// Selection des messages :

# Partie 1 uniquement :
// $sql = $pdo->prepare("SELECT * FROM messages WHERE idUser = ? ORDER BY createdAt DESC");
// $sql->execute([$idUser]);
// $messages = $sql->fetchAll();
# Fin partie 1

# Partie 2 uniquement :
if(empty($_GET["cat"]))
{
    $sql = $pdo->prepare("SELECT m.*, c.nom as categorie FROM messages m LEFT JOIN categories c ON m.idCat = c.idCat WHERE m.idUser = ? ORDER BY m.createdAt DESC");
    $sql->execute([(int)$_GET["id"]]);
}
else
{
    $sql = $pdo->prepare("SELECT m.*, c.nom as categorie FROM messages m LEFT JOIN categories c ON m.idCat = c.idCat WHERE m.idUser = ? AND m.idCat = ? ORDER BY m.createdAt DESC");
    $sql->execute([
        (int)$_GET["id"],
        (int)$_GET["cat"]
    ]);
}
$messages = $sql->fetchAll();

// Je récupère la liste de mes catégories
$sql = $pdo->query("SELECT * FROM categories ORDER BY nom ASC");
$categories = $sql->fetchAll();
# Fin partie 2.

// L'utilisateur est-il le propriétaire de ce blog :
$isOwner = isset($_SESSION["idUser"]) && $_GET["id"] == $_SESSION["idUser"];

// On vérifie l'existence de message flash :
if(isset($_SESSION["flash"]))
{
    $flash = $_SESSION["flash"];
    unset($_SESSION["flash"]);
}

// Je récupère l'utilisateur du blog :
$sql = $pdo->prepare("SELECT username FROM users WHERE idUser = ?");
$sql->execute([(int)$_GET["id"]]);
$user = $sql->fetch();

if(!$user)
{
    header("Location: ../../02-read.php");
    exit;
}

// Début HTML :
$title = " Blog de ".$user["username"];
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
        <!-- Partie 2 uniquement -->
        <select name="categorie">
            <option disabled selected hidden>Choix de Catégorie :</option>
            <?php foreach($categories as $c): ?>
                <option value="<?php echo $c["idCat"] ?>">
                    <?php echo $c["nom"] ?>
                </option>
            <?php endforeach; ?>
        </select>
        <!-- Fin partie 2 -->
        <input type="submit" value="Envoyer" name="addMessage">
    </form>
<!-- partie 2 uniquement -->
    <a href="?id=<?php echo $_GET["id"] ?>">Toute les catégories</a>
<!-- Fin partie 2 -->
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
                <!-- Partie 2 uniquement -->
                <?php if(!empty($m["categorie"])): ?>
                    <a href="<?php echo "?id=".$m["idUser"] . "&cat=".$m["idCat"] ?>">
                    <?php echo $m["categorie"] ?>
                    </a>
                <?php endif; ?>
                <!-- Fin partie 2 -->
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
<?php 
// On redirige l'utilisateur si il n'est pas connecté.
require "../../../ressources/service/_shouldBeLogged.php";
shouldBeLogged(true, "../connexion.php");

// On redirige l'utilisateur si on ne sais pas quel message éditer.
if(empty($_GET["id"]))goToListe();

require "../../../ressources/service/_pdo.php";
$pdo = connexionPDO();

$sql = $pdo->prepare("SELECT * FROM messages WHERE idMessage = ?");
$sql->execute([(int)$_GET["id"]]);
$message = $sql->fetch();

// Si on n'a pas de message ou si on est pas le propriétaire du message, on redirige l'utilisateur:
if(!$message || $_SESSION['idUser']!= $message["idUser"])goToListe();

# Partie 2 uniquement :
// Je récupère la liste de mes catégories
$sql = $pdo->query("SELECT * FROM categories ORDER BY nom ASC");
$categories = $sql->fetchAll();
# Fin partie 2

// On traite le formulaire :
$error = $m = "";
if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['editMessage']))
{
    require "../../../ressources/service/_csrf.php";

    if(empty($_POST["message"]))
    {
        $error = "Veuillez entrer un message";
    }
    else
    {
        $m = cleanData($_POST["message"]);
    }

    if(empty($error))
    {
        # Partie 1 uniquement :
        // $sql = $pdo->prepare("UPDATE messages SET message = :m, editedAt = current_timestamp() WHERE idMessage = :id");
        # Fin partie 1

        # Partie 2 uniquement :
        if(empty($_POST["categorie"]))
        {
            $sql = $pdo->prepare("UPDATE messages SET message = :m, editedAt = current_timestamp(), idCat = NULL WHERE idMessage = :id");
        }
        else
        {
            $sql = $pdo->prepare("SELECT * FROM categories WHERE idCat = ?");
            $sql->execute([(int)$_POST["categorie"]]);
            $cat = $sql->fetch();
            if($cat)
            {
                $sql = $pdo->prepare("UPDATE messages SET message = :m, editedAt = current_timestamp(), idCat = :cat WHERE idMessage = :id");
                $sql->bindValue("cat", $cat["idCat"], PDO::PARAM_INT);
            }
            else
            {
                $_SESSION["flash"] = "Cette catégorie n'existe pas";
                goToListe();
            }
        }
        # Fin partie 2


        $sql->bindValue("m", $m);
        $sql->bindValue("id", $message["idMessage"], PDO::PARAM_INT);
        $sql->execute();

        $_SESSION["flash"] = "Message Édité";
        goToListe();
    }
}

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
$title = "édition du message";
require "../../../ressources/template/_header.php";
?>
<form action="" method="post">
    <textarea name="message" placeholder="Edition du message"
    ><?php echo $message["message"] ?></textarea>
    <span class="error"><?php echo $error??"" ?></span>
    <!-- Partie 2 uniquement -->
    <select name="categorie">
        <option disabled hidden
        <?php echo $message["idCat"]==null?"selected":"" ?>>Choix de Catégorie :</option>
        <?php foreach($categories as $c): ?>
            <option 
                value="<?php echo $c["idCat"] ?>"
                <?php echo ($c["idCat"]== $message["idCat"])?"selected":"" ?>>
                <?php echo $c["nom"] ?>
            </option>
        <?php endforeach; ?>
    </select>
    <!-- Fin partie 2 -->
    <input type="submit" value="Envoyer" name="editMessage">
</form>
<?php 
require "../../../ressources/template/_footer.php";
?>
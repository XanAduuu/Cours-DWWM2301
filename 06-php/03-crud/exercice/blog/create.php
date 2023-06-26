<?php 
    require "../../../ressources/service/_shouldBeLogged.php";
    shouldBeLogged(true, "../connexion.php");

    if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['addMessage']))
    {
        if(empty($_POST["message"]))
        {
            $_SESSION["flash"] = "Veuillez entrer un message";
        }
        else
        {
            /* Ici j'importe "_csrf" juste pour utiliser ma fonction
            "cleanData" mais il serait bien d'ajouter au formulaire la protection "csrf" */
            require "../../../ressources/service/_csrf.php";
            require "../../../ressources/service/_pdo.php";

            $message = cleanData($_POST["message"]);

            // On envoi les données :
            $pdo = connexionPDO();
            # Partie 1 uniquement :
            // $sql = $pdo->prepare("INSERT INTO messages(message, idUser) VALUES (:m, :id)");
            # Fin partie 1

            # Partie 2 uniquement :
            if(empty($_POST["categorie"]))
            {
                $sql = $pdo->prepare("INSERT INTO messages(message, idUser) VALUES (:m, :id)");
            }
            else
            {
                $sql = $pdo->prepare("SELECT * FROM categories WHERE idCat = ?");
                $sql->execute([(int)$_POST["categorie"]]);
                $cat = $sql->fetch();
                if($cat)
                {
                    $sql = $pdo->prepare("INSERT INTO messages(message, idCat, idUser) VALUES (:m, :cat, :id)");
                    $sql->bindValue("cat", $cat["idCat"]);
                }
                else
                {
                    $_SESSION["flash"] = "Cette catégorie n'existe pas";
                    goto redirect;
                }
            }
            # Fin partie 2
            $sql->bindValue("m", $message);
            $sql->bindValue("id", $_SESSION["idUser"], PDO::PARAM_INT);
            $sql->execute();

            $_SESSION["flash"] = "Message envoyé";
        }
    }
    # Partie 2 uniquement :
    redirect:
    # fin partie 2;
    // On redirige l'utilisateur vers son blog
    header("Location: ./read.php?id=".$_SESSION["idUser"]);
    die;
?>
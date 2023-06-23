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
            $sql = $pdo->prepare("INSERT INTO messages(message, idUser) VALUES (:m, :id)");

            $sql->bindValue("m", $message);
            $sql->bindValue("id", $_SESSION["idUser"], PDO::PARAM_INT);
            $sql->execute();

            $_SESSION["flash"] = "Message envoyé";
        }
    }
    // On redirige l'utilisateur vers son blog
    header("Location: ./read.php?id=".$_SESSION["idUser"]);
    die;
?>
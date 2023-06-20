<?php 
    /* 
        Cette page n'est accessible que si on est connecté
        ainsi que si l'id envoyé en GET ou POST correspond 
        à l'utilisateur connecté.
    */
    require "../ressources/service/_shouldBeLogged.php";
    shouldBeLogged(true, "./exercice/connexion.php");
    isSelectedUser("./02-read.php");
    // Je récupère les informations utilisateurs :
    require "../ressources/service/_csrf.php";
    require "../ressources/service/_pdo.php";

    $pdo = connexionPDO();
    $sql = $pdo->prepare("SELECT * FROM users WHERE idUser = ?");
    $sql->execute([(int)$_SESSION["idUser"]]);
    $user = $sql->fetch();

    // traitement du formulaire :
    $username = $password = $email = "";
    $error = [];
    $regexPass = 
    "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";
    
    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update"]))
    {
        if(empty($_POST["username"]))
            $username = $user["username"];
        else
        {
            $username = cleanData($_POST["username"]);
            if(!preg_match("/^[a-zA-Z'\s-]{2,25}$/", $username))
                $error["username"]= "Votre nom d'utilisateur ne peut contenir que des lettres";
        }
        if(empty($_POST["email"]))
            $email = $user["email"];
        else
        {
            $email = cleanData($_POST["email"]);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
                $error["email"]= "Votre nom d'utilisateur ne peut contenir que des lettres";
            // On vérifie si l'email existe déjà.
            if($email != $user["email"])
            {
                $sql = $pdo->prepare("SELECT * FROM users WHERE email = :email");
                $sql->execute(["email" => $email]);
                $exist = $sql->fetch();
                if($exist)
                    $error["email"]= "Cet email existe déjà";
            }
            
        }
    
        if(empty($_POST["password"]))
            $password = $user["password"];
        else
        {
            $password = cleanData($_POST["password"]);
            if(empty($_POST["passwordBis"]))
                $error["passwordBis"] = "Veuillez confirmer votre mot de passe";
    
            else if($_POST["password"] != $_POST["passwordBis"])
                $error["passwordBis"] = "Veuillez saisir le même mot de passe";
    
            if(!preg_match($regexPass, $password))
                $error["password"] = "Veuillez saisir un mot de passe valide";
            else
                $password = password_hash($password, PASSWORD_DEFAULT);
        }
        if(empty($error))
        {
            $sql = $pdo->prepare(
                "UPDATE users SET
                username = :us,
                email = :em,
                password = :mdp 
                WHERE idUser = :id");
            $sql->execute([
                "us"=>$username,
                "em"=>$email,
                "mdp"=>$password,
                "id"=>$user["idUser"]
            ]);
            $_SESSION["flash"] = "Votre profil a bien été édité";
            header('Location: 02-read.php');
            exit;
        }
    }
$title = " CRUD - Update ";
require("../ressources/template/_header.php");
if($user):
?>
<form action="" method="post">
    <!-- username -->
    <label for="username">Nom d'Utilisateur :</label>
    <input type="text" name="username" id="username" value="<?php echo $user["username"] ?>">
    <span class="erreur"><?php echo $error["username"]??""; ?></span>
    <br>
    <!-- Email -->
    <label for="email">Adresse Email :</label>
    <input type="email" name="email" id="email" value="<?php echo $user["email"] ?>">
    <span class="erreur"><?php echo $error["email"]??""; ?></span> 
    <br>
    <!-- Password -->
    <label for="password">Mot de passe :</label>
    <input type="password" name="password" id="password">
    <span class="erreur"><?php echo $error["password"]??""; ?></span> 
    <br>
    <!-- password verify -->
    <label for="passwordBis">Confirmation du mot de passe :</label>
    <input type="password" name="passwordBis" id="passwordBis">
    <span class="erreur"><?php echo $error["passwordBis"]??""; ?></span> 
    <br>

    <input type="submit" value="Mettre à jour" name="update">
</form>
<?php else: ?>
    <p>Aucun Utilisateur trouvé</p>
<?php 
endif;
require("../ressources/template/_footer.php");
?>
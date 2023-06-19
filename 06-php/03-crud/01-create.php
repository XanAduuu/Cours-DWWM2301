<?php 
// Si l'utilisateur est déjà connecté, on le redirige ailleurs.
require "../ressources/service/_shouldBeLogged.php";
shouldBeLogged(false, "./02-read.php");
// J'inclu le service de sécurité :
require "../ressources/service/_csrf.php";

$username = $email = $password = "";
$error = [];

$regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['inscription']))
{
    // J'inclu nos services de connexion.
    require "../ressources/service/_pdo.php";
    // Je me connecte à la BDD
    $pdo = connexionPDO();

    // traitement username :
    if(empty($_POST["username"])) 
    {
        $error["username"] = "Veuillez saisir un nom d'utilisateur";
    }
    else
    {
        $username = cleanData($_POST["username"]);
        /* 
            En PHP on utilisera "preg_match" pour tester un string
            correspondant à une "REGEX"
        */
        if(!preg_match("/^[a-zA-Z' -]{2,30}$/", $username))
        {
            $error["username"] = "Le nom d'utilisateur n'est pas valide";
        }
    }
    // Traitement email:
    if(empty($_POST["email"]))
    {
        $error["email"] = "Veuillez saisir un email";
    }
    else
    {
        $email = cleanData($_POST["email"]);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $error["email"] = "Veuillez saisir un email valide";
        }
        /* 
            Pour faire une requête à la BDD
            Nous pouvons utiliser l'objet "PDO" et sa méthode "query" comme ci-dessous
        */
        // $sql = $pdo->query("SELECT email FROM users WHERE email=$email");
        /* 
            Le problème étant, qu'ici nous avons une faille de sécurité de type "injection SQL"
            C'est à dire que si l'utilisateur rentre du code SQL, il sera executé. 
            Nous garderons donc la méthode "query" pour les fois où aucune information ne vient de l'utilisateur.

            Quand l'utilisateur rentre dans l'équation, nous devons faire des requêtes préparées.

            Une requête préparée est une requête dont on a séparé le code SQL des valeurs à utiliser.
            Ainsi la requête sera interprétée, puis on y ajoutera les valeurs qui elles, ne seront pas interprétées.

            Pour cela on utilise la méthode "prepare" et on remplace les valeurs par "?" ou ":unMot"
        */
        $sql = $pdo->prepare("SELECT email FROM users WHERE email=:em");
        /* 
            La requête ci-dessus est interprété, on va maintenant, l'executer,
            en lui donnant les valeurs que l'on souhaite.
            Pour cela on utilise la méthode "execute"
            en lui donnant en argument un tableau correspondant aux valeurs à passer.
            La clef correspondant au mot choisi, sans le ":"
        */
        $sql->execute(["em"=>$email]);
        /* 
            enfin, nous utilisons la méthode "fetch" pour aller chercher le résultat obtenu.
            Si il n'y en a aucun, on obtiendra "null"
        */
        $resultat = $sql->fetch();
        if($resultat)
        {
            $error["email"] = "Cet email est déjà enregistré.";
        }
    }
    // traitement du mot de passe
    if(empty($_POST["password"]))
    {
        $error["password"] = "Veuillez saisir un mot de passe";
    }
    else
    {
        $password = cleanData($_POST["password"]);
        if(!preg_match($regexPass, $password))
        {
            $error["password"] = "Veuillez saisir un mot de passe valide";
        }
        else
        {
            $password = password_hash($password, PASSWORD_BCRYPT);
        }
    }
    // traitement vérification du mot de passe.
    if(empty($_POST["passwordBis"]))
    {
        $error["passwordBis"] = "Veuillez saisir à nouveau le mot de passe.";
    }
    elseif($_POST["password"] != $_POST["passwordBis"])
    {
        $error["passwordBis"] = "Veuillez saisir le même mot de passe.";
    }
    // Envoi les données:
    if(empty($error))
    {
        $sql = $pdo->prepare("INSERT INTO users(username, email, password) VALUES(?,?,?)");
        /* 
            Si on préfère utiliser les "?" plutôt que les placeholder nommés. 
            Il faudra donner à execute, un tableau non associatif.
            et qui respecte exactement l'ordre des placeholders.
        */
        $sql->execute([$username, $email, $password]);
        /* 
            Une fois inscrit, on redirige notre utilisateurs
            vers une autre page, comme la page de connexion :
        */
        header('Location: ./exercice/connexion.php');
        exit;
    }
}
$title = " CRUD - Create ";
require("../ressources/template/_header.php");
?>
<form action="" method="post">
    <!-- username -->
    <label for="username">Nom d'Utilisateur :</label>
    <input type="text" name="username" id="username" required>
    <span class="erreur"><?php echo $error["username"]??""; ?></span>
    <br>
    <!-- Email -->
    <label for="email">Adresse Email :</label>
    <input type="email" name="email" id="email" required>
    <span class="erreur"><?php echo $error["email"]??""; ?></span> 
    <br>
    <!-- Password -->
    <label for="password">Mot de passe :</label>
    <input type="password" name="password" id="password" required>
    <span class="erreur"><?php echo $error["password"]??""; ?></span> 
    <br>
    <!-- password verify -->
    <label for="passwordBis">Confirmation du mot de passe :</label>
    <input type="password" name="passwordBis" id="passwordBis" required>
    <span class="erreur"><?php echo $error["passwordBis"]??""; ?></span> 
    <br>

    <input type="submit" value="Inscription" name="inscription">
</form>
<?php 
/* 
    Pour des raisons de simplicité du cours, on n'a pas mit de securité
    sur ce formulaire, mais pensez à en ajouter sur vos projets.
*/
require("../ressources/template/_footer.php");
?>
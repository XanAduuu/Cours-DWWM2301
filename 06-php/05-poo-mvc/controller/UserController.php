<?php 
use Model\UserModel;
use Classes\AbstractController;
use Classes\Interface\CrudInterface;

require __DIR__ . "/../../ressources/service/_shouldBeLogged.php";
require __DIR__ . "/../../ressources/service/_csrf.php";

class UserController extends AbstractController implements CrudInterface
{
    use \Classes\Trait\Debug;

    private UserModel $db;
    private string $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

    function __construct()
    {
        $this->db = new UserModel();
    }

    function read()
    {
        $users = $this->db->getAllUsers();

        $this->render("user/list.php", [
            "users"=>$users, 
            "title"=>"POO - Liste Utilisateur"
        ]);
    }
    function create()
    {
        shouldBeLogged(false, "/05-poo-mvc");
        $username = $email = $password = "";
        $error = [];

        if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['userForm']))
        {
            // verification username
            if(empty($_POST["username"]))
                $error["username"] = "Veuillez saisir un nom d'utilisateur";
            else
            {
                $username = cleanData($_POST["username"]);
                if(!preg_match("/^[a-zA-Z'\s-]{2,25}$/", $username))
                    $error["username"] = "Veuillez saisir un nom d'utilisateur valide";
            }
            // Vérification email
            if(empty($_POST["email"]))
                $error["email"] = "Veuillez saisir un email";
            else
            {
                $email = cleanData($_POST["email"]);
                if(!filter_var($email, FILTER_VALIDATE_EMAIL))
                    $error["email"] = "Veuillez saisir un email valide";
                $resultat = $this->db->getOneUserByEmail($email);
                if($resultat)
                    $error["email"] = "Cet email est déjà enregistré";
            }
            // Vérification password
            if(empty($_POST["password"]))
                $error["password"] = "Veuillez saisir un mot de passe";
            else
            {
                $password = cleanData($_POST["password"]);
                if(!preg_match($this->regexPass, $password))
                    $error["password"] = "Veuillez saisir un mot de passe valide";
                else
                    $password = password_hash($password, PASSWORD_DEFAULT);
            }
            // Vérification confirmation password
            if(empty($_POST["passwordBis"]))
                $error["passwordBis"] = "Veuillez saisir à nouveau votre mot de passe";
            elseif($_POST["passwordBis"] != $_POST["password"])
            {
                $error["passwordBis"] = "Veuillez saisir le même mot de passe";
            }
            if(empty($error))
            {
                $this->db->addUser($username, $email, $password);
                $this->setFlash("Inscription bien prise en compte");
                header("Location: /05-poo-mvc");
                exit;
            }
        }
        $this->render("user/inscription.php", ["error"=>$error, "title"=>"POO - Inscription", "required"=>true]);
    }
    function update()
    {
        shouldBeLogged(true, "/05-poo-mvc/connexion");
        if(empty($_GET["id"]) || $_SESSION["idUser"]!= $_GET["id"])
        {
            header("Location: /05-poo-mvc");
            exit;
        }
        $user = $this->db->getOneUserById((int)$_GET["id"]);

        $username = $password = $email = "";
        $error = [];
        if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['userForm']))
        {
            // Username :
            if(empty($_POST["username"]))
                $username = $user["username"];
            else
            {
                $username = cleanData($_POST["username"]);
                if (!preg_match("/^[a-zA-Z'\s-]{2,25}$/", $username) )
                    $error["username"] = "Veuillez entrer un nom d'utilisateur valide";
            }
            // Email :
            if(empty($_POST["email"]))
                $email = $user["email"];
            else
            {
                $email = cleanData($_POST["email"]);
                if(!filter_var($email, FILTER_VALIDATE_EMAIL ))
                    $error["email"] = "Votre email n'est pas valide";
                if($email != $user["email"])
                {
                    $exist = $this->db->getOneUserByEmail($email);
                    if($exist)
                        $error["email"] = "Cet email existe déjà";
                }
            }
            // password
            if(empty($_POST["password"]))
                $password = $user["password"];
            else
            {
                $password = cleanData($_POST["password"]);
                if(empty($_POST["passwordBis"]))
                    $error["passwordBis"] = "Veuillez confirmer votre mot de passe";
                elseif($_POST["password"] != $_POST["passwordBis"])
                    $error["passwordBis"] = "Veuillez saisir le même mot de passe";
                if(!preg_match($this->regexPass, $password))
                    $error["password"] = "Veuillez saisir un mot de passe valide";
                else
                    $password = password_hash($password, PASSWORD_DEFAULT);
            }
            if(empty($error))
            {
                $this->db->updateUserById($username, $email, $password, $user["idUser"]);
                $this->setFlash("Votre Profil a bien été édité");
                header("Location: /05-poo-mvc");
                exit;
            }
        } // Fin vérification formulaire
        $this->render("user/update.php", [
            "error"=>$error,
            "user"=>$user,
            "title"=>"POO - Mise à jour du Profil",
            "required"=> false
        ]);
    }
    function delete()
    {
        shouldBeLogged(true, "/05-poo-mvc/connexion");
        if(empty($_GET["id"]) || $_SESSION["idUser"] != $_GET["id"])
        {
            header("Location: /05-poo-mvc");
            exit;
        }
        $this->db->deleteUserById((int)$_GET["id"]);

        session_destroy();
        unset($_SESSION);
        setcookie('PHPSESSID', '', time()-3600);

        header("refresh: 5;url = /05-poo-mvc");

        $this->render("user/delete.php", ["title"=>"POO - Suppression de Compte"]);
    }
}
?>
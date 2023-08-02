<?php
use Classes\AbstractController;
use Model\UserModel;

require __DIR__."/../../ressources/service/_shouldBeLogged.php";

class AuthController extends AbstractController
{
    use \Classes\Trait\Debug;
    private UserModel $db;

    function __construct()
    {
        $this->db = new UserModel();
    }
    public function login()
    {
        shouldBeLogged(false, "/05-poo-mvc");
        $email = $pass = "";
        $error = [];
        
        if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])){
            if(empty($_POST["email"])){
                $error["email"] = "Veuillez entrer un email.";
            }else{
                $email = trim($_POST["email"]);
            }
            if(empty($_POST["password"])){
                $error["pass"] = "Veuillez entrer un mot de passe.";
            }else{
                $pass = trim($_POST["password"]);
            }
            if(empty($error)){
                // Je récupère l 'utilisateur correspondant à l'email.
                $user = $this->db->getOneUserByEmail($email);
                if($user){
                    $this->dump($pass, $user);
                    if(password_verify($pass, $user["password"])){
                        $_SESSION["logged"] = true; 
                        $_SESSION["username"] = $user["username"];
                        $_SESSION["idUser"] = $user["idUser"];
                        $_SESSION["email"] = $user["email"];
                        $_SESSION["expire"] = time()+ (60*60);
                        header("location: /05-poo-mvc");
                        exit;
                    }
                    else{
                        $error["login"] = "Email ou Mot de passe incorrecte.";
                    }
                }
                else{
                    $error["login"] = "Email ou Mot de passe incorrecte.";
                }
            }
        }
        $this->render("auth/connexion.php", [
            "title"=>" POO - connexion",
            "header"=>" Connexion",
            "error"=>$error
        ]);
    }
    public function logout()
    {
        shouldBeLogged(true, "/05-poo-mvc/connexion");
        unset($_SESSION);
        session_destroy();
        setcookie("PHPSESSID","", time()-3600);
        header("location: /05-poo-mvc/connexion");
        exit;
    }
}
?>
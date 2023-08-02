<?php
require __DIR__ . "/../../ressources/service/_csrf.php";
require __DIR__."/../../ressources/service/_shouldBeLogged.php";
use Classes\AbstractController;
use Classes\Interface\CrudInterface;
use Model\CategorieModel;
use Model\MessageModel;
use Model\UserModel;

class MessageController extends AbstractController implements CrudInterface
{
    
    private UserModel $dbUser;
    private MessageModel $dbMessage;
    private CategorieModel $dbCat;

    function __construct()
    {
        $this->dbMessage = new MessageModel;
        $this->dbUser = new UserModel();
        $this->dbCat = new CategorieModel();
    }
    public function create()
    {
        shouldBeLogged(true, "/05-poo-mvc/connexion");
        if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['messageForm']))
        {
            if(empty($_POST["message"]))
            {
                $this->setFlash("Veuillez entrer un message");
            }else
            {
                $message = cleanData($_POST["message"]);

                if(empty($_POST["categorie"]))
                {
                    $this->dbMessage->addMessage([$message, (int)$_SESSION["idUser"]]);
                    $this->setFlash("Message envoyé");
                }
                else
                {
                    $cat = $this->dbCat->getCategorieById((int)$_POST["categorie"]);
                    if($cat)
                    {
                        $this->dbMessage->addMessage(["m"=>$message, "id"=>(int)$_SESSION["idUser"], "cat"=>$cat["idCat"]]);
                        $this->setFlash("Message envoyé");
                    }
                    else
                    {
                        $this->setFlash("Cette catégorie n'existe pas.");
                    }
                }
            }
        }
        $this->goToListe();
    }
    public function read()
    {
        if(empty($_GET["id"])){
            header("Location: /05-mvc");
            exit;
        }
        $messages = $user =  "";
    
        $user = $this->dbUser->getOneUserById((int)$_GET["id"]);
        // On récupère les messages
        if(empty($_GET["cat"]))
        {
            $messages = $this->dbMessage->getMessagesByUser((int)$_GET["id"]);
        }
        else
        {
            $messages = $this->dbMessage->getMessagesByUserAndCategorie((int)$_GET["id"], (int)$_GET["cat"]);
        }
        // On récupère les catégories.
        $categories = $this->dbCat->getAllCategories();
    
        $this->render("message/list.php", 
        [
            "title"=>" PDO - Liste Message",
            "categories"=>$categories,
            "messages"=>$messages,
            "required"=> "required",
            "action"=>"/05-poo-mvc/message/create"
        ]);
    }
    public function update()
    {
        shouldBeLogged(true, "/05-poo-mvc/connexion");

        if(empty($_GET["id"]))$this->goToListe();

        $message = $this->dbMessage->getMessageById((int)$_GET["id"]);

        if(!$message || $message["idUser"] != $_SESSION["idUser"])$this->goToListe();

        $categories = $this->dbCat->getAllCategories();

        $error = [];
        $m = "";
        if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['messageForm']))
        {
            if(empty($_POST["message"]))
            {
                $error["message"] = "Veuillez entrer un message";
            }else{
                $m = cleanData($_POST["message"]);
            }
            
            if(empty($error)){
                if(empty($_POST["categorie"])){
                        $this->dbMessage->updateMessageById($message["idMessage"], $m);       
                }else{
                    $cat = $this->dbCat->getCategorieById((int)$_POST["categorie"]);
                    if($cat){
                        $this->dbMessage->updateMessageById($message["idMessage"], $m, $cat["idCat"]);
                    }else{
                        $this->setFlash("Cette catégorie n'exite pas.");
                        $this->goToListe();
                    }
                }
                $this->setFlash("Message édité");
                $this->goToListe();
            }
        }
        $this->render("message/update.php", [
            "title"=>" POO - Update Message",
            "header"=> "Modifier le message",
            "required"=>false,
            "categories"=> $categories,
            "message"=>$message
        ]);
    }
    public function delete()
    {
        shouldBeLogged(true, "/05-poo-mvc/connexion");

        if(empty($_GET["id"])) $this->goToListe();

        $message = $this->dbMessage->getMessageById((int)$_GET["id"]);

        if(!$message || $message["idUser"] != $_SESSION["idUser"]) $this->goToListe();

        $this->dbMessage->deleteMessageById((int)$_GET["id"]);

        $this->setFlash("Votre message a bien été supprimé.");
        $this->goToListe();
    }
    private function goToListe(): void
    {
        header("Location: /05-poo-mvc/messages?id=".$_SESSION["idUser"]);
        exit;
    }
}
?>
<?php 
use Model\UserModel;
use Classes\AbstractController;
use Classes\Interface\CrudInterface;

require __DIR__ ."/../../ressources/service/_shouldBeLogged.php";
require __DIR__ ."/../../ressources/service/_csrf.php";
    class UserController extends AbstractController implements CrudInterface
    {   
        use \Classes\Trait\Debug;

        private UserModel $db;
        private string $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/
        ";

        function __construct()
        {
            $this->db = new UserModel();
        }
        function read()
        {
            $users = $this->db->getAllUsers();

            $this->render("user/list.php", ["user"=>$users, "title"=>"POO - Liste Utilisateur"]);
        }

        function create()
        {
            echo "inscription";
        }
        function update(){}
        function delete(){}
    }
?>
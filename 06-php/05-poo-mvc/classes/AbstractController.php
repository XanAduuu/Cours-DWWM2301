<?php 
namespace Classes;

abstract class AbstractController
{
    protected function getFlash()
    {
        if(isset($_SESSION["flash"]))
        {
            echo "<div class='flash'>{$_SESSION['flash']}</div>";
            unset($_SESSION ["flash"]);
        }
    }

    /**
     * Paramètre un message flash
     * 
     * @param string $flash
     * @return void
     * 
     */
    protected function setFlash(string $flash): void
    {
        $_SESSION ['flash'] = $flash;
    }
    protected function render (string $view, array $options = []): void
    {
        foreach($options as $op=>$val)
        {
            switch($op)
            {
                case "title":
                case "titre":
                    $title = $val;
                    break;
                default:
                    $$op=$val;
            }
        }
        require __DIR__. "/../../ressources/template/_header.php";
        require __DIR__. "/../view/$view";
        require __DIR__. "/../../ressources/template/_footer.php";
    }
}
?>
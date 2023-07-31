<?php 
class Router
{
    public static function routing()
    {
        $url = filter_var($_SERVER["REQUEST_URI"], FILTER_SANITIZE_URL);
        $url = explode("?", $url)[0];
        $url = trim($url, "/");
        // $url = trim(explode("?", filter_var($_SERVER["REQUEST_URI"], FILTER_SANITIZE_URL) )[0],"/");
        if(array_key_exists($url, ROUTES))
        {
            require "./controller/".ROUTES[$url]["controller"].".php";
            // require __DIR__."/../controller/".ROUTES[$url]["controller"].".php";
            $controller = new (ROUTES[$url]["controller"])();
            $controller->{ROUTES[$url]["fonction"]}();
        }
        else
            require "./view/404.php";
    }
}
?>
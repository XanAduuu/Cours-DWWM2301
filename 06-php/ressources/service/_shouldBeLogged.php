<?php 
if(session_status() === PHP_SESSION_NONE) session_start();

/**
 * Redirige l'utilisateur si il n'est pas connecté.
 * 
 * Si $logged est passé à "false" alors redirige l'utilisateur si il est connecté.
 *
 * @param boolean $logged
 * @param string $redirect
 * @return void
 */
function shouldBeLogged(bool $logged = true, string $redirect = "/"): void
{
    if($logged)
    {
        // Si je n'ai pas la propriété expire ou si elle est inferieur au timestamp actuel, je détruit la session.
        if(!isset($_SESSION["expire"]) || time() > $_SESSION["expire"])
        {
            unset($_SESSION);
            session_destroy();
            setcookie("PHPSESSID", "", time()-3600);
        }
        // si l'utilisateur n'est pas connecté, je le redirige.
        if(!isset($_SESSION["logged"]) || $_SESSION["logged"] !== true)
        {
            header("Location: $redirect");
            exit;
        }
    }
    else
    {
        // Si l'utilisateur est connecté, je le redirige
        if(isset($_SESSION["logged"]) && $_SESSION["logged"] === true)
        {
            header("Location: $redirect");
            exit;
        }
    }
}
/**
 * Redirige l'utilisateur si il ne correspond pas à l'id fourni en GET ou en POST.
 *
 * @param string $redirect
 * @param string $index
 * @param string $session
 * @return string
 */
function isSelectedUser(string $redirect="/", string $index = "id", string $session="idUser"): string
{
    // On cherche l'id en GET, sinon on le cherche en POST, sinon on met "false"
    $selectedId = $_GET[$index]?? $_POST[$index]?? false;
    /* 
        Je vérifie si je n'ai pas d'id en session
        ou si il est différent de l'utilisateur selectionné
    */
    if(!isset($_SESSION[$session]) || $_SESSION[$session] != $selectedId)
    {
        // Si l'utilisateur ne correspond pas, on le redirige
        header("Location: $redirect");
        exit;
    }
    return $selectedId;
}
?>
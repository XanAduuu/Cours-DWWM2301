<?php 
    require "./service/_csrf.php";
    require "./service/_mailer.php";

$email = $body = $envoi = "";
$error = [];

if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['contact']))
{
    // traitement email:
    if(empty($_POST["email"]))
    {
        $error["email"] = "Veuillez entrer un email";
    }
    else
    {
        $email = cleanData($_POST["email"]);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $error["email"] = "Veuillez entrer un email valide";
        }
    }
    // traitement contenu
    if(empty($_POST["content"]))
    {
        $error["content"] = "Veuillez entrer un message";
    }
    else
    {
        $body = cleanData($_POST["content"]);
    }
    // Envoi
    if(empty($error))
    {
        $envoi = sendMail($email, "super@blog.moe", "Formulaire Contact", $body);
    }
}
header("Refresh: 3; url=index.php");
$title = "Email";

if(!empty($envoi)):
?>
<p><?php echo $envoi ?> Vous allez être redirigé</p>
<?php endif;
if(!empty($error)):
?>
<p><?php echo $error["content"], "<br>", $error["email"] ?></p>
<?php endif; ?>
<?php 
$logged = isset($_SESSION["idUser"]) && $_GET["id"]==$_SESSION["idUser"];
$flash = $this->getFlash();
if($flash):
?>
<div class="flash">
    <?php echo $flash ?>
</div>
<?php 
endif; 
// Si connecté, j'affiche le formulaire de nouveau message.
if($logged)
{
    require __DIR__."/_form.php";
}
if($messages):
    foreach($messages as $m):
?>
<div class="message">
    <div class="date1">
        Ajouté le <?php echo $m["createdAt"] ?>
    </div>
    <div class="date2">
        <?php echo ($m["editedAt"]?"édite le : ".$m["editedAt"]:"") ?>
    </div>
    <p><?php echo $m["message"] ?></p>
    <div class="btns">
        <?php if(!empty($m["categorie"])): ?>
            <a href="?id=<?php echo $m["idUser"] ?>&cat=<?php echo $m["idCat"] ?>">
                <?php echo $m["categorie"] ?>
            </a>
        <?php endif;
        if($logged): ?>
            <a href="/05-poo-mvc/message/update?id=<?php echo $m["idMessage"] ?>">éditer</a>
            <a href="/05-poo-mvc/message/delete?id=<?php echo $m["idMessage"] ?>">supprimer</a>
        <?php endif; ?>
    </div>
</div>
<?php 
    endforeach;
else:
?>
<p>Cet utilisateur n'a aucun message</p>
<?php 
endif;
?>
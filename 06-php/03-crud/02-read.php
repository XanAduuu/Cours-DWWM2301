<?php 
    session_start();
    require "../ressources/service/_pdo.php";
    $pdo = connexionPDO();
    /* 
        Aucune données de l'utilisateur rentre en compte dans cette requête,
        Je n'ai donc pas besoin d'en faire une requête préparé.
    */
    $sql = $pdo->query("SELECT idUser, username FROM users");
    /* 
        Je souhaite récupérer plusieurs résultats.
        Donc au lieu de fetch() qui ne retourne qu'un résultat.
        J'utilise fetchAll()
    */
    $users = $sql->fetchAll();
    
    $title = "CRUD - Read";
    require "../ressources/template/_header.php";
    // Si il existe, je récupère mon message flash et le retire de la session.
    if(isset($_SESSION["flash"]))
    {
        $flash = $_SESSION["flash"];
        unset($_SESSION["flash"]);
    }
    // Si j'ai un message flash, je l'affiche
    if(isset($flash)):
?>
<div class="flash">
    <?php echo $flash ?>
</div>
<?php endif; ?>
<h2>Liste des Utilisateurs</h2>
<!-- Si on a trouvé des utilisateurs -->
<?php if($users): ?>
<table>
    <thead>
        <tr>
            <th>id</th>
            <th>username</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($users as $row): ?>
            <tr>
                <td><?php echo $row["idUser"] ?></td>
                <td><?php echo $row["username"] ?></td>
                <td>
                    <!-- 
                        On ajoute aux liens ci-dessous les id correspondant à chaque utilisateurs.
                        Cela nous permettra de personnaliser chaque page à l'utilisateur concerné. 
                    -->
                    <a href="./exercice/blog/read.php?id=<?php echo $row["idUser"]  ?>">Voir</a>
                    <!-- 
                        Les liens de mise à jour et de suppression devraient être visibles qu'à l'utilisateur connecté
                    -->
                    <?php if(isset($_SESSION["idUser"]) && ($_SESSION["idUser"]) == $row["idUser"]): ?>
                        &nbsp;|&nbsp;
                        <a href="03-update.php?id=<?php echo $row["idUser"]  ?>">Mettre à jour</a>
                        &nbsp;|&nbsp;
                        <a href="04-delete.php?id=<?php echo $row["idUser"]  ?>">Supprimer</a>
                    <?php endif; ?>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<?php else: ?>
    <p>Aucun utilisateur trouvés</p>
<?php endif;
require "../ressources/template/_footer.php"; ?>
<!-- <a href="./exercice/connexion.php">Connexion</a>
<a href="./exercice/deconnexion.php">Déconnexion</a> -->
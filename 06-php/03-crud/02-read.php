<?php 
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
?>
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
                <td></td>
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
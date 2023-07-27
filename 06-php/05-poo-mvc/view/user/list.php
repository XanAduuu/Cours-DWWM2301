<?php $this->getFlash(); ?>
<h3>Liste des utilisateurs</h3>
<?php if($users): ?>
    <table>
        <thead>
            <th>id</th>
            <th>username</th>
            <th>action</th>
        </thead>
        <tbody>
            <?php foreach ($users as $user) :?>
                <tr>
                    <td><?= $user['idUser']?></td>
                    <!-- <td><?php /* echo $user['idUser'] */?></td> -->
                    <td><?= $user["username"] ?></td>
                    <td>
                        <a href="/05-poo-mvc/message/list?id=<?= $user["idUser"]?>">Voir</a>
                        <!-- On affiche ces liens uniquement si la ligne correspond à l'utilisateur connecté : -->
                        <?php if(isset($_SESSION["idUser"]) && $_SESSION["idUser"] == $user["idUser"]): ?>
                            &nbsp;|&nbsp;
                            <a href="/05-poo-mvc/user/update?id=<?= $user["idUser"]?>">Éditer</a>
                            &nbsp;|&nbsp;
                            <a href="/05-poo-mvc/user/delete?id=<?= $user["idUser"]?>">Supprimer</a>
                        <?php endif; ?>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
<?php else: ?>
    <p>Aucun utilisateur trouvé</p>
<?php endif; ?>
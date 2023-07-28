<form action="" method="post">
    <!-- username -->
    <label for="username">Nom d'Utilisateur</label>
    <input 
        type="text"
        name="username"
        id="username"
        <?= $required?"required":"" ?>
        value="<?= $user["username"]??"" ?>">
    <span class=error><?= $error["username"]??"" ?></span>
    <br>

    <!-- email -->
    <label for="email">Email</label>
    <input
        type="email"
        name="email"
        id="email"
        <?= $required?"required":"" ?>
        value="<?= $user["email"]??"" ?>">
    <span class=error><?= $error["email"]??"" ?></span>
    <br>

    <!-- password -->
    <label for="password">Mot de Passe</label>
    <input type="password" name="password" id="password" <?= $required?"required":"" ?>>
    <span class="error"><?= $error["password"]??"" ?></span>
    <br>

    <!-- Verification du mot de passe -->
    <label for="passwordBis">Confirmation du Mot de Passe</label>
    <input type="password" name="passwordBis" id="passwordBis" <?= $required?"required":"" ?>>
    <span class="error"><?= $error["passwordBis"]??"" ?></span>
    <br>

    <input type="submit" value="Enregistrer" name="userForm">

</form>
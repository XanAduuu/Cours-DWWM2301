<form action="<?php echo $action??"" ?>" method="post">
    <textarea 
    name="message" 
    placeholder="Edition du message"
    <?php echo $required?"required":"" ?>
    ><?php echo $message["message"]??"" ?></textarea>
    <span class="error"><?php echo $error["message"]??"" ?></span>
    <select name="categorie">
        <option value="">Selection de la catégorie</option>
        <?php foreach($categories as $cat): ?>
            <option 
                value="<?php echo $cat["idCat"] ?>"
                <?php echo ($cat["idCat"]==($message["idCat"]??""))?"selected":"" ?>
            >
            <?php echo $cat["nom"] ?>
            </option>
        <?php endforeach; ?>
    </select>
    <input type="submit" value="Envoyer" name="messageForm">
</form>
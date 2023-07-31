<?php
namespace Model;
use Classes\AbstractModel;

Class MessageModel extends AbstractModel
{
    /**
     * Retourne tous les messages d'un utilisateur.
     *
     * @param integer $idUser
     * @return array|false
     */
    public function getMessagesByUser(int $idUser): array|false
    {
        $sql = $this->pdo->prepare("SELECT m.*, c.nom as categorie FROM messages m LEFT JOIN categories c ON m.idCat = c.idCat WHERE m.idUser = ? ORDER BY m.createdAt DESC");
        $sql->execute([$idUser]);
        return $sql->fetchAll();
    }
    /**
     * Retourne un message via son id.
     *
     * @param integer $id
     * @return array|false
     */
    public function getMessageById(int $id): array|false
    {
        $sql = $this->pdo->prepare("SELECT * FROM messages WHERE idMessage = ?");
        $sql->execute([$id]);
        return $sql->fetch();
    }
    /**
     * Retourne les messages d'un utilisateur d'une catégorie donnée.
     *
     * @param integer $idUser
     * @param integer $idCat
     * @return array|false
     */
    public function getMessagesByUserAndCategorie(int $idUser, int $idCat): array|false
    {
        $sql = $this->pdo->prepare("SELECT m.*, c.nom as categorie FROM messages m LEFT JOIN categories c ON m.idCat = c.idCat WHERE m.idUser = ? AND m.idCat = ? ORDER BY m.createdAt DESC");
        $sql->execute([$idUser, $idCat]);
        return $sql->fetchAll();
    }
    /**
     * Créer un nouveau message en BDD.
     *
     * @param array $values
     *  $values = ["m"=>(string) message, "id"=>(int) idUser, {"cat"=>(int) idCat}]
     * @return void
     */
    public function addMessage(array $values): void
    {
        if(count($values) === 2)
        {
            $sql = $this->pdo->prepare("INSERT INTO messages(message, idUser) VALUES (:m, :id)");
        }
        else
        {
            $sql = $this->pdo->prepare("INSERT INTO messages(message, idUser, idCat) VALUES (:m, :id, :cat)");
        }
        $sql->execute($values);
    }
    public function deleteMessageById($id): void
    {
        $sql = $this->pdo->prepare("DELETE FROM messages WHERE idMessage=?");
        $sql->execute([$id]);
    }
    public function updateMessageById(int $idMessage, string $content, int $idCat=NULL): void
    {
        $sql = $this->pdo->prepare("UPDATE messages SET message=:m, idCat = :cat, editedAt = current_timestamp() WHERE idMessage = :id");
        $sql->execute([
            "m" => $content,
            "cat" => $idCat,
            "id" => $idMessage
        ]);
        
    }
}

?>
<?php
namespace Model;
use Classes\AbstractModel;

class CategorieModel extends AbstractModel
{
    /**
     * Retourne toute les catégories.
     *
     * @return array|false
     */
    function getAllCategories(): array|false
    {
        $sql = $this->pdo->query("SELECT * FROM categories ORDER BY nom ASC");
        return $sql->fetchAll();
    }
    /**
     * Retourne une catégorie via son id.
     *
     * @param integer $idCat
     * @return array|false
     */
    function getCategorieById(int $idCat): array|false
    {
        $sql = $this->pdo->prepare("SELECT * FROM categories WHERE idCat = ?");
        $sql->execute([$idCat]);
        return $sql->fetch();
    }
}
?>
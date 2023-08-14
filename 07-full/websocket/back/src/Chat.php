<?php 
namespace AFCI;

use Ratchet\ConnectionInterface;
use Ratchet\WebSocket\MessageComponentInterface;

require __DIR__."/../vendor/autoload.php";

class Chat implements MessageComponentInterface
{
    protected $clients;

    public function __construct()
    {
        // Une classe permettant le stockage d'objets
        $this->clients = new \SplObjectStorage();
    }
    public function onOpen(ConnectionInterface $conn)
    {   
        // Je range ma nouvelle connexion dans ma liste.
        $this->clients->attach($conn);
        // j'affiche un message confirmant la connexion.
        echo "Nouvelle Connexion ! ({$conn->resourceId})\n";
    }
    public function onMessage(ConnectionInterface $from, $msg)
    {
        // Je compte le nombre de connexions qui vont recevoir le message:
        $numRecv = count($this->clients)-1;
        $pluriel = $numRecv===1?"":"s";

        // J'affiche un message indiquant la connexion expédiant le message, le message, et le nombre de destinataires
        echo sprintf("Connexion %d envoi le message \"%s\" à %d autre%s connexion%s\n", $from->resourceId, $msg, $numRecv, $pluriel, $pluriel);

        foreach($this->clients as $client)
        {
            if($from != $client) $client->send($msg);
        }
    }
    public function onClose(ConnectionInterface $conn)
    {
        // On supprime l'utilisateur des clients connectés :
        $this->clients->detach($conn);
        // On affiche un message confirmant la déconnexion.
        echo "Connexion {$conn->resourceId} déconnectée ! \n";
    }
    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        echo "Une erreur s'est produite! {$e->getMessage()}\n";
        // Je ferme la connexion ayant provoquée l'erreur.
        $conn->close();
    }
}

?>
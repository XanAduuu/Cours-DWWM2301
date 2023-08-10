<?php 
    // Quelles sont les adresses qui peuvent envoyer des requêtes à notre serveur.
    header("Access-Control-Allow-Origin: http://spa.localhost");
    // On indique le format des données échangées.
    header("Content-Type: application/json; charset=UTF-8");
    // Durée de vie de la requête (facultatif)
    header("Access-Control-Max-Age: 3600");
    // On indique la possibilité d'échanger des identifiants.
    header("Access-Control-Allow-Credentials: true");
    // On indique les entêtes autorisées.
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Request-With");

    /**
     * Change le status de la requête et affiche sous forme de JSON les données passées en paramètres.
     *
     * @param array $data
     * @param integer $status
     * @param string $message
     * @return void
     */
    function sendResponse(array $data, int $status, string $message):void
    {   
        http_response_code($status);
        echo json_encode([
            "data"=>$data,
            "status"=>$status,
            "message" =>$message]);
            exit();
    }


    /**
     * Sauvegarde des messages d'erreur si les paramètres sont fournis.
     * Retourne la liste des erreurs si les paramètres sont laissés vides.
     *
     * @param boolean $property
     * @param boolean $message
     * @return array
     */
    function setError(string|false $property = false, string|false $message = false): array
    {
        static $error =[];
        if(!$property || !$message) return ["violations"=>$error];

        $error[]=[
            'property'=>$property,
            'message'=> $message
        ];
        return [];
    }

?>
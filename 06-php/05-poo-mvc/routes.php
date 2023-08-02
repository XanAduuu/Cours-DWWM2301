<?php 
const ROUTES = [
    "05-poo-mvc"=>[
        "controller"=>"UserController",
        "fonction"=>"read"
    ],
    "05-poo-mvc/inscription"=>[
        "controller"=>"UserController",
        "fonction"=>"create"
    ],
    "05-poo-mvc/user/update"=>[
        "controller"=>"UserController",
        "fonction"=>"update"
    ],
    "05-poo-mvc/user/delete"=>[
        "controller"=>"UserController",
        "fonction"=>"delete"
    ],
    "05-poo-mvc/message/create"=>[
        "controller"=>"MessageController", 
        "fonction"=>"create"
    ],
    "05-poo-mvc/messages"=>[
        "controller"=>"MessageController", 
        "fonction"=>"read"
    ],
    "05-poo-mvc/message/update"=>[
        "controller"=>"MessageController", 
        "fonction"=>"update"
    ],
    "05-poo-mvc/message/delete"=>[
        "controller"=>"MessageController", 
        "fonction"=>"delete"
    ],
    "05-poo-mvc/connexion"=>[
        "controller"=>"AuthController", 
        "fonction"=>"login"
    ],
    "05-poo-mvc/deconnexion"=>[
        "controller"=>"AuthController", 
        "fonction"=>"logout"
    ]
];
?>
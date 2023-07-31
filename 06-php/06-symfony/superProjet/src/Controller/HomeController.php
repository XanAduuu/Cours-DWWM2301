<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

// #[Route("/user")]
class HomeController extends AbstractController
{
    #[Route('/', name: 'accueil')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'Page d\'accueil',
            "fruits"=>["banane", "tomate", "cerise"],
            "pays"=>["france"=>"Bonjour le monde !", "angleterre"=>"Hello World!"],
            "chiffre"=>rand(0,10),
            "vide"=>[]
        ]);
    }

    #[Route("/bonjour/anglais/{username}", 
        name:"hello", 
        defaults: ["username"=>"Charles"], 
        requirements:["username"=>"^[a-zA-Z]+$"])]
    public function hello($username): RedirectResponse
    {
        dd("Hello ".$username);
        return $this->redirectToRoute("bonjour");
    }
    #[Route("/bonjour/{nom<^[a-zA-Z]+$>}/{prenom<^[a-zA-Z]+$>?Jean}", name: "bonjour")]
    public function bonjour($nom, $prenom, Request $request): Response
    {
        dump($request);
        // dd($request);
        return $this->render("home/bonjour.html.twig",[
            "nom"=> $nom,
            "prenom"=>$prenom
        ]);
    }
}

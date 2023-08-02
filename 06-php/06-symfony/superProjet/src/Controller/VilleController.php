<?php

namespace App\Controller;

use App\Entity\Ville;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/ville')]
class VilleController extends AbstractController
{
    #[Route('/add', name: 'add_ville')]
    public function create(ManagerRegistry $doc): Response
    {
        $em = $doc->getManager();
        $ville = new Ville();
        $ville  ->setNom("Lille")
                ->setPopulation(234475)
                ->setCreatedAt(new \DateTimeImmutable());
        $em->persist($ville);

        $ville2 = new Ville();
        $ville2 ->setNom("Nice")
                ->setPopulation(342669)
                ->setCreatedAt(new \DateTimeImmutable());
        $em->persist($ville2);
        
        $em->flush();

        return $this->render('ville/index.html.twig', [
            'controller_name' => 'VilleController',
        ]);
    }
    #[Route("/", name: "readVille")]
    public function readAll(ManagerRegistry $doc): Response
    {
        $repo = $doc->getRepository(Ville::class);

        $villes = $repo->findAll();

        return $this->render('ville/index.html.twig', [
            'villes' => $villes,
        ]);
    }
    #[Route("/{id<\d+>}", name: "detailVille")]
    public function detail(ManagerRegistry $doc, $id):Response
    {
        $repo = $doc->getRepository(Ville::class);
        $ville = $repo->find($id);

        if(!$ville) return $this->redirectToRoute("readVille");

        return $this->render("ville/detail.html.twig", [
            "ville" => $ville
        ]);
    }
}

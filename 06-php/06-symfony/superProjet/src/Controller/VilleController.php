<?php

namespace App\Controller;

use App\Entity\Ville;
use App\Repository\VilleRepository;
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

        return $this->redirectToRoute("readVille");
    }
    #[Route("/delete/{id<\d+>}", name: "deleteVille")]
    public function delete(Ville $ville=null,
    ManagerRegistry $doc ): Response
    {
        if($ville)
        {
            $em = $doc->getManager();
            $em->remove($ville);
            $em->flush();
            $this->addFlash("danger", "La ville a bien été supprimée.");
        }
        return $this->redirectionToRoute("readVille");
    }
    #[Route("/update/{id<\d+>}/{nom}/{pop<\d+>}", name: "updateVille")]
    public function update(Ville $ville, ManagerRegistry $doc, $nom, $pop): Response
    {
        if($ville)
        {
            $ville ->setNom($nom)
                    ->setPopulation($pop);
            $em = $doc->getManager();
            $em->persist($ville);
            $em->flush();
            $this->addFlash("warning", "La ville a bien été mise à jour.");
        }
        return $this->redirectToRoute("detailVille",
        []);
    }    
    #[Route("/detail/{id<\d+>}", name: "detailVille")]
    // public function detail(ManagerRegistry $doc, $id):Response
    public function detail(Ville $ville=null):Response
    {
        // $repo = $doc->getRepository(Ville::class);
        // $ville = $repo->find($id);

        if(!$ville) return $this->redirectToRoute("readVille");

        return $this->render("ville/detail.html.twig", [
            "ville" => $ville
        ]);
    }
    #[Route("/'page?1}/{nb?5}", name: "readVille")]
    public function readAll(/* ManagerRegistry $doc, */ VilleRepository $repo, $page, $nb): Response
    {
        $repo = $doc->getRepository(Ville::class);
        dump($repo->findByPopulationInterval(50000, 300000));
        // $villes = $repo->findAll();
        $villes = $repo->findBy([], [], $nb, ($page-1)*$nb);
        $total = $repo->count([]);
        $nbpage = ceil($total/$nb);

        return $this->render('ville/index.html.twig', [
            'villes' => $villes,
            "nbPage" => $nbPage,
            "nombre" => $nb,
            "page" => $page
        ]);
    }

    #[Route("/{name}/{nb?1", name:"readVilleName")]
    public function readByName(VilleRepsitory $repo, $nb, $name): Response
    {
        if($nb>1)
        {
            $villes = $repo->findBy(["nom"=>$name],[], $nb);
            return $this->render("ville/index.html.twig", [
                "villes"=> $villes
            ]);
        }
        $ville = $repo->findOneBy(["nom"=>$name]);
        return $this->render("ville/detoil.html;twig", [
            "ville"=> $ville
        ]);
    }
}

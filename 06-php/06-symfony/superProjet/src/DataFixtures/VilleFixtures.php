<?php

namespace App\DataFixtures;

use App\Entity\Departement;
use App\Entity\Ville;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class VilleFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);
        $faker = Factory::create();
        for ($j=0; $j < 10; $j++) { 
            $dep = new Departement();
            $dep->setNom($faker->state())
                ->setCode($faker->randomNumber(5, true));
            $manager->persist($dep); 
            for ($i=0;$i<15;$i++)
            {
                $ville = new Ville();
                $ville  ->setNom($faker->city())
                        ->setPopulation($faker->randomNumber(6, true))
                        ->setDepartement($dep)
                        ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeThisDecade()));
                $manager->persist($ville);
            } 
            $dep->setChefLieu($ville);  
        }
        
        $manager->flush();
    }
}

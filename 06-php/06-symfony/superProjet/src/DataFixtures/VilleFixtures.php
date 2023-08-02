<?php

namespace App\DataFixtures;

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
        for ($i=0;$i<15;$i++)
        {
            $ville = new Ville();
            $ville  ->setNom($faker->city())
                    ->setPopulation($faker->randomNumber(6, true))
                    ->setCreatedAt(\DateTimeImmutable::createFromMutable($faker->dateTimeThisDecade()));
            $manager->persist($ville);
        }
        $manager->flush();
    }
}

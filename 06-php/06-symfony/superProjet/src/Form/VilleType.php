<?php

namespace App\Form;

use App\Entity\Ville;
use App\Entity\Departement;
use Symfony\Component\Form\AbstractType;
use App\Repository\DepartementRepository;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class VilleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom')
            ->add('population')
            ->add('departement', EntityType::class, [
                "class"=>Departement::class,
                "label"=>"Département de la Ville",
                "expanded"=>false,
                "multiple"=>false,
                "query_builder"=>function(DepartementRepository $repo)
                {
                    return  $repo->createQueryBuilder("d")
                            ->orderBy("d.nom", "ASC");
                }
            ])
            ->add("photoFile", FileType::class, [
                "mapped"=>false,
                "label"=>"Photo de cette magnifique ville :",
                "required"=>false,
                "constraints"=>[
                    new File([
                        "maxSize"=>"1024k",
                        "mimeTypes"=>[
                            "image/jpeg",
                            "image/png",
                            "image/gif"
                        ],
                        "mimeTypesMessage"=>"Seul les images jpg, png ou gif sont acceptés."
                    ])
                ]
            ])
            ->add("Envoyer", SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Ville::class,
        ]);
    }
}

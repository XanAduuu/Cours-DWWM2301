<?php

namespace App\Entity;

use App\Repository\DepartementRepository;
use App\Traits\TimeStampTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DepartementRepository::class)]
#[ORM\HasLifecycleCallbacks()]
class Departement
{
    use TimeStampTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $nom = null;

    #[ORM\Column(length: 5)]
    private ?string $code = null;

    #[ORM\OneToOne(inversedBy: 'chefLieu', cascade: ['persist', 'remove'])]
    private ?Ville $chefLieu = null;

    #[ORM\OneToMany(mappedBy: 'departement', targetEntity: Ville::class)]
    private Collection $Villes;

    public function __construct()
    {
        $this->Villes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

        return $this;
    }

    public function getChefLieu(): ?Ville
    {
        return $this->chefLieu;
    }

    public function setChefLieu(?Ville $chefLieu): static
    {
        $this->chefLieu = $chefLieu;

        return $this;
    }

    /**
     * @return Collection<int, Ville>
     */
    public function getVilles(): Collection
    {
        return $this->Villes;
    }

    public function addVille(Ville $ville): static
    {
        if (!$this->Villes->contains($ville)) {
            $this->Villes->add($ville);
            $ville->setDepartement($this);
        }

        return $this;
    }

    public function removeVille(Ville $ville): static
    {
        if ($this->Villes->removeElement($ville)) {
            // set the owning side to null (unless already changed)
            if ($ville->getDepartement() === $this) {
                $ville->setDepartement(null);
            }
        }

        return $this;
    }
}

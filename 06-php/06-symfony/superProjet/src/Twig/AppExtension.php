<?php 
namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter("price", [$this, "formatPrice"], ["is_safe"=>['html']])
        ];
    }
    public function getFunctions()
    {
        return [
            new TwigFunction("area", [$this, "calculateArea"])
        ];
    }
    public function calculateArea(int $width, int $length): int
    {
        return $width * $length;
    }
    public function formatPrice(
        float $number,
        string $sign = "€",
        bool $before = true,
        string $decPoint = ",",
        string $thousandsSep = " ",
        int $decimals = 0
    ):string
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);

        if($before) $price = "<sup>$sign</sup>".$price;
        else $price .= "<sup>$sign</sup>";

        return $price;
    }
}
?>
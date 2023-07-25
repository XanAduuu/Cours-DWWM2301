<?php 
/* 
    Plugin Name: Hello World !
    Plugin URI: https://github.com/NolwennWM/Cours-DWWM2301
    Description: plugin pour le cours DWWM
    Author: Nolwenn WEBER-MARQUISET
    Author URI: https://www.marquiset.fr
    Version: 0.1.0
*/
add_action( "wp_footer", "hello");

function hello()
{
    echo "<p>Hello World !</p>";
}

add_filter("default_content", "world");

function world()
{
    return "<p>Hello World !</p>";
}

add_filter("the_content", "goodbye");

function goodbye($content)
{
    if(is_single())
        return $content . "<hr><p>Goodbye World !</p>";
    return $content;
}

add_shortcode("hw", "alertworld");
function alertworld()
{
    return "<script>alert('Hello World !');</script>";
}
?>
<?php
    // Ajoute la prise en charges des images de mise en avant.
    add_theme_support('post-thumbnails');
    // Ajoute automatiquement le titre du site dans l'en-tête.
    add_theme_support('title-tag');

    add_action("wp_enqueue_scripts", "dwwm_register_assets");

    function dwwm_register_assets()
    {
        wp_enqueue_style("dwwm", get_stylesheet_uri());
    }
?>
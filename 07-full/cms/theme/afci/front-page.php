<?php get_header(); ?>
<h1>Page front-page.php</h1>
<?php if(have_posts()): while(have_posts()): the_post(); ?>
    <h2><?php the_title(); ?></h2>
    <?php the_content(); ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>
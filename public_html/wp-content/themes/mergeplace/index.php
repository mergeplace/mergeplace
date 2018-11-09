<?php get_header(); ?>

<h1>MERGE PLACE</h1>

<?php
    // TO SHOW THE PAGE CONTENTS
    while ( have_posts() ) : the_post(); ?> 
    <?php the_content(); ?> 
<?php
    endwhile; //resetting the page loop
    wp_reset_query(); //resetting the page query
?>


<a href="/inner">INNER PAGE</a>

<?php get_footer(); ?>
    

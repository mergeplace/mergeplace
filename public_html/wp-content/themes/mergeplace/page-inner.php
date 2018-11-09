<?php get_header(); ?>

<h1>INNER PAGE</h1>


<?php
    // TO SHOW THE PAGE CONTENTS
    while ( have_posts() ) : the_post(); ?> 
    <?php the_content(); ?> 
    <p>Room size: <?php echo get_field('size_sqm'); ?> sq.m.</p>
<?php
    endwhile; //resetting the page loop
    wp_reset_query(); //resetting the page query
?>
<a href="/">BACK HOME</a>

<?php get_footer(); ?>
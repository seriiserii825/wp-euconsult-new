<?php
get_header();
/**
 * Template Name: Examen
 */
?>
<div class="examen-page">
	<?php if (have_posts()): ?>
		<?php $page_bg_image_url = kama_thumb_src('w=1905 &h=340 &post_id=21'); ?>
        <section class="finance-single section-dark page-intro"
                 style="background-image: url('<?php echo $page_bg_image_url; ?>'); background-position: center; background-size: cover;">
            <div class="page-intro__container">
                <header class="section__header section__header--center">
                    <h2 class="section__title"><?php the_title(); ?></h2>
                </header>
            </div>
        </section>
		<?php the_post(); ?>
        <div class="examen-page__content">
			<?php the_content(); ?>
        </div>
	<?php endif; ?>
</div>

<?php get_footer(); ?>

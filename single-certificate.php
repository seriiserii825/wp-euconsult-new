<?php get_header(); ?>
<?php $ramb_bg_img_src = kama_thumb_src('w=1905 &h=340 &post_id=21'); ?>

<?php if (have_posts()): ?>
	<?php the_post(); ?>
    <section class="section-dark page-intro"
             style="background-image: url('<?php echo $ramb_bg_img_src; ?>'); background-position: center top">
        <div class="page-intro__container">
            <header class="section__header section__header--center">
                <h2 class="section__title">
					<?php the_title(); ?>
                </h2>
            </header>
        </div>
    </section>
    <section class="container certificate-single">
		<?php the_post_thumbnail('full'); ?>
        <div class="certificate-single__content">
			<?php the_content(); ?>
        </div>
    </section>
	<?php require_once __DIR__ . '/template-parts/connect-now.php'; ?>
<?php endif; ?>

<?php get_footer(); ?>

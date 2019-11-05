<?php
/**
 * Template Name: Certificates
 */
get_header();
?>
<section class="idea-page">
	<?php
	$ramb_bg_img_src = kama_thumb_src('w=1905 &h=340 &post_id=21');
	?>
    <section class="section-dark page-intro page-idea"
             style="background-image: url('<?php echo $ramb_bg_img_src; ?>'); background-position: center 18%">
        <div class="page-intro__container">
            <header class="section__header section__header--center">
                <h2 class="section__title">
					<?php echo get_post(406)->post_content; ?>
                </h2>
            </header>
        </div>
    </section>
    <div class="certificate">
		<?php
		$certificates = new WP_Query([
			'post_type' => 'certificate',
			'order' => 'ASC',
			'posts_per_page' => -1
		]);
		?>
		<?php if ($certificates->have_posts()): ?>
			<?php $i = 1; while ($certificates->have_posts()): ?>
            <?php
                $reverse = '';
                if($i % 2 == 0){
                    $reverse = 'reverse';
                }
            ?>

				<?php $certificates->the_post(); ?>
                <div class="certificate__item">
                    <h3 class="certificate__title"><?php the_title(); ?></h3>
                    <div class="certificate__item-wrap <?php echo $reverse; ?>">
                        <div class="certificate__img">
							<?php echo kama_thumb_img('w=500'); ?>
                        </div>
                        <div class="certificate__content">
							<?php echo carbon_get_the_post_meta('crb_certificate_short_text'.get_lang()); ?>
                        </div>
                    </div>
                    <a href="<?php the_permalink(); ?>" class="btn"><?php echo carbon_get_theme_option('crb_know_more'.get_lang()); ?></a>
                </div>
			<?php $i++; endwhile; ?>
			<?php wp_reset_postdata(); ?>
		<?php endif; ?>

    </div>
	<?php require_once __DIR__ . '/template-parts/connect-now-video.php'; ?>
</section>
<?php get_footer(); ?>

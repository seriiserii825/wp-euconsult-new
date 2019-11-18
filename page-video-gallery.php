<?php
/**
 * Template Name: Video gallery
 */
get_header();
?>
<section class="video-page">
	<?php
	$ramb_bg_img_src = kama_thumb_src('w=1905 &h=340 &post_id=21');
	?>
    <section class="section-dark page-intro page-video"
             style="background-image: url('<?php echo $ramb_bg_img_src; ?>'); background-position: center 18%">
        <div class="page-intro__container">
            <header class="section__header section__header--center">
                <h2 class="section__title">
					<?php the_title(); ?>
                </h2>
            </header>
			<?php if (have_posts()): ?>
				<?php the_post(); ?>
				<?php the_content(); ?>
			<?php endif; ?>
        </div>
    </section>
    <div class="video-page__content" id="js-video-page__content">
		<?php
		$video = new WP_Query([
			'post_type' => 'video',
			'post_per_page' => -1
		]);
		?>

		<?php if ($video->have_posts()): ?>
			<?php while ($video->have_posts()): ?>
				<?php $video->the_post(); ?>
                <div class="video-page__item">
                    <a class="video-page__link" href="<?php echo get_page_link(406); ?>">Aceste videouri sunt disponibile la comandarea certificatului de instruire.</a>
                    <video class="no-forward"  autoplay muted controlsList="nodownload" >
                        <source src="<?php echo carbon_get_the_post_meta('crb_video_link'); ?>.mp4" type="video/mp4">
                        <source src="<?php echo carbon_get_the_post_meta('crb_video_link'); ?>.ogg" type="video/ogg">
                    </video>
                    <div class="video-page__overlay"></div>
                </div>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		<?php else: ?>
		<?php endif; ?>
    </div>
	<?php require_once __DIR__ . '/template-parts/connect-now.php'; ?>


</section>
<?php get_footer(); ?>

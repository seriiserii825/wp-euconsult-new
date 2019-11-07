<?php
get_header();
?>
	<?php
	$user = wp_get_current_user()->roles;
	$user_role = '';
	if ($user[0] === 'administrator') {
		$user_role = 'viticultura';
	} else {
		$user_role = $user;
	}
	?>


<?php $page_bg_image_url = kama_thumb_src('w=1905 &h=340 &post_id=21'); ?>

    <div class="finance-single video-single">
        <section class="finance-single section-dark page-intro"
                 style="background-image: url('<?php echo $page_bg_image_url; ?>'); background-position: center; background-size: cover;">
            <div class="page-intro__container">
                <header class="section__header section__header--center">
                    <h2 class="section__title"><?php the_title(); ?></h2>
                </header>
                <!--				<p>-->
            </div>
        </section>
		<?php if (is_user_logged_in()): ?>
            <section class="finance-single__container">
				<?php get_sidebar('categories'); ?>
                <section class="main-single">
	                <?php if (have_posts()): ?>
		                <?php while (have_posts()): ?>
			                <?php the_post(); ?>
                            <header class="section__header">
                                <h2 class="section__title">
					                <?php the_title(); ?>
                                </h2>
                            </header>
                            <video class="no-forward"  controls controlsList="nodownload" >
                                <source src="<?php echo carbon_get_the_post_meta('crb_video_link'); ?>" type="video/mp4">
                            </video>
		                <?php endwhile; ?>
	                <?php else: ?>
	                <?php endif; ?>
                </section>

            </section>
		
		<?php else: ?>
            <h1 class="authorization">
                <a href="<?php echo wp_login_url(home_url('video-page/')); ?>"><?php echo carbon_get_theme_option('crb_login_title' . get_lang()); ?></a>
                , <?php echo carbon_get_theme_option('crb_authorization_title' . get_lang()); ?>
            </h1>
		<?php endif; ?>
    </div>


<?php get_footer(); ?>

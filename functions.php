<?php
/**
 * bs-euconsult functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package bs-euconsult
 */


if (!defined('ABSPATH')) {
	exit;
}

require_once __DIR__ . '/inc/carbon-fields/cb.php';
require_once __DIR__ . '/inc/carbon-fields/cb-finance-page.php';
require_once __DIR__ . '/inc/carbon-fields/cb-post-type.php';
require_once __DIR__ . '/inc/carbon-fields/cb-page.php';
require_once __DIR__ . '/inc/carbon-fields/cb-category.php';
require_once __DIR__ . '/inc/carbon-fields/cb-news-post.php';

require_once __DIR__ . '/inc/func.php';
require_once __DIR__ . '/inc/bs-post-type.php';
require_once __DIR__ . '/inc/bs-post-taxonomy.php';
require_once __DIR__ . '/inc/bs-styles.php';
require_once __DIR__ . '/inc/bs-setup.php';
require_once __DIR__ . '/inc/bs-widgets.php';

add_action('after_setup_theme', function () {
	add_theme_support('pageviews');
});

function bs_euconsult_content_width()
{
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters('bs_euconsult_content_width', 640);
}

add_action('after_setup_theme', 'bs_euconsult_content_width', 0);


$result = add_role('vegetables', 'Vegetables',
	array(
		'read' => true,  // true разрешает эту возможность
	)
);

$result = add_role('pomicultura', 'Pomicultura',
	array(
		'read' => true,  // true разрешает эту возможность
	)
);

$result = add_role('viticultura', 'Viticultura',
	array(
		'read' => true,  // true разрешает эту возможность
	)
);

function login_redirect($redirect_to, $request, $user)
{
//is there a user to check?
	if (isset($user->roles) && is_array($user->roles)) {

		// check for admins
		if (in_array('administrator', $user->roles)) {
			// redirect them to the default place
			return $redirect_to;
		} else {
			return home_url('video-page/');
		}
	} else {
		return $redirect_to;
	}
}

add_filter('login_redirect', 'login_redirect', 10, 3);

function showVideoInSidebar($term_id)
{
	$term = get_term($term_id);
	$term_name = $term->name;
	$term_slug = $term->slug;

	if($term_id == 12){
		$page_id = 522;
	}
	if($term_id == 13){
		$page_id = 546;
	}
	if($term_id == 11){
		$page_id = 549;
	}

	$html = '';
	$html .= '<li>';
	$html .= '<a href="' . get_term_link((int)$term_id, "category_video") . '">' . $term_name . '</a>';
	$sublist_video = new WP_Query([
		'post_type' => 'video',
		'category_video' => $term_slug,
		'posts_per_page' => -1
	]);
	$html .= '<ul class="sublist">';
	if ($sublist_video->have_posts()) {
		while ($sublist_video->have_posts()) {
			$sublist_video->the_post();
			$aux = carbon_get_the_post_meta('crb_video_aux');
			$html .= '<li>';
			$classAux = '';
			if ($aux == 2) {
				$classAux = 'class="aux"';
			}
			$html .= '<a ' . $classAux . ' href="' . get_the_permalink() . '">' . get_the_title() . ' </a>';
			$html .= '</li>';
		}
	}
	$html .= '<li>'.'<a class="sublist__examen-link" href="'.get_the_permalink($page_id).'">'.get_the_title($page_id).'</a>'.'</li>';
	$html .= '</ul>';
	$html .= '</li>';
	echo $html;
}
//add_action( 'init', 'my_setcookie_example' );
//function my_setcookie_example() {
//	setcookie( 'video', 0, 30 * 86400);
//}

///**
// * Implement the Custom Header feature.
// */
//require get_template_directory() . '/inc/custom-header.php';
//
///**
// * Custom template tags for this theme.
// */
//require get_template_directory() . '/inc/template-tags.php';
//
///**
// * Functions which enhance the theme by hooking into WordPress.
// */
//require get_template_directory() . '/inc/template-functions.php';
//
///**
// * Customizer additions.
// */
//require get_template_directory() . '/inc/customizer.php';
//
///**
// * Load Jetpack compatibility file.
// */
//if ( defined( 'JETPACK__VERSION' ) ) {
//	require get_template_directory() . '/inc/jetpack.php';
//}
//

<?php
/* Template Name: Theme - Password Protect *

/**
 * The template for displaying singular post-types: posts, pages and user-defined custom post types.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$userHasAccessToView = 0;
$displayWaitingApprovalMessage = 0;

if ( is_user_logged_in() ) {

		$userHasAccessToView = 1;

		$user = wp_get_current_user();
		if ( in_array( 'Waiting Approval', (array) $user->roles ) ) {
			$displayWaitingApprovalMessage = 1;
			$userHasAccessToView = 0;
		}

} else {
		//$loginLink = "/my-account/?ref=" . get_permalink();
		wp_redirect( esc_url( add_query_arg( 'ref', get_permalink(), '/my-account/' ) ) );
		exit;
};


?>
<?php get_header(); ?>

<?php if ( $userHasAccessToView ) {  ?>

<div class="page-content-wrap" >
<main <?php post_class( 'site-main' ); ?> role="main">

<?php while ( have_posts() ) : the_post(); ?>
	<?php if ( apply_filters( 'hello_elementor_page_title', true ) ) : ?>
		<header class="page-header">
			<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		</header>
	<?php endif; ?>
	<div class="page-content">
		<?php the_content(); ?>
		<?php wp_link_pages(); ?>
	</div>
<?php endwhile; ?>

</main>
</div>

<?php } else { ?>
	<?php if ( $displayWaitingApprovalMessage ) { ?>
		<?php echo do_shortcode('[elementor-template id="369"]'); ?>
	<?php } ?>
<?php }; ?>

<?php get_footer(); ?>

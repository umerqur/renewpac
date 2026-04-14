<?php
/* Template Name: Theme - Password Protect (Board Members Only) *

/**
 * The template for displaying singular post-types: posts, pages and user-defined custom post types.
 *
 * @package HelloElementor
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function check_user_role($roles, $user_id = null) {
	if ($user_id) $user = get_userdata($user_id);
	else $user = wp_get_current_user();
	if (empty($user)) return false;
	foreach ($user->roles as $role) {
		if (in_array($role, $roles)) {
			return true;
		}
	}
	return false;
}


$userHasAccessToView = 0;
$displayWaitingApprovalMessage = 0;
$displayAccessDeniedMessage = 0;

if ( is_user_logged_in() ) {

		$user = wp_get_current_user();

		// user roles are case sensitive
		if (check_user_role(array('Board Member', 'administrator'))) {
			$userHasAccessToView = 1;
		} else {
			$userHasAccessToView = 0;
			$displayAccessDeniedMessage = 1;
		}

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
		<?php echo do_shortcode('[elementor-template id="367"]'); ?>
	<?php } ?>
	<?php if ( $displayAccessDeniedMessage ) { ?>
		<?php echo do_shortcode('[elementor-template id="379"]'); ?>
	<?php } ?>
<?php }; ?>

<?php get_footer(); ?>

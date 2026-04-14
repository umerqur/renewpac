<?php

// SETUP USER REDIRECT AFTER LOGIN FORM
// ===========================================

/*
*	Add a hidden field to our WooCommerce login form - passing in the refering page URL
*	Note: the input (hidden) field doesn't actually get created unless the user was directed
*	to this page
*/
function redirect_user_back_to_product() {
  	// check for a referer
  	    $referer = $_GET['ref'];
				?>
					<input type="hidden" name="redirect-to" value="<?php echo $referer; ?>">
				<?php

}
add_action( 'woocommerce_login_form', 'redirect_user_back_to_product' );

/*
*	Redirect the user back to the passed in referer page
*/
function custom_woocommerce_login_redirect( $redirect ) {
	if( isset( $_POST['redirect-to'] ) ) {
		$redirect = esc_url( $_POST['redirect-to'] );
	} else {

  }

  if ($redirect) {

  } else {
    $redirect = "/my-account/";
  }

	return $redirect;
}
add_filter( 'woocommerce_login_redirect', 'custom_woocommerce_login_redirect', 10, 2 );

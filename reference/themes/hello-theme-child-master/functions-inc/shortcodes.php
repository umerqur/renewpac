<?php

// GET LOGGED IN USER NAME
// ==========================================
function theme_current_username_shortcode() {
  if ( is_user_logged_in() ) {
      $user_info = wp_get_current_user();
      //$username = $user_info->user_login;
      $first_name = $user_info->first_name;
      $last_name = $user_info->last_name;

      $return_text = $first_name . ' ' . $last_name;
  }
  return $return_text;
}
add_shortcode( 'theme-current-username', 'theme_current_username_shortcode' );


// GET SIGN OUT LINK
// ==========================================
function theme_sign_out_link_shortcode() {
  $return_text = wp_logout_url( get_permalink( wc_get_page_id( 'myaccount' ) ) );
  return $return_text;
}
add_shortcode( 'theme-sign-out-link', 'theme_sign_out_link_shortcode' );

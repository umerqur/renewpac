<?php

// ELEMENTOR: LOADS CSS FILES AFTER ELEMENTOR DEFAULT STYLES
// =======================================================

add_action( 'elementor/frontend/after_enqueue_styles', function() {
  wp_enqueue_style( 'hello-elementor-child-style', get_stylesheet_uri(), NULL, filemtime( get_stylesheet_directory() . '/style.css' ) );
} );


// ELEMENTOR: Hide Page Title - Globaly prevent all pages titles from appearing on any page
// ==========================================
function ele_disable_page_title( $return ) {
  return false;
}
add_filter( 'hello_elementor_page_title', 'ele_disable_page_title' );


// DISABLE GUTENBERG
// ==========================================
add_filter('use_block_editor_for_post', '__return_false', 10);

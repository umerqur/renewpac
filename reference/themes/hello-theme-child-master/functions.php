<?php
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

 $roots_includes = array(
   '/functions-inc/elementor-settings.php',
   '/functions-inc/shortcodes.php',
   '/functions-inc/events-calendar.php',
   '/functions-inc/woocommerce.php',
   //'/functions-inc/user-roles.php',
   '/functions-inc/admin-settings.php',
   //'/functions-inc/email-settings.php'
 );

 foreach($roots_includes as $file){
   if(!$filepath = locate_template($file)) {
     trigger_error("Error locating `$file` for inclusion!", E_USER_ERROR);
   }

   require_once $filepath;
 }
 unset($file, $filepath);

 // ADD THEME JS FILES
 function theme_adding_scripts() {
    wp_enqueue_script('theme_scripts', get_stylesheet_directory_uri().'/js/theme-scripts.js');
}

add_action( 'wp_enqueue_scripts', 'theme_adding_scripts', 999 );

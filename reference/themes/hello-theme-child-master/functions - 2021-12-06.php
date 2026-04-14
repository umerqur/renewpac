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

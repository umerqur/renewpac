<?php

// RENAME ADMIN MENU ITEMS
// ==========================================

function rename_admin_menu_itmes() {

    global $menu;

    foreach($menu as $key => $item) {
      if ( $item[0] === 'Elementor DB' ) {
          $menu[$key][0] = __('Form Submissions','textdomain');     //change name
          $menu[$key][3] = __('Form Submissions','textdomain');   //does not work but should (needs another hook?)
          $menu[$key][6] = __('dashicons-id','textdomain'); //change icon
      }
    }
   return false;
}
add_action( 'admin_menu', 'rename_admin_menu_itmes', 999 );

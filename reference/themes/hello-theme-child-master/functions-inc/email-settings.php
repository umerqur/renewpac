<?php

// SETUP FORM EMAIL address
// ==========================================
  function wpb_sender_email( $original_email_address ) {
      return 'no-reply@livingston-connect.com';
  }

  // Function to change sender name
  function wpb_sender_name( $original_email_from ) {
      return 'Livingston Connect';
  }

  // Hooking up our functions to WordPress filters
  add_filter( 'wp_mail_from', 'wpb_sender_email' );
  add_filter( 'wp_mail_from_name', 'wpb_sender_name' );

  // ADD CODE TO HEADER
  add_action( 'wp_head', function(){
      ?>
      <!-- leadfeeder script -->
  	<script> (function(){ window.ldfdr = window.ldfdr || {}; (function(d, s, ss, fs){ fs = d.getElementsByTagName(s)[0]; function ce(src){ var cs = d.createElement(s); cs.src = src; setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1); } ce(ss); })(document, 'script', 'https://sc.lfeeder.com/lftracker_v1_Xbp1oaEg5ry7EdVj.js'); })(); </script>
      <?php
  });

<?php

// EVENTS CALENDAR
// ==========================================
function theme_events_calendar_shortcode() {
  $return_string = '<div id="calendar"></div>';
  return $return_string;
}
add_shortcode( 'events-calendar', 'theme_events_calendar_shortcode' );


// CUSTOM QUERY FILTERS : EVENTS HOMEPAGE
// =======================================================

add_action( 'elementor/query/events_query_filter', function( $query ) {
	// Get current meta Query
		$meta_query = $query->get( 'meta_query' );
		// Append our meta query
		$meta_query = array(); // required for php 7
		$meta_query[] = [
			'key' => 'event_start_date',
			'value' => date('Ymd'),
			'type' => 'DATE',
			'compare' => '>=',
		];
		$query->set( 'meta_query', $meta_query);
		$query->set( 'meta_key', 'event_start_date');
		$query->set( 'orderby', 'meta_value');
		$query->set( 'order', 'ASC');
} );

add_action('elementor/query/events_query_filter', function($query) {
	$total = $query->found_posts;
	if ($total == 0) {
		echo '<div class="no-events-message">We currently have no upcoming events.</div>';
	}
});

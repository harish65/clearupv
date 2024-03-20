<?php

$ok_php = true;
if ( function_exists( 'phpversion' ) ) {
    $php_version = phpversion();
    if (version_compare($php_version,'5.3.0') < 0) {
        $ok_php = false;
    }
}
if (!$ok_php && !is_admin()) {
    $title = esc_html__( 'PHP version obsolete','uncode' );
    $html = '<h2>' . esc_html__( 'Ooops, obsolete PHP version' ,'uncode' ) . '</h2>';
    $html .= '<p>' . sprintf( wp_kses( 'We have coded the Uncode theme to run with modern technology and we have decided not to support the PHP version 5.2.x just because we want to challenge our customer to adopt what\'s best for their interests.%sBy running obsolete version of PHP like 5.2 your server will be vulnerable to attacks since it\'s not longer supported and the last update was done the 06 January 2011.%sSo please ask your host to update to a newer PHP version for FREE.%sYou can also check for reference this post of WordPress.org <a href="https://wordpress.org/about/requirements/">https://wordpress.org/about/requirements/</a>' ,'uncode', array('a' => 'href') ), '</p><p>', '</p><p>', '</p><p>') . '</p>';

    wp_die( $html, $title, array('response' => 403) );
}

/**
 * Load elements partial.
 */
if ($ok_php) {
    require_once get_stylesheet_directory() . '/partials/elements.php';
}

include get_stylesheet_directory() . '/inc/ClearvueCleanDashboard.php';
include get_stylesheet_directory() . '/inc/ClearvueThemeHooks.php';
include get_stylesheet_directory() . '/inc/ClearvueCustomFunctions.php';


include get_stylesheet_directory() . '/inc/ClearvueCustomWPBBlocksLoader.php';



// Disable plugins auto-update UI elements.
add_filter( 'plugins_auto_update_enabled', '__return_false' );

// Disable themes auto-update UI elements.
add_filter( 'themes_auto_update_enabled', '__return_false' );

//add_action( 'vc_after_init', 'change_vc_button_colors',-9999);
//
//function change_vc_button_colors()
//{
//
//    //Get current values stored in the color param in "Call to Action" element
//    $param = WPBMap::getParam('vc_btn', 'button_color');
//    var_dump($param);
//
//    // Add New Colors to the 'value' array
//    // btn-custom-1 and btn-custom-2 are the new classes that will be
//    // applied to your buttons, and you can add your own style declarations
//    // to your stylesheet to style them the way you want.
////    $param['value'][__('My Special Colored Button', 'my-text-domain')] = 'btn-custom1';
////    $param['value'][__('A Different Color Button', 'my-text-domain')] = 'btn-custom2';
////
////    vc_update_shortcode_param( 'vc_btn', $param );
//}

// add_filter( 'uncode_enable_debug_on_js_scripts', '__return_true' );


// Post types
include get_stylesheet_directory() . '/post_types/project.php';
include get_stylesheet_directory() . '/post_types/faqs.php';

//Shortcode
include get_stylesheet_directory() . '/shortcodes/faq-shortcode.php';

// ASX Integration
include get_stylesheet_directory() . '/inc/ClearvueASXIntegration.php';

// Wireframes

add_action( 'vc_load_default_templates_action',  'add_custom_wireframes',9);

function add_custom_wireframes()
{
    include_once get_stylesheet_directory() . '/wireframes/heading_section_inner_page_ctas.php';
    include_once get_stylesheet_directory() . '/wireframes/latest_asx_announcement.php';
    include_once get_stylesheet_directory() . '/wireframes/content_asym_media_with_other_text_contents.php';

}


if ($ok_php) {
    require_once get_stylesheet_directory() . '/partials/menus.php';
}


/*Cron for ASX announcement*/
add_filter( 'cron_schedules', 'cron_twice_a_day' );
function cron_twice_a_day( $schedules ) {
    $schedules['cron_twice_a_day_schedule'] = array(
            'interval'  => 43200,
            'display'   => __( 'Twice a day', 'textdomain' )
    );
    return $schedules;
}

// Schedule an action if it's not already scheduled
if ( ! wp_next_scheduled( 'cron_twice_a_day' ) ) {
    wp_schedule_event( time(), 'cron_twice_a_day_schedule', 'cron_twice_a_day' );
}

// Hook into that action that'll fire every three minutes
add_action( 'cron_twice_a_day', 'asx_announcement_settings_page_callback' );
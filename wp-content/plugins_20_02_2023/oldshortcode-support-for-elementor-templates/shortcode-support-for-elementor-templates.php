<?php
/*
    Plugin Name: Shortcode For Elementor Templates
    Plugin URI: https://sysbasics.com
    Description: Include any elementor template using shortcode. It will add shortcode column to existing elementor template admin columns.
    Version: 1.0.0
    Author: SysBasics
    Author URI: https://sysbasics.com
    Domain Path: /languages
    Requires at least: 4.0
    Tested up to: 6.2.0
    WC requires at least: 4.0
    WC tested up to: 7.5.1
*/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

load_plugin_textdomain( 'shortcode-support-for-elementor-templates', false, basename( dirname(__FILE__) ).'/languages' );

// Add the custom columns to the book post type:
add_filter( 'manage_elementor_library_posts_columns', 'elstem_set_custom_edit_book_columns' );
function elstem_set_custom_edit_book_columns($columns) {
    unset( $columns['author'] );
    $columns['shortcode'] = __( 'Shortcode', 'shortcode-support-for-elementor-templates' );
    

    return $columns;
}

// Add the data to the custom columns for the book post type:
add_action( 'manage_elementor_library_posts_custom_column' , 'elstem_custom_book_column', 10, 2 );
function elstem_custom_book_column( $column, $post_id ) {
    switch ( $column ) {

        case 'shortcode' :
            echo '[el_shortcode id="'.$post_id.'"]';
        break;

       

    }
}

function elstem_the_shortcode_func( $atts ) {


    ob_start();

    if (class_exists("\\Elementor\\Plugin")) {
        $post_ID = $atts['id'];
        $pluginElementor = \Elementor\Plugin::instance();
        $contentElementor = $pluginElementor->frontend->get_builder_content($post_ID);

        echo apply_filters('the_content',$contentElementor);
    }

    return ob_get_clean();

}
add_shortcode( 'el_shortcode', 'elstem_the_shortcode_func' );
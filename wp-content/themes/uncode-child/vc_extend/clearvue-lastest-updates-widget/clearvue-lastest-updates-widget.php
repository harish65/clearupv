<?php
/**
 * Adds new shortcode "ClearvueLatestUpdateWidget" and registers it to
 * the Visual Composer plugin
 *
 */

if ( ! class_exists( 'ClearvueLatestUpdateWidget' ) ) {

    class ClearvueLatestUpdateWidget {

        /**
         * Main constructor
         *
         * @since 1.0.0
         */
        public function __construct() {

            // Registers the shortcode in WordPress
            add_shortcode( 'clearvue_lastest_updates_widget', array($this, 'output' ) );

            // Map shortcode to Visual Composer
            if ( function_exists( 'vc_lean_map' ) ) {
                vc_lean_map( 'clearvue_lastest_updates_widget', array( $this, 'map' ) );
            }

        }

        /**
         * Shortcode output
         *
         * @since 1.0.0
         */
        public static function output( $atts, $content = null ) {

            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            extract( vc_map_get_attributes( 'clearvue_lastest_updates_widget', $atts ) );
            ob_start();
            require(WP_CONTENT_DIR.'/themes/uncode-child/vc_templates/clearvue_lastest_updates_widget.php');
            $output = ob_get_contents();
            ob_end_clean();
            // Return output
            return $output;

        }

        /**
         * Map shortcode to VC
         *
         * This is an array of all your settings which become the shortcode attributes ($atts)
         * for the output. See the link below for a description of all available parameters.
         *
         * @since 1.0.0
         * @link  https://wpbakery.atlassian.net/wiki/pages/viewpage.action?pageId=38993922
         */
        public static function map() {
            return array(
                'name'        => esc_html__( 'Latest Updates Widget', 'clearvue' ),
                'description' => esc_html__( 'This widget automatically populated with latest news posts, ASX announcements etc.', 'clearvue' ),
                'base'        => 'clearvue_lastest_updates_widget',
                "category" => __('ClearVue'),
                'params'      => array(
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Widget Title', 'clearvue') ,
                        'param_name' => 'widget_title',
                        "value" => __("Latest updates"),
                        'description' => esc_html__('Please give the latest update widget title is here. Maximum characters upto 30. ', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                ),
            );
        }

    }

}
new ClearvueLatestUpdateWidget;
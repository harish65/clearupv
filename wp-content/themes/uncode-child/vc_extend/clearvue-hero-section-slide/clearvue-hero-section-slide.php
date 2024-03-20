<?php
/**
 * Adds new shortcode "ClearvueHeroSectionSlides" and registers it to
 * the Visual Composer plugin
 *
 */

if ( ! class_exists( 'ClearvueHeroSectionSlides' ) ) {

    class ClearvueHeroSectionSlides {

        /**
         * Main constructor
         *
         * @since 1.0.0
         */
        public function __construct() {

            // Registers the shortcode in WordPress
            add_shortcode( 'clearvue_hero_section_slide', array($this, 'output' ) );

            // Map shortcode to Visual Composer
            if ( function_exists( 'vc_lean_map' ) ) {
                vc_lean_map( 'clearvue_hero_section_slide', array( $this, 'map' ) );
            }

        }

        /**
         * Shortcode output
         *
         * @since 1.0.0
         */
        public static function output( $atts, $content = null ) {

            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            $atts['title'] =  rawurldecode( base64_decode( $atts['title'] ) );
            extract( vc_map_get_attributes( 'clearvue_hero_section_slide', $atts ) );
            ob_start();
            require(WP_CONTENT_DIR.'/themes/uncode-child/vc_templates/clearvue_hero_section_slide.php');
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
                'name'        => esc_html__( 'slide', 'clearvue' ),
                'description' => esc_html__( 'This element will shows hero section slide.', 'clearvue' ),
                'base'        => 'clearvue_hero_section_slide',
                'icon' => 'fa fa-fast-forward',
                "category" => __('ClearVue'),
                'weight' => 9500,
                'params'      => array(
                    array(
                        'type' => 'textarea_raw_html',
                        'heading' => esc_html__('Title', 'clearvue') ,
                        'param_name' => 'title',
                        'description' => esc_html__('Please give the title is here. Maximum characters upto 90. (Required)', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Subtitle', 'clearvue') ,
                        'param_name' => 'subtitle',
                        'description' => esc_html__('Please give the subtitle is here. Maximum characters upto 300.', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Button text', 'clearvue') ,
                        'param_name' => 'button_text',
                        'description' => esc_html__('Add label to button. Maximum characters upto 30. (Required if there is any link to the button)', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                    array(
                        'type' => 'vc_link',
                        'heading' => esc_html__('URL (Link)', 'uncode-core') ,
                        'param_name' => 'button_link',
                        'description' => esc_html__('Add link to button.', 'uncode-core'),
                         "group" => esc_html__("General", 'clearvue') ,
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Class to the button', 'clearvue') ,
                        'param_name' => 'button_class',
                        'description' => esc_html__('Class to the button.', 'clearvue') ,
                        "group" => esc_html__("Extra", 'clearvue') ,
                    ) ,
                ),
            );
        }

    }

}
new ClearvueHeroSectionSlides;
<?php
/**
 * Adds new shortcode "ClearvueIconImageWithTexts" and registers it to
 * the Visual Composer plugin
 *
 */

if ( ! class_exists( 'ClearvueIconImageWithTexts' ) ) {

    class ClearvueIconImageWithTexts {

        /**
         * Main constructor
         *
         * @since 1.0.0
         */
        public function __construct() {

            // Registers the shortcode in WordPress
            add_shortcode( 'clearvue_icon_image_with_texts', array($this, 'output' ) );

            // Map shortcode to Visual Composer
            if ( function_exists( 'vc_lean_map' ) ) {
                vc_lean_map( 'clearvue_icon_image_with_texts', array( $this, 'map' ) );
            }

        }

        /**
         * Shortcode output
         *
         * @since 1.0.0
         */
        public static function output( $atts, $content = null ) {

            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            extract( vc_map_get_attributes( 'clearvue_icon_image_with_texts', $atts ) );
            ob_start();
            require(WP_CONTENT_DIR.'/themes/uncode-child/vc_templates/clearvue_icon_image_with_texts.php');
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
                'name'        => esc_html__( 'Icon Image With Texts', 'clearvue' ),
                'description' => esc_html__( 'This element will shows text with an icon image.', 'clearvue' ),
                'base'        => 'clearvue_icon_image_with_texts',
                'icon' => 'fa fa-image',
                "category" => __('ClearVue'),
                'params'      => array(
                    array(
                        "type" => "media_element",
                        "heading" => esc_html__("Icon image", 'uncode-core') ,
                        "param_name" => "media",
                        "value" => "",
                        "edit_field_class" => 'vc_column uncode_single_media',
                        "description" => esc_html__("Specify a media from the Media Library. Preferred image size: 64 X 65 . (Required)", 'uncode-core') ,
                        "admin_label" => true,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Title', 'clearvue') ,
                        'param_name' => 'title',
                        'description' => esc_html__('Please give the title is here. Maximum characters upto 33.', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Subtitle', 'clearvue') ,
                        'param_name' => 'subtitle',
                        'description' => esc_html__('Please give the subtitle is here. Maximum characters upto 140.', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                ),
            );
        }

    }

}
new ClearvueIconImageWithTexts;
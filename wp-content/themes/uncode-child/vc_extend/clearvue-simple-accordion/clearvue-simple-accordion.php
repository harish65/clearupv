<?php
/**
 * Adds new shortcode "ClearvueSingleAccordion" and registers it to
 * the Visual Composer plugin
 *
 */

if ( ! class_exists( 'ClearvueSingleAccordion' ) ) {

    class ClearvueSingleAccordion {

        /**
         * Main constructor
         *
         * @since 1.0.0
         */
        public function __construct() {

            // Registers the shortcode in WordPress
            add_shortcode( 'clearvue_simple_accordion', array($this, 'output' ) );

            // Map shortcode to Visual Composer
            if ( function_exists( 'vc_lean_map' ) ) {
                vc_lean_map( 'clearvue_simple_accordion', array( $this, 'map' ) );
            }

        }

        /**
         * Shortcode output
         *
         * @since 1.0.0
         */
        public static function output( $atts, $content = null ) {

            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            extract( vc_map_get_attributes( 'clearvue_simple_accordion', $atts ) );
            ob_start();
            require(WP_CONTENT_DIR.'/themes/uncode-child/vc_templates/clearvue_simple_accordion.php');
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
                'name'        => esc_html__( 'Simple accordion', 'clearvue' ),
                'description' => esc_html__( 'This element will shows a accordion.', 'clearvue' ),
                'base'        => 'clearvue_hero_section_slide',
                'icon' => 'fa fa-fast-forward',
                "category" => __('ClearVue'),
                'weight' => 9500,
                'params'      => array(
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Title', 'clearvue') ,
                        'param_name' => 'title',
                        'description' => esc_html__('Please give the title is here. Maximum character limit: 94. (Required)', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                    array(
                        'type' => 'textarea_html',
                        'holder' => 'div',
                        'heading' => esc_html__('Content', 'uncode-core') ,
                        'param_name' => 'content',
                        'value' => wp_kses(__('<p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>', 'uncode-core'), array( 'p' => array())),
                        'dependency' => array(
                            'element' => 'auto_text',
                            'is_empty' => true,
                        ) ,
                        'description' => esc_html__('Please give the content is here. (Required)', 'clearvue') ,
                        "group" => esc_html__("General", 'clearvue') ,
                    ) ,
                ),
            );
        }

    }

}
new ClearvueSingleAccordion;
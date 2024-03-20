<?php
/**
 * Adds new shortcode "ClearvueHeroSection" and registers it to
 * the Visual Composer plugin
 *
 */

if ( ! class_exists( 'ClearvueHeroSection' ) ) {

    class ClearvueHeroSection {

        /**
         * Main constructor
         *
         * @since 1.0.0
         */
        public function __construct() {

            // Registers the shortcode in WordPress
            add_shortcode( 'clearvue_hero_section', array($this, 'output' ) );

            // Map shortcode to Visual Composer
            if ( function_exists( 'vc_lean_map' ) ) {
                vc_lean_map( 'clearvue_hero_section', array( $this, 'map' ) );
            }

        }

        /**
         * Shortcode output
         *
         * @since 1.0.0
         */
        public static function output( $atts, $content = null ) {

            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            extract( vc_map_get_attributes( 'clearvue_hero_section', $atts ) );
            ob_start();
            require(WP_CONTENT_DIR.'/themes/uncode-child/vc_templates/clearvue_hero_section.php');
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
                'name'        => esc_html__( 'Hero section', 'clearvue' ),
                'description' => esc_html__( 'This element will shows hero section.', 'clearvue' ),
                'base'        => 'clearvue_hero_section',
                'icon' => 'fa fa-fast-forward',
                "category" => __('ClearVue'),
                'weight' => 9500,
                'show_settings_on_create' => false,
                'is_container' => true,
                'params'      => null,
                'custom_markup' => '<div class="wpb_accordion_holder wpb_holder clearfix vc_container_for_children">
                               
                                </div>
                                <div class="tab_controls vc_element-icon" style="width: 100%; margin-top: 20px;">
                                    <a class="add_tab" title="' . esc_html__('Add slide', 'uncode-core') . '" style="color: white;"><i class="fa fa-plus2"></i> <span class="tab-label">' . esc_html__('Add slide', 'uncode-core') . '</span></a>
                                </div>',
                'default_content' => '[clearvue_hero_section_slide title="Title" subtitle="Subtitle" button_text="Button" button_link="url:"]',
                'js_view' => 'UncodeHeroSectionView'
            );
        }

    }

}
new ClearvueHeroSection;
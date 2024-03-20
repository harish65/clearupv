<?php
/**
 * Adds new shortcode "ClearvueContactSection" and registers it to
 * the Visual Composer plugin
 *
 */

if (!class_exists('ClearvueContactSection')) {

    class ClearvueContactSection
    {

        /**
         * Main constructor
         *
         * @since 1.0.0
         */
        public function __construct()
        {

            // Registers the shortcode in WordPress
            add_shortcode('clearvue_contact_section', array($this, 'output'));

            // Map shortcode to Visual Composer
            if (function_exists('vc_lean_map')) {
                vc_lean_map('clearvue_contact_section', array($this, 'map'));
            }

        }

        /**
         * Shortcode output
         *
         * @since 1.0.0
         */
        public static function output($atts, $content = null)
        {

            // Extract shortcode attributes (based on the vc_lean_map function - see next function)
            $atts['short_description'] =  rawurldecode( base64_decode( $atts['short_description'] ) );
            $atts['address'] =  rawurldecode( base64_decode( $atts['address'] ) );
//            $atts['form_shortcode'] =  rawurldecode( base64_decode( $atts['form_shortcode'] ) );
//            $atts['form_shortcode2'] =  rawurldecode( base64_decode( $atts['form_shortcode2'] ) );
            extract(vc_map_get_attributes('clearvue_contact_section', $atts));
            ob_start();
            require(WP_CONTENT_DIR . '/themes/uncode-child/vc_templates/clearvue_contact_section.php');
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
        public static function map()
        {
            return array(
                'name' => esc_html__('Contact section', 'clearvue'),
                'description' => esc_html__('This element will shows the contact section.', 'clearvue'),
                'base' => 'clearvue_contact_section',
                'icon' => 'fa fa-envelope',
                "category" => __('ClearVue'),
                'params' => array(
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Title', 'clearvue'),
                        'param_name' => 'title',
                        'description' => esc_html__('Please give the title is here.', 'clearvue'),
                        "group" => esc_html__("General", 'clearvue'),
                    ),
                    array(
                        'type' => 'textarea_raw_html',
                        'heading' => esc_html__('Short description', 'clearvue'),
                        'param_name' => 'short_description',
                        'description' => esc_html__('Please give the short description is here.', 'clearvue'),
                        "group" => esc_html__("General", 'clearvue'),
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Form shortcode', 'clearvue'),
                        'param_name' => 'form_shortcode',
                        'description' => esc_html__('Please give the form shortcode is here.', 'clearvue'),
                        "group" => esc_html__("General", 'clearvue'),
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Form shortcode 2', 'clearvue'),
                        'param_name' => 'form_shortcode2',
                        'description' => esc_html__('Please give the form shortcode is here.', 'clearvue'),
                        "group" => esc_html__("General", 'clearvue'),
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Get in touch section title', 'clearvue'),
                        'param_name' => 'get_in_touch_title',
                        'description' => esc_html__('Please give the get in touch section title here.', 'clearvue'),
                        "group" => esc_html__("Get in touch", 'clearvue'),
                    ),
                    array(
                        'type' => 'textarea_raw_html',
                        'heading' => esc_html__('Address', 'clearvue'),
                        'param_name' => 'address',
                        'description' => esc_html__('Please give the short description is here.', 'clearvue'),
                        "group" => esc_html__("Get in touch", 'clearvue'),
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Phone Number', 'clearvue'),
                        'param_name' => 'phone_number',
                        'description' => esc_html__('Please give the phone number here.', 'clearvue'),
                        "group" => esc_html__("Get in touch", 'clearvue'),
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Email Address', 'clearvue'),
                        'param_name' => 'email',
                        'description' => esc_html__('Please give the get in touch section title here.', 'clearvue'),
                        "group" => esc_html__("Get in touch", 'clearvue'),
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Latitude of the map', 'clearvue'),
                        'param_name' => 'latitude',
                        'description' => esc_html__('Please give the latitude of the map here.', 'clearvue'),
                        "group" => esc_html__("Get in touch", 'clearvue'),
                    ),
                    array(
                        'type' => 'textfield',
                        'heading' => esc_html__('Longitude of the map', 'clearvue'),
                        'param_name' => 'longitude',
                        'description' => esc_html__('Please give the longitude of the map here.', 'clearvue'),
                        "group" => esc_html__("Get in touch", 'clearvue'),
                    ),
                ),
            );
        }

    }

}
new ClearvueContactSection;
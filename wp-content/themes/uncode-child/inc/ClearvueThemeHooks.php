<?php

/**
 * Class ClearvueThemeHooks
 */
class ClearvueThemeHooks
{
    /**
     * ClearvueThemeHooks constructor.
     */
    public function __construct()
    {
        // Core hooks
        add_action('after_setup_theme', array($this, 'clearvue_setup'));
        add_action('wp_enqueue_scripts', array($this, 'clearvue_styles_scripts'));
        //add_action('vc_frontend_editor_enqueue_js_css', array($this, 'clearvue_styles_scripts'));

        add_action('do_meta_boxes', array($this, 'render_project_thumbnail_meta_box'));
        add_action('admin_head', array($this, 'add_restriction_to_the_project_excerpt'));

        //  Functions for gravity form fields
        add_filter('gform_field_validation', array($this, 'clearvue_validate_forms'), 10, 4);

        add_filter('gform_submit_button', array($this, 'change_gravity_form_submit_button'), 10, 2);

        // Theme optimization
        add_filter('the_generator', array($this, 'clearvue__wp_remove_version'));
        add_action('wp_print_styles', array($this, 'clearvue_wp_gblock_deregister_styles'), 100);
        add_action('init', array($this, 'clearvue_disable_emoji_feature'));
        add_filter('get_the_date', array($this, 'modify_get_the_date'), 10, 3);
        add_filter('vc_backend_editor_render', array($this, 'uncode_child_init_custom_js'));
        add_action('admin_print_styles', array($this, 'uncode_child_remove_custom_vc_scripts_if_gutenberg_is_active'));

    }

    /**
     * Description: This is used for the basic theme setup, registration of the theme features and init hooks.
     */
    public function clearvue_setup()
    {
        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');
        add_theme_support('html5', ['script', 'style']);

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');
        add_image_size('team-full-thumbnail', 352, 367, true);
        add_image_size('team-short-thumbnail', 255, 211, array('top','center'));


        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(array(
            'footer_menu_one' => esc_html__('Top menu', 'clearvue'),
            'header_menu' => esc_html__('Header menu', 'clearvue'),
        ));
        load_child_theme_textdomain('uncode', get_stylesheet_directory() . '/languages');
    }

    /**
     * Description: Adding scripts and CSS to theme
     */
    public function clearvue_styles_scripts()
    {
        $production_mode = ot_get_option('_uncode_production');
        $resources_version = ($production_mode === 'on') ? null : rand();
        if (function_exists('get_rocket_option') && (get_rocket_option('remove_query_strings') || get_rocket_option('minify_css') || get_rocket_option('minify_js'))) {
            $resources_version = null;
        }
        $parent_style = 'uncode-style';
        $child_style = array('uncode-style');

        $resources_version = '1.10';

        global $post;

        wp_enqueue_style($parent_style, get_template_directory_uri() . '/library/css/style.css', array(), $resources_version);
        wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', $child_style, $resources_version);
        wp_enqueue_style('child-style2', get_stylesheet_directory_uri() . '/assets/css/styles2.css', $child_style, $resources_version);
        wp_enqueue_style('child-style3-style', get_stylesheet_directory_uri() . '/assets/css/style3.css', $child_style, rand(1,100));
        wp_enqueue_style('base-style', get_stylesheet_directory_uri() . '/assets/css/base.css', $child_style, rand(1,100));
        wp_enqueue_style('main', get_stylesheet_directory_uri() . '/assets/css/main.css', $child_style, $resources_version);

        wp_enqueue_script('main', get_stylesheet_directory_uri() . '/assets/js/main.js', false, $resources_version,true);
        // register our  script for load more and dynamic search
        wp_register_script('clearvue-ajax-scripts', get_stylesheet_directory_uri() . '/assets/js/ajax_scripts.min.js',
            array('jquery'),
            '1.9', true);

        // define variables through  wp_localize_script()
        wp_localize_script('clearvue-ajax-scripts', 'ajax_params', array(
            'ajaxurl' => admin_url('admin-ajax.php'), // WordPress AJAX,
            'security' => wp_create_nonce('clearvue563-ajxnonce-phases'),
        ));
        wp_enqueue_script('clearvue-ajax-scripts');
    }

    /**
     * @param $result
     * @param $value
     * @param $form
     * @param $field
     * @return mixed
     */
    public function clearvue_validate_forms($result, $value, $form, $field)
    {
        $pattern = "/^(\+44\s?7\d{3}|\(?07\d{3}\)|\(?01\d{3}\)?)\s?\d{3}\s?\d{3}$/";
        //if ($field->type == 'phone' && ! preg_match( '/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$/', $value ) ) {
        if ($field->type == 'phone' && !preg_match('/^[0-9]{4} [0-9]{3} [0-9]{3}$/', $value)) {
            $result['is_valid'] = false;
            $result['message'] = 'Enter a valid phone number';
        }
        if ($field->type == 'text' && strpos($field->cssClass, 'custom-text-field') !== false && !preg_match('/^([a-zA-Z\' ]+)$/', $value)) {
            $result['is_valid'] = false;
            $result['message'] = 'Enter a valid name';
        }

        if ($field->type == 'email' and !empty($value)) {
            if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Invalid email format";
                $result['is_valid'] = false;
                $result['message'] = $emailErr;
            }
        }

        return $result;
    }

    /**
     * @param $input
     * @param $field
     * @param $value
     * @param $lead_id
     * @param $form_id
     * @return string
     */
    public function clearvue_tracker($input, $field, $value, $lead_id, $form_id)
    {
        if ($form_id == 2 && $field->id == 12) {
            $input = '<input name="input_12" id="input_2_12" type="number" class="custom-input-field" value="" aria-required="true" aria-invalid="false">';
            return $input;
        }
    }

    /**
     * @return string
     * Remove wp version
     */
    public function clearvue__wp_remove_version()
    {
        return '';
    }

    /**
     *
     */
    public function clearvue_wp_gblock_deregister_styles()
    {
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-block-style'); // Remove WooCommerce block CSS
    }

    /**
     *
     */
    public function clearvue_disable_emoji_feature()
    {

        // Prevent Emoji from loading on the front-end
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('wp_print_styles', 'print_emoji_styles');

        // Remove from admin area also
        remove_action('admin_print_scripts', 'print_emoji_detection_script');
        remove_action('admin_print_styles', 'print_emoji_styles');

        // Remove from RSS feeds also
        remove_filter('the_content_feed', 'wp_staticize_emoji');
        remove_filter('comment_text_rss', 'wp_staticize_emoji');

        // Remove from Embeds
        remove_filter('embed_head', 'print_emoji_detection_script');

        // Remove from emails
        remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

        // Disable from TinyMCE editor. Currently disabled in block editor by default
        add_filter('tiny_mce_plugins', array($this, 'clearvue_disable_emojis_tinymce'));

        /** Finally, prevent character conversion too
         ** without this, emojis still work
         ** if it is available on the user's device
         */

        add_filter('option_use_smilies', '__return_false');

    }

    /**
     * @param $plugins
     * @return array
     */
    public function clearvue_disable_emojis_tinymce($plugins)
    {
        if (is_array($plugins)) {
            $plugins = array_diff($plugins, array('wpemoji'));
        }
        return $plugins;
    }


    public function modify_get_the_date($value, $format, $post)
    {

        if ($format == "") {
            $format = "d F Y";
            $value = get_post_time($format, false, $post, true);
        }

        return $value;
    }


    public function uncode_child_init_custom_js()
    {
        $production_mode = ot_get_option('_uncode_production');
        $resources_version = ($production_mode === 'on') ? null : rand();
        if (function_exists('get_rocket_option') && (get_rocket_option('remove_query_strings') || get_rocket_option('minify_css') || get_rocket_option('minify_js'))) {
            $resources_version = null;
        }
        wp_enqueue_script('custom_elements_script', get_stylesheet_directory_uri() . '/assets/js/custom_elements_script.js', false, $resources_version);
        wp_enqueue_style('custom_module_backend_css', get_stylesheet_directory_uri() . '/assets/css/custom_module_backend_css.css', false, $resources_version);
    }

    public function uncode_child_remove_custom_vc_scripts_if_gutenberg_is_active()
    {
        if (!is_admin()) {
            return;
        }

        if (!function_exists('uncode_is_gutenberg_current_editor') || !function_exists('use_block_editor_for_post_type')) {
            return;
        }

        $screen = get_current_screen();
        $post_type = isset($screen->post_type) ? $screen->post_type : false;

        if ($post_type && uncode_is_gutenberg_current_editor($post_type)) {
            remove_action('vc_backend_editor_render', array($this, 'uncode_child_init_custom_js'));
        }
    }


    public function project_thumbnail_meta_box()
    {
        global $post;

        $thumbnail_id = get_post_meta($post->ID, '_thumbnail_id', true); // grabing the thumbnail id of the post
        echo _wp_post_thumbnail_html($thumbnail_id); // echoing the html markup for the thumbnail

        echo '<p>Preferred image size: 638x479. (Required field)</p>';

    }

    public function render_project_thumbnail_meta_box()
    {
        global $post_type; // lets call the post type

        if ($post_type == 'project') {
            // remove the old meta box
            remove_meta_box('postimagediv', 'post', 'side');

            // adding the new meta box.
            add_meta_box('postimagediv', __('Featured Image'), array($this, 'project_thumbnail_meta_box'), $post_type, 'side', 'low');
        }
    }


    public function add_restriction_to_the_project_excerpt()
    {
        if (function_exists('get_current_screen')) {
            $current_screen = get_current_screen();
            if ($current_screen->id == 'project' && is_admin()) {
                echo "<script> jQuery(document).ready(function() {
				   jQuery( '#excerpt' ).attr( 'maxlength', 770 ).after('<p>Maximum character length of the excerpts :- 770 </p>');
				}); </script>";
            }
        }
    }


    public function change_gravity_form_submit_button($button, $form)
    {
        return "<div class='custom-gravity-btn'>" . $button . " <i class='gravity-btn-arrow'></i></div>";
    }
}

$theme_hooks = new ClearvueThemeHooks;
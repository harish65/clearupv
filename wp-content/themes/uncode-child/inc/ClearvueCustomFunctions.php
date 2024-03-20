<?php
// Create Team members post type
add_action( 'init', 'create_posttype_team');

function create_posttype_team()
{
    $args = array(
        'labels' => array(
            'name' => __('Team Members'),
            'singular_name' => __('Team Member'),
            'all_items' => __('All Team members'),
            'add_new_item' => __('Add New Team Member'),
            'edit_item' => __('Edit Team Member'),
            'view_item' => __('View Team Member')
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array(
            'slug' => 'team_members'
        ),
        'show_ui' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'capability_type' => 'page',
        'supports' => array('title', 'editor', 'thumbnail'),
        'exclude_from_search' => true,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-groups',
        'taxonomies' => array('team_member_category')
    );
    register_post_type('team_members', $args);
}

//Location type taxonomy
add_action( 'init', 'team_member_category_taxonomy');

function team_member_category_taxonomy()
{
    register_taxonomy(
        'team_member_category',  // The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
        'team_members',             // post type name
        array(
            'hierarchical' => true,
            'label' => 'Category', // display name
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'team_member_category',    // This controls the base slug that will display before each term
                'with_front' => false  // Don't display the category base before
            )
        )
    );
}


 add_action('wp_print_styles', 'wp_gblock_deregister_styles', 100);

function wp_gblock_deregister_styles()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-block-style'); // Remove WooCommerce block CSS
}

add_action('init', 'disable_emoji_feature');

function disable_emoji_feature()
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
    add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');

    /** Finally, prevent character conversion too
     ** without this, emojis still work
     ** if it is available on the user's device
     */

    add_filter('option_use_smilies', '__return_false');

}

function disable_emojis_tinymce($plugins)
{
    if (is_array($plugins)) {
        $plugins = array_diff($plugins, array('wpemoji'));
    }
    return $plugins;
}

/**
 * Redirect unwanted default templates
 */
add_action('template_redirect', 'clearvue_redirect_default_templates',10);

function clearvue_redirect_default_templates()
{
    //If we are on category or tag or date or author archive
    if (is_category() || is_date() || is_author() || is_tax()) {
        wp_redirect('/');
        die();
    }
}
<?php
/**
 *  Custom post type for Faqs
 *
 * @package WordPress
 * @subpackage Customize
 *
 * Faqs post type class.
 * @since 4.9.8
 *
 */

/**
 * Class Faqs
 */
class Faqs {
    /**
     * Post type name.
     *
     * @var string $post_type_name Holds the name of the post type.
     */
    public $post_type_name;

    /**
     * Holds the singular name of the post type. This is a human friendly
     * name, capitalized with spaces assigned on __construct().
     *
     * @var string $singular Post type singular name.
     */
    public $singular;

    /**
     * Holds the plural name of the post type. This is a human friendly
     * name, capitalized with spaces assigned on __construct().
     *
     * @var string $plural Singular post type name.
     */
    public $plural;

    /**
     * Post type slug. This is a robot friendly name, all lowercase and uses
     * hyphens assigned on __construct().
     *
     * @var string $slug Holds the post type slug name.
     */
    public $slug;


    public $textdomain = 'clearvue';

    public $taxonomy;

    public $taxonomies;

    public $taxonomy_slug;


    public function __construct() {

        $this->post_type_name = "faqs";
        $this->singular       = "Frequently Asked Question";
        $this->plural         = "Frequently Asked Questions";
        $this->slug           = "faqs";

        add_action( 'init', array( $this, 'create_custom_post_for_faqs' ) );

        // hook into the init action and call create_custom_post_for_faqs it fires
        add_action( 'init', $this->create_taxonomies_for_faqs( 'Question Category', 'Question Categories', 'question_category' ) );

    }

    /**
     *Description: Create custom post type for faqs
     */
    public function create_custom_post_for_faqs() {
        // Friendly post type names.
        $plural   = $this->plural;
        $singular = $this->singular;
        $slug     = $this->slug;

        // Default labels.
        $labels = array(
            'name'               => sprintf( __( '%s', $this->textdomain ), $plural ),
            'singular_name'      => sprintf( __( '%s', $this->textdomain ), $singular ),
            'menu_name'          => sprintf( __( '%s', $this->textdomain ), $plural ),
            'all_items'          => sprintf( __( '%s', $this->textdomain ), $plural ),
            'add_new'            => __( 'Add New', $this->textdomain ),
            'add_new_item'       => sprintf( __( 'Add New %s', $this->textdomain ), $singular ),
            'edit_item'          => sprintf( __( 'Edit %s', $this->textdomain ), $singular ),
            'new_item'           => sprintf( __( 'New %s', $this->textdomain ), $singular ),
            'view_item'          => sprintf( __( 'View %s', $this->textdomain ), $singular ),
            'search_items'       => sprintf( __( 'Search %s', $this->textdomain ), $plural ),
            'not_found'          => sprintf( __( 'No %s found', $this->textdomain ), $plural ),
            'not_found_in_trash' => sprintf( __( 'No %s found in Trash', $this->textdomain ), $plural ),
            'parent_item_colon'  => sprintf( __( 'Parent %s:', $this->textdomain ), $singular )
        );

        // Default args.
        $defaults = array(
            'exclude_from_search' => true,
            'labels'             => $labels,
            'description'        => __( 'Description.', $this->singular ),
            'supports'           => array( 'title','editor'),
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'query_var'          => true,
            'rewrite'            => array(
                'with_front' => false,
                'slug'       => $slug,
            ),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => null,
            'menu_icon'          => 'dashicons-welcome-write-blog',
        );


        register_post_type( $this->post_type_name, $defaults );
    }

    /**
     *Description: Create taxonomies for custom post type faqs
     */
    public function create_taxonomies_for_faqs( $taxonomy, $taxonomies, $taxonomy_slug ) {

        // Add new taxonomy, make it hierarchical (like categories)


        $this->taxonomy      = $taxonomy;
        $this->taxonomies    = $taxonomies;
        $this->taxonomy_slug = $taxonomy_slug;


        $labels = array(
            'name'              => sprintf( __( '%s', $this->textdomain ), $this->taxonomy ),
            'singular_name'     => sprintf( __( '%s', $this->textdomain ), $this->taxonomy ),
            'search_items'      => sprintf( __( 'Search %s', $this->textdomain ), $this->taxonomies ),
            'all_items'         => sprintf( __( 'All %s', $this->textdomain ), $this->taxonomy ),
            'parent_item'       => sprintf( __( 'Parent %s', $this->textdomain ), $this->taxonomy ),
            'parent_item_colon' => sprintf( __( 'Parent %s:', $this->textdomain ), $this->taxonomy ),
            'edit_item'         => sprintf( __( 'Edit %s', $this->textdomain ), $this->taxonomy ),
            'update_item'       => sprintf( __( 'Update %s', $this->textdomain ), $this->taxonomy ),
            'add_new_item'      => sprintf( __( 'New %s', $this->textdomain ), $this->taxonomy ),
            'menu_name'         => sprintf( __( '%s', $this->textdomain ), $this->taxonomies ),

        );

        $args = array(
            'hierarchical'       => true,
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => false,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'show_in_rest'       => true,
            'show_admin_column'  => true,
            'query_var'          => true,

        );
        register_taxonomy( $this->taxonomy_slug, $this->post_type_name, $args );
    }
}

$Faqs = new Faqs();
<?php

/**
 * ClearVue ASX Integration
 *
 * @category WordPress
 * @package  clearvue
 * @license  http://www.gnu.org/copyleft/gpl.html GNU General Public License
 */
class ClearvueAsxIntegration
{
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

    /**
     * ClearvueAsxIntegration constructor.
     */
    public function __construct()
    {
        $this->post_type_name = "asx-announcement";
        $this->singular = "ASX Announcement";
        $this->plural = "ASX Announcements";
        $this->slug = "asx-announcement";

        add_action('init', array($this, 'create_custom_post_for_asx_announcement'));
        add_action('rest_api_init', array($this, 'asx_announcements_sync'));
        add_action('admin_menu', array($this, 'add_settings_page_to_asx_announcement'));
        add_action('admin_enqueue_scripts', array($this, 'asx_announcement_include_js'));
        add_filter('post_type_link', array($this, 'change_asx_post_permanent_link_to_asx_url'), 10, 2);

        add_filter( 'post_row_actions', array($this,'remove_row_actions_from_asx_item'), 10, 2 );
        add_action('wp_trash_post', array($this,'restrict_asx_item_deletion'));
        add_action( 'admin_head', array($this,'hide_the_delete_button_from_asx_item') );

    }

    /**
     *Description: Create custom post type for asx announcement
     */
    public function create_custom_post_for_asx_announcement()
    {
        // Friendly post type names.
        $plural = $this->plural;
        $singular = $this->singular;
        $slug = $this->slug;

        // Default labels.
        $labels = array(
            'name' => sprintf(__('%s', $this->textdomain), $plural),
            'singular_name' => sprintf(__('%s', $this->textdomain), $singular),
            'menu_name' => sprintf(__('%s', $this->textdomain), $plural),
            'all_items' => sprintf(__('%s', $this->textdomain), $plural),
            'add_new' => __('Add New', $this->textdomain),
            'add_new_item' => sprintf(__('Add New %s', $this->textdomain), $singular),
            'edit_item' => sprintf(__('Edit %s', $this->textdomain), $singular),
            'new_item' => sprintf(__('New %s', $this->textdomain), $singular),
            'view_item' => sprintf(__('View %s', $this->textdomain), $singular),
            'search_items' => sprintf(__('Search %s', $this->textdomain), $plural),
            'not_found' => sprintf(__('No %s found', $this->textdomain), $plural),
            'not_found_in_trash' => sprintf(__('No %s found in Trash', $this->textdomain), $plural),
            'parent_item_colon' => sprintf(__('Parent %s:', $this->textdomain), $singular)
        );

        // Default args.
        $defaults = array(
            'labels' => $labels,
            'description' => __('Description.', $this->singular),
            'supports' => array('title', 'thumbnail', 'custom-fields'),
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_rest' => true,
            'query_var' => true,
            'taxonomies' => array('category'),
            'rewrite' => array(
                'with_front' => false,
                'slug' => $slug,
            ),
            'capability_type' => 'post',
            'has_archive' => true,
            'hierarchical' => false,
            'menu_position' => null,
            'menu_icon' => 'dashicons-megaphone',
        );
        register_post_type($this->post_type_name, $defaults);
    }

    /**
     *  Creating a custom json endpoint for the ASX announcements sync
     */
    public function asx_announcements_sync()
    {
        register_rest_route('asx-announcements', 'sync', array(
                'methods' => 'GET',
                'callback' => array($this, 'asx_announcements_sync_call_back'),
            )
        );
    }

    /**
     *  ASX announcements sync cron call back. This used to custom and cron syncing.
     * The custom sync call return the json and the cron calling returns the text message.
     */
    public function asx_announcements_sync_call_back()
    {
        $api_widget_link = 'https://app.sharelinktechnologies.com/widget/c10e1c05-d443-4232-ad31-b4c7652aae9d';
        $domain = 'clearvuepv.com';
        $type = !empty($_GET['type']) ? $_GET['type'] : 'cron';
        try {
            $response = array();
            try {
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $api_widget_link);
                curl_setopt($ch, CURLOPT_REFERER, $domain);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                // $output contains the output string
                $output = curl_exec($ch);
                // close curl resource to free up system resources
                curl_close($ch);
                $api_called_time = gmdate('Y-m-d H:i:s', time());
                $asx_last_called_time = array('type' => $type, 'api_called_time' => $api_called_time);
                update_option('asx_last_called_time', $asx_last_called_time, true);
                //update_option('asx_item_count', 164, true);
                // $output now contains the JSON API result, you can use json_decode to read it, here we just display on screen
                $output = html_entity_decode($output);
                $output_array = json_decode($output, true);
//                echo "<pre>";
//                var_dump($output_array);
//                die();
            } catch (Exception $e) {
                if ($type == 'custom') {
                    $response['status'] = "Failed";
                    $response['errorMessage'] = "There is an error that occurred in the API call.";
                    echo json_encode($response);
                    error_log('There is an error that occurred in the API call. ' . $e->getMessage());
                } else {
                    echo 'There is an error that occurred in the API call. ' . $e->getMessage();
                    error_log('There is an error that occurred in the API call. ' . $e->getMessage());
                }
            }

            if (!empty($output_array)) {

                $current_asx_item_image = get_option('asx_item_default_image_id', true);
                if (empty($current_asx_item_image)) {
                    $current_asx_item_image = '91013';
                }
                $current_asx_item_image = (int)$current_asx_item_image;

                $current_asx_item_count = get_option('asx_item_count', true);
                if (empty($current_asx_item_count)) {
                    $count_posts = wp_count_posts('asx-announcement');
                    if (!empty($count_posts)) {
                        if (!empty($count_posts->publish)) {
                            $current_asx_item_count = (int)$count_posts->publish;
                        }
                    }
                } else {
                    $current_asx_item_count = (int)$current_asx_item_count;
                }

                $output_array_count = count($output_array);
                $number_of_item_need_updated = $output_array_count - $current_asx_item_count;

                $success_count = 0;
                $failed_count = 0;

                if (!empty($number_of_item_need_updated) and $number_of_item_need_updated != 0) {

                    for ($i = $current_asx_item_count; $i <= ($output_array_count - 1); $i++) {
                        $released_at_date = $output_array[$i]['released_at'];
                        $post_date_gmt = gmdate('Y-m-d H:i:s', strtotime($released_at_date));
                        $post_date_to_save = get_date_from_gmt($post_date_gmt);
                        $post_title = $output_array[$i]['title'];
                        $url = $output_array[$i]['url'];
                        $price_sensitive = $output_array[$i]['price_sensitive'];

                        $asx_post = array(
                            'post_type' => 'asx-announcement',
                            'post_title' => $post_title,
                            'post_content' => '',
                            'post_date' => $post_date_to_save,
                            'post_date_gmt' => $post_date_gmt,
                            'post_category' => array(91),
                            'post_status' => 'publish',
                        );
                        // Insert the post into the database
                        $insert_status = wp_insert_post($asx_post);
                        if ($insert_status) {
                            add_post_meta($insert_status, 'asx_announcements_link', $url, true);
                            add_post_meta($insert_status, 'asx_announcements_price_sensitive', $price_sensitive, true);
                            set_post_thumbnail($insert_status, $current_asx_item_image);
                            $success_count = $success_count + 1;
                        } else {
                            $failed_count = $failed_count + 1;
                        }
                    }

                    if ($failed_count == $number_of_item_need_updated) {
                        if ($type == 'custom') {
                            $response['status'] = "Failed";
                            $response['errorMessage'] = "There is something issue that occurred when inserting the details to the DB.";
                            echo json_encode($response);
                            error_log('There is something issue that occurred when inserting the details to the DB.');
                        } else {
                            echo 'There is something issue that occurred when inserting the details to the DB.';
                            error_log('There is something issue that occurred when inserting the details to the DB.');
                        }
                    } else {
                        if ($failed_count != 0) {
                            if ($type == 'custom') {
                                $response['status'] = "Failed";
                                $response['errorMessage'] = "There is something issue that occurred when inserting the details to the DB.";
                                if ($failed_count == 1) {
                                    $response['errorMessage'] .= "There is 1 item that failed to insert into the DB.";
                                } else {
                                    $response['errorMessage'] .= "There are " . $failed_count . " items that failed to insert into the DB.";
                                }
                                echo json_encode($response);
                                error_log($response['errorMessage']);
                            } else {
                                $error_message = "There is something issue that occurred when inserting the details to the DB.";
                                if ($failed_count == 1) {
                                    $error_message .= "There is 1 item that failed to insert into the DB.";
                                } else {
                                    $error_message .= "There are " . $failed_count . " items that failed to insert into the DB.";
                                }
                                echo $error_message;
                                error_log($error_message);
                            }
                            $new_asx_item_count = ($current_asx_item_count + ($number_of_item_need_updated - $failed_count));
                            update_option('asx_item_count', ($new_asx_item_count), true);
                        }

                        if ($success_count == $number_of_item_need_updated) {
                            if ($type == 'custom') {
                                $response['status'] = "Success";
                                $response['successMessage'] = "The ASX announcements have been successfully synced.";
                                if ($success_count == 1) {
                                    $response['successMessage'] .= "There is a new announcement added to the site.";
                                } else {
                                    $response['successMessage'] .= "There are new " . $success_count . " announcements added to the site.";
                                }
                                echo json_encode($response);
                            } else {
                                $success_message = "The ASX announcements have been successfully synced.";
                                if ($success_count == 1) {
                                    $success_message .= "There is a new announcement added to the site.";
                                } else {
                                    $success_message .= "There are new " . $success_count . " announcements added to the site.";
                                }
                                echo $success_message;
                            }

                            $new_asx_item_count = $current_asx_item_count + $number_of_item_need_updated;
                            update_option('asx_item_count', $new_asx_item_count, true);
                        }
                    }
                } else {
                    if ($type == 'custom') {
                        $response['status'] = "Success";
                        $response['successMessage'] = "The ASX announcements are already synced. There are no new announcements.";
                        echo json_encode($response);
                    } else {
                        echo "The ASX announcements are already synced. There are no new announcements.";
                    }
                }
            } else {
                if ($type == 'custom') {
                    $response['status'] = "Failed";
                    $response['errorMessage'] = "There is an error that occurred in the API call.";
                    echo json_encode($response);
                    error_log('There is an error that occurred in the API call. The JSON output array is empty.');
                } else {
                    echo 'There is an error that occurred in the API call. The JSON output array is empty.';
                    error_log('There is an error that occurred in the API call. The JSON output array is empty.');
                }
            }
        } //catch exception
        catch (Exception $e) {
            if ($type == 'custom') {
                $response['status'] = "Failed";
                $response['errorMessage'] = "There is an error that occurred in the API call.";
                echo json_encode($response);
                error_log('There is an error that occurred in the API call. ' . $e->getMessage());
            } else {
                echo 'There is an error that occurred in the API call. ' . $e->getMessage();
                error_log('There is an error that occurred in the API call. ' . $e->getMessage());
            }
        }
    }

    /**
     * Add sub menu page for settings to the asx announcements
     */
    public function add_settings_page_to_asx_announcement()
    {
        add_submenu_page(
            'edit.php?post_type=asx-announcement',
            __('ASX Announcements Settings', 'clearvue'),
            __('ASX Announcements Settings', 'clearvue'),
            'manage_options',
            'asx-announcement-settings',
            array($this, 'asx_announcement_settings_page_callback'));
    }

    /**
     *  asx announcements settings callback. It is a settings page.
     * Here, you can update asx item's featured image and also can do the custom syncing.
     */
    public function asx_announcement_settings_page_callback()
    {
        wp_enqueue_media();
        if (!empty($_POST['submit'])) {
            $submitted_image_id = $_POST['asx-image'];
            if (!empty($submitted_image_id) and trim($submitted_image_id) != "") {
                update_option('asx_item_default_image_id', $submitted_image_id, true);
                $this->update_featured_img_asx_items($submitted_image_id);

                echo '<div class="notice notice-success is-dismissible">
                       <p><strong>ASX Announcement image is updated.</strong></p>
                     </div>';
            } else {
                echo '<div class="notice notice-error is-dismissible">
                         <p><strong>ASX Announcement image is required. Restored with the old image.</strong> </p>
                     </div>';
            }
        }

        ?>
            <style>
                a.asx-image-upl-rmv.page-title-action.remove_link {
                    top: 0 !important;
                    vertical-align:bottom;
                    display:inline-block;
                }

                .asx-image-upl img
                {
                    display:block;
                }

                a.asx-image-upl
                {
                    vertical-align:bottom;
                    display:inline-block;
                }
                .asx-image-upl-title
                {
                    text-align: left;
                }
                button.button.button-primary.asx_sync_btn {
                    margin-left:5px;
                }
            </style>
        <div class="wrap">
            <?php
            printf('<h1>%s</h1>', __('ASX Announcements Default Image Settings', 'clearvue'));
            ?>
            <form method="post">
                <p></p>
                <table>
                    <?php
                    $image_id = get_option('asx_item_default_image_id', true);
                    if ($image = wp_get_attachment_image_src($image_id)) {
                        echo '<tr valign="top">
              <th scope="row" class="asx-image-upl-title">
              <label for="asx-image-field">ASX announcement image</label></th>
               <td><p></p><br/></td>
               </tr>
               <tr valign="top">
              <td>
              <a href="#" class="asx-image-upl"><img src="' . $image[0] . '" /></a>
              <input type="hidden" name="asx-image" value="' . $image_id . '">
               <a href="#" class="asx-image-upl-rmv page-title-action remove_link">Remove image</a>
               </td>
               </tr>';
                    } else {
                        echo '<tr valign="top">
              <th scope="row"><label for="asx-image-field">ASX announcement image</label></th>
               <td><p></p><br/></td>
               </tr>
               <tr>
                <td>
                  <a href="#" class="asx-image-upl page-title-action">Upload image</a>
                  <input type="hidden" name="asx-image" value="">
                  <a href="#" class="asx-image-upl-rmv page-title-action remove_link" style="display:none">Remove image</a>
                </td>
               </tr>';
                    }
                    ?>
                    <tr>
                        <td>
                            <p class="submit"><input type="submit" name="submit" id="submit"
                                                     class="button button-primary" value="Save Changes"></p>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <br/>
        <hr>
        <br/>
        <div class="wrap asx_sync-section">
            <?php
            printf('<h1>%s</h1>', __('ASX Announcements Manual syncing', 'clearvue'));
            ?>
            <br/>
            <table>
                <tr>
                    <th>ASX Announcements Manual Sync</th>
                    <td>
                        <button type="button" class="button button-primary asx_sync_btn">Sync Now</button>
                    </td>
                </tr>
            </table>
        </div>
        <?php
    }

    /**
     * adding js for asx announcements settings page
     */
    public function asx_announcement_include_js()
    {

        if (!did_action('wp_enqueue_media')) {
            wp_enqueue_media();
        }
        wp_register_script('asx-integration', get_stylesheet_directory_uri() . '/assets/js/asx_integration.js',
            array('jquery'),
            '1.10', true);
        // define variables through  wp_localize_script()
        wp_localize_script('asx-integration', 'ajax_params', array(
            'site_url' => site_url()
        ));
        wp_enqueue_script('asx-integration');
    }

    /**
     * @param $post_link
     * @param $post
     * @return mixed|string|void
     * replace the single page link with the asx announcement link
     */
    public function change_asx_post_permanent_link_to_asx_url($post_link, $post)
    {
        if ($post->post_type == 'asx-announcement') {
            $asx_url = get_field('asx_announcements_link', $post);
            if (!empty($asx_url)) {
                $post_link = $asx_url;
            } else {
                $post_link = site_url();
            }
            return $post_link;
        }
        return $post_link;
    }

    /**
     * @param $asx_item_image
     *
     * Update the default image of asx items
     */
    public function update_featured_img_asx_items($asx_item_image)
    {
        $asx_item_ids = get_posts(array('post_type' => 'asx-announcement', 'fields' => 'ids', 'posts_per_page' => -1));
        if(!empty($asx_item_ids))
        {
            foreach ($asx_item_ids as $index => $asx_item_id)
            {
                //echo $index.') '.$asx_item_id;
                set_post_thumbnail($asx_item_id, $asx_item_image);
            }
        }
    }

    /**
     * @param $actions
     * @param $post
     * @return mixed
     * remove the delete and clone actions of the asx item
     *
     */
    public function remove_row_actions_from_asx_item( $actions, $post ) {
        if( $post->post_type === 'asx-announcement' ) {
            unset( $actions['clone'] );
            unset( $actions['trash'] );
            unset( $actions['dt_duplicate_post_as_draft'] );
        }
        return $actions;
    }

    /**
     * @param $post_id
     * Restrict delete action of the asx item
     */
    public function restrict_asx_item_deletion($post_id) {
        if( get_post_type($post_id) === 'asx-announcement' ) {
            wp_die('The post you were trying to delete is protected.');
        }
    }

    /**
     *  Hide the delete button of the asx item
     */
    public function hide_the_delete_button_from_asx_item () {
        $current_screen = get_current_screen();
        // Hides the "Move to Trash" link on the post edit page.
        if ( 'post' === $current_screen->base &&
            'asx-announcement' === $current_screen->post_type ) :
            ?>
            <style>
                #delete-action { display: none; }
                .row-actions .duplicate { display: none; }
            </style>
        <?php
        endif;
    }

}

$asx_integration = new ClearvueAsxIntegration;

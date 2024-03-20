<?php
/**
 * Disable unwanted dashboard widgets
 *
 * @category WordPress
 * @package  clearvue
 * @license  http://www.gnu.org/copyleft/gpl.html GNU General Public License
 */
class ClearvueCleanDashboard
{
    /**
     * CleanDashboard constructor.
     */
    public function __construct()
    {
        add_action('wp_dashboard_setup', array($this, 'clearvue_remove_all_dashboard_meta_boxes'), 9999);
        add_action('admin_init', array($this, 'clearvue_disable_comments_post_types_support'));
        add_filter('comments_open', array($this, 'clearvue_disable_comments_status'), 20, 2);
        add_filter('pings_open', array($this, 'clearvue_disable_comments_status'), 20, 2);
        add_filter('comments_array', array($this, 'clearvue_disable_comments_hide_existing_comments'), 10, 2);
        add_action('admin_menu', array($this, 'clearvue_disable_comments_admin_menu'));
        add_action('admin_init', array($this, 'clearvue_disable_comments_admin_menu_redirect'));
        add_action('admin_init', array($this, 'clearvue_disable_comments_dashboard'));
        add_action('init', array($this, 'clearvue_disable_comments_admin_bar'));
    }

    /**
     *  Description:  Remove all meta boxes in dashboard welcome page
     */
    public function clearvue_remove_all_dashboard_meta_boxes()
    {
        global $wp_meta_boxes;
        $wp_meta_boxes['dashboard']['side']['core'] = array();
    }

    /**
     * Description:  Disable WordPress comments completely
     */
    public function clearvue_disable_comments_post_types_support()
    {
        $post_types = get_post_types();
        foreach ($post_types as $post_type) {
            if (post_type_supports($post_type, 'comments')) {
                remove_post_type_support($post_type, 'comments');
                remove_post_type_support($post_type, 'trackbacks');
            }
        }
    }

    /**
     * @return bool
     * Description: Disable comment's status
     */
    public function clearvue_disable_comments_status()
    {
        return false;
    }

    /**
     * @param $comments
     * @return array
     * Description: Hide existing comments
     */
    public function clearvue_disable_comments_hide_existing_comments($comments)
    {
        $comments = array();
        return $comments;
    }

    /**
     * Description: Remove comments menu from dashboard
     */
    public function clearvue_disable_comments_admin_menu()
    {
        remove_menu_page('edit-comments.php');
    }

    /**
     * Description: if admin request comments page from dashboard then it's redirect to dashboard main page
     */
    public function clearvue_disable_comments_admin_menu_redirect()
    {
        global $pagenow;
        if ($pagenow === 'edit-comments.php') {
            wp_redirect(admin_url());
            exit;
        }
    }

    /**
     * Description: if admin request comments page from dashboard then it's redirect to dashboard main page
     */
    public function clearvue_disable_comments_dashboard()
    {
        remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
    }

    /**
     * Description: disable comment's admin bar
     */
    public function clearvue_disable_comments_admin_bar()
    {
        if (is_admin_bar_showing()) {
            remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
        }
    }
}

$clean_up = new ClearvueCleanDashboard;






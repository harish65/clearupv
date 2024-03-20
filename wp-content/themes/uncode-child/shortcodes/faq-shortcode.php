<?php

/**
 * Class FaqShortcode
 */
class FaqShortcode
{
    public $textdomain = 'clearvue';

    /**
     * FaqShortcode constructor.
     */
    public function __construct()
    {
        // Shortcode registration
        add_shortcode('Faq', array($this, 'faq_shortcode_callback'));
        // Ajax action from the search and category select.
        add_action('wp_ajax_load_faqs', array($this, 'get_the_faqs_in_ajax_action'));
        add_action('wp_ajax_nopriv_load_faqs', array($this, 'get_the_faqs_in_ajax_action'));
    }

    /**
     * @return false|string
     */
    public function faq_shortcode_callback()
    {
        ob_start();
        ?>
        <div class="component-wrapper faq-wrapper-menu text-component">
            <div class="faq-section ">
                <div class="row ">
                    <div class="col-md-8 faq-search-section">
                        <div class="faq-search ">
                            <div class="faq-search ">
                                <?php
                                if (isset($_GET['searchStr']) and !empty($_GET['searchStr'])) {
                                    $search_key_word = trim($_GET['searchStr']);
                                } else {
                                    $search_key_word = '';
                                }
                                ?>
                                <input id="faq-search-keyword" type="text" placeholder="Search key words"
                                       value="<?php echo $search_key_word; ?>" >
                                <button id="btn-search" class="faq-search-button"><img
                                            src="<?php echo get_stylesheet_directory_uri() . '/assets/images/input-search.png'; ?> "
                                            alt="search button"></button>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="row faq-accordion-and-nav">
                    <?php
                    $args = array(
                        'post_type' => 'faqs',
                        'post_status' => 'publish',
                        'posts_per_page' => '-1',
                    );

                    if (isset($search_key_word) and !empty($search_key_word) and $search_key_word != '') {
                        $args['s'] = $search_key_word;
                    }
                    $the_query = new WP_Query($args);
                    ?>
                    <div class="col-md-8 faq-wrapper">
                        <div class="faq-result custom-accordion">
                            <?php
                            if ($the_query->have_posts()) {
                                ?>
                                <ul class="accordion faq-accordion">
                                    <?php
                                    while ($the_query->have_posts()):
                                        $the_query->the_post();
                                        global $post;
                                        echo $this->get_the_faq_single($post);
                                    endwhile;
                                    wp_reset_postdata();
                                    ?>
                                </ul>
                                <?php
                            }
                            ?>
                        </div>
                    </div>

                    <?php
                    $faq_categories = $this->get_the_faq_categories($search_key_word);
                    ?>
                    <div class="col-md-4  faq-category-flitter">
                        <div class="faq-right-nav" <?php echo (!$faq_categories) ? "style='display:none';" : "" ?>>
                            <h2>Question Categories</h2>
                            <ul class="faq-category">
                                <li class="active link" id="all">
                                    All
                                </li>
                                <?php
                                if (!empty($faq_categories)) {
                                    foreach ($faq_categories as $faq_category_id => $faq_category_name) {
                                        ?>
                                        <li class="link" id="<?php echo $faq_category_id; ?>">
                                            <?php echo $faq_category_name; ?>
                                        </li>
                                        <?php
                                    }
                                }
                                ?>
                            </ul>
                        </div>
                    </div>
                    <?php

                    ?>

                </div>

            </div>
        </div>
        <?php
        $output = ob_get_contents();
        ob_end_clean();
        return $output;
    }

    /**
     * @param $search_keyword
     * @return array|false
     */
    public function get_the_faq_categories($search_keyword)
    {
        $category_array = array();
        if ($search_keyword == '') {
            $terms = get_terms('question_category');
            foreach ($terms as $term_list_item) {
                $category_array[$term_list_item->term_id] = $term_list_item->name;
            }
        } else {
            $args = array(
                'post_type' => 'faqs',
                'post_status' => 'publish',
                'posts_per_page' => '-1',
            );

            if (isset($search_keyword) and !empty($search_keyword)) {
                $args['s'] = $search_keyword;
            }
            $the_query = new WP_Query($args);
            if ($the_query->have_posts()) {
                while ($the_query->have_posts()):
                    $the_query->the_post();
                    global $post;
                    $term_list = wp_get_object_terms($post->ID, 'question_category');
                    foreach ($term_list as $term_list_item) {
                        $category_array[$term_list_item->term_id] = $term_list_item->name;
                    }
                endwhile;
                wp_reset_postdata();
                ksort($category_array);
            }
        }

        if (!empty($category_array)) {
            return $category_array;
        } else {
            return false;
        }
    }

    /**
     * @param $post
     * @return false|string
     */
    public function get_the_faq_single($post)
    {
        ob_start();
        if (!empty($post->post_title) and !empty($post->post_content)) {
            ?>
            <li class="faqlist-item faq-accordion-item" style="">
                <div class="title faq-accordion-title">
                    <h4>
                        <?php echo $post->post_title; ?>
                        <span class="toggle-icon ">
                        <i class="icon "></i>
                    </span>
                    </h4>

                </div>
                <div class="content ">
                    <?php the_content($post); ?>
                </div>
            </li>
            <?php
        }
        $output = ob_get_contents();
        ob_end_clean();
        return $output;
    }

    /**
     *
     */
    public function get_the_faqs_in_ajax_action()
    {
        $result = array();
        if (isset($_POST['query']) and !empty($_POST['query'])) {
            $query = $_POST['query'];
            if (isset($query['searchStr']) and !empty($query['searchStr'])) {
                $search_keyword = $query['searchStr'];
            } else {
                $search_keyword = '';
            }

            if (isset($query['category']) and !empty($query['category'])) {
                $category = $query['category'];
            } else {
                $category = '';
            }

            if (isset($query['callFrom']) and !empty($query['callFrom'])) {
                if ($query['callFrom'] == 'search') {

                    $args = array(
                        'post_type' => 'faqs',
                        'post_status' => 'publish',
                        'posts_per_page' => '-1',
                    );

                    if (isset($search_keyword) and !empty($search_keyword)) {
                        $args['s'] = $search_keyword;
                    }
                    $the_query = new WP_Query($args);
                    $category_array = array();
                    $faq_content = '';

                    ob_start();
                    if ($the_query->have_posts()) {
                        ?>
                        <ul class="accordion faq-accordion">
                            <?php
                            while ($the_query->have_posts()):
                                $the_query->the_post();
                                global $post;
                                echo $this->get_the_faq_single($post);
                                $term_list = wp_get_object_terms($post->ID, 'question_category');
                                foreach ($term_list as $term_list_item) {
                                    $category_array[$term_list_item->term_id] = $term_list_item->name;
                                }

                            endwhile;
                            wp_reset_postdata();
                            ?>
                        </ul>
                        <?php
                    } else {
                        ?>
                        <div class="accordion faq-accordion">
                            <div class="no-results not-found row row-parent limit-width no-top-padding no-bottom-padding no-h-padding">
                                <div class="page-header">
                                    <h1 class="post-title">Nothing Found</h1>
                                </div>
                                <div class="page-content">
                                    <p>Sorry, but nothing matched your search terms. Please try again with some
                                        different keywords.</p>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                    $faq_content .= ob_get_contents();
                    ob_end_clean();
                    $result['faq_content'] = $faq_content;

                    if (!empty($category_array)) {
                        ob_start();
                        ksort($category_array);
                        ?>
                        <ul class="faq-category">
                            <li class="active link" id="all">
                                All
                            </li>
                            <?php
                            foreach ($category_array as $id => $name) {
                                ?>
                                <li class="link" id="<?php echo $id; ?>">
                                    <?php echo $name; ?>
                                </li>
                                <?php
                            }
                            ?>
                        </ul>
                        <?php
                        $category_list = ob_get_contents();
                        ob_end_clean();
                        $result['category_list'] = $category_list;
                    }

                } else {
                    $args = array(
                        'post_type' => 'faqs',
                        'post_status' => 'publish',
                        'posts_per_page' => '-1',
                    );

                    if ($search_keyword != '') {
                        $args['s'] = $search_keyword;
                    }

                    if ($category != '') {
                        $args['tax_query'] = array(
                            array(
                                'taxonomy' => 'question_category',
                                'field' => 'term_id',
                                'terms' => $category
                            )
                        );
                    }

                    $the_query = new WP_Query($args);
                    $faq_content = '';
                    if ($the_query->have_posts()) {
                        ob_start();
                        ?>
                        <ul class="accordion faq-accordion">
                            <?php
                            while ($the_query->have_posts()):
                                $the_query->the_post();
                                global $post;
                                echo $this->get_the_faq_single($post);
                            endwhile;
                            wp_reset_postdata();
                            ?>
                        </ul>
                        <?php
                        $faq_content .= ob_get_contents();
                        ob_end_clean();
                        $result['faq_content'] = $faq_content;
                    }
                }
                echo json_encode($result);
                die();
            }
        }
    }
}

new FaqShortcode();
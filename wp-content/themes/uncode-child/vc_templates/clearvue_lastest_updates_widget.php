<?php
?>
<section class="latest-update">
    <div class="latest-update-wrapper limit-width">
        <div class="latest-update-title">
            <h3><?php echo $widget_title; ?></h3>
        </div>
        <div class="latest-update-box--wraper">
            <div class="owl-carousel">
                <?php
                $recent_posts = get_posts(array(
                    'numberposts' => 4, // Number of recent posts thumbnails to display
                    'offset' => 0,
                    'post_type' => array('post', 'asx-announcement'),
                    'orderby' => 'post_date',
                    'order' => 'DESC',
                    "suppress_filters" => false,
                    'post_status' => 'publish' // Show only the published posts
                ));
                foreach ($recent_posts as $post) :
                    $_format = !empty($format) ? $format : get_option('date_format');
                    $post_date = get_the_date('d F Y', $post->ID);
                    $title = $post->post_title;
                    $post_categories = get_the_category($post->ID);
                    ?>
                    <div class="latest-update-box">
                        <h6 class="date-field">
                            <?php
                            echo $post_date;
                            ?>
                        </h6>
                        <a class="title" href="<?php echo get_permalink($post->ID);?>" target="<?php echo ($post->post_type != 'asx-announcement')?'_self':'_blank'; ?>">
                            <?php echo $title; ?>
                        </a>

                        <p class="tags">
                            <?php
                            foreach ($post_categories as $post_category) {
                                ?>
                                <a href="javascript:void(0);">
                                    <?php
                                    echo $post_category->name;
                                    ?>
                                </a>
                                <?php
                            }
                            ?>
                        </p>

                    </div>
                <?php
                endforeach;
                wp_reset_query();
                ?>
            </div>
        </div>
    </div>
</section>
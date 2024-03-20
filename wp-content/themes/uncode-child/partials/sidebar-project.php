<?php
$project_details = ot_get_option('_uncode_project_custom_fields');
$download_link_data = array();

// sidebar sub content
ob_start();
if (!empty($project_details) && $post) {

    foreach ($project_details as $key => $value) {
        $project_detail = get_post_meta($post->ID, $value['_uncode_cf_unique_id'], true);
        if ($value['title'] == 'Download link 1' or $value['title'] == 'Download link 1 text' or $value['title'] == 'Download link 2' or $value['title'] == 'Download link 2 text') {
            $download_link_data[$value['title']] = $project_detail;
            continue;
        }

        if ($project_detail !== '') {
            $get_url = parse_url($project_detail);
            $project_detail = str_replace(' rel="nofollow"', "", make_clickable($project_detail));
            if (isset($get_url['host'])) {
                $project_detail = preg_replace('/<a(.+?)>.+?<\/a>/i', '<a$1 target="_blank">' . $get_url['host'] . '</a>', $project_detail);
            } else {
                $project_detail = preg_replace('/^(?!.*( target=)).*<a /', '<a target="_blank" ', $project_detail);
            }
            $info_content .= '<span class="detail-container"><span class="detail-label">' . $value['title'] . '</span><span class="detail-value">' . $project_detail . '</span></span>';
        }
    }
    if ($info_content !== '') {
        echo $info_content;
    }
}

$sidebar_sub_content = ob_get_contents();
ob_end_clean();

$sidebar_sub_content = trim($sidebar_sub_content);


// sidebar content
$sidebar_content = '';

ob_start();
?>

    <div class="info-content">
        <div class="post-title-wrapper">
            <h1 class="post-title"><?php the_title(); ?></h1>
        </div>
        <p><?php the_excerpt(); ?></p>
        <?php
        if (!empty($sidebar_sub_content)) {
            ?>
            <hr>
            <?php
        }
        ?>
        <p>
            <?php
            if (!empty($sidebar_sub_content)) {
            echo $sidebar_sub_content;
            ?>
    <hr>
    <?php
    }

    if (!empty($download_link_data)) {
        if ((isset($download_link_data['Download link 1']) and !empty($download_link_data['Download link 1'])) and (isset($download_link_data['Download link 1 text']) and !empty($download_link_data['Download link 1 text']))) {
            ?>
            <a href="<?php echo $download_link_data['Download link 1']; ?>" target="_blank"
               class="custom-link btn border-width-0 download-pdf btn-icon-right"><?php echo $download_link_data['Download link 1 text']; ?><i class="fa fa-file-pdf-o"></i> </a>
            <?php
        }
        if ((isset($download_link_data['Download link 2']) and !empty($download_link_data['Download link 2'])) and (isset($download_link_data['Download link 2 text']) and !empty($download_link_data['Download link 2 text']))) {
            ?>
            <a href="<?php echo $download_link_data['Download link 2']; ?>" target="_blank"
               class="custom-link btn border-width-0 download-pdf btn-icon-right"><?php echo $download_link_data['Download link 2 text']; ?><i class="fa fa-file-pdf-o"></i> </a>
            <?php
        }
    }
    ?>
        </p>
    </div>

<?php
$sidebar_content .= ob_get_contents();
ob_end_clean();

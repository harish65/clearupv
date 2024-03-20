<?php
if (!empty($media)) {
    $icon_image = wp_get_attachment_image_url($media);
}

?>
<div class="clear_vue_icon_img_text">
    <?php
    if (!empty($icon_image)) {
        ?>
        <div class="clear_vue_icon_img">
            <img src="<?php echo $icon_image; ?>" alt="Icon image">
        </div>
        <?php
    }
    if(!empty($title) or  !empty($subtitle))
    {
    ?>
    <div>
        <?php
        if(!empty($title))
        {
        ?>
        <h4><?php echo $title; ?></h4>
        <?php
        }
        if(!empty($title))
        {
            ?>
            <p><?php echo $subtitle;?></p>
            <?php
        }
        ?>
    </div>
    <?php
    }
    ?>
</div>

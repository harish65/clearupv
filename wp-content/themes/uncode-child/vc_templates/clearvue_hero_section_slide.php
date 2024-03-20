<?php
if (isset($button_link) and !empty($button_link)) {
    $button_link_array = explode('|', $button_link);
}

if (!empty($button_link_array)) {
    $button_link_url = str_replace('url:', '', $button_link_array[0]);
    if (!empty($button_link_url)) {
        $button_link_url = urldecode($button_link_url);
    }
}

if (count($button_link_array) == 2) {
    if (isset($button_link_array[1])) {
        if (strpos($button_link_array[1], 'target') !== false) {
            $button_link_target = str_replace('target:', '', $button_link_array[1]);
        }
    }
}
if (count($button_link_array) == 3) {
    if (isset($button_link_array[2])) {
        $button_link_target = str_replace('target:', '', $button_link_array[2]);
    }
}

if (!isset($button_link_target) or $button_link_target == '') {
    $button_link_target = '_self';
}



if(!empty($title) and $title !== '')
{

?>

<div class="banner-slides">
    <div class="banner-content   banner-content--center">
        <?php
        if (isset($title) and $title !== '') {
        ?>
            <h1 class="banner-headding">
                <?php
                echo $title;
                ?>
            </h1>
        <?php
        }
        if (isset($subtitle) and $subtitle !== '') {
        ?>
            <p>
                <?php echo $subtitle; ?>
            </p>
        <?php
        }
        if ((isset($button_link_url) and $button_link_url !== '') and (isset($button_link_url) and $button_text !== '')) {
        ?>
            <div class="btn-wrapper">
                <a href="<?php echo $button_link_url; ?>" class="btn btn-primary custom-link btn border-width-0 btn-common btn-arrow btn-default btn-icon-left" target="<?php echo $button_link_target; ?>">
                    <span>
                        <?php echo $button_text; ?>
                    </span>
                </a>
            </div>
        <?php
        }
        ?>
    </div>
</div>

<?php

}
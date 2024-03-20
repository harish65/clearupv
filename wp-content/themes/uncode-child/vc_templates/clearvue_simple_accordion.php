<?php
if ((isset($title) and !empty($title)) and (isset($content) and !empty($content))) {
    ?>
    <ul class="accordion simple-accordion">
        <li class="accordion-item" style="">
            <div class="title">
                <?php
                if ($title) {
                    ?>
                    <h4>
                        <?php echo $title; ?> <span class="toggle-icon "><i class="icon "></i></span>
                    </h4>
                    <?php
                }
                ?>
            </div>
            <div class="content ">
                <?php
                if ($content) {
                    echo uncode_the_content($content);
                }
                ?>
            </div>
        </li>
    </ul>
    <?php
}
?>


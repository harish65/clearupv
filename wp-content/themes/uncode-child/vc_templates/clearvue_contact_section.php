<?php
?>

<div class="contact-main-section">
    <div class="contact-section">
        <?php
        if (isset($title) and !empty($title)) {
            ?>
            <h3><?php echo $title; ?></h3>
            <?php
        }
        if (isset($short_description) and !empty($short_description)) {
            ?>
            <p class="contact-description">
                <?php echo $short_description; ?>
            </p>
            <?php
        }
        if (!empty($form_shortcode)) {
            // convert string to short code.
            $form_shortcode = str_replace('`{`','[',$form_shortcode);
            $form_shortcode = str_replace('`}`',']',$form_shortcode);
            $form_shortcode = str_replace('``','"',$form_shortcode);

            preg_match_all('/\bid="([0-9]+)\b"/', $form_shortcode, $matches); // get form id from shortcode
            if (isset($matches[1][0]) and !empty($matches[1][0])) {
                $forminfo1 = RGFormsModel::get_form($matches[1][0]); // get form object using form id
                $form_shortcode1_title = $forminfo1->title;
            }
        }

        if (!empty($form_shortcode2)) {
            // convert string to short code.
            $form_shortcode2 = str_replace('`{`','[',$form_shortcode2);
            $form_shortcode2 = str_replace('`}`',']',$form_shortcode2);
            $form_shortcode2 = str_replace('``','"',$form_shortcode2);

            preg_match_all('/\bid="([0-9]+)\b"/', $form_shortcode2, $matches); // get form id from shortcode
            if (isset($matches[1][0]) and !empty($matches[1][0])) {
                $forminfo2 = RGFormsModel::get_form($matches[1][0]); // get form object using form id
                $form_shortcode2_title = $forminfo2->title;
            }
        }

        ?>
        <div class="forms">
            <ul>
                <?php
                if (!empty($form_shortcode1_title)) {
                    ?>
                    <li class="form1-title"><?php echo $form_shortcode1_title; ?></li>
                    <?php
                }
                if (!empty($form_shortcode2_title)) {
                    ?>
                    <li class="form2-title"><?php echo $form_shortcode2_title; ?></li>
                    <?php
                }
                ?>

            </ul>
            <?php
            if (isset($form_shortcode) and !empty($form_shortcode)) {
                ?>
                <div class="form1">
                    <?php
                    echo do_shortcode($form_shortcode);
                    ?>
                </div>
                <?php
            }

            if (isset($form_shortcode2) and !empty($form_shortcode2)) {
                ?>
                <div class="form2">
                    <?php
                    echo do_shortcode($form_shortcode2);
                    ?>
                </div>
                <?php
            }
            ?>


        </div>

    </div>
    <div class="get-in-touch-section">
        <?php
        if (isset($get_in_touch_title) and !empty($get_in_touch_title)) {
            ?>
            <h3> <?php echo $get_in_touch_title; ?> </h3>
            <?php
            if (isset($address) and !empty($address)) {
                ?>
                <p class="contact-address">
                    <?php echo $address; ?>
                </p>
                <?php
            }
        }
        if ((isset($email) and !empty($email)) or (isset($phone_number) and !empty($phone_number))) {
            ?>
            <ul>
                <?php
                if (isset($email) and !empty($email)) {
                    ?>
                    <li class="email">
                        <a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a>
                    </li>
                    <?php
                }
                if (isset($phone_number) and !empty($phone_number)) {
                    ?>
                    <li class="phone">
                        <a href="tel:<?php echo str_replace(" ", "", $phone_number); ?>"><?php echo $phone_number; ?></a>
                    </li>
                    <?php
                }
                ?>
            </ul>
            <?php
        }
        if ((isset($latitude) and !empty($latitude)) and (isset($longitude) and !empty($longitude))) {


            ?>
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly" defer> </script>
            <style type="text/css">
                /* Set the size of the div element that contains the map */
                #map {
                    height: 400px;
                    /* The height is 400 pixels */
                    width: 100%;
                    /* The width is the width of the web page */
                }
            </style>
            <script>
                // Initialize and add the map
                function initMap() {
                    // The location of Uluru
                    const uluru = { lat: <?php echo $latitude;?>, lng: <?php echo $longitude;?> };
                    // The map, centered at Uluru
                    const map = new google.maps.Map(document.getElementById("map"), {
                        zoom: 4,
                        center: uluru,
                    });
                    // The marker, positioned at Uluru
                    const marker = new google.maps.Marker({
                        position: uluru,
                        map: map,
                    });
                }
            </script>
            <div id="map"></div>
        <?php
        }
        ?>

    </div>
</div>

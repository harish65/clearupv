<?php
/**
 * Heading section + Inner page CTAs
 *
 * name             - Wireframe title
 * cat_name         - Comma separated list for multiple categories (cat display name)
 * custom_class     - Space separated list for multiple categories (cat ID)
 * dependency       - Array of dependencies
 * is_content_block - (optional) Best in a content block
 *
 * @version  1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

$data                 = array();

// Wireframe properties

$data[ 'name' ]             = esc_html__( 'Heading section + Inner page CTAs (Home component)', 'uncode-wireframes' );
$data[ 'custom_class' ]     = 'heading_section_inner_page_ctas';
$data[ 'image_path' ]       = get_stylesheet_directory_uri().'/wireframes/images/heading_section_inner_page_ctas.png';
$data[ 'dependency' ]       = array();
$data[ 'is_content_block' ] = false;

// Wireframe content

$data[ 'content' ]      = '
[vc_row row_height_percent="0" override_padding="yes" h_padding="2" top_padding="1" bottom_padding="0" overlay_alpha="50" gutter_size="3" column_width_percent="100" shift_y="0" z_index="0"][vc_column column_width_percent="100" gutter_size="3" overlay_alpha="50" shift_x="0" shift_y="0" shift_y_down="0" z_index="0" medium_width="0" mobile_width="0" width="2/3" el_class="for-customers-custom"][vc_custom_heading heading_semantic="h6" text_font="font-377884" text_size="h6" text_weight="500" text_space="fontspace-778132" text_color="color-194513"]FOR CUSTOMERS[/vc_custom_heading][vc_custom_heading text_size="fontsize-164147" text_weight="500" text_height="fontheight-422646" text_space="fontspace-867482" text_color="color-736275"]Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.[/vc_custom_heading][/vc_column][vc_column width="1/3"][/vc_column][/vc_row][vc_row unlock_row_content="yes" row_height_percent="50" override_padding="yes" h_padding="0" top_padding="0" bottom_padding="0" back_color="color-wayh" overlay_alpha="100" gutter_size="100" column_width_percent="100" shift_y="0" z_index="0" top_divider="gradient" style="inherited" row_name="blog" el_class="box-slider custom-box-section"][vc_column column_width_percent="100" gutter_size="3" style="dark" overlay_alpha="50" shift_x="0" shift_y="0" shift_y_down="0" z_index="0" medium_width="0" mobile_width="0" width="1/1"][uncode_index el_id="index-36613222" index_type="carousel" loop="size:-1|order_by:menu_order|order:ASC|post_type:page|tax_query:85|taxonomy_count:10" index_back_color="color-xsdn" carousel_lg="4" carousel_md="2" carousel_sm="1" thumb_size="fluid" carousel_height_viewport="50" gutter_size="0" post_items="media|featured|onpost|original,title,text|excerpt|120" page_items="title,media|featured|onpost|original,text|excerpt|200" portfolio_items="media|featured|onpost|original,category,title,spacer|two" carousel_interval="0" carousel_navspeed="200" carousel_loop="yes" carousel_nav="yes" carousel_nav_mobile="yes" stage_padding="0" single_text="overlay" single_overlay_opacity="1" single_overlay_visible="yes" single_overlay_anim="no" single_text_visible="yes" single_text_anim="no" single_v_position="bottom" single_padding="4" single_title_dimension="h4" single_border="yes" single_image_anim_move="yes" items="eyIzNTQxX2kiOnsic2luZ2xlX2xpbmsiOiJ1cmw6aHR0cCUzQSUyRiUyRmNsZWFydnVlcHYud3ByZXNzLmRrJTJGdDItdGVtcGxhdGUlMkYifSwiMzY2NDVfaSI6eyJzaW5nbGVfbGluayI6InVybDpodHRwJTNBJTJGJTJGY2xlYXJ2dWVwdi53cHJlc3MuZGslMkZuZXdzJTJGIn0sIjEyNV9pIjp7ImJhY2tfaW1hZ2UiOiI4ODY4OSIsInNpbmdsZV9sYXlvdXRfcGFnZV9pdGVtcyI6InRpdGxlLG1lZGlhfGZlYXR1cmVkfG9ucG9zdHxvcmlnaW5hbCx0ZXh0fGV4Y2VycHR8MjAwIiwic2luZ2xlX2xpbmsiOiJ1cmw6aHR0cCUzQSUyRiUyRmNsZWFydnVlcHYud3ByZXNzLmRrJTJGdDMtY29tcG9uZW50cyUyRnx0aXRsZTpUMyUyMGNvbXBvbmVudHMifX0="][/vc_column][/vc_row]
';

// Check if this wireframe is for a content block
if ( $data[ 'is_content_block' ] && ! $is_content_block ) {
    $data[ 'custom_class' ] .= ' for-content-blocks';
}

// Check if this wireframe requires a plugin
foreach ( $data[ 'dependency' ]  as $dependency ) {
    if ( ! UNCDWF_Dynamic::has_dependency( $dependency ) ) {
        $data[ 'custom_class' ] .= ' has-dependency needs-' . $dependency;
    }
}

vc_add_default_templates( $data );

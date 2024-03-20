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

$data[ 'name' ]             = esc_html__( 'Latest ASX announcement (t2 component)', 'uncode-wireframes' );
$data[ 'custom_class' ]     = 'latest_asx_announcement';
$data[ 'image_path' ]       = get_stylesheet_directory_uri().'/wireframes/images/latest_asx_announcement.png';
$data[ 'dependency' ]       = array();
$data[ 'is_content_block' ] = false;

// Wireframe content

$data[ 'content' ]      = '[vc_row row_height_percent="0" overlay_alpha="50" gutter_size="3" column_width_percent="100" shift_y="0" z_index="0" css=".vc_custom_1606309056051{margin-top: 100px !important;margin-bottom: 16px !important;}" el_class="responsive-padding-reduce"][vc_column column_width_percent="100" gutter_size="3" overlay_alpha="50" shift_x="0" shift_y="0" shift_y_down="0" z_index="0" align_medium="align_center_tablet" medium_width="0" align_mobile="align_center_mobile" mobile_width="0" width="2/3"][vc_custom_heading heading_semantic="h6" text_font="font-377884" text_size="h6" text_weight="500" text_space="fontspace-778132" text_color="color-194513"]ASX ANNOUNCEMENTS[/vc_custom_heading][vc_row_inner row_inner_height_percent="0" overlay_alpha="50" gutter_size="3" shift_y="0" z_index="0" limit_content="" css=".vc_custom_1605595621163{margin-top: 4px !important;}"][vc_column_inner column_width_percent="100" gutter_size="3" overlay_alpha="50" shift_x="0" shift_y="0" shift_y_down="0" z_index="0" align_medium="align_center_tablet" medium_width="0" align_mobile="align_center_mobile" mobile_width="0" width="1/1"][vc_custom_heading text_size="fontsize-164147" text_weight="500" text_height="fontheight-109608" text_color="color-736275"]Latest ASX Announcements[/vc_custom_heading][/vc_column_inner][/vc_row_inner][/vc_column][vc_column column_width_percent="100" position_horizontal="right" position_vertical="bottom" align_horizontal="align_right" gutter_size="0" overlay_alpha="50" shift_x="0" shift_y="0" shift_y_down="0" z_index="0" align_medium="align_right_tablet" medium_width="0" mobile_width="0" width="1/3" css=".vc_custom_1605578307438{border-bottom-width: -10px !important;}"][vc_row_inner row_inner_height_percent="0" overlay_alpha="50" gutter_size="3" shift_y="0" z_index="0" limit_content="" css=".vc_custom_1605596512409{margin-bottom: -12px !important;}"][vc_column_inner column_width_percent="100" position_horizontal="right" align_horizontal="align_right" gutter_size="3" overlay_alpha="50" shift_x="0" shift_y="0" shift_y_down="0" z_index="0" medium_width="0" mobile_width="0" width="1/1"][vc_button border_width="0" display="inline" el_class="btn-common btn-arrow" link="url:%2Fasx-announcements%2F"]VIEW ALL[/vc_button][/vc_column_inner][/vc_row_inner][/vc_column][/vc_row][vc_row row_height_percent="0" override_padding="yes" h_padding="0" top_padding="0" bottom_padding="5" overlay_alpha="0" gutter_size="0" column_width_percent="100" shift_y="0" z_index="0" el_class="asx-announcements"][vc_column column_width_use_pixel="yes" position_vertical="middle" align_horizontal="align_center" gutter_size="4" overlay_alpha="50" shift_x="0" shift_y="0" shift_y_down="0" z_index="0" medium_width="0" mobile_width="0" css_animation="alpha-anim" width="1/1"][uncode_index el_id="index-14701323425678" loop="size:3|order_by:date|post_type:asx-announcement|taxonomy_count:10" style_preset="metro" gutter_size="3" post_items="media|featured|onpost|original,date,title,category|bordered|topright|display-icon" asx-announcement_items="media|featured|onpost|original,date,title,category|bordered|topright|display-icon" screen_lg="1128" screen_md="1200" screen_sm="480" single_text="overlay" single_back_color="color-xsdn" single_overlay_color="color-806375" single_overlay_coloration="bottom_gradient" single_overlay_opacity="50" single_overlay_visible="yes" single_overlay_anim="no" single_text_visible="yes" single_text_anim="no" single_v_position="bottom" single_reduced="three_quarter" single_padding="2" single_title_dimension="h3" single_title_transform="capitalize" single_text_lead="yes" single_shadow="yes" shadow_weight="lg" single_border="yes" single_css_animation="zoom-in" post_matrix="matrix" matrix_amount="3" no_double_tap="yes" matrix_items="e30="][/vc_column][/vc_row]';

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

<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div class="page-wrapper">
 *
 * @package uncode
 */

global $is_redirect, $redirect_page;

if ($redirect_page) {
	$post_id = $redirect_page;
} else {
	if (isset(get_queried_object()->ID) && !is_home()) {
		$post_id = get_queried_object()->ID;
	} else {
		$post_id = null;
	}
}

if (wp_is_mobile()) {
	$html_class = 'touch';
} else {
	$html_class = 'no-touch';
}

if (is_admin_bar_showing()) {
	$html_class .= ' admin-mode';
}

?><!DOCTYPE html>
<html class="<?php echo esc_attr($html_class); ?>" <?php language_attributes(); ?> xmlns="http://www.w3.org/1999/xhtml">
<head>
<!--<meta name="facebook-domain-verification" content="90h06nouxwkfmmg56mpedfkhz029f2" />-->
<meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>">
<?php if (wp_is_mobile()) : ?>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<?php else : ?>
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php endif; ?>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6NWDTV');</script>
<!-- End Google Tag Manager -->
</head>
<?php
	global $LOGO, $metabox_data, $onepage, $fontsizes, $is_redirect, $menutype;

	if ($post_id !== null) {
		$metabox_data = get_post_custom($post_id);
		$metabox_data['post_id'] = $post_id;
	} else {
		$metabox_data = array();
	}

	$onepage = false;
	$background_div = $background_style = $background_color_css = '';

	if (isset($metabox_data['_uncode_page_scroll'][0]) && $metabox_data['_uncode_page_scroll'][0] == 'on') {
		$onepage = true;
	}

	$boxed = ot_get_option( '_uncode_boxed');
	$vmenu_position = ot_get_option('_uncode_vmenu_position');
	$fontsizes = ot_get_option( '_uncode_heading_font_sizes');
	$background = ot_get_option( '_uncode_body_background');

	if (isset($metabox_data['_uncode_specific_body_background'])) {
		$specific_background = unserialize($metabox_data['_uncode_specific_body_background'][0]);
		if ( is_array( $specific_background ) && ( $specific_background['background-color'] != '' || $specific_background['background-image'] != '' ) ) {
			$background = $specific_background;
		}
	}

	$back_class = '';
	if (!empty($background) && (isset($background['background-color']) && $background['background-color'] != '') || ( isset($background['background-color']) && $background['background-image'] ) != '') {
		if ($background['background-color'] !== '') {
			$background_color_css = ' style-'. $background['background-color'] . '-bg';
		}
		$back_result_array = uncode_get_back_html($background, '', '', '', '', 'div');

		if ((strpos($back_result_array['mime'], 'image') !== false)) {
			$background_style .= (strpos($back_result_array['back_url'], 'background-image') !== false) ? $back_result_array['back_url'] : 'background-image: url(' . $back_result_array['back_url'] . ');';
			if ( isset( $background['background-repeat'] ) && $background['background-repeat'] !== '' ) {
				$background_style .= 'background-repeat: '. $background['background-repeat'] . ';';
			}
			if ( isset( $background['background-position'] ) && $background['background-position'] !== '' ) {
				$background_style .= 'background-position: '. $background['background-position'] . ';';
			}
			if ( isset( $background['background-size'] ) && $background['background-size'] !== '' ) {
				$background_style .= 'background-size: '. ($background['background-attachment'] === 'fixed' ? 'cover' : $background['background-size']) . ';';
			}
			if ( isset( $background['background-attachment'] ) && $background['background-attachment'] !== '' ) {
				$background_style .= 'background-attachment: '. $background['background-attachment'] . ';';
			}
		} else {
			$background_div = $back_result_array['back_html'];
		}
		if ($background_style !== '') {
			$background_style = ' style="'.$background_style.'"';
		}
		if (isset($back_result_array['async_class']) && $back_result_array['async_class'] !== '') {
			$back_class = $back_result_array['async_class'];
			$background_style .= $back_result_array['async_data'];
		}
	}

	$body_attr = '';
	if ($boxed === 'on') {
		$boxed_width = ' limit-width';
	} else {
		$boxed_width = '';
		$body_border = ot_get_option('_uncode_body_border');
		if ($body_border !== '' && $body_border !== 0) {
			$body_attr = ' data-border="' . esc_attr($body_border) . '"';
		}
	}

	if ( uncode_is_full_page(true) ) {
		if ( isset($metabox_data['_uncode_scroll_additional_padding'][0]) && $metabox_data['_uncode_scroll_additional_padding'][0] != '' ) {
			$fp_add_padding = $metabox_data['_uncode_scroll_additional_padding'][0];
		} else {
			$fp_add_padding = 0;
		}

		$body_attr .= ' data-additional-padding="' . floatval($fp_add_padding) . '"';
	}


?>
<body <?php body_class($background_color_css); echo wp_kses_post( $body_attr ); ?>>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6NWDTV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	<?php echo uncode_remove_p_tag( $background_div ) ; ?>
	<?php do_action( 'before' );

	if ( function_exists( 'wp_body_open' ) ) {
		wp_body_open();
	}

	$body_border = ot_get_option('_uncode_body_border');
	if ($body_border !== '' && $body_border !== 0) {
		$general_style = ot_get_option('_uncode_general_style');
		$body_border_color = ot_get_option('_uncode_body_border_color');
		if ($body_border_color === '') {
			$body_border_color = ' style-' . $general_style . '-bg';
		} else {
			$body_border_color = ' style-' . $body_border_color . '-bg';
		}
		$body_border_frame ='<div class="body-borders" data-border="'.$body_border.'"><div class="top-border body-border-shadow"></div><div class="right-border body-border-shadow"></div><div class="bottom-border body-border-shadow"></div><div class="left-border body-border-shadow"></div><div class="top-border'.$body_border_color.'"></div><div class="right-border'.$body_border_color.'"></div><div class="bottom-border'.$body_border_color.'"></div><div class="left-border'.$body_border_color.'"></div></div>';
		echo wp_kses_post( $body_border_frame );
	}

	?>
	<div class="box-wrapper<?php echo esc_html($back_class); ?>"<?php echo wp_kses_post($background_style); ?>>
		<div class="box-container<?php echo esc_attr($boxed_width); ?>">
		<script type="text/javascript" id="initBox">UNCODE.initBox();</script>
		<?php
			$remove_menu = (isset($metabox_data['_uncode_specific_menu_remove'][0]) && $metabox_data['_uncode_specific_menu_remove'][0] === 'on') ? true : false;
			if ( ! $remove_menu ) {
				if ($is_redirect !== true) {
					if ($menutype === 'vmenu-offcanvas' || $menutype === 'menu-overlay' || $menutype === 'menu-overlay-center') {
						$mainmenu = new unchildmenu('offcanvas_head', $menutype);
						echo uncode_remove_p_tag( $mainmenu->html );
					}
					if ( !($menutype === 'vmenu' && $vmenu_position === 'right') ) {
						$mainmenu = new unchildmenu($menutype, $menutype);
						echo uncode_remove_p_tag( $mainmenu->html );
					}
				}
			}
			?>
			<script type="text/javascript" id="fixMenuHeight">UNCODE.fixMenuHeight();</script>
			<div class="main-wrapper">
				<div class="main-container">
					<div class="page-wrapper<?php if ($onepage) { echo ' main-onepage'; } ?>">
						<div class="sections-container">

<?php if ( ! defined( 'OT_VERSION' ) ) exit( 'No direct script access allowed' );
/**
 * Functions used only while viewing the admin UI.
 *
 * Limit loading these function only when needed
 * and not in the front end.
 *
 * @package   OptionTree
 * @author    Derek Herman <derek@valendesigns.com>
 * @copyright Copyright (c) 2013, Derek Herman
 * @since     2.0
 */

/**
 * Registers the Theme Option page
 *
 * @uses      ot_register_settings()
 *
 * @return    void
 *
 * @access    public
 * @since     2.1
 */
if ( ! function_exists( 'ot_register_theme_options_page' ) ) {

	function ot_register_theme_options_page() {

		/* get the settings array */
		$get_settings = ot_settings_value();

		/* sections array */
		$sections = isset( $get_settings['sections'] ) ? $get_settings['sections'] : array();

		/* settings array */
		$settings = isset( $get_settings['settings'] ) ? $get_settings['settings'] : array();

		/* contexual_help array */
		$contextual_help = isset( $get_settings['contextual_help'] ) ? $get_settings['contextual_help'] : array();

		/* build the Theme Options */
		if ( function_exists( 'ot_register_settings' ) && OT_USE_THEME_OPTIONS ) {

			ot_register_settings( array(
					array(
						'id'                  => ot_options_id(),
						'pages'               => array(
							array(
								'id'              => 'ot_theme_options',
								'parent_slug'     => apply_filters( 'ot_theme_options_parent_slug', 'my-menu' ),
								'page_title'      => apply_filters( 'ot_theme_options_page_title', esc_html__( 'Theme Options', 'uncode-core' ) ),
								'menu_title'      => apply_filters( 'ot_theme_options_menu_title', esc_html__( 'Theme Options', 'uncode-core' ) ),
								'capability'      => $caps = apply_filters( 'ot_theme_options_capability', 'edit_theme_options' ),
								'menu_slug'       => apply_filters( 'ot_theme_options_menu_slug', 'ot-theme-options' ),
								'icon_url'        => apply_filters( 'ot_theme_options_icon_url', null ),
								'position'        => apply_filters( 'ot_theme_options_position', null ),
								'updated_message' => apply_filters( 'ot_theme_options_updated_message', esc_html__( 'Theme Options updated.', 'uncode-core' ) ),
								'reset_message'   => apply_filters( 'ot_theme_options_reset_message', esc_html__( 'Theme Options reset.', 'uncode-core' ) ),
								'button_text'     => apply_filters( 'ot_theme_options_button_text', esc_html__( 'Save Changes', 'uncode-core' ) ),
								'contextual_help' => apply_filters( 'ot_theme_options_contextual_help', $contextual_help ),
								'sections'        => apply_filters( 'ot_theme_options_sections', $sections ),
								'settings'        => apply_filters( 'ot_theme_options_settings', $settings )
							)
						)
					)
				)
			);

			// Filters the options.php to add the minimum user capabilities.
			if (version_compare(PHP_VERSION, '7.2.0') >= 0)
				add_filter( 'option_page_capability_' . ot_options_id(), function($caps) { return $caps; }, 999 );
			else
				add_filter( 'option_page_capability_' . ot_options_id(), create_function( '$caps', "return '$caps';" ), 999 );

		}

	}

}

/**
 * Registers the Settings page
 *
 * @uses      ot_register_settings()
 *
 * @return    void
 *
 * @access    public
 * @since     2.1
 */
if ( ! function_exists( 'ot_register_settings_page' ) ) {

	function ot_register_settings_page() {
		global $ot_has_custom_theme_options;

		// Display UI Builder admin notice
		if ( OT_SHOW_OPTIONS_UI == true && isset( $_REQUEST['page'] ) && $_REQUEST['page'] == 'uncode-settings' && ( $ot_has_custom_theme_options == true || has_action( 'admin_init', 'custom_theme_options' ) || has_action( 'init', 'custom_theme_options' ) ) ) {

			function ot_has_custom_theme_options() {

				echo '<div class="error"><p>' . esc_html__( 'The Theme Options UI Builder is being overridden by a custom file in your theme. Any changes you make via the UI Builder will not be saved.', 'uncode-core' ) . '</p></div>';

			}

			add_action( 'admin_notices', 'ot_has_custom_theme_options' );

		}

		// Create the filterable pages array
		$ot_register_pages_array =  array(
			array(
				'id'              => 'ot',
				'page_title'      => esc_html__( 'OptionTree', 'uncode-core' ),
				'menu_title'      => esc_html__( 'OptionTree', 'uncode-core' ),
				'capability'      => 'edit_theme_options',
				'menu_slug'       => 'uncode-settings',
				'icon_url'        => null,
				'position'        => 61,
				'hidden_page'     => true
			),
			array(
				'id'              => 'settings',
				'parent_slug'     => 'my-menu',
				'page_title'      => esc_html__( 'Settings', 'uncode-core' ),
				'menu_title'      => esc_html__( 'Settings', 'uncode-core' ),
				'capability'      => 'edit_theme_options',
				'menu_slug'       => 'uncode-settings',
				'icon_url'        => null,
				'position'        => null,
				'updated_message' => esc_html__( 'Theme Options updated.', 'uncode-core' ),
				'reset_message'   => esc_html__( 'Theme Options reset.', 'uncode-core' ),
				'button_text'     => esc_html__( 'Save Settings', 'uncode-core' ),
				'show_buttons'    => false,
				'sections'        => array(
					array(
						'id'          => 'create_setting',
						'title'       => esc_html__( 'Theme Options UI', 'uncode-core' )
					),
					array(
						'id'          => 'export',
						'title'       => esc_html__( 'Export', 'uncode-core' )
					),
					array(
						'id'          => 'import',
						'title'       => esc_html__( 'Import', 'uncode-core' )
					),
					array(
						'id'          => 'layouts',
						'title'       => esc_html__( 'Layouts', 'uncode-core' )
					)
				),
				'settings'        => array(
					array(
						'id'          => 'import_data_text',
						'label'       => esc_html__( 'Theme Options', 'uncode-core' ),
						'type'        => 'import-data',
						'section'     => 'import'
					),
					array(
						'id'          => 'import_layouts_text',
						'label'       => esc_html__( 'Layouts', 'uncode-core' ),
						'type'        => 'import-layouts',
						'section'     => 'import'
					),
					array(
						'id'          => 'export_data_text',
						'label'       => esc_html__( 'Theme Options', 'uncode-core' ),
						'type'        => 'export-data',
						'section'     => 'export'
					),
					array(
						'id'          => 'export_layout_text',
						'label'       => esc_html__( 'Layouts', 'uncode-core' ),
						'type'        => 'export-layouts',
						'section'     => 'export'
					),
					array(
						'id'          => 'modify_layouts_text',
						'label'       => esc_html__( 'Layout Management', 'uncode-core' ),
						'type'        => 'modify-layouts',
						'section'     => 'layouts'
					)
				)
			),
		);

		// Loop over the settings and remove as needed.
		foreach( $ot_register_pages_array as $key => $page ) {

			// Remove various options from the Settings UI.
			if ( $page['id'] == 'settings' ) {

				// Remove the Theme Options UI
				if ( OT_SHOW_OPTIONS_UI == false ) {

					foreach( $page['sections'] as $section_key => $section ) {
						if ( $section['id'] == 'create_setting' ) {
							unset($ot_register_pages_array[$key]['sections'][$section_key]);
						}
					}

					foreach( $page['settings'] as $setting_key => $setting ) {
						if ( $setting['section'] == 'create_setting' ) {
							unset($ot_register_pages_array[$key]['settings'][$setting_key]);
						}
					}

				}

				// Remove parts of the Imports UI
				if ( OT_SHOW_SETTINGS_IMPORT == false ) {

					foreach( $page['settings'] as $setting_key => $setting ) {
						if ( $setting['section'] == 'import' && in_array( $setting['id'], array('import_xml_text', 'import_settings_text' ) ) ) {
							unset($ot_register_pages_array[$key]['settings'][$setting_key]);
						}
					}

				}

				// Remove parts of the Export UI
				if ( OT_SHOW_SETTINGS_EXPORT == false ) {

					foreach( $page['settings'] as $setting_key => $setting ) {
						if ( $setting['section'] == 'export' && in_array( $setting['id'], array('export_settings_file_text', 'export_settings_text' ) ) ) {
							unset($ot_register_pages_array[$key]['settings'][$setting_key]);
						}
					}

				}

				// Remove the Layouts UI
				if ( OT_SHOW_NEW_LAYOUT == false ) {

					foreach( $page['sections'] as $section_key => $section ) {
						if ( $section['id'] == 'layouts' ) {
							unset($ot_register_pages_array[$key]['sections'][$section_key]);
						}
					}

					foreach( $page['settings'] as $setting_key => $setting ) {
						if ( $setting['section'] == 'layouts' ) {
							unset($ot_register_pages_array[$key]['settings'][$setting_key]);
						}
					}

				}

			}

			// Remove the Documentation UI.
			if ( OT_SHOW_DOCS == false && $page['id'] == 'documentation' ) {

				unset( $ot_register_pages_array[$key] );

			}

		}

		$ot_register_pages_array = apply_filters( 'ot_register_pages_array', $ot_register_pages_array );

		// Register the pages.
		ot_register_settings( array(
				array(
					'id'              => ot_settings_id(),
					'pages'           => $ot_register_pages_array
				)
			)
		);

	}

}

/**
 * Runs directly after the Theme Options are save.
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_after_theme_options_save' ) ) {

	function ot_after_theme_options_save() {

		$page = isset( $_REQUEST['page'] ) ? $_REQUEST['page'] : '';
		$updated = isset( $_REQUEST['settings-updated'] ) && $_REQUEST['settings-updated'] == 'true' ? true : false;

		/* only execute after the theme options are saved */
		if ( apply_filters( 'ot_theme_options_menu_slug', 'ot-theme-options' ) == $page && $updated ) {

			/* grab a copy of the theme options */
			$options = get_option( ot_options_id() );

			/* execute the action hook and pass the theme options to it */
			do_action( 'ot_after_theme_options_save', $options );

		}

	}

}

/**
 * Validate the options by type before saving.
 *
 * This function will run on only some of the option types
 * as all of them don't need to be validated, just the
 * ones users are going to input data into; because they
 * can't be trusted.
 *
 * @param     mixed     Setting value
 * @param     string    Setting type
 * @param     string    Setting field ID
 * @param     string    WPML field ID
 * @return    mixed
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_validate_setting' ) ) {

	function ot_validate_setting( $input, $type, $field_id, $wmpl_id = '' ) {

		/* exit early if missing data */
		if ( ! $input || ! $type || ! $field_id )
			return $input;

		$input = apply_filters( 'ot_validate_setting', $input, $type, $field_id );

		/* WPML Register and Unregister strings */
		if ( apply_filters( 'uncode_restore_ot_wpml_functions', false ) ) {
			if ( ! empty( $wmpl_id ) ) {

				/* Allow filtering on the WPML option types */
				$single_string_types = apply_filters( 'ot_wpml_option_types', array( 'text', 'textarea', 'textarea-simple' ) );

				if ( in_array( $type, $single_string_types ) ) {

					if ( ! empty( $input ) ) {

						ot_wpml_register_string( $wmpl_id, $input );

					} else {

						ot_wpml_unregister_string( $wmpl_id );

					}

				}

			}
		}

		if ( 'background' == $type ) {

			//$input['background-color'] = ot_validate_setting( $input['background-color'], 'colorpicker', $field_id );

			$input['background-image'] = isset( $input['background-image'] ) ? ot_validate_setting( $input['background-image'], 'upload', $field_id ) : '';

			// Loop over array and check for values
			foreach( (array) $input as $key => $value ) {
				if ( ! empty( $value ) ) {
					$has_value = true;
				}
			}

			// No value; set to empty
			if ( ! isset( $has_value ) ) {
				$input = '';
			}

		} else if ( 'border' == $type ) {

			// Loop over array and set errors or unset key from array.
			foreach( $input as $key => $value ) {

				// Validate width
				if ( $key == 'width' && ! empty( $value ) && ! is_numeric( $value ) ) {

					$input[$key] = '0';

					add_settings_error( 'option-tree', 'invalid_border_width', sprintf( wp_kses(__( 'The %s input field for %s only allows numeric values.', 'uncode-core' ), array( 'code' => array() ) ), '<code>width</code>', '<code>' . $field_id . '</code>' ), 'error' );

				}

				// Validate color
				if ( $key == 'color' && ! empty( $value ) ) {

					$input[$key] = ot_validate_setting( $value, 'colorpicker', $field_id );

				}

				// Unset keys with empty values.
				if ( empty( $value ) ) {
					unset( $input[$key] );
				}

			}

			if ( empty( $input ) ) {
				$input = '';
			}

		} else if ( 'box-shadow' == $type ) {

			// Validate inset
			$input['inset'] = isset( $input['inset'] ) ? 'inset' : '';

			// Validate offset-x
			$input['offset-x'] = ot_validate_setting( $input['offset-x'], 'text', $field_id );

			// Validate offset-y
			$input['offset-y'] = ot_validate_setting( $input['offset-y'], 'text', $field_id );

			// Validate blur-radius
			$input['blur-radius'] = ot_validate_setting( $input['blur-radius'], 'text', $field_id );

			// Validate spread-radius
			$input['spread-radius'] = ot_validate_setting( $input['spread-radius'], 'text', $field_id );

			// Validate color
			$input['color'] = ot_validate_setting( $input['color'], 'colorpicker', $field_id );

			// Unset keys with empty values.
			foreach( $input as $key => $value ) {
				if ( empty( $value ) ) {
					unset( $input[$key] );
				}
			}

			// Set empty array to empty string.
			if ( empty( $input ) ) {
				$input = '';
			}

		} else if ( 'colorpicker' == $type ) {

			/* return empty & set error */
			if ( 0 === preg_match( '/^#([a-f0-9]{6}|[a-f0-9]{3})$/i', $input ) && 0 === preg_match( '/^rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]{1,4})\s*\)/i', $input ) ) {

				$input = '';

				add_settings_error( 'option-tree', 'invalid_hex', sprintf( wp_kses(__( 'The %s Colorpicker only allows valid hexadecimal or rgba values.', 'uncode-core' ), array( 'code' => array() ) ), '<code>' . $field_id . '</code>' ), 'error' );

			}

		} else if ( 'colorpicker-opacity' == $type ) {

			// Not allowed
			if ( is_array( $input ) ) {
				$input = '';
			}

			// Validate color
			$input = ot_validate_setting( $input, 'colorpicker', $field_id );

		} else if ( in_array( $type, array( 'css', 'javascript', 'text', 'textarea', 'textarea-simple' ) ) ) {

			if ( ! current_user_can( 'unfiltered_html' ) && OT_ALLOW_UNFILTERED_HTML == false ) {

				$input = wp_kses_post( $input );

			}

		} else if ( 'dimension' == $type ) {

			// Loop over array and set error keys or unset key from array.
			foreach( $input as $key => $value ) {
				if ( ! empty( $value ) && ! is_numeric( $value ) && $key !== 'unit' ) {
					$errors[] = $key;
				}
				if ( empty( $value ) ) {
					unset( $input[$key] );
				}
			}

			/* return 0 & set error */
			if ( isset( $errors ) ) {

				foreach( $errors as $error ) {

					$input[$error] = '0';

					add_settings_error( 'option-tree', 'invalid_dimension_' . $error, sprintf( wp_kses(__( 'The %s input field for %s only allows numeric values.', 'uncode-core' ), array( 'code' => array() ) ), '<code>' . $error . '</code>', '<code>' . $field_id . '</code>' ), 'error' );

				}

			}

			if ( empty( $input ) ) {
				$input = '';
			}

		} else if ( 'link-color' == $type ) {

			// Loop over array and check for values
			if ( is_array( $input ) && ! empty( $input ) ) {
				foreach( $input as $key => $value ) {
					if ( ! empty( $value ) ) {
						$input[$key] = ot_validate_setting( $input[$key], 'colorpicker', $field_id . '-' . $key );
						$has_value = true;
					}
				}
			}

			// No value; set to empty
			if ( ! isset( $has_value ) ) {
				$input = '';
			}

		} else if ( 'measurement' == $type ) {

			$input[0] = sanitize_text_field( $input[0] );

			// No value; set to empty
			if ( empty( $input[0] ) && empty( $input[1] ) ) {
				$input = '';
			}

		} else if ( 'upload' == $type ) {

			if( filter_var( $input, FILTER_VALIDATE_INT ) === FALSE ) {
				$input = esc_url_raw( $input );
			}

		} else if ( 'social-links' == $type ) {

			// Loop over array and check for values, plus sanitize the text field
			foreach( (array) $input as $key => $value ) {
				if ( ! empty( $value ) && is_array( $value ) ) {
					foreach( (array) $value as $item_key => $item_value ) {
						if ( ! empty( $item_value ) ) {
							$has_value = true;
							$input[$key][$item_key] = sanitize_text_field( $item_value );
						}
					}
				}
			}

			// No value; set to empty
			if ( ! isset( $has_value ) ) {
				$input = '';
			}

		}

		$input = apply_filters( 'ot_after_validate_setting', $input, $type, $field_id );

		return $input;

	}

}

/**
 * Setup the default admin styles
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_admin_styles' ) ) {

	function ot_admin_styles() {
		global $wp_styles, $post;

		/* execute styles before actions */
		do_action( 'ot_admin_styles_before' );

		/* load WP colorpicker */
		wp_enqueue_style( 'wp-color-picker' );

		/* load the RTL stylesheet */
		$wp_styles->add_data( 'ot-admin','rtl', true );

		/* Remove styles added by the Easy Digital Downloads plugin */
		if ( isset( $post->post_type ) && $post->post_type == 'post' )
			wp_dequeue_style( 'jquery-ui-css' );

		/**
		 * Filter the screen IDs used to dequeue `jquery-ui-css`.
		 *
		 * @since 2.5.0
		 *
		 * @param array $screen_ids An array of screen IDs.
		 */
		$screen_ids = apply_filters( 'ot_dequeue_jquery_ui_css_screen_ids', array(
			'toplevel_page_uncode-settings',
			'optiontree_page_ot-documentation',
			'appearance_page_ot-theme-options'
		) );

		/* Remove styles added by the WP Review plugin and any custom pages added through filtering */
		if ( in_array( get_current_screen()->id, $screen_ids ) ) {
			wp_dequeue_style( 'plugin_name-admin-ui-css' );
			wp_dequeue_style( 'jquery-ui-css' );
		}

		/* execute styles after actions */
		do_action( 'ot_admin_styles_after' );

	}

}

/**
 * Setup the default admin scripts
 *
 * @uses      add_thickbox()          Include Thickbox for file uploads
 * @uses      wp_enqueue_script()     Add OptionTree scripts
 * @uses      wp_localize_script()    Used to include arbitrary Javascript data
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_admin_scripts' ) ) {

	function ot_admin_scripts() {

		/* execute scripts before actions */
		do_action( 'ot_admin_scripts_before' );

		$screen = get_current_screen();

		if ( isset( $screen->id ) && ( $screen->id === 'uncode_page_uncode-options' || $screen->id === 'uncode_page_uncode-settings' ) ) {
			if ( function_exists( 'wp_enqueue_media' ) ) {
				/* WP 3.5 Media Uploader */
				wp_enqueue_media();
			} else {
				/* Legacy Thickbox */
				add_thickbox();
			}
		}

		/* load jQuery-ui slider */
		wp_enqueue_script( 'jquery-ui-slider' );

		/* load WP colorpicker */
		wp_enqueue_script( 'wp-color-picker' );
		wp_enqueue_script( 'ot-drag', OT_URL . 'assets/js/min/dom-drag.min.js', array( 'jquery' ), '1.0.1' );
		wp_enqueue_script( 'ot-colorpicker', OT_URL . 'assets/js/min/colorpicker.min.js', array( 'jquery' ), '1.0.1' );
		wp_enqueue_script( 'ot-gradx', OT_URL . 'assets/js/gradX.js', array( 'jquery' ), '1.0.1' );

		/* load Ace Editor for CSS Editing */
		wp_enqueue_script( 'ace-editor', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js', null, '1.2.3' );

		/* load all the required scripts */
		wp_enqueue_script( 'ot-admin-js', OT_URL . 'assets/js/min/ot-admin.min.js', array( 'jquery', 'jquery-ui-tabs', 'jquery-ui-sortable', 'jquery-ui-slider', 'wp-color-picker' ), OT_VERSION );

		/* create localized JS array */
		$localized_array = array(
			'ajax'                  => admin_url( 'admin-ajax.php' ),
			'upload_text'           => apply_filters( 'ot_upload_text', esc_html__( 'Send to OptionTree', 'uncode-core' ) ),
			'remove_media_text'     => esc_html__( 'Remove Media', 'uncode-core' ),
			'reset_agree'           => esc_html__( 'Are you sure you want to reset back to the defaults?', 'uncode-core' ),
			'remove_no'             => esc_html__( 'You can\'t remove this! But you can edit the values.', 'uncode-core' ),
			'remove_agree'          => esc_html__( 'Are you sure you want to remove this?', 'uncode-core' ),
			'activate_layout_agree' => esc_html__( 'Are you sure you want to activate this layout?', 'uncode-core' ),
			'setting_limit'         => esc_html__( 'Sorry, you can\'t have settings three levels deep.', 'uncode-core' ),
			'delete'                => esc_html__( 'Delete Gallery', 'uncode-core' ),
			'edit'                  => esc_html__( 'Edit Gallery', 'uncode-core' ),
			'create'                => esc_html__( 'Create Gallery', 'uncode-core' ),
			'confirm'               => esc_html__( 'Are you sure you want to delete this Gallery?', 'uncode-core' ),
			'date_current'          => esc_html__( 'Today', 'uncode-core' ),
			'date_time_current'     => esc_html__( 'Now', 'uncode-core' ),
			'date_close'            => esc_html__( 'Close', 'uncode-core' ),
			'replace'               => esc_html__( 'Featured Image', 'uncode-core' ),
			'with'                  => esc_html__( 'Image', 'uncode-core' )
		);

		/* localized script attached to 'option_tree' */
		wp_localize_script( 'ot-admin-js', 'option_tree', $localized_array );

		/* execute scripts after actions */
		do_action( 'ot_admin_scripts_after' );

	}

}

/**
 * Helper function to update the CSS option type after save.
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_save_css' ) ) {

	function ot_save_css( $options ) {

		/* grab a copy of the settings */
		$settings = ot_settings_value();

		/* has settings */
		if ( isset( $settings['settings'] ) ) {

			/* loop through sections and insert CSS when needed */
			foreach( $settings['settings'] as $k => $setting ) {

				/* is the CSS option type */
				if ( isset( $setting['type'] ) && 'css' == $setting['type'] ) {

					/* insert CSS into dynamic.css */
					if ( isset( $options[$setting['id']] ) && '' !== $options[$setting['id']] ) {

						ot_insert_css_with_markers( $setting['id'], $options[$setting['id']] );

					/* remove old CSS from dynamic.css */
					} else {

						ot_remove_old_css( $setting['id'] );

					}

				}

			}

		}

	}

}

/**
 * Helper function to load filters for XML mime type.
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_add_xml_to_upload_filetypes' ) ) {

	function ot_add_xml_to_upload_filetypes() {

		add_filter( 'upload_mimes', 'ot_upload_mimes' );
		add_filter( 'wp_mime_type_icon', 'ot_xml_mime_type_icon', 10, 2 );

	}

}

/**
 * Filter 'upload_mimes' and add xml.
 *
 * @param     array     $mimes An array of valid upload mime types
 * @return    array
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_upload_mimes' ) ) {

	function ot_upload_mimes( $mimes ) {

		$mimes['xml'] = 'application/xml';

		return $mimes;

	}

}

/**
 * Filters 'wp_mime_type_icon' and have xml display as a document.
 *
 * @param     string    $icon The mime icon
 * @param     string    $mime The mime type
 * @return    string
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_xml_mime_type_icon' ) ) {

	function ot_xml_mime_type_icon( $icon, $mime ) {

		if ( $mime == 'application/xml' || $mime == 'text/xml' )
			return wp_mime_type_icon( 'document' );

		return $icon;

	}

}

/**
 * Import before the screen is displayed.
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_import' ) ) {

	function ot_import() {

		/* check and verify import theme options data nonce */
		if ( isset( $_POST['import_data_nonce'] ) && wp_verify_nonce( $_POST['import_data_nonce'], 'import_data_form' ) ) {

			/* default message */
			$message = 'failed';

			/* textarea value */
			$options = isset( $_POST['import_data'] ) ? uncode_core_safe_unserialize( ot_decode( $_POST['import_data'] ) ) : '';

			/* get settings array */
			$settings = ot_settings_value();

			/* has options */
			if ( is_array( $options ) ) {

				/* validate options */
				if ( is_array( $settings ) ) {

					foreach( $settings['settings'] as $setting ) {

						if ( isset( $options[$setting['id']] ) ) {

							$content = ot_stripslashes( $options[$setting['id']] );

							$options[$setting['id']] = ot_validate_setting( $content, $setting['type'], $setting['id'] );

						}

					}

				}

				/* execute the action hook and pass the theme options to it */
				do_action( 'ot_before_theme_options_save', $options );

				/* update the option tree array */
				update_option( ot_options_id(), $options );

				$message = 'success';

			}

			/* redirect accordingly */
			wp_redirect( esc_url_raw( add_query_arg( array( 'action' => 'import-data', 'message' => $message ), $_POST['_wp_http_referer'] ) ) );
			exit;

		}

		/* check and verify import layouts nonce */
		if ( isset( $_POST['import_layouts_nonce'] ) && wp_verify_nonce( $_POST['import_layouts_nonce'], 'import_layouts_form' ) ) {

			/* default message */
			$message = 'failed';

			/* textarea value */
			$layouts = isset( $_POST['import_layouts'] ) ? uncode_core_safe_unserialize( ot_decode( $_POST['import_layouts'] ) ) : '';

			/* get settings array */
			$settings = ot_settings_value();

			/* has layouts */
			if ( is_array( $layouts ) ) {

				/* validate options */
				if ( is_array( $settings ) ) {

					foreach( $layouts as $key => $value ) {

						if ( $key == 'active_layout' )
							continue;

						$options = unserialize( ot_decode( $value ) );

						foreach( $settings['settings'] as $setting ) {

							if ( isset( $options[$setting['id']] ) ) {

								$content = ot_stripslashes( $options[$setting['id']] );

								$options[$setting['id']] = ot_validate_setting( $content, $setting['type'], $setting['id'] );

							}

						}

						$layouts[$key] = ot_encode( serialize( $options ) );

					}

				}

				/* update the option tree array */
				if ( isset( $layouts['active_layout'] ) ) {

					$new_options = unserialize( ot_decode( $layouts[$layouts['active_layout']] ) );

					/* execute the action hook and pass the theme options to it */
					do_action( 'ot_before_theme_options_save', $new_options );

					update_option( ot_options_id(), $new_options );

				}

				/* update the option tree layouts array */
				update_option( ot_layouts_id(), $layouts );

				$message = 'success';

			}

			/* redirect accordingly */
			wp_redirect( esc_url_raw( add_query_arg( array( 'action' => 'import-layouts', 'message' => $message ), $_POST['_wp_http_referer'] ) ) );
			exit;

		}

		return false;

	}

}


/**
 * Reusable XMl import helper function.
 *
 * @param     string    $file The path to the file.
 * @return    mixed     False or an array of settings.
 *
 * @access    public
 * @since     2.0.8
 */
if ( ! function_exists( 'ot_import_xml' ) ) {

	function ot_import_xml( $file ) {

		$get_data = wp_remote_get( $file );

		if ( is_wp_error( $get_data ) )
			return false;

		$rawdata = isset( $get_data['body'] ) ? $get_data['body'] : false;

		if ( $rawdata ) {

			$section_count = 0;
			$settings_count = 0;

			$section = '';

			$settings = array();
			$xml = new SimpleXMLElement( $rawdata );

			foreach ( $xml->row as $value ) {

				/* heading is a section now */
				if ( $value->item_type == 'heading' ) {

					/* add section to the sections array */
					$settings['sections'][$section_count]['id'] = (string) $value->item_id;
					$settings['sections'][$section_count]['title'] = (string) $value->item_title;

					/* save the last section id to use in creating settings */
					$section = (string) $value->item_id;

					/* increment the section count */
					$section_count++;

				} else {

					/* add setting to the settings array */
					$settings['settings'][$settings_count]['id'] = (string) $value->item_id;
					$settings['settings'][$settings_count]['label'] = (string) $value->item_title;
					$settings['settings'][$settings_count]['desc'] = (string) $value->item_desc;
					$settings['settings'][$settings_count]['section'] = $section;
					$settings['settings'][$settings_count]['type'] = ot_map_old_option_types( (string) $value->item_type );
					$settings['settings'][$settings_count]['std'] = '';
					$settings['settings'][$settings_count]['class'] = '';

					/* textarea rows */
					$rows = '';
					if ( in_array( $settings['settings'][$settings_count]['type'], array( 'css', 'javascript', 'textarea' ) ) ) {
						if ( (int) $value->item_options > 0 ) {
							$rows = (int) $value->item_options;
						} else {
							$rows = 15;
						}
					}
					$settings['settings'][$settings_count]['rows'] = $rows;

					/* post type */
					$post_type = '';
					if ( in_array( $settings['settings'][$settings_count]['type'], array( 'custom-post-type-select', 'custom-post-type-checkbox' ) ) ) {
						if ( '' != (string) $value->item_options ) {
							$post_type = (string) $value->item_options;
						} else {
							$post_type = 'post';
						}
					}
					$settings['settings'][$settings_count]['post_type'] = $post_type;

					/* choices */
					$choices = array();
					if ( in_array( $settings['settings'][$settings_count]['type'], array( 'checkbox', 'radio', 'select' ) ) ) {
						if ( '' != (string) $value->item_options ) {
							$choices = ot_convert_string_to_array( (string) $value->item_options );
						}
					}
					$settings['settings'][$settings_count]['choices'] = $choices;

					$settings_count++;
				}

			}

			/* make sure each setting has a section just incase */
			if ( isset( $settings['sections'] ) && isset( $settings['settings'] ) ) {
				foreach( $settings['settings'] as $k => $setting ) {
					if ( '' == $setting['section'] ) {
						$settings['settings'][$k]['section'] = $settings['sections'][0]['id'];
					}
				}
			}

			return $settings;

		}

		return false;
	}

}

/**
 * Save settings array before the screen is displayed.
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_save_settings' ) ) {

	function ot_save_settings() {

		/* check and verify import settings nonce */
		if ( isset( $_POST['option_tree_settings_nonce'] ) && wp_verify_nonce( $_POST['option_tree_settings_nonce'], 'option_tree_settings_form' ) ) {

			/* settings value */
			$settings = isset( $_POST[ot_settings_id()] ) ? $_POST[ot_settings_id()] : '';

			/* validate sections */
			if ( isset( $settings['sections'] ) ) {

				/* fix numeric keys since drag & drop will change them */
				$settings['sections'] = array_values( $settings['sections'] );

				/* loop through sections */
				foreach( $settings['sections'] as $k => $section ) {

					/* remove from array if missing values */
					if ( ( ! isset( $section['title'] ) && ! isset( $section['id'] ) ) || ( '' == $section['title'] && '' == $section['id'] ) ) {

						unset( $settings['sections'][$k] );

					} else {

						/* validate label */
						if ( '' != $section['title'] ) {

						 $settings['sections'][$k]['title'] = wp_kses_post( $section['title'] );

						}

						/* missing title set to unfiltered ID */
						if ( ! isset( $section['title'] ) || '' == $section['title'] ) {

							$settings['sections'][$k]['title'] = wp_kses_post( $section['id'] );

						/* missing ID set to title */
						} else if ( ! isset( $section['id'] ) || '' == $section['id'] ) {

							$section['id'] = wp_kses_post( $section['title'] );

						}

						/* sanitize ID once everything has been checked first */
						$settings['sections'][$k]['id'] = ot_sanitize_option_id( wp_kses_post( $section['id'] ) );

					}

				}

				$settings['sections'] = ot_stripslashes( $settings['sections'] );

			}

			/* validate settings by looping over array as many times as it takes */
			if ( isset( $settings['settings'] ) ) {

				$settings['settings'] = ot_validate_settings_array( $settings['settings'] );

			}

			/* validate contextual_help */
			if ( isset( $settings['contextual_help']['content'] ) ) {

				/* fix numeric keys since drag & drop will change them */
				$settings['contextual_help']['content'] = array_values( $settings['contextual_help']['content'] );

				/* loop through content */
				foreach( $settings['contextual_help']['content'] as $k => $content ) {

					/* remove from array if missing values */
					if ( ( ! isset( $content['title'] ) && ! isset( $content['id'] ) ) || ( '' == $content['title'] && '' == $content['id'] ) ) {

						unset( $settings['contextual_help']['content'][$k] );

					} else {

						/* validate label */
						if ( '' != $content['title'] ) {

						 $settings['contextual_help']['content'][$k]['title'] = wp_kses_post( $content['title'] );

						}

						/* missing title set to unfiltered ID */
						if ( ! isset( $content['title'] ) || '' == $content['title'] ) {

							$settings['contextual_help']['content'][$k]['title'] = wp_kses_post( $content['id'] );

						/* missing ID set to title */
						} else if ( ! isset( $content['id'] ) || '' == $content['id'] ) {

							$content['id'] = wp_kses_post( $content['title'] );

						}

						/* sanitize ID once everything has been checked first */
						$settings['contextual_help']['content'][$k]['id'] = ot_sanitize_option_id( wp_kses_post( $content['id'] ) );

					}

					/* validate textarea description */
					if ( isset( $content['content'] ) ) {

						$settings['contextual_help']['content'][$k]['content'] = wp_kses_post( $content['content'] );

					}

				}

			}

			/* validate contextual_help sidebar */
			if ( isset( $settings['contextual_help']['sidebar'] ) ) {

				$settings['contextual_help']['sidebar'] = wp_kses_post( $settings['contextual_help']['sidebar'] );

			}

			$settings['contextual_help'] = ot_stripslashes( $settings['contextual_help'] );

			/* default message */
			$message = 'failed';

			/* is array: save & show success message */
			if ( is_array( $settings ) ) {

				/* WPML unregister ID's that have been removed */
				if ( apply_filters( 'uncode_restore_ot_wpml_functions', false ) && function_exists( 'icl_unregister_string' ) ) {

					$current = ot_settings_value();
					$options = get_option( ot_options_id() );

					if ( isset( $current['settings'] ) ) {

						/* Empty ID array */
						$new_ids = array();

						/* Build the WPML IDs array */
						foreach( $settings['settings'] as $setting ) {

							if ( $setting['id'] ) {

								$new_ids[] = $setting['id'];

							}

						}

						/* Remove missing IDs from WPML */
						foreach( $current['settings'] as $current_setting ) {

							if ( ! in_array( $current_setting['id'], $new_ids ) ) {

								if ( ! empty( $options[$current_setting['id']] ) && in_array( $current_setting['type'], array( 'list-item', 'slider' ) ) ) {

									foreach( $options[$current_setting['id']] as $key => $value ) {

										foreach( $value as $ckey => $cvalue ) {

											ot_wpml_unregister_string( $current_setting['id'] . '_' . $ckey . '_' . $key );

										}

									}

								} else if ( ! empty( $options[$current_setting['id']] ) && $current_setting['type'] == 'social-icons' ) {

									foreach( $options[$current_setting['id']] as $key => $value ) {

										foreach( $value as $ckey => $cvalue ) {

											ot_wpml_unregister_string( $current_setting['id'] . '_' . $ckey . '_' . $key );

										}

									}

								} else {

									ot_wpml_unregister_string( $current_setting['id'] );

								}

							}

						}

					}

				}

				update_option( ot_settings_id(), $settings, false );
				$message = 'success';

			}

			/* redirect */
			wp_redirect( esc_url_raw( add_query_arg( array( 'action' => 'save-settings', 'message' => $message ), $_POST['_wp_http_referer'] ) ) );
			exit;

		}

		return false;

	}

}

/**
 * Validate the settings array before save.
 *
 * This function will loop over the settings array as many
 * times as it takes to validate every sub setting.
 *
 * @param     array     $settings The array of settings.
 * @return    array
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_validate_settings_array' ) ) {

	function ot_validate_settings_array( $settings = array() ) {

		/* validate settings */
		if ( count( $settings ) > 0 ) {

			/* fix numeric keys since drag & drop will change them */
			$settings = array_values( $settings );

			/* loop through settings */
			foreach( $settings as $k => $setting ) {


				/* remove from array if missing values */
				if ( ( ! isset( $setting['label'] ) && ! isset( $setting['id'] ) ) || ( '' == $setting['label'] && '' == $setting['id'] ) ) {

					unset( $settings[$k] );

				} else {

					/* validate label */
					if ( '' != $setting['label'] ) {

						$settings[$k]['label'] = wp_kses_post( $setting['label'] );

					}

					/* missing label set to unfiltered ID */
					if ( ! isset( $setting['label'] ) || '' == $setting['label'] ) {

						$settings[$k]['label'] = $setting['id'];

					/* missing ID set to label */
					} else if ( ! isset( $setting['id'] ) || '' == $setting['id'] ) {

						$setting['id'] = wp_kses_post( $setting['label'] );

					}

					/* sanitize ID once everything has been checked first */
					$settings[$k]['id'] = ot_sanitize_option_id( wp_kses_post( $setting['id'] ) );

				}

				/* validate description */
				if ( '' != $setting['desc']  ) {

					$settings[$k]['desc'] = wp_kses_post( $setting['desc'] );

				}

				/* validate choices */
				if ( isset( $setting['choices'] ) ) {

					/* loop through choices */
					foreach( $setting['choices'] as $ck => $choice ) {

						/* remove from array if missing values */
						if ( ( ! isset( $choice['label'] ) && ! isset( $choice['value'] ) ) || ( '' == $choice['label'] && '' == $choice['value'] ) ) {

							unset( $setting['choices'][$ck] );

						} else {

							/* missing label set to unfiltered ID */
							if ( ! isset( $choice['label'] ) || '' == $choice['label'] ) {

								$setting['choices'][$ck]['label'] = wp_kses_post( $choice['value'] );

							/* missing value set to label */
							} else if ( ! isset( $choice['value'] ) || '' == $choice['value'] ) {

								$setting['choices'][$ck]['value'] = ot_sanitize_option_id( wp_kses_post( $choice['label'] ) );

							}

						}

					}

					/* update keys and push new array values */
					$settings[$k]['choices'] = array_values( $setting['choices'] );

				}

				/* validate sub settings */
				if ( isset( $setting['settings'] ) ) {

					$settings[$k]['settings'] = ot_validate_settings_array( $setting['settings'] );

				}

			}

		}

		/* return array but strip those damn slashes out first!!! */
		return ot_stripslashes( $settings );

	}

}

/**
 * Save layouts array before the screen is displayed.
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_modify_layouts' ) ) {

	function ot_modify_layouts() {

		/* check and verify modify layouts nonce */
		if ( isset( $_POST['option_tree_modify_layouts_nonce'] ) && wp_verify_nonce( $_POST['option_tree_modify_layouts_nonce'], 'option_tree_modify_layouts_form' ) ) {

			/* previous layouts value */
			$option_tree_layouts = get_option( ot_layouts_id() );

			/* new layouts value */
			$layouts = isset( $_POST[ot_layouts_id()] ) ? $_POST[ot_layouts_id()] : '';

			/* rebuild layout array */
			$rebuild = array();

			/* validate layouts */
			if ( is_array( $layouts ) && ! empty( $layouts ) ) {

				/* setup active layout */
				if ( isset( $layouts['active_layout'] ) && ! empty( $layouts['active_layout'] ) ) {
					$rebuild['active_layout'] = $layouts['active_layout'];
				}

				/* add new and overwrite active layout */
				if ( isset( $layouts['_add_new_layout_'] ) && ! empty( $layouts['_add_new_layout_'] ) ) {
					$rebuild['active_layout'] = ot_sanitize_layout_id( $layouts['_add_new_layout_'] );
					$rebuild[$rebuild['active_layout']] = ot_encode( serialize( get_option( ot_options_id() ) ) );
				}

				$first_layout = '';

				/* loop through layouts */
				foreach( $layouts as $key => $layout ) {

					/* skip over active layout key */
					if ( $key == 'active_layout' )
						continue;

					/* check if the key exists then set value */
					if ( isset( $option_tree_layouts[$key] ) && ! empty( $option_tree_layouts[$key] ) ) {
						$rebuild[$key] = $option_tree_layouts[$key];
						if ( '' == $first_layout ) {
							$first_layout = $key;
						}
					}

				}

				if ( isset( $rebuild['active_layout'] ) && ! isset( $rebuild[$rebuild['active_layout']] ) && ! empty( $first_layout ) ) {
					$rebuild['active_layout'] = $first_layout;
				}

			}

			/* default message */
			$message = 'failed';

			/* is array: save & show success message */
			if ( count( $rebuild ) > 1 ) {

				/* rebuild the theme options */
				$rebuild_option_tree = unserialize( ot_decode( $rebuild[$rebuild['active_layout']] ) );

				if ( is_array( $rebuild_option_tree ) ) {

					/* execute the action hook and pass the theme options to it */
					do_action( 'ot_before_theme_options_save', $rebuild_option_tree );

					update_option( ot_options_id(), $rebuild_option_tree );

				}

				/* rebuild the layouts */
				update_option( ot_layouts_id(), $rebuild );

				/* change message */
				$message = 'success';

			} else if ( count( $rebuild ) <= 1 ) {

				/* delete layouts option */
				delete_option( ot_layouts_id() );

				/* change message */
				$message = 'deleted';

			}

			/* redirect */
			if ( isset( $_REQUEST['page'] ) && $_REQUEST['page'] == apply_filters( 'ot_theme_options_menu_slug', 'ot-theme-options' ) ) {
				$query_args = esc_url_raw( add_query_arg( array( 'settings-updated' => 'layout' ), remove_query_arg( array( 'action', 'message' ), $_POST['_wp_http_referer'] ) ) );
			} else {
				$query_args = esc_url_raw( add_query_arg( array( 'action' => 'save-layouts', 'message' => $message ), $_POST['_wp_http_referer'] ) );
			}
			wp_redirect( $query_args );
			exit;

		}

		return false;

	}

}

/**
 * Helper function to display alert messages.
 *
 * @param     array     Page array
 * @return    mixed
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_alert_message' ) ) {

	function ot_alert_message( $page = array() ) {

		if ( empty( $page ) )
			return false;

		$before = apply_filters( 'ot_before_page_messages', '', $page );

		if ( $before ) {
			return $before;
		}

		$action = isset( $_REQUEST['action'] ) ? $_REQUEST['action'] : '';
		$message = isset( $_REQUEST['message'] ) ? $_REQUEST['message'] : '';
		$updated = isset( $_REQUEST['settings-updated'] ) ? $_REQUEST['settings-updated'] : '';

		if ( $action == 'save-settings' ) {

			if ( $message == 'success' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . esc_html__( 'Settings updated.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . esc_html__( 'Settings updated.', 'uncode-core' ) . '</p></div>';
				}

			} else if ( $message == 'failed' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--error fade"><p>' . esc_html__( 'Settings could not be saved.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="error fade below-h2"><p>' . esc_html__( 'Settings could not be saved.', 'uncode-core' ) . '</p></div>';
				}

			}

		} else if ( $action == 'import-xml' || $action == 'import-settings' ) {

			if ( $message == 'success' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . esc_html__( 'Settings Imported.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . esc_html__( 'Settings Imported.', 'uncode-core' ) . '</p></div>';
				}

			} else if ( $message == 'failed' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--error fade"><p>' . esc_html__( 'Settings could not be imported.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="error fade below-h2"><p>' . esc_html__( 'Settings could not be imported.', 'uncode-core' ) . '</p></div>';
				}

			}
		} else if ( $action == 'import-data' ) {

			if ( $message == 'success' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . esc_html__( 'Data Imported.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . esc_html__( 'Data Imported.', 'uncode-core' ) . '</p></div>';
				}

			} else if ( $message == 'failed' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--error fade"><p>' . esc_html__( 'Data could not be imported.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="error fade below-h2"><p>' . esc_html__( 'Data could not be imported.', 'uncode-core' ) . '</p></div>';
				}

			}

		} else if ( $action == 'import-layouts' ) {

			if ( $message == 'success' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . esc_html__( 'Layouts Imported.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . esc_html__( 'Layouts Imported.', 'uncode-core' ) . '</p></div>';
				}

			} else if ( $message == 'failed' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--error fade"><p>' . esc_html__( 'Layouts could not be imported.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="error fade below-h2"><p>' . esc_html__( 'Layouts could not be imported.', 'uncode-core' ) . '</p></div>';
				}

			}

		} else if ( $action == 'save-layouts' ) {

			if ( $message == 'success' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . esc_html__( 'Layouts Updated.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . esc_html__( 'Layouts Updated.', 'uncode-core' ) . '</p></div>';
				}

			} else if ( $message == 'failed' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--error fade"><p>' . esc_html__( 'Layouts could not be updated.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="error fade below-h2"><p>' . esc_html__( 'Layouts could not be updated.', 'uncode-core' ) . '</p></div>';
				}

			} else if ( $message == 'deleted' ) {

				if ( $page[ 'id' ] == 'settings' ) {
					return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . esc_html__( 'Layouts have been deleted.', 'uncode-core' ) . '</p></div>';
				} else {
					return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . esc_html__( 'Layouts have been deleted.', 'uncode-core' ) . '</p></div>';
				}

			}

		} else if ( $updated == 'layout' ) {

			if ( $page[ 'id' ] == 'settings' ) {
				return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . esc_html__( 'Layout activated.', 'uncode-core' ) . '</p></div>';
			} else {
				return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . esc_html__( 'Layout activated.', 'uncode-core' ) . '</p></div>';
			}

		} else if ( $action == 'reset' ) {

			if ( $page[ 'id' ] == 'settings' ) {
				return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . $page['reset_message'] . '</p></div>';
			} else {
				return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . $page['reset_message'] . '</p></div>';
			}

		}

		do_action( 'ot_custom_page_messages', $page );

		if ( $updated == 'true' ) {

			if ( $page[ 'id' ] == 'settings' ) {
				return '<div class="uncode-ui-notice uncode-ui-notice--success fade"><p>' . $page['updated_message'] . '</p></div>';
			} else {
				return '<div id="uncode-ot-message" class="updated fade below-h2"><p>' . $page['updated_message'] . '</p></div>';
			}

		}

		return false;

	}

}

/**
 * Setup the default option types.
 *
 * The returned option types are filterable so you can add your own.
 * This is not a task for a beginner as you'll need to add the function
 * that displays the option to the user and validate the saved data.
 *
 * @return    array
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_option_types_array' ) ) {

	function ot_option_types_array() {

		return apply_filters( 'ot_option_types_array', array(
			'background'                => esc_html__('Background', 'uncode-core'),
			'border'                    => esc_html__('Border', 'uncode-core'),
			'box-shadow'                => esc_html__('Box Shadow', 'uncode-core'),
			'category-checkbox'         => esc_html__('Category Checkbox', 'uncode-core'),
			'category-select'           => esc_html__('Category Select', 'uncode-core'),
			'checkbox'                  => esc_html__('Checkbox', 'uncode-core'),
			'colorpicker'               => esc_html__('Colorpicker', 'uncode-core'),
			'gradientpicker'            => esc_html__('Gradientpicker', 'uncode-core'),
			'colorpicker-opacity'       => esc_html__('Colorpicker Opacity', 'uncode-core'),
			'css'                       => esc_html__('CSS', 'uncode-core'),
			'custom-post-type-checkbox' => esc_html__('Custom Post Type Checkbox', 'uncode-core'),
			'custom-post-type-select'   => esc_html__('Custom Post Type Select', 'uncode-core'),
			'dimension'                 => esc_html__('Dimension', 'uncode-core'),
			'javascript'                => esc_html__('JavaScript', 'uncode-core'),
			'link-color'                => esc_html__('Link Color', 'uncode-core'),
			'list-item'                 => esc_html__('List Item', 'uncode-core'),
			'measurement'               => esc_html__('Measurement', 'uncode-core'),
			'numeric-slider'            => esc_html__('Numeric Slider', 'uncode-core'),
			'on-off'                    => esc_html__('On/Off', 'uncode-core'),
			'page-checkbox'             => esc_html__('Page Checkbox', 'uncode-core'),
			'page-select'               => esc_html__('Page Select', 'uncode-core'),
			'post-checkbox'             => esc_html__('Post Checkbox', 'uncode-core'),
			'post-select'               => esc_html__('Post Select', 'uncode-core'),
			'radio'                     => esc_html__('Radio', 'uncode-core'),
			'radio-image'               => esc_html__('Radio Image', 'uncode-core'),
			'menu-select'               => esc_html__('Menu Select', 'uncode-core'),
			'select'                    => esc_html__('Select', 'uncode-core'),
			'sidebar-select'            => esc_html__('Sidebar Select',  'uncode-core'),
			'slider'                    => esc_html__('Slider', 'uncode-core'),
			'social-links'              => esc_html__('Social Links', 'uncode-core'),
			'tab'                       => esc_html__('Tab', 'uncode-core'),
			'tag-checkbox'              => esc_html__('Tag Checkbox', 'uncode-core'),
			'tag-select'                => esc_html__('Tag Select', 'uncode-core'),
			'taxonomy-checkbox'         => esc_html__('Taxonomy Checkbox', 'uncode-core'),
			'taxonomy-select'           => esc_html__('Taxonomy Select', 'uncode-core'),
			'text'                      => esc_html__('Text', 'uncode-core'),
			'textarea'                  => esc_html__('Textarea', 'uncode-core'),
			'textarea-simple'           => esc_html__('Textarea Simple', 'uncode-core'),
			'textblock'                 => esc_html__('Textblock', 'uncode-core'),
			'textblock-titled'          => esc_html__('Textblock Titled', 'uncode-core'),
			'upload'                    => esc_html__('Upload', 'uncode-core'),
			'button'                    => esc_html__('Button', 'uncode-core')
		) );

	}
}

/**
 * Map old option types for rebuilding XML and Table data.
 *
 * @param     string      $type The old option type
 * @return    string      The new option type
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_map_old_option_types' ) ) {

	function ot_map_old_option_types( $type = '' ) {

		if ( ! $type )
			return 'text';

		$types = array(
			'background'        => 'background',
			'category'          => 'category-select',
			'categories'        => 'category-checkbox',
			'checkbox'          => 'checkbox',
			'colorpicker'       => 'colorpicker',
			'gradientpicker'    => 'gradientpicker',
			'css'               => 'css',
			'custom_post'       => 'custom-post-type-select',
			'custom_post-2'     => 'custom-post-type-select-2',
			'custom_posts'      => 'custom-post-type-checkbox',
			'input'             => 'text',
			'image'             => 'upload',
			'measurement'       => 'measurement',
			'page'              => 'page-select',
			'pages'             => 'page-checkbox',
			'post'              => 'post-select',
			'posts'             => 'post-checkbox',
			'radio'             => 'radio',
			'select'            => 'select',
			'slider'            => 'slider',
			'tag'               => 'tag-select',
			'tags'              => 'tag-checkbox',
			'textarea'          => 'textarea',
			'textblock'         => 'textblock',
			'typography'        => 'typography',
			'upload'            => 'upload'
		);

		if ( isset( $types[$type] ) )
			return $types[$type];

		return false;

	}
}

/**
 * Recognized background repeat
 *
 * Returns an array of all recognized background repeat values.
 * Renamed in version 2.0 to avoid name collisions.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     1.1.8
 * @updated   2.0
 */
if ( ! function_exists( 'ot_recognized_background_repeat' ) ) {

	function ot_recognized_background_repeat( $field_id = '' ) {

		return apply_filters( 'ot_recognized_background_repeat', array(
			'no-repeat' => 'No Repeat',
			'repeat'    => 'Repeat All',
			'repeat-x'  => 'Repeat Horizontally',
			'repeat-y'  => 'Repeat Vertically',
			'inherit'   => 'Inherit'
		), $field_id );

	}

}

/**
 * Recognized background attachment
 *
 * Returns an array of all recognized background attachment values.
 * Renamed in version 2.0 to avoid name collisions.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     1.1.8
 * @updated   2.0
 */
if ( ! function_exists( 'ot_recognized_background_attachment' ) ) {

	function ot_recognized_background_attachment( $field_id = '' ) {

		return apply_filters( 'ot_recognized_background_attachment', array(
			"fixed"   => "Fixed",
			"scroll"  => "Scroll",
			"inherit" => "Inherit"
		), $field_id );

	}

}

/**
 * Recognized background position
 *
 * Returns an array of all recognized background position values.
 * Renamed in version 2.0 to avoid name collisions.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     1.1.8
 * @updated   2.0
 */
if ( ! function_exists( 'ot_recognized_background_position' ) ) {

	function ot_recognized_background_position( $field_id = '' ) {

		return apply_filters( 'ot_recognized_background_position', array(
			"left top"      => "Left Top",
			"left center"   => "Left Center",
			"left bottom"   => "Left Bottom",
			"center top"    => "Center Top",
			"center center" => "Center Center",
			"center bottom" => "Center Bottom",
			"right top"     => "Right Top",
			"right center"  => "Right Center",
			"right bottom"  => "Right Bottom"
		), $field_id );

	}

}

/**
 * Border Styles
 *
 * Returns an array of all available style types.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     2.5.0
 */
if ( ! function_exists( 'ot_recognized_border_style_types' ) ) {

	function ot_recognized_border_style_types( $field_id = '' ) {

		return apply_filters( 'ot_recognized_border_style_types', array(
			'hidden' => 'Hidden',
			'dashed' => 'Dashed',
			'solid'  => 'Solid',
			'double' => 'Double',
			'groove' => 'Groove',
			'ridge'  => 'Ridge',
			'inset'  => 'Inset',
			'outset' => 'Outset',
		), $field_id );

	}

}

/**
 * Border Units
 *
 * Returns an array of all available unit types.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     2.5.0
 */
if ( ! function_exists( 'ot_recognized_border_unit_types' ) ) {

	function ot_recognized_border_unit_types( $field_id = '' ) {

		return apply_filters( 'ot_recognized_border_unit_types', array(
			'px' => 'px',
			'%'  => '%',
			'em' => 'em',
			'pt' => 'pt'
		), $field_id );

	}

}

/**
 * Measurement Units
 *
 * Returns an array of all available unit types.
 * Renamed in version 2.0 to avoid name collisions.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     1.1.8
 * @updated   2.0
 */
if ( ! function_exists( 'ot_measurement_unit_types' ) ) {

	function ot_measurement_unit_types( $field_id = '' ) {

		return apply_filters( 'ot_measurement_unit_types', array(
			'px' => 'px',
			'%'  => '%',
			'em' => 'em',
			'pt' => 'pt'
		), $field_id );

	}

}

/**
 * Radio Images default array.
 *
 * Returns an array of all available radio images.
 * You can filter this function to change the images
 * on a per option basis.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_radio_images' ) ) {

	function ot_radio_images( $field_id = '' ) {

		return apply_filters( 'ot_radio_images', array(
			array(
				'value'   => 'left-sidebar',
				'label'   => esc_html__( 'Left Sidebar', 'uncode-core' ),
				'src'     => OT_URL . 'assets/images/layout/left-sidebar.png'
			),
			array(
				'value'   => 'right-sidebar',
				'label'   => esc_html__( 'Right Sidebar', 'uncode-core' ),
				'src'     => OT_URL . 'assets/images/layout/right-sidebar.png'
			),
			array(
				'value'   => 'full-width',
				'label'   => esc_html__( 'Full Width (no sidebar)', 'uncode-core' ),
				'src'     => OT_URL . 'assets/images/layout/full-width.png'
			),
			array(
				'value'   => 'dual-sidebar',
				'label'   => esc_html__( 'Dual Sidebar', 'uncode-core' ),
				'src'     => OT_URL . 'assets/images/layout/dual-sidebar.png'
			),
			array(
				'value'   => 'left-dual-sidebar',
				'label'   => esc_html__( 'Left Dual Sidebar', 'uncode-core' ),
				'src'     => OT_URL . 'assets/images/layout/left-dual-sidebar.png'
			),
			array(
				'value'   => 'right-dual-sidebar',
				'label'   => esc_html__( 'Right Dual Sidebar', 'uncode-core' ),
				'src'     => OT_URL . 'assets/images/layout/right-dual-sidebar.png'
			)
		), $field_id );

	}

}

/**
 * Default List Item Settings array.
 *
 * Returns an array of the default list item settings.
 * You can filter this function to change the settings
 * on a per option basis.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_list_item_settings' ) ) {

	function ot_list_item_settings( $id ) {

		$settings = apply_filters( 'ot_list_item_settings', array(
			array(
				'id'        => 'image',
				'label'     => esc_html__( 'Image', 'uncode-core' ),
				'desc'      => '',
				'std'       => '',
				'type'      => 'upload',
				'rows'      => '',
				'class'     => '',
				'post_type' => '',
				'choices'   => array()
			),
			array(
				'id'        => 'link',
				'label'     => esc_html__( 'Link', 'uncode-core' ),
				'desc'      => '',
				'std'       => '',
				'type'      => 'text',
				'rows'      => '',
				'class'     => '',
				'post_type' => '',
				'choices'   => array()
			),
			array(
				'id'        => 'description',
				'label'     => esc_html__( 'Description', 'uncode-core' ),
				'desc'      => '',
				'std'       => '',
				'type'      => 'textarea-simple',
				'rows'      => 10,
				'class'     => '',
				'post_type' => '',
				'choices'   => array()
			)
		), $id );

		return $settings;

	}

}

/**
 * Default Slider Settings array.
 *
 * Returns an array of the default slider settings.
 * You can filter this function to change the settings
 * on a per option basis.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_slider_settings' ) ) {

	function ot_slider_settings( $id ) {

		$settings = apply_filters( 'image_slider_fields', array(
			array(
				'name'      => 'image',
				'type'      => 'image',
				'label'     => esc_html__( 'Image', 'uncode-core' ),
				'class'     => ''
			),
			array(
				'name'      => 'link',
				'type'      => 'text',
				'label'     => esc_html__( 'Link', 'uncode-core' ),
				'class'     => ''
			),
			array(
				'name'      => 'description',
				'type'      => 'textarea',
				'label'     => esc_html__( 'Description', 'uncode-core' ),
				'class'     => ''
			)
		), $id );

		/* fix the array keys, values, and just get it 2.0 ready */
		foreach( $settings as $_k => $setting ) {

			foreach( $setting as $s_key => $s_value ) {

				if ( 'name' == $s_key ) {

					$settings[$_k]['id'] = $s_value;
					unset($settings[$_k]['name']);

				} else if ( 'type' == $s_key ) {

					if ( 'input' == $s_value ) {

						$settings[$_k]['type'] = 'text';

					} else if ( 'textarea' == $s_value ) {

						$settings[$_k]['type'] = 'textarea-simple';

					} else if ( 'image' == $s_value ) {

						$settings[$_k]['type'] = 'upload';

					}

				}

			}

		}

		return $settings;

	}

}

/**
 * Default Social Links Settings array.
 *
 * Returns an array of the default social links settings.
 * You can filter this function to change the settings
 * on a per option basis.
 *
 * @uses      apply_filters()
 *
 * @return    array
 *
 * @access    public
 * @since     2.4.0
 */
if ( ! function_exists( 'ot_social_links_settings' ) ) {

	function ot_social_links_settings( $id ) {

		$settings = apply_filters( 'ot_social_links_settings', array(
			array(
				'id'        => 'name',
				'label'     => esc_html__( 'Name', 'uncode-core' ),
				'desc'      => esc_html__( 'Enter the name of the social website.', 'uncode-core' ),
				'std'       => '',
				'type'      => 'text',
				'class'     => 'option-tree-setting-title'
			),
			array(
				'id'        => 'title',
				'label'     => 'Title',
				'desc'      => esc_html__( 'Enter the text shown in the title attribute of the link.', 'uncode-core' ),
				'type'      => 'text'
			),
			array(
				'id'        => 'href',
				'label'     => 'Link',
				'desc'      => sprintf( wp_kses(__( 'Enter a link to the profile or page on the social website. Remember to add the %s part to the front of the link.', 'uncode-core' ), array( 'code' => array() ) ), '<code>http://</code>' ),
				'type'      => 'text',
			)
		), $id );

		return $settings;

	}

}

/**
 * Inserts CSS with field_id markers.
 *
 * Inserts CSS into a dynamic.css file, placing it between
 * BEGIN and END field_id markers. Replaces existing marked info,
 * but still retains surrounding data.
 *
 * @param     string  $field_id The CSS option field ID.
 * @param     array   $options The current option_tree array.
 * @return    bool    True on write success, false on failure.
 *
 * @access    public
 * @since     1.1.8
 * @updated   2.5.3
 */
if ( ! function_exists( 'ot_insert_css_with_markers' ) ) {

	function ot_insert_css_with_markers( $field_id = '', $insertion = '', $meta = false ) {

		/* missing $field_id or $insertion exit early */
		if ( '' == $field_id || '' == $insertion )
			return;

		/* path to the dynamic.css file */
		$filepath = get_stylesheet_directory() . '/dynamic.css';
		if ( is_multisite() ) {
			$multisite_filepath = get_stylesheet_directory() . '/dynamic-' . get_current_blog_id() . '.css';
			if ( file_exists( $multisite_filepath ) ) {
				$filepath = $multisite_filepath;
			}
		}

		/* allow filter on path */
		$filepath = apply_filters( 'css_option_file_path', $filepath, $field_id );

		/* grab a copy of the paths array */
		$ot_css_file_paths = get_option( 'ot_css_file_paths', array() );
		if ( is_multisite() ) {
			$ot_css_file_paths = get_blog_option( get_current_blog_id(), 'ot_css_file_paths', $ot_css_file_paths );
		}

		/* set the path for this field */
		$ot_css_file_paths[$field_id] = $filepath;

		/* update the paths */
		if ( is_multisite() ) {
			update_blog_option( get_current_blog_id(), 'ot_css_file_paths', $ot_css_file_paths );
		} else {
			update_option( 'ot_css_file_paths', $ot_css_file_paths );
		}

		/* insert CSS into file */
		if ( file_exists( $filepath ) ) {

			$insertion   = ot_normalize_css( $insertion );
			$regex       = "/{{([a-zA-Z0-9\_\-\#\|\=]+)}}/";
			$marker      = $field_id;

			/* Match custom CSS */
			preg_match_all( $regex, $insertion, $matches );

			/* Loop through CSS */
			foreach( $matches[0] as $option ) {

				$value        = '';
				$option_array = explode( '|', str_replace( array( '{{', '}}' ), '', $option ) );
				$option_id    = isset( $option_array[0] ) ? $option_array[0] : '';
				$option_key   = isset( $option_array[1] ) ? $option_array[1] : '';
				$option_type  = ot_get_option_type_by_id( $option_id );
				$fallback     = '';

				// Get the meta array value
				if ( $meta ) {
					global $post;

					$value = get_post_meta( $post->ID, $option_id, true );

				// Get the options array value
				} else {

					$options = get_option( ot_options_id() );

					if ( isset( $options[$option_id] ) ) {

						$value = $options[$option_id];

					}

				}

				// This in an array of values
				if ( is_array( $value ) ) {

					if ( empty( $option_key ) ) {

						// Measurement
						if ( $option_type == 'measurement' ) {

							// Set $value with measurement properties
							if ( isset( $value[0] ) && isset( $value[1] ) )
								$value = $value[0].$value[1];

						// Border
						} else if ( $option_type == 'border' ) {
							$border = array();

							$unit = ! empty( $value['unit'] ) ? $value['unit'] : 'px';

							if ( ! empty( $value['width'] ) )
								$border[] = $value['width'].$unit;

							if ( ! empty( $value['style'] ) )
								$border[] = $value['style'];

							if ( ! empty( $value['color'] ) )
								$border[] = $value['color'];

							/* set $value with border properties or empty string */
							$value = ! empty( $border ) ? implode( ' ', $border ) : '';

						// Box Shadow
						} else if ( $option_type == 'box-shadow' ) {

							/* set $value with box-shadow properties or empty string */
							$value = ! empty( $value ) ? implode( ' ', $value ) : '';

						// Background
						} else if ( $option_type == 'background' ) {
							$bg = array();

							if ( ! empty( $value['background-color'] ) )
								$bg[] = $value['background-color'];

							if ( ! empty( $value['background-image'] ) ) {

								// If an attachment ID is stored here fetch its URL and replace the value
								if ( wp_attachment_is_image( $value['background-image'] ) ) {

									$attachment_data = wp_get_attachment_image_src( $value['background-image'], 'original' );

									// Check for attachment data
									if ( $attachment_data ) {

										$value['background-image'] = $attachment_data[0];

									}

								}

								$bg[] = 'url("' . $value['background-image'] . '")';

							}

							if ( ! empty( $value['background-repeat'] ) )
								$bg[] = $value['background-repeat'];

							if ( ! empty( $value['background-attachment'] ) )
								$bg[] = $value['background-attachment'];

							if ( ! empty( $value['background-position'] ) )
								$bg[] = $value['background-position'];

							if ( ! empty( $value['background-size'] ) )
								$size = $value['background-size'];

							// Set $value with background properties or empty string
							$value = ! empty( $bg ) ? 'background: ' . implode( " ", $bg ) . ';' : '';

							if ( isset( $size ) ) {
								if ( ! empty( $bg ) ) {
									$value.= apply_filters( 'ot_insert_css_with_markers_bg_size_white_space', "\n\x20\x20", $option_id );
								}
								$value.= "background-size: $size;";
							}

						}

					} else {

						$value = $value[$option_key];

					}

				}

				// If an attachment ID is stored here fetch its URL and replace the value
				if ( $option_type == 'upload' && wp_attachment_is_image( $value ) ) {

					$attachment_data = wp_get_attachment_image_src( $value, 'original' );

					// Check for attachment data
					if ( $attachment_data ) {

						$value = $attachment_data[0];

					}

				}

				// Attempt to fallback when `$value` is empty
				if ( empty( $value ) ) {

					// We're trying to access a single array key
					if ( ! empty( $option_key ) ) {

						// Link Color `inherit`
						if ( $option_type == 'link-color' ) {
							$fallback = 'inherit';
						}

					} else {

						// Border
						if ( $option_type == 'border' ) {
							$fallback = 'inherit';
						}

						// Box Shadow
						if ( $option_type == 'box-shadow' ) {
							$fallback = 'none';
						}

						// Colorpicker
						if ( $option_type == 'colorpicker' ) {
							$fallback = 'inherit';
						}

						// Gradientpicker
						if ( $option_type == 'gradientpicker' ) {
							$fallback = 'inherit';
						}

						// Colorpicker Opacity
						if ( $option_type == 'colorpicker-opacity' ) {
							$fallback = 'inherit';
						}

					}

					/**
					 * Filter the `dynamic.css` fallback value.
					 *
					 * @since 2.5.3
					 *
					 * @param string $fallback The default CSS fallback value.
					 * @param string $option_id The option ID.
					 * @param string $option_type The option type.
					 * @param string $option_key The option array key.
					 */
					$fallback = apply_filters( 'ot_insert_css_with_markers_fallback', $fallback, $option_id, $option_type, $option_key );

				}

				// Let's fallback!
				if ( ! empty( $fallback ) ) {
					$value = $fallback;
				}

				// Filter the CSS
				$value = apply_filters( 'ot_insert_css_with_markers_value', $value, $option_id );

				// Insert CSS, even if the value is empty
				$insertion = stripslashes( str_replace( $option, $value, $insertion ) );

			}

			// Can't write to the file so we error out
			if ( ! is_writable( $filepath ) ) {
				add_settings_error( 'option-tree', 'dynamic_css', sprintf( wp_kses(__( 'Unable to write to file %s.', 'uncode-core' ), array( 'code' => array() ) ), '<code>' . $filepath . '</code>' ), 'error' );
				return false;
			}

			// Create array from the lines of code
			$markerdata = explode( "\n", implode( '', file( $filepath ) ) );

			// Can't write to the file return false
			if ( ! $f = ot_file_open( $filepath, 'w' ) ) {
				return false;
			}

			$searching = true;
			$foundit = false;

			// Has array of lines
			if ( ! empty( $markerdata ) ) {

				// Foreach line of code
				foreach( $markerdata as $n => $markerline ) {

					// Found begining of marker, set $searching to false
					if ( $markerline == "/* BEGIN {$marker} */" )
						$searching = false;

					// Keep searching each line of CSS
					if ( $searching == true ) {
						if ( $n + 1 < count( $markerdata ) )
							ot_file_write( $f, "{$markerline}\n" );
						else
							ot_file_write( $f, "{$markerline}" );
					}

					// Found end marker write code
					if ( $markerline == "/* END {$marker} */" ) {
						ot_file_write( $f, "/* BEGIN {$marker} */\n" );
						ot_file_write( $f, "{$insertion}\n" );
						ot_file_write( $f, "/* END {$marker} */\n" );
						$searching = true;
						$foundit = true;
					}

				}

			}

			// Nothing inserted, write code. DO IT, DO IT!
			if ( ! $foundit ) {
				ot_file_write( $f, "/* BEGIN {$marker} */\n" );
				ot_file_write( $f, "{$insertion}\n" );
				ot_file_write( $f, "/* END {$marker} */\n" );
			}

			// Close file
			ot_file_close( $f );
			return true;
		}

		return false;

	}

}

/**
 * Remove old CSS.
 *
 * Removes CSS when the textarea is empty, but still retains surrounding styles.
 *
 * @param     string  $field_id The CSS option field ID.
 * @return    bool    True on write success, false on failure.
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_remove_old_css' ) ) {

	function ot_remove_old_css( $field_id = '' ) {

		/* missing $field_id string */
		if ( '' == $field_id )
			return false;

		/* path to the dynamic.css file */
		$filepath = get_stylesheet_directory() . '/dynamic.css';

		/* allow filter on path */
		$filepath = apply_filters( 'css_option_file_path', $filepath, $field_id );

		/* remove CSS from file */
		if ( is_writeable( $filepath ) ) {

			/* get each line in the file */
			$markerdata = explode( "\n", implode( '', file( $filepath ) ) );

			/* can't write to the file return false */
			if ( ! $f = ot_file_open( $filepath, 'w' ) )
				return false;

			$searching = true;

			/* has array of lines */
			if ( ! empty( $markerdata ) ) {

				/* foreach line of code */
				foreach ( $markerdata as $n => $markerline ) {

					/* found begining of marker, set $searching to false  */
					if ( $markerline == "/* BEGIN {$field_id} */" )
						$searching = false;

					/* $searching is true, keep rewrite each line of CSS  */
					if ( $searching == true ) {
						if ( $n + 1 < count( $markerdata ) )
							ot_file_write( $f, "{$markerline}\n" );
						else
							ot_file_write( $f, "{$markerline}" );
					}

					/* found end marker delete old CSS */
					if ( $markerline == "/* END {$field_id} */" ) {
						ot_file_write( $f, "" );
						$searching = true;
					}

				}

			}

			/* close file */
			ot_file_close( $f );
			return true;

		}

		return false;

	}

}

/**
 * Normalize CSS
 *
 * Normalize & Convert all line-endings to UNIX format.
 *
 * @param     string    $css
 * @return    string
 *
 * @access    public
 * @since     1.1.8
 * @updated   2.0
 */
if ( ! function_exists( 'ot_normalize_css' ) ) {

	function ot_normalize_css( $css ) {

		/* Normalize & Convert */
		$css = str_replace( "\r\n", "\n", $css );
		$css = str_replace( "\r", "\n", $css );

		/* Don't allow out-of-control blank lines */
		$css = preg_replace( "/\n{2,}/", "\n\n", $css );

		return $css;
	}

}

/**
 * Helper function to loop over the option types.
 *
 * @param    array    $type The current option type.
 *
 * @return   string
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_loop_through_option_types' ) ) {

	function ot_loop_through_option_types( $type = '', $child = false ) {

		$content = '';
		$types = ot_option_types_array();

		if ( $child )
			unset($types['list-item']);

		foreach( $types as $key => $value )
			$content.= '<option value="' . $key . '" ' . selected( $type, $key, false ) . '>'  . $value . '</option>';

		return $content;

	}

}

/**
 * Helper function to loop over choices.
 *
 * @param    string     $name The form element name.
 * @param    array      $choices The array of choices.
 *
 * @return   string
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_loop_through_choices' ) ) {

	function ot_loop_through_choices( $name, $choices = array() ) {

		$content = '';

		foreach( (array) $choices as $key => $choice )
			$content.= '<li class="ui-state-default list-choice">' . ot_choices_view( $name, $key, $choice ) . '</li>';

		return $content;
	}

}

/**
 * Helper function to loop over sub settings.
 *
 * @param    string     $name The form element name.
 * @param    array      $settings The array of settings.
 *
 * @return   string
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_loop_through_sub_settings' ) ) {

	function ot_loop_through_sub_settings( $name, $settings = array() ) {

		$content = '';

		foreach( $settings as $key => $setting )
			$content.= '<li class="ui-state-default list-sub-setting">' . ot_settings_view( $name, $key, $setting ) . '</li>';

		return $content;
	}

}

/**
 * Helper function to display sections.
 *
 * This function is used in AJAX to add a new section
 * and when section have already been added and saved.
 *
 * @param    int      $key The array key for the current element.
 * @param    array    An array of values for the current section.
 *
 * @return   void
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_sections_view' ) ) {

	function ot_sections_view( $name, $key, $section = array() ) {

		return '
		<div class="option-tree-setting is-section">
			<div class="open">' . ( isset( $section['title'] ) ? esc_attr( $section['title'] ) : 'Section ' . ( $key + 1 ) ) . '</div>
			<div class="button-section">
				<a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . esc_html__( 'edit', 'uncode-core' ) . '">
					<span class="icon ot-icon-pencil"></span>' . esc_html__( 'Edit', 'uncode-core' ) . '
				</a>
				<a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="' . esc_html__( 'Delete', 'uncode-core' ) . '">
					<span class="icon ot-icon-trash-o"></span>' . esc_html__( 'Delete', 'uncode-core' ) . '
				</a>
			</div>
			<div class="option-tree-setting-body">
				<div class="format-settings">
					<div class="format-setting type-text">
						<div class="description">' . esc_html__( '<strong>Section Title</strong>: Displayed as a menu item on the Theme Options page.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][title]" value="' . ( isset( $section['title'] ) ? esc_attr( $section['title'] ) : '' ) . '" class="widefat option-tree-ui-input option-tree-setting-title section-title" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text">
						<div class="description">' . esc_html__( '<strong>Section ID</strong>: A unique lower case alphanumeric string, underscores allowed.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][id]" value="' . ( isset( $section['id'] ) ? esc_attr( $section['id'] ) : '' ) . '" class="widefat option-tree-ui-input section-id" autocomplete="off" />
						</div>
					</div>
				</div>
			</div>
		</div>';

	}

}

/**
 * Helper function to display settings.
 *
 * This function is used in AJAX to add a new setting
 * and when settings have already been added and saved.
 *
 * @param    int      $key The array key for the current element.
 * @param    array    An array of values for the current section.
 *
 * @return   void
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_settings_view' ) ) {

	function ot_settings_view( $name, $key, $setting = array() ) {

		$child = ( strpos( $name, '][settings]') !== false ) ? true : false;
		$type = isset( $setting['type'] ) ? $setting['type'] : '';
		$std = isset( $setting['std'] ) ? $setting['std'] : '';
		$operator = isset( $setting['operator'] ) ? esc_attr( $setting['operator'] ) : 'and';

		// Serialize the standard value just incase
		if ( is_array( $std ) ) {
			$std = maybe_serialize( $std );
		}

		if ( in_array( $type, array( 'css', 'javascript', 'textarea', 'textarea-simple' ) ) ) {
			$std_form_element = '<textarea class="textarea" rows="10" cols="40" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][std]">' . esc_html( $std ) . '</textarea>';
		} else {
			$std_form_element = '<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][std]" value="' . esc_attr( $std ) . '" class="widefat option-tree-ui-input" autocomplete="off" />';
		}

		return '
		<div class="option-tree-setting">
			<div class="open">' . ( isset( $setting['label'] ) ? esc_attr( $setting['label'] ) : 'Setting ' . ( $key + 1 ) ) . '</div>
			<div class="button-section">
				<a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . esc_html__( 'Edit', 'uncode-core' ) . '">
					<span class="icon ot-icon-pencil"></span>' . esc_html__( 'Edit', 'uncode-core' ) . '
				</a>
				<a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="' . esc_html__( 'Delete', 'uncode-core' ) . '">
					<span class="icon ot-icon-trash-o"></span>' . esc_html__( 'Delete', 'uncode-core' ) . '
				</a>
			</div>
			<div class="option-tree-setting-body">
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>Label</strong>: Displayed as the label of a form element on the Theme Options page.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][label]" value="' . ( isset( $setting['label'] ) ? esc_attr( $setting['label'] ) : '' ) . '" class="widefat option-tree-ui-input option-tree-setting-title" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>ID</strong>: A unique lower case alphanumeric string, underscores allowed.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][id]" value="' . ( isset( $setting['id'] ) ? esc_attr( $setting['id'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-select wide-desc">
						<div class="description">' . esc_html__( '<strong>Type</strong>: Choose one of the available option types from the dropdown.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<select name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][type]" value="' . esc_attr( $type ) . '" class="option-tree-ui-select">
							' . ot_loop_through_option_types( $type, $child ) . '

							</select>
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-textarea wide-desc">
						<div class="description">' . esc_html__( '<strong>Description</strong>: Enter a detailed description for the users to read on the Theme Options page, HTML is allowed. This is also where you enter content for both the Textblock & Textblock Titled option types.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<textarea class="textarea" rows="10" cols="40" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][desc]">' . ( isset( $setting['desc'] ) ? esc_html( $setting['desc'] ) : '' ) . '</textarea>
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-textblock wide-desc">
						<div class="description">' . esc_html__( '<strong>Choices</strong>: This will only affect the following option types: Checkbox, Radio, Select & Select Image.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<ul class="option-tree-setting-wrap option-tree-sortable" data-name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . ']">
								' . ( isset( $setting['choices'] ) ? ot_loop_through_choices( $name . '[' . $key . ']', $setting['choices'] ) : '' ) . '
							</ul>
							<a href="javascript:void(0);" class="option-tree-choice-add option-tree-ui-button button hug-left">' . esc_html__( 'Add Choice', 'uncode-core' ) . '</a>
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-textblock wide-desc">
						<div class="description">' . esc_html__( '<strong>Settings</strong>: This will only affect the List Item option type.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<ul class="option-tree-setting-wrap option-tree-sortable" data-name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . ']">
								' . ( isset( $setting['settings'] ) ? ot_loop_through_sub_settings( $name . '[' . $key . '][settings]', $setting['settings'] ) : '' ) . '
							</ul>
							<a href="javascript:void(0);" class="option-tree-list-item-setting-add option-tree-ui-button button hug-left">' . esc_html__( 'Add Setting', 'uncode-core' ) . '</a>
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>Standard</strong>: Setting the standard value for your option only works for some option types. Read the <code>OptionTree->Documentation</code> for more information on which ones.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							' . $std_form_element . '
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>Rows</strong>: Enter a numeric value for the number of rows in your textarea. This will only affect the following option types: CSS, Textarea, & Textarea Simple.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][rows]" value="' . ( isset( $setting['rows'] ) ? esc_attr( $setting['rows'] ) : '' ) . '" class="widefat option-tree-ui-input" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>Post Type</strong>: Add a comma separated list of post type like \'post,page\'. This will only affect the following option types: Custom Post Type Checkbox, & Custom Post Type Select.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][post_type]" value="' . ( isset( $setting['post_type'] ) ? esc_attr( $setting['post_type'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>Taxonomy</strong>: Add a comma separated list of any registered taxonomy like \'category,post_tag\'. This will only affect the following option types: Taxonomy Checkbox, & Taxonomy Select.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][taxonomy]" value="' . ( isset( $setting['taxonomy'] ) ? esc_attr( $setting['taxonomy'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>Min, Max, & Step</strong>: Add a comma separated list of options in the following format <code>0,100,1</code> (slide from <code>0-100</code> in intervals of <code>1</code>). The three values represent the minimum, maximum, and step options and will only affect the Numeric Slider option type.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][min_max_step]" value="' . ( isset( $setting['min_max_step'] ) ? esc_attr( $setting['min_max_step'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . esc_html__( '<strong>CSS Class</strong>: Add and optional class to this option type.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][class]" value="' . ( isset( $setting['class'] ) ? esc_attr( $setting['class'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text wide-desc">
						<div class="description">' . sprintf( wp_kses(__( '<strong>Condition</strong>: Add a comma separated list (no spaces) of conditions in which the field will be visible, leave this setting empty to always show the field. In these examples, <code>value</code> is a placeholder for your condition, which can be in the form of %s.', 'uncode-core' ), array( 'code' => array(), 'strong' => array() ) ), '<code>field_id:is(value)</code>, <code>field_id:not(value)</code>, <code>field_id:contains(value)</code>, <code>field_id:less_than(value)</code>, <code>field_id:less_than_or_equal_to(value)</code>, <code>field_id:greater_than(value)</code>, or <code>field_id:greater_than_or_equal_to(value)</code>' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][condition]" value="' . ( isset( $setting['condition'] ) ? esc_attr( $setting['condition'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-select wide-desc">
						<div class="description">' . esc_html__( '<strong>Operator</strong>: Choose the logical operator to compute the result of the conditions.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<select name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][operator]" value="' . $operator . '" class="option-tree-ui-select">
								<option value="and" ' . selected( $operator, 'and', false ) . '>' . esc_html__( 'and', 'uncode-core' ) . '</option>
								<option value="or" ' . selected( $operator, 'or', false ) . '>' . esc_html__( 'or', 'uncode-core' ) . '</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
		' . ( ! $child ? '<input type="hidden" class="hidden-section" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][section]" value="' . ( isset( $setting['section'] ) ? esc_attr( $setting['section'] ) : '' ) . '" />' : '' );

	}

}

/**
 * Helper function to display setting choices.
 *
 * This function is used in AJAX to add a new choice
 * and when choices have already been added and saved.
 *
 * @param    string   $name The form element name.
 * @param    array    $key The array key for the current element.
 * @param    array    An array of values for the current choice.
 *
 * @return   void
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_choices_view' ) ) {

	function ot_choices_view( $name, $key, $choice = array() ) {

		return '
		<div class="option-tree-setting">
			<div class="open">' . ( isset( $choice['label'] ) ? esc_attr( $choice['label'] ) : 'Choice ' . ( $key + 1 ) ) . '</div>
			<div class="button-section">
				<a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . esc_html__( 'Edit', 'uncode-core' ) . '">
					<span class="icon ot-icon-pencil"></span>' . esc_html__( 'Edit', 'uncode-core' ) . '
				</a>
				<a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="' . esc_html__( 'Delete', 'uncode-core' ) . '">
					<span class="icon ot-icon-trash-o"></span>' . esc_html__( 'Delete', 'uncode-core' ) . '
				</a>
			</div>
			<div class="option-tree-setting-body">
				<div class="format-settings">
					<div class="format-setting-label">
						<h5>' . esc_html__( 'Label', 'uncode-core' ) . '</h5>
					</div>
					<div class="format-setting type-text wide-desc">
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[choices][' . esc_attr( $key ) . '][label]" value="' . ( isset( $choice['label'] ) ? esc_attr( $choice['label'] ) : '' ) . '" class="widefat option-tree-ui-input option-tree-setting-title" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting-label">
						<h5>' . esc_html__( 'Value', 'uncode-core' ) . '</h5>
					</div>
					<div class="format-setting type-text wide-desc">
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[choices][' . esc_attr( $key ) . '][value]" value="' . ( isset( $choice['value'] ) ? esc_attr( $choice['value'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting-label">
						<h5>' . esc_html__( 'Image Source (Radio Image only)', 'uncode-core' ) . '</h5>
					</div>
					<div class="format-setting type-text wide-desc">
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[choices][' . esc_attr( $key ) . '][src]" value="' . ( isset( $choice['src'] ) ? esc_attr( $choice['src'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
		</div>';

	}

}

/**
 * Helper function to display sections.
 *
 * This function is used in AJAX to add a new section
 * and when section have already been added and saved.
 *
 * @param    int      $key The array key for the current element.
 * @param    array    An array of values for the current section.
 *
 * @return   void
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_contextual_help_view' ) ) {

	function ot_contextual_help_view( $name, $key, $content = array() ) {

		return '
		<div class="option-tree-setting">
			<div class="open">' . ( isset( $content['title'] ) ? esc_attr( $content['title'] ) : 'Content ' . ( $key + 1 ) ) . '</div>
			<div class="button-section">
				<a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . esc_html__( 'Edit', 'uncode-core' ) . '">
					<span class="icon ot-icon-pencil"></span>' . esc_html__( 'Edit', 'uncode-core' ) . '
				</a>
				<a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="' . esc_html__( 'Delete', 'uncode-core' ) . '">
					<span class="icon ot-icon-trash-o"></span>' . esc_html__( 'Delete', 'uncode-core' ) . '
				</a>
			</div>
			<div class="option-tree-setting-body">
				<div class="format-settings">
					<div class="format-setting type-text no-desc">
						<div class="description">' . esc_html__( '<strong>Title</strong>: Displayed as a contextual help menu item on the Theme Options page.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][title]" value="' . ( isset( $content['title'] ) ? esc_attr( $content['title'] ) : '' ) . '" class="widefat option-tree-ui-input option-tree-setting-title" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-text no-desc">
						<div class="description">' . esc_html__( '<strong>ID</strong>: A unique lower case alphanumeric string, underscores allowed.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<input type="text" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][id]" value="' . ( isset( $content['id'] ) ? esc_attr( $content['id'] ) : '' ) . '" class="widefat option-tree-ui-input" autocomplete="off" />
						</div>
					</div>
				</div>
				<div class="format-settings">
					<div class="format-setting type-textarea no-desc">
						<div class="description">' . esc_html__( '<strong>Content</strong>: Enter the HTML content about this contextual help item displayed on the Theme Option page for end users to read.', 'uncode-core' ) . '</div>
						<div class="format-setting-inner">
							<textarea class="textarea" rows="15" cols="40" name="' . esc_attr( $name ) . '[' . esc_attr( $key ) . '][content]">' . ( isset( $content['content'] ) ? esc_html( $content['content'] ) : '' ) . '</textarea>
						</div>
					</div>
				</div>
			</div>
		</div>';

	}

}

/**
 * Helper function to display sections.
 *
 * @param     string      $key
 * @param     string      $data
 * @param     string      $active_layout
 *
 * @return    void
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_layout_view' ) ) {

	function ot_layout_view( $key, $data = '', $active_layout = '' ) {

		return '
		<div class="option-tree-setting">
			<div class="open">' . ( isset( $key ) ? esc_attr( $key ) : esc_html__( 'Layout', 'uncode-core' ) ) . '</div>
			<div class="button-section">
				<a href="javascript:void(0);" class="option-tree-layout-activate option-tree-ui-button button left-item' . ( $active_layout == $key ? ' active' : '' ) . '" title="' . esc_html__( 'Activate', 'uncode-core' ) . '">
					<span class="icon ot-icon-square-o"></span>' . esc_html__( 'Activate', 'uncode-core' ) . '
				</a>
				<a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="'. esc_html__( 'Delete', 'uncode-core' ) . '">
					<span class="icon ot-icon-trash-o"></span>' . esc_html__( 'Delete', 'uncode-core' ) . '
				</a>
			</div>
			<input type="hidden" name="' . ot_layouts_id() . '[' . esc_attr( $key ) . ']" value="' . $data . '" />
		</div>';

	}

}

/**
 * Helper function to display list items.
 *
 * This function is used in AJAX to add a new list items
 * and when they have already been added and saved.
 *
 * @param     string    $name The form field name.
 * @param     int       $key The array key for the current element.
 * @param     array     An array of values for the current list item.
 *
 * @return   void
 *
 * @access   public
 * @since    2.0
 */
if ( ! function_exists( 'ot_list_item_view' ) ) {

	function ot_list_item_view( $name, $key, $list_item = array(), $post_id = 0, $get_option = '', $settings = array(), $type = '' ) {

		/* required title setting */
		$required_setting = array(
			array(
				'id'        => 'title',
				'label'     => esc_html__( 'Title', 'uncode-core' ),
				'desc'      => '',
				'std'       => '',
				'type'      => 'text',
				'rows'      => '',
				'class'     => 'option-tree-setting-title',
				'post_type' => '',
				'choices'   => array()
			)
		);

		/* load the old filterable slider settings */
		if ( 'slider' == $type ) {

			$settings = ot_slider_settings( $name );

		}

		/* if no settings array load the filterable list item settings */
		if ( empty( $settings ) ) {

			$settings = ot_list_item_settings( $name );

		}

		/* merge the two settings array */
		$settings = array_merge( $required_setting, $settings );

		echo '
		<div class="option-tree-setting">
			<div class="open">' . ( isset( $list_item['title'] ) ? esc_attr( $list_item['title'] ) : '' ) . '</div>
			<div class="button-section">
				<a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . esc_html__( 'Edit', 'uncode-core' ) . '">
					<span class="icon ot-icon-pencil"></span>' . esc_html__( 'Edit', 'uncode-core' ) . '
				</a>
				<a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="' . esc_html__( 'Delete', 'uncode-core' ) . '">
					<span class="icon ot-icon-trash-o"></span>' . esc_html__( 'Delete', 'uncode-core' ) . '
				</a>
			</div>
			<div class="option-tree-setting-body">';

			foreach( $settings as $field ) {

				// Set field value
				$field_value = isset( $list_item[$field['id']] ) ? $list_item[$field['id']] : '';

				/* set default to standard value */
				if ( isset( $field['std'] ) ) {
					$field_value = ot_filter_std_value( $field_value, $field['std'] );
				}

				// filter the title label and description
				if ( $field['id'] == 'title' ) {

					// filter the label
					$field['label'] = apply_filters( 'ot_list_item_title_label', $field['label'], $name );

					// filter the description
					$field['desc'] = apply_filters( 'ot_list_item_title_desc', $field['desc'], $name );

				}

				/* make life easier */
				$_field_name = $get_option ? $get_option . '[' . $name . ']' : $name;

				/* build the arguments array */
				$_args = array(
					'type'              => $field['type'],
					'field_id'          => $name . '_' . $field['id'] . '_' . $key,
					'field_name'        => $_field_name . '[' . $key . '][' . $field['id'] . ']',
					'field_value'       => $field_value,
					'field_desc'        => isset( $field['desc'] ) ? $field['desc'] : '',
					'field_std'         => isset( $field['std'] ) ? $field['std'] : '',
					'field_rows'        => isset( $field['rows'] ) ? $field['rows'] : 10,
					'field_post_type'   => isset( $field['post_type'] ) && ! empty( $field['post_type'] ) ? $field['post_type'] : 'post',
					'field_taxonomy'    => isset( $field['taxonomy'] ) && ! empty( $field['taxonomy'] ) ? $field['taxonomy'] : 'category',
					'field_min_max_step'=> isset( $field['min_max_step'] ) && ! empty( $field['min_max_step'] ) ? $field['min_max_step'] : '0,100,1',
					'field_class'       => isset( $field['class'] ) ? $field['class'] : '',
					'field_condition'   => isset( $field['condition'] ) ? $field['condition'] : '',
					'field_operator'    => isset( $field['operator'] ) ? $field['operator'] : 'and',
					'field_choices'     => isset( $field['choices'] ) && ! empty( $field['choices'] ) ? $field['choices'] : array(),
					'field_settings'    => isset( $field['settings'] ) && ! empty( $field['settings'] ) ? $field['settings'] : array(),
					'post_id'           => $post_id,
					'get_option'        => $get_option
				);

				$conditions = '';

				/* setup the conditions */
				if ( isset( $field['condition'] ) && ! empty( $field['condition'] ) ) {

					/* doing magic on the conditions so they work in a list item */
					$conditionals = explode( ',', $field['condition'] );
					foreach( $conditionals as $condition ) {
						$parts = explode( ':', $condition );
						if ( isset( $parts[0] ) ) {
							$field['condition'] = str_replace( $condition, $name . '_' . $parts[0] . '_' . $key . ':' . $parts[1], $field['condition'] );
						}
					}

					$conditions = ' data-condition="' . $field['condition'] . '"';
					$conditions.= isset( $field['operator'] ) && in_array( $field['operator'], array( 'and', 'AND', 'or', 'OR' ) ) ? ' data-operator="' . $field['operator'] . '"' : '';

				}

				// Build the setting CSS class
				if ( ! empty( $_args['field_class'] ) ) {

					$classes = explode( ' ', $_args['field_class'] );

					foreach( $classes as $_key => $value ) {

						$classes[$_key] = $value . '-wrap';

					}

					$class = 'format-settings ' . implode( ' ', $classes );

				} else {

					$class = 'format-settings';

				}

				/* option label */
				echo '<div id="setting_' . $_args['field_id'] . '" class="' . $class . '"' . $conditions . '>';

					/* don't show title with textblocks */
					if ( $_args['type'] != 'textblock' && ! empty( $field['label'] ) ) {
						echo '<div class="format-setting-label">';
							echo '<h3 class="label">' . esc_attr( $field['label'] ) . '</h3>';
						echo '</div>';
					}

					/* only allow simple textarea inside a list-item due to known DOM issues with wp_editor() */
					if ( apply_filters( 'ot_override_forced_textarea_simple', false, $field['id'] ) == false && $_args['type'] == 'textarea' )
						$_args['type'] = 'textarea-simple';

					/* option body, list-item is not allowed inside another list-item */
					if ( $_args['type'] !== 'list-item' && $_args['type'] !== 'slider' ) {
						echo ot_display_by_type( $_args );
					}

				echo '</div>';

			}

			echo '</div>';

		echo '</div>';

	}

}

/**
 * Helper function to display social links.
 *
 * This function is used in AJAX to add a new list items
 * and when they have already been added and saved.
 *
 * @param     string    $name The form field name.
 * @param     int       $key The array key for the current element.
 * @param     array     An array of values for the current list item.
 *
 * @return    void
 *
 * @access    public
 * @since     2.4.0
 */
if ( ! function_exists( 'ot_social_links_view' ) ) {

	function ot_social_links_view( $name, $key, $list_item = array(), $post_id = 0, $get_option = '', $settings = array(), $type = '' ) {

		/* if no settings array load the filterable social links settings */
		if ( empty( $settings ) ) {

			$settings = ot_social_links_settings( $name );

		}

		echo '
		<div class="option-tree-setting">
			<div class="open">' . ( isset( $list_item['name'] ) ? esc_attr( $list_item['name'] ) : '' ) . '</div>
			<div class="button-section">
				<a href="javascript:void(0);" class="option-tree-setting-edit option-tree-ui-button button left-item" title="' . esc_html__( 'Edit', 'uncode-core' ) . '">
					<span class="icon ot-icon-pencil"></span>' . esc_html__( 'Edit', 'uncode-core' ) . '
				</a>
				<a href="javascript:void(0);" class="option-tree-setting-remove option-tree-ui-button button button-secondary light right-item" title="' . esc_html__( 'Delete', 'uncode-core' ) . '">
					<span class="icon ot-icon-trash-o"></span>' . esc_html__( 'Delete', 'uncode-core' ) . '
				</a>
			</div>
			<div class="option-tree-setting-body">';

			foreach( $settings as $field ) {

				// Set field value
				$field_value = isset( $list_item[$field['id']] ) ? $list_item[$field['id']] : '';

				/* set default to standard value */
				if ( isset( $field['std'] ) ) {
					$field_value = ot_filter_std_value( $field_value, $field['std'] );
				}

				/* make life easier */
				$_field_name = $get_option ? $get_option . '[' . $name . ']' : $name;

				/* build the arguments array */
				$_args = array(
					'type'                => $field['type'],
					'field_id'            => $name . '_' . $field['id'] . '_' . $key,
					'field_name'          => $_field_name . '[' . $key . '][' . $field['id'] . ']',
					'field_value'         => $field_value,
					'field_desc'          => isset( $field['desc'] ) ? $field['desc'] : '',
					'field_std'           => isset( $field['std'] ) ? $field['std'] : '',
					'field_rows'          => isset( $field['rows'] ) ? $field['rows'] : 10,
					'field_post_type'     => isset( $field['post_type'] ) && ! empty( $field['post_type'] ) ? $field['post_type'] : 'post',
					'field_taxonomy'      => isset( $field['taxonomy'] ) && ! empty( $field['taxonomy'] ) ? $field['taxonomy'] : 'category',
					'field_min_max_step'  => isset( $field['min_max_step'] ) && ! empty( $field['min_max_step'] ) ? $field['min_max_step'] : '0,100,1',
					'field_class'         => isset( $field['class'] ) ? $field['class'] : '',
					'field_condition'     => isset( $field['condition'] ) ? $field['condition'] : '',
					'field_operator'      => isset( $field['operator'] ) ? $field['operator'] : 'and',
					'field_choices'       => isset( $field['choices'] ) && ! empty( $field['choices'] ) ? $field['choices'] : array(),
					'field_settings'      => isset( $field['settings'] ) && ! empty( $field['settings'] ) ? $field['settings'] : array(),
					'field_extra_choices' => isset( $field['extra_choices'] ) ? $field['extra_choices'] : array(),
					'post_id'             => $post_id,
					'get_option'          => $get_option
				);

				$conditions = '';

				/* setup the conditions */
				if ( isset( $field['condition'] ) && ! empty( $field['condition'] ) ) {

					/* doing magic on the conditions so they work in a list item */
					$conditionals = explode( ',', $field['condition'] );
					foreach( $conditionals as $condition ) {
						$parts = explode( ':', $condition );
						if ( isset( $parts[0] ) ) {
							$field['condition'] = str_replace( $condition, $name . '_' . $parts[0] . '_' . $key . ':' . $parts[1], $field['condition'] );
						}
					}

					$conditions = ' data-condition="' . $field['condition'] . '"';
					$conditions.= isset( $field['operator'] ) && in_array( $field['operator'], array( 'and', 'AND', 'or', 'OR' ) ) ? ' data-operator="' . $field['operator'] . '"' : '';

				}

				/* option label */
				echo '<div id="setting_' . $_args['field_id'] . '" class="format-settings"' . $conditions . '>';

					/* don't show title with textblocks */
					if ( $_args['type'] != 'textblock' && ! empty( $field['label'] ) ) {
						echo '<div class="format-setting-label">';
							echo '<h3 class="label">' . esc_attr( $field['label'] ) . '</h3>';
						echo '</div>';
					}

					/* only allow simple textarea inside a list-item due to known DOM issues with wp_editor() */
					if ( $_args['type'] == 'textarea' )
						$_args['type'] = 'textarea-simple';

					/* option body, list-item is not allowed inside another list-item */
					if ( $_args['type'] !== 'list-item' && $_args['type'] !== 'slider' && $_args['type'] !== 'social-links' ) {
						echo ot_display_by_type( $_args );
					}

				echo '</div>';

			}

			echo '</div>';

		echo '</div>';

	}

}

/**
 * Helper function to display Theme Options layouts form.
 *
 * @return    string
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_theme_options_layouts_form' ) ) {

	function ot_theme_options_layouts_form( $active = false ) {

		echo '<form method="post" id="option-tree-options-layouts-form">';

			/* form nonce */
			wp_nonce_field( 'option_tree_modify_layouts_form', 'option_tree_modify_layouts_nonce' );

			/* get the saved layouts */
			$layouts = get_option( ot_layouts_id() );

			/* set active layout */
			$active_layout = isset( $layouts['active_layout'] ) ? $layouts['active_layout'] : '';

			if ( is_array( $layouts ) && count( $layouts ) > 1 ) {

				$active_layout = esc_attr( $layouts['active_layout'] );

				echo '<input type="hidden" id="the_current_layout" value="' . $active_layout . '" />';

				echo '<div class="option-tree-active-layout">';

					echo '<select name="' . ot_layouts_id() . '[active_layout]" class="option-tree-ui-select">';

						ksort($layouts);

						foreach( $layouts as $key => $data ) {

							if ( $key == 'active_layout' )
								continue;

							echo '<option' . selected( $key, $active_layout, false ) . ' value="' . esc_attr( $key ) . '">' . esc_attr( $key ) . '</option>';
						}

					echo '</select>';

				echo '</div>';

				foreach( $layouts as $key => $data ) {

					if ( $key == 'active_layout' )
							continue;

					echo '<input type="hidden" name="' . ot_layouts_id() . '[' . $key . ']" value="' . ( isset( $data ) ? $data : '' ) . '" />';

				}

			}

			/* new layout wrapper */
			echo '<div class="option-tree-save-layout' . ( ! empty( $active_layout ) ? ' active-layout' : '' ) . '">';

				/* add new layout */
				echo '<input type="text" name="' . ot_layouts_id() . '[_add_new_layout_]" value="" class="widefat option-tree-ui-input" autocomplete="off" placeholder="' . esc_html__( 'Enter a Layout Name', 'uncode-core' ) . '" />';

				echo '<button type="submit" class="option-tree-ui-button button button-primary save-layout" title="' . esc_html__( 'Save New Layout', 'uncode-core' ) . '">' . esc_html__( 'Save New Layout', 'uncode-core' ) . '</button>';

			echo '</div>';

		echo '</form>';

	}

}

/**
 * Helper function to validate option ID's
 *
 * @param     string      $input The string to sanitize.
 * @return    string
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_sanitize_option_id' ) ) {

	function ot_sanitize_option_id( $input ) {

		return preg_replace( '/[^a-z0-9]/', '_', trim( strtolower( $input ) ) );

	}

}

/**
 * Helper function to validate layout ID's
 *
 * @param     string      $input The string to sanitize.
 * @return    string
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_sanitize_layout_id' ) ) {

	function ot_sanitize_layout_id( $input ) {

		return preg_replace( '/[^a-z0-9]/', '-', trim( strtolower( $input ) ) );

	}

}

/**
 * Convert choices array to string
 *
 * @return    string
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_convert_array_to_string' ) ) {

	function ot_convert_array_to_string( $input ) {

		if ( is_array( $input ) ) {

			foreach( $input as $k => $choice ) {
				$choices[$k] = $choice['value'] . '|' . $choice['label'];

				if ( isset( $choice['src'] ) )
					$choices[$k].= '|' . $choice['src'];

			}

			return implode( ',', $choices );
		}

		return false;
	}
}

/**
 * Convert choices string to array
 *
 * @return    array
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_convert_string_to_array' ) ) {

	function ot_convert_string_to_array( $input ) {

		if ( '' !== $input ) {

			/* empty choices array */
			$choices = array();

			/* exlode the string into an array */
			foreach( explode( ',', $input ) as $k => $choice ) {

				/* if ":" is splitting the string go deeper */
				if ( preg_match( '/\|/', $choice ) ) {
					$split = explode( '|', $choice );
					$choices[$k]['value'] = trim( $split[0] );
					$choices[$k]['label'] = trim( $split[1] );

					/* if radio image there are three values */
					if ( isset( $split[2] ) )
						$choices[$k]['src'] = trim( $split[2] );

				} else {
					$choices[$k]['value'] = trim( $choice );
					$choices[$k]['label'] = trim( $choice );
				}

			}

			/* return a formated choices array */
			return $choices;

		}

		return false;

	}
}

/**
 * Helper function - strpos() with arrays.
 *
 * @param     string    $haystack
 * @param     array     $needles
 * @return    bool
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_strpos_array' ) ) {

	function ot_strpos_array( $haystack, $needles = array() ) {

		foreach( $needles as $needle ) {
			$pos = strpos( $haystack, $needle );
			if ( $pos !== false ) {
				return true;
			}
		}

		return false;
	}

}

/**
 * Helper function - strpos() with arrays.
 *
 * @param     string    $haystack
 * @param     array     $needles
 * @return    bool
 *
 * @access    public
 * @since     2.0
 */
if ( ! function_exists( 'ot_array_keys_exists' ) ) {

	function ot_array_keys_exists( $array, $keys ) {

		foreach($keys as $k) {
			if ( isset($array[$k]) ) {
				return true;
			}
		}

		return false;
	}

}

/**
 * Custom stripslashes from single value or array.
 *
 * @param       mixed   $input
 * @return      mixed
 *
 * @access      public
 * @since       2.0
 */
if ( ! function_exists( 'ot_stripslashes' ) ) {

	function ot_stripslashes( $input ) {

		if ( is_array( $input ) ) {

			foreach( $input as &$val ) {

				if ( is_array( $val ) ) {

					$val = ot_stripslashes( $val );

				} else {

					$val = stripslashes( trim( $val ) );

				}

			}

		} else {

			$input = stripslashes( trim( $input ) );

		}

		return $input;

	}

}

/**
 * Reverse wpautop.
 *
 * @param     string    $string The string to be filtered
 * @return    string
 *
 * @access    public
 * @since     2.0.9
 */
if ( ! function_exists( 'ot_reverse_wpautop' ) ) {

	function ot_reverse_wpautop( $string = '' ) {

		/* return if string is empty */
		if ( trim( $string ) === '' )
			return '';

		/* remove all new lines & <p> tags */
		$string = str_replace( array( "\n", "<p>" ), "", $string );

		/* replace <br /> with \r */
		$string = str_replace( array( "<br />", "<br>", "<br/>" ), "\r", $string );

		/* replace </p> with \r\n */
		$string = str_replace( "</p>", "\r\n", $string );

		/* return clean string */
		return trim( $string );

	}

}

/**
 * Returns an array of elements from start to limit, inclusive.
 *
 * Occasionally zero will be some impossibly large number to
 * the "E" power when creating a range from negative to positive.
 * This function attempts to fix that by setting that number back to "0".
 *
 * @param     string    $start First value of the sequence.
 * @param     string    $limit The sequence is ended upon reaching the limit value.
 * @param     string    $step If a step value is given, it will be used as the increment
 *                      between elements in the sequence. step should be given as a
 *                      positive number. If not specified, step will default to 1.
 * @return    array
 *
 * @access    public
 * @since     2.0.12
 */
function ot_range( $start, $limit, $step = 1 ) {

	if ( $step < 0 )
		$step = 1;

	$range = range( $start, $limit, $step );

	foreach( $range as $k => $v ) {
		if ( strpos( $v, 'E' ) ) {
			$range[$k] = 0;
		}
	}

	return $range;
}

/**
 * Helper function to return encoded strings
 *
 * @return    string
 *
 * @access    public
 * @since     2.0.13
 */
function ot_encode( $value ) {

	$func = 'base64' . '_encode';
	return $func( $value );

}

/**
 * Helper function to return decoded strings
 *
 * @return    string
 *
 * @access    public
 * @since     2.0.13
 */
function ot_decode( $value ) {

	$func = 'base64' . '_decode';
	return $func( $value );

}

/**
 * Helper function to open a file
 *
 * @access    public
 * @since     2.0.13
 */
function ot_file_open( $handle, $mode ) {

	$func = 'f' . 'open';
	return @$func( $handle, $mode );

}

/**
 * Helper function to close a file
 *
 * @access    public
 * @since     2.0.13
 */
function ot_file_close( $handle ) {

	$func = 'f' . 'close';
	return $func( $handle );

}

/**
 * Helper function to write to an open file
 *
 * @access    public
 * @since     2.0.13
 */
function ot_file_write( $handle, $string ) {

	$func = 'f' . 'write';
	return $func( $handle, $string );

}

/**
 * Helper function to filter standard option values.
 *
 * @param     mixed     $value Saved string or array value
 * @param     mixed     $std Standard string or array value
 * @return    mixed     String or array
 *
 * @access    public
 * @since     2.0.15
 */
function ot_filter_std_value( $value = '', $std = '' ) {

	$std = maybe_unserialize( $std );

	if ( is_array( $value ) && is_array( $std ) ) {

		foreach( $value as $k => $v ) {

			if ( '' == $value[$k] && isset( $std[$k] ) ) {

				$value[$k] = $std[$k];

			}

		}

	} else if ( '' == $value && ! empty( $std ) ) {

		$value = $std;

	}

	return $value;

}

/**
 * Helper function to register a WPML string
 *
 * @access    public
 * @since     2.1
 */
function ot_wpml_register_string( $id, $value ) {

  if ( function_exists( 'icl_register_string' ) ) {

    // icl_register_string( 'Theme Options', $id, $value );

  }

}

/**
 * Helper function to unregister a WPML string
 *
 * @access    public
 * @since     2.1
 */
function ot_wpml_unregister_string( $id ) {

	if ( function_exists( 'icl_unregister_string' ) ) {

		icl_unregister_string( 'Theme Options', $id );

	}

}

/**
 * Returns the option type by ID.
 *
 * @param     string    $option_id The option ID
 * @return    string    $settings_id The settings array ID
 * @return    string    The option type.
 *
 * @access    public
 * @since     2.4.2
 */
if ( ! function_exists( 'ot_get_option_type_by_id' ) ) {

	function ot_get_option_type_by_id( $option_id, $settings_id = '' ) {

		if ( empty( $settings_id ) ) {

			$settings_id = ot_settings_id();

		}

		$settings = get_option( $settings_id, array() );

		if ( isset( $settings['settings'] ) ) {

			foreach( $settings['settings'] as $value ) {

				if ( $option_id == $value['id'] && isset( $value['type'] ) ) {

					return $value['type'];

				}

			}

		}

		return false;

	}

}

/**
 * Build an array of potential Theme Options that could share terms
 *
 * @return    array
 *
 * @access    private
 * @since     2.5.4
 */
function _ot_settings_potential_shared_terms() {

	$options      = array();
	$settings     = ot_settings_value();
	$option_types = array(
		'category-checkbox',
		'category-select',
		'tag-checkbox',
		'tag-select',
		'taxonomy-checkbox',
		'taxonomy-select'
	);

	if ( isset( $settings['settings'] ) ) {

		foreach( $settings['settings'] as $value ) {

			if ( isset( $value['type'] ) ) {

				if ( $value['type'] == 'list-item' && isset( $value['settings'] ) ) {

					$saved = ot_get_option( $value['id'] );

					foreach( $value['settings'] as $item ) {

						if ( isset( $value['id'] ) && isset( $item['type'] ) && in_array( $item['type'], $option_types ) ) {
							$sub_options = array();

							foreach( $saved as $sub_key => $sub_value ) {
								if ( isset( $sub_value[$item['id']] ) ) {
									$sub_options[$sub_key] = $sub_value[$item['id']];
								}
							}

							if ( ! empty( $sub_options ) ) {
								$options[] = array(
									'id'       => $item['id'],
									'taxonomy' => $value['taxonomy'],
									'parent'   => $value['id'],
									'value'    => $sub_options
								);
							}
						}

					}

				}

				if ( in_array( $value['type'], $option_types ) ) {
					$saved = ot_get_option( $value['id'] );
					if ( ! empty( $saved ) ) {
						$options[] = array(
							'id'       => $value['id'],
							'taxonomy' => $value['taxonomy'],
							'value'    => $saved
						);
					}
				}

			}

		}

	}

	return $options;

}

/**
 * Build an array of potential Meta Box options that could share terms
 *
 * @return    array
 *
 * @access    private
 * @since     2.5.4
 */
function _ot_meta_box_potential_shared_terms() {
	global $ot_meta_boxes;

	$options      = array();
	$settings     = $ot_meta_boxes;
	$option_types = array(
		'category-checkbox',
		'category-select',
		'tag-checkbox',
		'tag-select',
		'taxonomy-checkbox',
		'taxonomy-select'
	);

	foreach( $settings as $setting ) {

		if ( isset( $setting['fields'] ) ) {

			foreach( $setting['fields'] as $value ) {

				if ( isset( $value['type'] ) ) {

					if ( $value['type'] == 'list-item' && isset( $value['settings'] ) ) {

						$children = array();

						foreach( $value['settings'] as $item ) {

							if ( isset( $value['id'] ) && isset( $item['type'] ) && in_array( $item['type'], $option_types ) ) {

								$children[$value['id']][] = $item['id'];

							}

						}

						if ( ! empty( $children[$value['id']] ) ) {
							$options[] = array(
								'id'       => $value['id'],
								'children' => $children[$value['id']],
								'taxonomy' => $value['taxonomy'],
							);
						}

					}

					if ( in_array( $value['type'], $option_types ) ) {

						$options[] = array(
							'id'       => $value['id'],
							'taxonomy' => $value['taxonomy'],
						);

					}

				}

			}

		}

	}

	return $options;

}

/**
 * Update terms when a term gets split.
 *
 * @param     int     $term_id ID of the formerly shared term.
 * @param     int     $new_term_id ID of the new term created for the $term_taxonomy_id.
 * @param     int     $term_taxonomy_id ID for the term_taxonomy row affected by the split.
 * @param     string  $taxonomy Taxonomy for the split term.
 * @return    void
 *
 * @access    public
 * @since     2.5.4
 */
function ot_split_shared_term( $term_id, $new_term_id, $term_taxonomy_id, $taxonomy ) {

	// Process the Theme Options
	$settings    = _ot_settings_potential_shared_terms();
	$old_options = get_option( ot_options_id(), array() );
	$new_options = $old_options;

	// Process the saved settings
	if ( ! empty( $settings ) && ! empty( $old_options ) ) {

		// Loop over the Theme Options
		foreach( $settings as $option ) {

			if ( ! is_array( $option['taxonomy'] ) ) {
				$option['taxonomy'] = explode( ',', $option['taxonomy'] );
			}

			if ( ! in_array( $taxonomy, $option['taxonomy'] ) ) {
				continue;
			}

			// The option ID was found
			if ( array_key_exists( $option['id'], $old_options ) || ( isset( $option['parent'] ) && array_key_exists( $option['parent'], $old_options ) ) ) {

				// This is a list item, we have to go deeper
				if ( isset( $option['parent'] ) ) {

					// Loop over the array
					foreach( $option['value'] as $key => $value ) {

						// The value is an array of IDs
						if ( is_array( $value ) ) {

							// Loop over the sub array
							foreach( $value as $sub_key => $sub_value ) {

								if ( $sub_value == $term_id ) {

									unset( $new_options[$option['parent']][$key][$option['id']][$sub_key] );
									$new_options[$option['parent']][$key][$option['id']][$new_term_id] = $new_term_id;

								}

							}

						} else if ( $value == $term_id ) {

							unset( $new_options[$option['parent']][$key][$option['id']] );
							$new_options[$option['parent']][$key][$option['id']] = $new_term_id;

						}

					}

				} else {

					// The value is an array of IDs
					if ( is_array( $option['value'] ) ) {

						// Loop over the array
						foreach( $option['value'] as $key => $value ) {

							// It's a single value, just replace it
							if ( $value == $term_id ) {

								unset( $new_options[$option['id']][$key] );
								$new_options[$option['id']][$new_term_id] = $new_term_id;

							}

						}

					// It's a single value, just replace it
					} else if ( $option['value'] == $term_id ) {

						$new_options[$option['id']] = $new_term_id;

					}

				}

			}

		}

	}

	// Options need to be updated
	if ( $old_options !== $new_options ) {
		update_option( ot_options_id(), $new_options );
	}

	// Process the Meta Boxes
	$meta_settings = _ot_meta_box_potential_shared_terms();
	$option_types  = array(
		'category-checkbox',
		'category-select',
		'tag-checkbox',
		'tag-select',
		'taxonomy-checkbox',
		'taxonomy-select'
	);

	if ( ! empty( $meta_settings ) ) {
		$old_meta = array();

		foreach( $meta_settings as $option ) {

			if ( ! is_array( $option['taxonomy'] ) ) {
				$option['taxonomy'] = explode( ',', $option['taxonomy'] );
			}

			if ( ! in_array( $taxonomy, $option['taxonomy'] ) ) {
				continue;
			}

			if ( isset( $option['children'] ) ) {
				$post_ids = get_posts( array(
					'fields'     => 'ids',
					'meta_key'   => $option['id'],
				) );

				if ( $post_ids ) {

					foreach( $post_ids as $post_id ) {

						// Get the meta
						$old_meta = get_post_meta( $post_id, $option['id'], true );
						$new_meta = $old_meta;

						// Has a saved value
						if ( ! empty( $old_meta ) && is_array( $old_meta ) ) {

							// Loop over the array
							foreach( $old_meta as $key => $value ) {

								foreach( $value as $sub_key => $sub_value ) {

									if ( in_array( $sub_key, $option['children'] ) ) {

										// The value is an array of IDs
										if ( is_array( $sub_value ) ) {

											// Loop over the array
											foreach( $sub_value as $sub_sub_key => $sub_sub_value ) {

												// It's a single value, just replace it
												if ( $sub_sub_value == $term_id ) {

													unset( $new_meta[$key][$sub_key][$sub_sub_key] );
													$new_meta[$key][$sub_key][$new_term_id] = $new_term_id;

												}

											}

										// It's a single value, just replace it
										} else if ( $sub_value == $term_id ) {

											$new_meta[$key][$sub_key] = $new_term_id;

										}

									}

								}

							}

							// Update
							if ( $old_meta !== $new_meta ) {

								update_post_meta( $post_id, $option['id'], $new_meta, $old_meta );

							}

						}

					}

				}

			} else {
				$post_ids = get_posts( array(
					'fields'     => 'ids',
					'meta_query' => array(
						'key'     => $option['id'],
						'value'   => $term_id,
						'compare' => 'IN'
					),
				) );

				if ( $post_ids ) {

					foreach( $post_ids as $post_id ) {

						// Get the meta
						$old_meta = get_post_meta( $post_id, $option['id'], true );
						$new_meta = $old_meta;

						// Has a saved value
						if ( ! empty( $old_meta ) ) {

							// The value is an array of IDs
							if ( is_array( $old_meta ) ) {

								// Loop over the array
								foreach( $old_meta as $key => $value ) {

									// It's a single value, just replace it
									if ( $value == $term_id ) {

										unset( $new_meta[$key] );
										$new_meta[$new_term_id] = $new_term_id;

									}

								}

							// It's a single value, just replace it
							} else if ( $old_meta == $term_id ) {

								$new_meta = $new_term_id;

							}

							// Update
							if ( $old_meta !== $new_meta ) {

								update_post_meta( $post_id, $option['id'], $new_meta, $old_meta );

							}

						}

					}

				}

			}

		}

	}

}
add_action( 'split_shared_term', 'ot_split_shared_term', 10, 4 );

/* End of file ot-functions-admin.php */
/* Location: ./includes/ot-functions-admin.php */

<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

/**
 * Settings page for VC. list of tabs for function composer
 *
 * Settings page for VC creates menu item in admin menu as subpage of Settings section.
 * Settings are build with WP settings API and organized as tabs.
 *
 * List of tabs
 * 1. General Settings - set access rules and allowed content types for editors.
 * 2. Design Options - custom color and spacing editor for VC shortcodes elements.
 * 3. Custom CSS - add custom css to your WP pages.
 * 4. Product License - license key activation for automatic VC updates.
 * 5. My Shortcodes - automated mapping tool for shortcodes.
 *
 * @link http://codex.wordpress.org/Settings_API WordPress settings API
 * @since 3.4
 */
class Vc_Settings {
	public $tabs;
	public $deactivate;
	public $locale;
	/**
	 * @var string
	 */
	protected $option_group = 'wpb_js_composer_settings';
	/**
	 * @var string
	 */
	protected $page = 'vc_settings';
	/**
	 * @var string
	 */
	public static $field_prefix = 'wpb_js_';
	/**
	 * @var string
	 */
	protected static $notification_name = 'wpb_js_notify_user_about_element_class_names';
	/**
	 * @var
	 */
	protected static $color_settings;
	/**
	 * @var
	 */
	protected static $defaults;
	/**
	 * @var
	 */
	protected $composer;

	/**
	 * @var array
	 */
	protected $google_fonts_subsets_default = array( 'latin' );
	/**
	 * @var array
	 */
	protected $google_fonts_subsets = array(
		'latin',
		'vietnamese',
		'cyrillic',
		'latin-ext',
		'greek',
		'cyrillic-ext',
		'greek-ext',
	);

	/**
	 * @var array
	 */
	public $google_fonts_subsets_excluded = array();

	/**
	 * @param string $field_prefix
	 */
	public static function setFieldPrefix( $field_prefix ) {
		self::$field_prefix = $field_prefix;
	}

	/**
	 * @return string
	 */
	public function page() {
		return $this->page;
	}

	/**
	 * @return bool
	 */
	public function isEditorEnabled() {
		global $current_user;
		wp_get_current_user();

		/** @var $settings - get use group access rules */
		$settings = $this->get( 'groups_access_rules' );

		$show = true;
		foreach ( $current_user->roles as $role ) {
			if ( isset( $settings[ $role ]['show'] ) && 'no' === $settings[ $role ]['show'] ) {
				$show = false;
				break;
			}
		}

		return $show;
	}

	/**
	 *
	 */
	public function setTabs() {
		$this->tabs = array();

		if ( $this->showConfigurationTabs() ) {
			$this->tabs['vc-general'] = esc_html__( 'General Settings', 'js_composer' );
			if ( ! vc_is_as_theme() || apply_filters( 'vc_settings_page_show_design_tabs', false ) ) {
				$this->tabs['vc-color'] = esc_html__( 'Design Options', 'js_composer' );
				$this->tabs['vc-custom_css'] = esc_html__( 'Custom CSS', 'js_composer' );
				$this->tabs['vc-custom_js'] = esc_html__( 'Custom JS', 'js_composer' );
			}
		}

		if ( ! vc_is_network_plugin() || ( vc_is_network_plugin() && is_network_admin() ) ) {
			if ( ! vc_is_updater_disabled() && ! wpb_check_wordpress_com_env() ) {
				$this->tabs['vc-updater'] = esc_html__( 'Product License', 'js_composer' );
			}
		}
		// TODO: may allow to disable automapper
		if ( ! is_network_admin() && ! vc_automapper_is_disabled() ) {
			$this->tabs['vc-automapper'] = vc_automapper()->title();
		}
	}

	/**
	 * @return mixed|void
	 */
	public function getTabs() {
		if ( ! isset( $this->tabs ) ) {
			$this->setTabs();
		}

		return apply_filters( 'vc_settings_tabs', $this->tabs );
	}

	/**
	 * @return bool
	 */
	public function showConfigurationTabs() {
		return ! vc_is_network_plugin() || ! is_network_admin();
	}

	/**
	 * Render
	 *
	 * @param $tab
	 * @throws \Exception
	 */
	public function renderTab( $tab ) {
		require_once vc_path_dir( 'CORE_DIR', 'class-vc-page.php' );
		wp_enqueue_style( 'wp-color-picker' );
		wp_enqueue_script( 'wp-color-picker' );
		if ( ( ( '1' === vc_get_param( 'build_css' ) || 'true' === vc_get_param( 'build_css' ) ) ) || ( ( '1' === vc_get_param( 'settings-updated' ) || 'true' === vc_get_param( 'settings-updated' ) ) ) ) {
			$this->buildCustomCss(); // TODO: remove this - no needs to re-save always
		}
		$tabs = $this->getTabs();
		foreach ( $tabs as $key => $value ) {
			if ( ! vc_user_access()->part( 'settings' )->can( $key . '-tab' )->get() ) {
				unset( $tabs[ $key ] );
			}
		}
		do_action( 'vc-settings-render-tab-' . $tab );
		$page = new Vc_Page();
		$page->setSlug( $tab )->setTitle( isset( $tabs[ $tab ] ) ? $tabs[ $tab ] : '' )->setTemplatePath( apply_filters( 'vc_settings-render-tab-' . $tab, 'pages/vc-settings/tab.php' ) );
		vc_include_template( 'pages/vc-settings/index.php', array(
			'pages' => $tabs,
			'active_page' => $page,
			'vc_settings' => $this,
		) );
	}

	/**
	 * Init settings page && menu item
	 * vc_filter: vc_settings_tabs - hook to override settings tabs
	 */
	public function initAdmin() {
		$this->setTabs();

		self::$color_settings = array(
			array( 'vc_color' => array( 'title' => esc_html__( 'Main accent color', 'js_composer' ) ) ),
			array( 'vc_color_hover' => array( 'title' => esc_html__( 'Hover color', 'js_composer' ) ) ),
			array( 'vc_color_call_to_action_bg' => array( 'title' => esc_html__( 'Call to action background color', 'js_composer' ) ) ),
			array( 'vc_color_google_maps_bg' => array( 'title' => esc_html__( 'Google maps background color', 'js_composer' ) ) ),
			array( 'vc_color_post_slider_caption_bg' => array( 'title' => esc_html__( 'Post slider caption background color', 'js_composer' ) ) ),
			array( 'vc_color_progress_bar_bg' => array( 'title' => esc_html__( 'Progress bar background color', 'js_composer' ) ) ),
			array( 'vc_color_separator_border' => array( 'title' => esc_html__( 'Separator border color', 'js_composer' ) ) ),
			array( 'vc_color_tab_bg' => array( 'title' => esc_html__( 'Tabs navigation background color', 'js_composer' ) ) ),
			array( 'vc_color_tab_bg_active' => array( 'title' => esc_html__( 'Active tab background color', 'js_composer' ) ) ),
		);
		self::$defaults = array(
			'vc_color' => '#f7f7f7',
			'vc_color_hover' => '#F0F0F0',
			'margin' => '35px',
			'gutter' => '15',
			'responsive_max' => '768',
			'responsive_md' => '992',
			'responsive_lg' => '1200',
			'compiled_js_composer_less' => '',
		);
		if ( 'restore_color' === vc_post_param( 'vc_action' ) && vc_user_access()->check( 'wp_verify_nonce', vc_post_param( '_wpnonce' ), vc_settings()->getOptionGroup() . '_color' . '-options' )
				->validateDie()->wpAny( 'manage_options' )->validateDie()->part( 'settings' )->can( 'vc-color-tab' )->validateDie()->get() ) {
			$this->restoreColor();
		}

		/**
		 * @since 4.5 used to call update file once option is changed
		 */
		add_action( 'update_option_wpb_js_compiled_js_composer_less', array(
			$this,
			'buildCustomColorCss',
		) );

		/**
		 * @since 4.5 used to call update file once option is changed
		 */
		add_action( 'update_option_wpb_js_custom_css', array(
			$this,
			'buildCustomCss',
		) );

		/**
		 * @since 4.5 used to call update file once option is changed
		 */
		add_action( 'add_option_wpb_js_compiled_js_composer_less', array(
			$this,
			'buildCustomColorCss',
		) );

		/**
		 * @since 4.5 used to call update file once option is changed
		 */
		add_action( 'add_option_wpb_js_custom_css', array(
			$this,
			'buildCustomCss',
		) );

		/**
		 * Tab: General Settings
		 */
		$tab = 'general';
		$this->addSection( $tab );

		// START UNCODE EDIT
		// $this->addField( $tab, esc_html__( 'Disable responsive content elements', 'js_composer' ), 'not_responsive_css', array(
		// 	$this,
		// 	'sanitize_not_responsive_css_callback',
		// ), array(
		// 	$this,
		// 	'not_responsive_css_field_callback',
		// ) );
		// END UNCODE EDIT

		$this->addField( $tab, esc_html__( 'Google fonts subsets', 'js_composer' ), 'google_fonts_subsets', array(
			$this,
			'sanitize_google_fonts_subsets_callback',
		), array(
			$this,
			'google_fonts_subsets_callback',
		) );
		$this->addField( $tab, esc_html__( 'Local Google Fonts', 'js_composer' ), 'local_google_fonts', array(
			$this,
			'sanitize_local_google_fonts_callback',
		), array(
			$this,
			'local_google_fonts_callback',
		) );

		/**
		 * Tab: Design Options
		 */
		$tab = 'color';
		$this->addSection( $tab );

		// Use custom checkbox
		$this->addField( $tab, esc_html__( 'Use custom design options', 'js_composer' ), 'use_custom', array(
			$this,
			'sanitize_use_custom_callback',
		), array(
			$this,
			'use_custom_callback',
		) );

		foreach ( self::$color_settings as $color_set ) {
			foreach ( $color_set as $key => $data ) {
				$this->addField( $tab, $data['title'], $key, array(
					$this,
					'sanitize_color_callback',
				), array(
					$this,
					'color_callback',
				), array(
					'id' => $key,
				) );
			}
		}

		// Margin
		$this->addField( $tab, esc_html__( 'Elements bottom margin', 'js_composer' ), 'margin', array(
			$this,
			'sanitize_margin_callback',
		), array(
			$this,
			'margin_callback',
		) );

		// Gutter
		$this->addField( $tab, esc_html__( 'Grid gutter width', 'js_composer' ), 'gutter', array(
			$this,
			'sanitize_gutter_callback',
		), array(
			$this,
			'gutter_callback',
		) );

		// Responsive max width
		$this->addField( $tab, esc_html__( 'Mobile breakpoint', 'js_composer' ), 'responsive_max', array(
			$this,
			'sanitize_responsive_max_callback',
		), array(
			$this,
			'responsive_max_callback',
		) );
		$this->addField( $tab, esc_html__( 'Desktop breakpoint', 'js_composer' ), 'responsive_md', array(
			$this,
			'sanitize_responsive_md_callback',
		), array(
			$this,
			'responsive_md_callback',
		) );
		$this->addField( $tab, esc_html__( 'Large Desktop breakpoint', 'js_composer' ), 'responsive_lg', array(
			$this,
			'sanitize_responsive_lg_callback',
		), array(
			$this,
			'responsive_lg_callback',
		) );
		$this->addField( $tab, false, 'compiled_js_composer_less', array(
			$this,
			'sanitize_compiled_js_composer_less_callback',
		), array(
			$this,
			'compiled_js_composer_less_callback',
		) );

		/**
		 * Tab: Custom CSS
		 */
		$tab = 'custom_css';
		$this->addSection( $tab );
		$this->addField( $tab, esc_html__( 'Paste your CSS code', 'js_composer' ), 'custom_css', array(
			$this,
			'sanitize_custom_css_callback',
		), array(
			$this,
			'custom_css_field_callback',
		) );

		/**
		 * Tab: Custom Header JS
		 */
		$tab = 'custom_js';
		$this->addSection( $tab );
		$this->addField( $tab, esc_html__( 'JavaScript in <head>', 'js_composer' ), 'custom_js_header', array(
			$this,
			'sanitize_custom_js_header_callback',
		), array(
			$this,
			'custom_js_header_field_callback',
		) );
		$this->addField( $tab, esc_html__( 'JavaScript before </body>', 'js_composer' ), 'custom_js_footer', array(
			$this,
			'sanitize_custom_js_footer_callback',
		), array(
			$this,
			'custom_js_footer_field_callback',
		) );

		/**
		 * Custom Tabs
		 */
		foreach ( $this->getTabs() as $tab => $title ) {
			do_action( 'vc_settings_tab-' . preg_replace( '/^vc\-/', '', $tab ), $this );
		}

		/**
		 * Tab: Updater
		 */
		$tab = 'updater';
		$this->addSection( $tab );
	}

	/**
	 * Creates new section.
	 *
	 * @param $tab - tab key name as tab section
	 * @param $title - Human title
	 * @param $callback - function to build section header.
	 */
	public function addSection( $tab, $title = null, $callback = null ) {
		add_settings_section( $this->option_group . '_' . $tab, $title, ( null !== $callback ? $callback : array(
			$this,
			'setting_section_callback_function',
		) ), $this->page . '_' . $tab );
	}

	/**
	 * Create field in section.
	 *
	 * @param $tab
	 * @param $title
	 * @param $field_name
	 * @param $sanitize_callback
	 * @param $field_callback
	 * @param array $args
	 *
	 * @return $this
	 */
	public function addField( $tab, $title, $field_name, $sanitize_callback, $field_callback, $args = array() ) {
		register_setting( $this->option_group . '_' . $tab, self::$field_prefix . $field_name, $sanitize_callback );
		add_settings_field( self::$field_prefix . $field_name, $title, $field_callback, $this->page . '_' . $tab, $this->option_group . '_' . $tab, $args );

		return $this; // chaining
	}

	/**
	 *
	 */
	public function restoreColor() {
		foreach ( self::$color_settings as $color_sett ) {
			foreach ( $color_sett as $key => $value ) {
				delete_option( self::$field_prefix . $key );
			}
		}
		delete_option( self::$field_prefix . 'margin' );
		delete_option( self::$field_prefix . 'gutter' );
		delete_option( self::$field_prefix . 'responsive_max' );
		delete_option( self::$field_prefix . 'responsive_md' );
		delete_option( self::$field_prefix . 'responsive_lg' );
		delete_option( self::$field_prefix . 'use_custom' );
		delete_option( self::$field_prefix . 'compiled_js_composer_less' );
		delete_option( self::$field_prefix . 'less_version' );
	}

	/**
	 * @param $option_name
	 *
	 * @param bool $defaultValue
	 *
	 * @return mixed
	 */
	public static function get( $option_name, $defaultValue = false ) {
		return get_option( self::$field_prefix . $option_name, $defaultValue );
	}

	/**
	 * @param $option_name
	 * @param $value
	 *
	 * @return bool
	 */
	public static function set( $option_name, $value ) {
		return update_option( self::$field_prefix . $option_name, $value );
	}

	/**
	 * Set up the enqueue for the CSS & JavaScript files.
	 *
	 */
	public function adminLoad() {
		wp_register_script( 'wpb_js_composer_settings', vc_asset_url( 'js/dist/settings.min.js' ), array(), WPB_VC_VERSION, true );
		wp_enqueue_style( 'js_composer_settings', vc_asset_url( 'css/js_composer_settings.min.css' ), false, WPB_VC_VERSION );
		wp_enqueue_script( 'backbone' );
		wp_enqueue_script( 'shortcode' );
		wp_enqueue_script( 'underscore' );
		wp_enqueue_script( 'jquery-ui-accordion' );
		wp_enqueue_script( 'jquery-ui-sortable' );
		wp_enqueue_script( 'wpb_js_composer_settings' );
		$this->locale = array(
			'are_you_sure_reset_css_classes' => esc_html__( 'Are you sure you want to reset to defaults?', 'js_composer' ),
			'are_you_sure_reset_color' => esc_html__( 'Are you sure you want to reset to defaults?', 'js_composer' ),
			'saving' => esc_html__( 'Saving...', 'js_composer' ),
			'save' => esc_html__( 'Save Changes', 'js_composer' ),
			'saved' => esc_html__( 'Design Options successfully saved.', 'js_composer' ),
			'save_error' => esc_html__( 'Design Options could not be saved', 'js_composer' ),
			'form_save_error' => esc_html__( 'Problem with AJAX request execution, check internet connection and try again.', 'js_composer' ),
			'are_you_sure_delete' => esc_html__( 'Are you sure you want to delete this shortcode?', 'js_composer' ),
			'are_you_sure_delete_param' => esc_html__( "Are you sure you want to delete the shortcode's param?", 'js_composer' ),
			'my_shortcodes_category' => esc_html__( 'My shortcodes', 'js_composer' ),
			'error_shortcode_name_is_required' => esc_html__( 'Shortcode name is required.', 'js_composer' ),
			'error_enter_valid_shortcode_tag' => esc_html__( 'Please enter valid shortcode tag.', 'js_composer' ),
			'error_enter_required_fields' => esc_html__( 'Please enter all required fields for params.', 'js_composer' ),
			'new_shortcode_mapped' => esc_html__( 'New shortcode mapped from string!', 'js_composer' ),
			'shortcode_updated' => esc_html__( 'Shortcode updated!', 'js_composer' ),
			'error_content_param_not_manually' => esc_html__( 'Content param can not be added manually, please use checkbox.', 'js_composer' ),
			'error_param_already_exists' => esc_html__( 'Param %s already exists. Param names must be unique.', 'js_composer' ),
			'error_wrong_param_name' => esc_html__( 'Please use only letters, numbers and underscore for param name', 'js_composer' ),
			'error_enter_valid_shortcode' => esc_html__( 'Please enter valid shortcode to parse!', 'js_composer' ),

		);
		wp_localize_script( 'wpb_js_composer_settings', 'vcData', apply_filters( 'vc_global_js_data', array(
			'version' => WPB_VC_VERSION,
			'debug' => false,
		) ) );
		wp_localize_script( 'wpb_js_composer_settings', 'i18nLocaleSettings', $this->locale );
	}

	/**
	 * Output custom css editor field.
	 */
	public function custom_css_field_callback() {
		$value = get_option( self::$field_prefix . 'custom_css' );
		if ( empty( $value ) ) {
			$value = '';
		}

		echo '<textarea name="' . esc_attr( self::$field_prefix ) . 'custom_css' . '" class="wpb_code_editor custom_code" style="display:none">' . esc_textarea( $value ) . '</textarea>';
		echo '<pre id="wpb_css_editor" class="wpb_content_element custom_code" >' . esc_textarea( $value ) . '</pre>';
		echo '<p class="description indicator-hint">' . esc_html__( 'Add custom CSS code to the plugin without modifying files.', 'js_composer' ) . '</p>';
	}

	/**
	 * Output custom js editor field for header tag.
	 */
	public function custom_js_header_field_callback() {
		$value = get_option( self::$field_prefix . 'custom_js_header' );
		if ( empty( $value ) ) {
			$value = '';
		}

		echo '<p>' . esc_html( '<script>' ) . '</p>';
		echo '<textarea name="' . esc_attr( self::$field_prefix ) . 'custom_js_header' . '" class="wpb_code_editor custom_code" data-code-type="html" style="display:none">' . esc_textarea( $value ) . '</textarea>';
		echo '<pre id="wpb_js_header_editor" class="wpb_content_element custom_code">' . esc_textarea( $value ) . '</pre>';
		echo '<p>' . esc_html( '</script>' ) . '</p>';
	}

	/**
	 * Output custom js editor field for footer tag.
	 */
	public function custom_js_footer_field_callback() {
		$value = get_option( self::$field_prefix . 'custom_js_footer' );
		if ( empty( $value ) ) {
			$value = '';
		}

		echo '<p>' . esc_html( '<script>' ) . '</p>';
		echo '<textarea name="' . esc_attr( self::$field_prefix ) . 'custom_js_footer' . '" class="wpb_code_editor custom_code" data-code-type="html" style="display:none">' . esc_textarea( $value ) . '</textarea>';
		echo '<pre id="wpb_js_footer_editor" class="wpb_content_element custom_code">' . esc_textarea( $value ) . '</pre>';
		echo '<p>' . esc_html( '</script>' ) . '</p>';
	}

	/**
	 * Not responsive checkbox callback function
	 */
	public function not_responsive_css_field_callback() {
		$checked = get_option( self::$field_prefix . 'not_responsive_css' );
		if ( empty( $checked ) ) {
			$checked = false;
		}
		?>
		<label>
			<input type="checkbox"<?php echo $checked ? ' checked' : ''; ?> value="1" id="wpb_js_not_responsive_css" name="<?php echo esc_attr( self::$field_prefix . 'not_responsive_css' ); ?>">
			<?php esc_html_e( 'Disable', 'js_composer' ); ?>
		</label><br/>
		<p
				class="description indicator-hint"><?php esc_html_e( 'Disable content elements from "stacking" one on top other on small media screens (Example: mobile devices).', 'js_composer' ); ?></p>
		<?php
	}

	/**
	 * Google fonts subsets callback
	 */
	public function google_fonts_subsets_callback() {
		$pt_array = get_option( self::$field_prefix . 'google_fonts_subsets' );
		$pt_array = $pt_array ? $pt_array : $this->googleFontsSubsets();
		foreach ( $this->getGoogleFontsSubsets() as $pt ) {
			if ( ! in_array( $pt, $this->getGoogleFontsSubsetsExcluded(), true ) ) {
				$checked = ( in_array( $pt, $pt_array, true ) ) ? ' checked' : '';
				?>
				<label>
					<input type="checkbox"<?php echo esc_attr( $checked ); ?> value="<?php echo esc_attr( $pt ); ?>"
						   id="wpb_js_gf_subsets_<?php echo esc_attr( $pt ); ?>"
						   name="<?php echo esc_attr( self::$field_prefix . 'google_fonts_subsets' ); ?>[]">
					<?php echo esc_html( $pt ); ?>
				</label><br>
				<?php
			}
		}
		?>
		<p class="description indicator-hint"><?php esc_html_e( 'Select subsets for Google Fonts available to content elements.', 'js_composer' ); ?></p>
		<?php
	}

	public function local_google_fonts_callback() {
		$checked = get_option( self::$field_prefix . 'local_google_fonts' );
		if ( empty( $checked ) ) {
			$checked = false;
		}
		?>
		<label>
			<input type="checkbox"<?php echo $checked ? ' checked' : ''; ?> value="1" id="local_google_fonts" name="<?php echo esc_attr( self::$field_prefix . 'local_google_fonts' ); ?>">
			<?php esc_html_e( 'Enable', 'js_composer' ); ?>
		</label><br/>
		<p
				class="description indicator-hint"><?php esc_html_e( 'This will automatically download all used Google Fonts locally.', 'js_composer' ); ?></p>
		<?php
	}

	/**
	 * Get subsets for google fonts.
	 *
	 * @return array
	 * @since  4.3
	 * @access public
	 */
	public function googleFontsSubsets() {
		if ( ! isset( $this->google_fonts_subsets_settings ) ) {
			$pt_array = vc_settings()->get( 'google_fonts_subsets' );
			$this->google_fonts_subsets_settings = $pt_array ? $pt_array : $this->googleFontsSubsetsDefault();
		}

		return $this->google_fonts_subsets_settings;
	}

	/**
	 * @return array
	 */
	public function googleFontsSubsetsDefault() {
		return $this->google_fonts_subsets_default;
	}

	/**
	 * @return array
	 */
	public function getGoogleFontsSubsets() {
		return $this->google_fonts_subsets;
	}

	/**
	 * @param $subsets
	 *
	 * @return bool
	 */
	public function setGoogleFontsSubsets( $subsets ) {
		if ( is_array( $subsets ) ) {
			$this->google_fonts_subsets = $subsets;

			return true;
		}

		return false;
	}

	/**
	 * @return array
	 */
	public function getGoogleFontsSubsetsExcluded() {
		return $this->google_fonts_subsets_excluded;
	}

	/**
	 * @param $excluded
	 *
	 * @return bool
	 */
	public function setGoogleFontsSubsetsExcluded( $excluded ) {
		if ( is_array( $excluded ) ) {
			$this->google_fonts_subsets_excluded = $excluded;

			return true;
		}

		return false;
	}

	/**
	 * Not responsive checkbox callback function
	 *
	 */
	public function use_custom_callback() {
		$field = 'use_custom';
		$checked = get_option( self::$field_prefix . $field );
		$checked = $checked ? $checked : false;
		?>
		<label>
			<input type="checkbox"<?php echo( $checked ? ' checked' : '' ); ?> value="1"
				   id="wpb_js_<?php echo esc_attr( $field ); ?>" name="<?php echo esc_attr( self::$field_prefix . $field ); ?>">
			<?php esc_html_e( 'Enable', 'js_composer' ); ?>
		</label><br/>
		<p class="description indicator-hint"><?php esc_html_e( 'Enable the use of custom design options (Note: when checked - custom css file will be used).', 'js_composer' ); ?></p>
		<?php
	}

	/**
	 * @param $args
	 */
	public function color_callback( $args ) {
		$field = $args['id'];
		$value = get_option( self::$field_prefix . $field );
		$value = $value ? $value : $this->getDefault( $field );
		echo '<input type="text" name="' . esc_attr( self::$field_prefix . $field ) . '" value="' . esc_attr( $value ) . '" class="color-control css-control">';
	}

	/**
	 *
	 */
	public function margin_callback() {
		$field = 'margin';
		$value = get_option( self::$field_prefix . $field );
		$value = $value ? $value : $this->getDefault( $field );
		echo '<input type="text" name="' . esc_attr( self::$field_prefix . $field ) . '" value="' . esc_attr( $value ) . '" class="css-control">';
		echo '<p class="description indicator-hint css-control">' . esc_html__( 'Change default vertical spacing between content elements (Example: 20px).', 'js_composer' ) . '</p>';
	}

	/**
	 *
	 */
	public function gutter_callback() {
		$field = 'gutter';
		$value = get_option( self::$field_prefix . $field );
		$value = $value ? $value : $this->getDefault( $field );
		echo '<input type="text" name="' . esc_attr( self::$field_prefix . $field ) . '" value="' . esc_attr( $value ) . '" class="css-control"> px';
		echo '<p class="description indicator-hint css-control">' . esc_html__( 'Change default horizontal spacing between columns, enter new value in pixels.', 'js_composer' ) . '</p>';
	}

	/**
	 *
	 */
	public function responsive_max_callback() {
		$field = 'responsive_max';
		$value = get_option( self::$field_prefix . $field );
		$value = $value ? $value : $this->getDefault( $field );
		echo '<input type="text" name="' . esc_attr( self::$field_prefix . $field ) . '" value="' . esc_attr( $value ) . '" class="css-control"> px';
		echo '<p class="description indicator-hint css-control">' . esc_html__( 'Content elements stack one on top other when the screen size is smaller than entered value. Change it to control when your layout stacks and adopts to a particular viewport or device size.', 'js_composer' ) . '</p>';
	}

	public function responsive_md_callback() {
		$field = 'responsive_md';
		$value = get_option( self::$field_prefix . $field );
		$value = $value ? $value : $this->getDefault( $field );
		echo '<input type="text" name="' . esc_attr( self::$field_prefix . $field ) . '" value="' . esc_attr( $value ) . '" class="css-control"> px';
		echo '<p class="description indicator-hint css-control">' . esc_html__( 'Content elements stack one on top other when the screen size is smaller than entered value. Change it to control when your layout stacks and adopts to a particular viewport or device size.', 'js_composer' ) . '</p>';
	}

	public function responsive_lg_callback() {
		$field = 'responsive_lg';
		$value = get_option( self::$field_prefix . $field );
		$value = $value ? $value : $this->getDefault( $field );
		echo '<input type="text" name="' . esc_attr( self::$field_prefix . $field ) . '" value="' . esc_attr( $value ) . '" class="css-control"> px';
		echo '<p class="description indicator-hint css-control">' . esc_html__( 'Content elements stack one on top other when the screen size is smaller than entered value. Change it to control when your layout stacks and adopts to a particular viewport or device size.', 'js_composer' ) . '</p>';
	}

	/**
	 *
	 */
	public function compiled_js_composer_less_callback() {
		$field = 'compiled_js_composer_less';
		echo '<input type="hidden" name="' . esc_attr( self::$field_prefix . $field ) . '" value="">'; // VALUE must be empty
	}

	/**
	 * @param $key
	 *
	 * @return string
	 */
	public function getDefault( $key ) {
		return ! empty( self::$defaults[ $key ] ) ? self::$defaults[ $key ] : '';
	}

	/**
	 * Callback function for settings section
	 *
	 * @param $tab
	 */
	public function setting_section_callback_function( $tab ) {
		if ( 'wpb_js_composer_settings_color' === $tab['id'] ) {
			echo '<div class="tab_intro">
				<p>' . esc_html__( 'Here you can tweak default WPBakery Page Builder content elements visual appearance. By default WPBakery Page Builder is using neutral light-grey theme. Changing "Main accent color" will affect all content elements if no specific "content block" related color is set.', 'js_composer' ) . '
				</p>
			</div>';
		}
	}

	/**
	 * @param $rules
	 *
	 * @return mixed
	 */
	public function sanitize_not_responsive_css_callback( $rules ) {
		return (bool) $rules;
	}

	/**
	 * @param $checkbox
	 *
	 * @return mixed
	 */
	public function sanitize_local_google_fonts_callback( $checkbox ) {
		return (bool) $checkbox;
	}

	/**
	 * @param $subsets
	 *
	 * @return array
	 */
	public function sanitize_google_fonts_subsets_callback( $subsets ) {
		$pt_array = array();
		if ( isset( $subsets ) && is_array( $subsets ) ) {
			foreach ( $subsets as $pt ) {
				if ( ! in_array( $pt, $this->getGoogleFontsSubsetsExcluded(), true ) && in_array( $pt, $this->getGoogleFontsSubsets(), true ) ) {
					$pt_array[] = $pt;
				}
			}
		}

		return $pt_array;
	}

	/**
	 * @param $rules
	 *
	 * @return mixed
	 */
	public function sanitize_use_custom_callback( $rules ) {
		return (bool) $rules;
	}

	/**
	 * @param $css
	 *
	 * @return mixed
	 */
	public function sanitize_custom_css_callback( $css ) {
		return wp_strip_all_tags( $css );
	}

	/**
	 * @param $js
	 *
	 * @return mixed
	 */
	public function sanitize_custom_js_header_callback( $js ) {
		return $js;
	}

	/**
	 * @param $js
	 *
	 * @return mixed
	 */
	public function sanitize_custom_js_footer_callback( $js ) {
		return $js;
	}

	/**
	 * @param $css
	 *
	 * @return mixed
	 */
	public function sanitize_compiled_js_composer_less_callback( $css ) {
		return $css;
	}

	/**
	 * @param $color
	 *
	 * @return mixed
	 */
	public function sanitize_color_callback( $color ) {
		return $color;
	}

	/**
	 * @param $margin
	 *
	 * @return mixed
	 */
	public function sanitize_margin_callback( $margin ) {
		$margin = preg_replace( '/\s/', '', $margin );
		if ( ! preg_match( '/^\d+(px|%|em|pt){0,1}$/', $margin ) ) {
			add_settings_error( self::$field_prefix . 'margin', 1, esc_html__( 'Invalid Margin value.', 'js_composer' ), 'error' );
		}

		return $margin;
	}

	/**
	 * @param $gutter
	 *
	 * @return mixed
	 */
	public function sanitize_gutter_callback( $gutter ) {
		$gutter = preg_replace( '/[^\d]/', '', $gutter );
		if ( ! $this->_isGutterValid( $gutter ) ) {
			add_settings_error( self::$field_prefix . 'gutter', 1, esc_html__( 'Invalid Gutter value.', 'js_composer' ), 'error' );
		}

		return $gutter;
	}

	/**
	 * @param $responsive_max
	 *
	 * @return mixed
	 */
	public function sanitize_responsive_max_callback( $responsive_max ) {
		if ( ! $this->_isNumberValid( $responsive_max ) ) {
			add_settings_error( self::$field_prefix . 'responsive_max', 1, esc_html__( 'Invalid "Responsive mobile" value.', 'js_composer' ), 'error' );
		}

		return $responsive_max;
	}

	/**
	 * @param $responsive_md
	 *
	 * @return mixed
	 */
	public function sanitize_responsive_md_callback( $responsive_md ) {
		if ( ! $this->_isNumberValid( $responsive_md ) ) {
			add_settings_error( self::$field_prefix . 'responsive_md', 1, esc_html__( 'Invalid "Responsive md" value.', 'js_composer' ), 'error' );
		}

		return $responsive_md;
	}

	/**
	 * @param $responsive_lg
	 *
	 * @return mixed
	 */
	public function sanitize_responsive_lg_callback( $responsive_lg ) {
		if ( ! $this->_isNumberValid( $responsive_lg ) ) {
			add_settings_error( self::$field_prefix . 'responsive_lg', 1, esc_html__( 'Invalid "Responsive lg" value.', 'js_composer' ), 'error' );
		}

		return $responsive_lg;
	}

	/**
	 * @param $number
	 *
	 * @return int
	 */
	public static function _isNumberValid( $number ) {
		return preg_match( '/^[\d]+(\.\d+){0,1}$/', $number );
	}

	/**
	 * @param $gutter
	 *
	 * @return int
	 */
	public static function _isGutterValid( $gutter ) {
		return self::_isNumberValid( $gutter );
	}

	/**
	 * @return mixed|void
	 */
	public function useCustomCss() {
		$use_custom = get_option( self::$field_prefix . 'use_custom', false );

		return $use_custom;
	}

	/**
	 * @return mixed|void
	 */
	public function getCustomCssVersion() {
		$less_version = get_option( self::$field_prefix . 'less_version', false );

		return $less_version;
	}

	/**
	 *
	 */
	public function rebuild() {
		/** WordPress Template Administration API */
		require_once ABSPATH . 'wp-admin/includes/template.php';
		/** WordPress Administration File API */
		require_once ABSPATH . 'wp-admin/includes/file.php';
		delete_option( self::$field_prefix . 'compiled_js_composer_less' );
		$this->initAdmin();
		$this->buildCustomCss(); // TODO: remove this - no needs to re-save always
	}

	/**
	 *
	 */
	public static function buildCustomColorCss() {
		/**
		 * Filesystem API init.
		 * */
		$url = wp_nonce_url( 'admin.php?page=vc-color&build_css=1', 'wpb_js_settings_save_action' );
		self::getFileSystem( $url );
		/** @var \WP_Filesystem_Direct $wp_filesystem */ global $wp_filesystem;
		/**
		 *
		 * Building css file.
		 *
		 */
		$js_composer_upload_dir = self::checkCreateUploadDir( $wp_filesystem, 'use_custom', 'js_composer_front_custom.css' );
		if ( ! $js_composer_upload_dir ) {
			return;
		}

		$filename = $js_composer_upload_dir . '/js_composer_front_custom.css';
		$use_custom = get_option( self::$field_prefix . 'use_custom' );
		if ( ! $use_custom ) {
			$wp_filesystem->put_contents( $filename, '', FS_CHMOD_FILE );

			return;
		}
		$css_string = get_option( self::$field_prefix . 'compiled_js_composer_less' );
		if ( strlen( trim( $css_string ) ) > 0 ) {
			update_option( self::$field_prefix . 'less_version', WPB_VC_VERSION );
			delete_option( self::$field_prefix . 'compiled_js_composer_less' );
			$css_string = wp_strip_all_tags( $css_string );
			// HERE goes the magic
			if ( ! $wp_filesystem->put_contents( $filename, $css_string, FS_CHMOD_FILE ) ) {
				if ( is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->get_error_code() ) {
					add_settings_error( self::$field_prefix . 'main_color', $wp_filesystem->errors->get_error_code(), esc_html__( 'Something went wrong: js_composer_front_custom.css could not be created.', 'js_composer' ) . ' ' . $wp_filesystem->errors->get_error_message(), 'error' );
				} elseif ( ! $wp_filesystem->connect() ) {
					add_settings_error( self::$field_prefix . 'main_color', $wp_filesystem->errors->get_error_code(), esc_html__( 'js_composer_front_custom.css could not be created. Connection error.', 'js_composer' ), 'error' );
				} elseif ( ! $wp_filesystem->is_writable( $filename ) ) {
					add_settings_error( self::$field_prefix . 'main_color', $wp_filesystem->errors->get_error_code(), sprintf( esc_html__( 'js_composer_front_custom.css could not be created. Cannot write custom css to "%s".', 'js_composer' ), $filename ), 'error' );
				} else {
					add_settings_error( self::$field_prefix . 'main_color', $wp_filesystem->errors->get_error_code(), esc_html__( 'js_composer_front_custom.css could not be created. Problem with access.', 'js_composer' ), 'error' );
				}
				delete_option( self::$field_prefix . 'use_custom' );
				delete_option( self::$field_prefix . 'less_version' );
			}
		}
	}

	/**
	 * Builds custom css file using css options from vc settings.
	 *
	 * @return bool
	 */
	public static function buildCustomCss() {
		/**
		 * Filesystem API init.
		 * */
		$url = wp_nonce_url( 'admin.php?page=vc-color&build_css=1', 'wpb_js_settings_save_action' );
		self::getFileSystem( $url );
		/** @var \WP_Filesystem_Direct $wp_filesystem */ global $wp_filesystem;

		/**
		 * Building css file.
		 */
		$js_composer_upload_dir = self::checkCreateUploadDir( $wp_filesystem, 'custom_css', 'custom.css' );
		if ( ! $js_composer_upload_dir ) {
			return true;
		}

		$filename = $js_composer_upload_dir . '/custom.css';
		$css_string = '';
		$custom_css_string = get_option( self::$field_prefix . 'custom_css' );
		if ( ! empty( $custom_css_string ) ) {
			$assets_url = vc_asset_url( '' );
			$css_string .= preg_replace( '/(url\(\.\.\/(?!\.))/', 'url(' . $assets_url, $custom_css_string );
			$css_string = wp_strip_all_tags( $css_string );
		}

		if ( ! $wp_filesystem->put_contents( $filename, $css_string, FS_CHMOD_FILE ) ) {
			if ( is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->get_error_code() ) {
				add_settings_error( self::$field_prefix . 'custom_css', $wp_filesystem->errors->get_error_code(), esc_html__( 'Something went wrong: custom.css could not be created.', 'js_composer' ) . $wp_filesystem->errors->get_error_message(), 'error' );
			} elseif ( ! $wp_filesystem->connect() ) {
				add_settings_error( self::$field_prefix . 'custom_css', $wp_filesystem->errors->get_error_code(), esc_html__( 'custom.css could not be created. Connection error.', 'js_composer' ), 'error' );
			} elseif ( ! $wp_filesystem->is_writable( $filename ) ) {
				add_settings_error( self::$field_prefix . 'custom_css', $wp_filesystem->errors->get_error_code(), sprintf( esc_html__( 'custom.css could not be created. Cannot write custom css to %s.', 'js_composer' ), $filename ), 'error' );
			} else {
				add_settings_error( self::$field_prefix . 'custom_css', $wp_filesystem->errors->get_error_code(), esc_html__( 'custom.css could not be created. Problem with access.', 'js_composer' ), 'error' );
			}

			return false;
		}

		return true;

	}

	/**
	 * @param \WP_Filesystem_Direct $wp_filesystem
	 * @param $option
	 * @param $filename
	 *
	 * @return bool|string
	 */
	public static function checkCreateUploadDir( $wp_filesystem, $option, $filename ) {
		$js_composer_upload_dir = self::uploadDir();
		if ( ! $wp_filesystem->is_dir( $js_composer_upload_dir ) ) {
			if ( ! $wp_filesystem->mkdir( $js_composer_upload_dir, 0777 ) ) {
				add_settings_error( self::$field_prefix . $option, $wp_filesystem->errors->get_error_code(), sprintf( esc_html__( '%s could not be created. Not available to create js_composer directory in uploads directory (%s).', 'js_composer' ), $filename, $js_composer_upload_dir ), 'error' );

				return false;
			}
		}

		return $js_composer_upload_dir;
	}

	/**
	 * @return string
	 */
	public static function uploadDir() {
		$upload_dir = wp_upload_dir();
		/** @var \WP_Filesystem_Direct $wp_filesystem */ global $wp_filesystem;

		return $wp_filesystem->find_folder( $upload_dir['basedir'] ) . vc_upload_dir();
	}

	/**
	 * @return string
	 */
	public static function uploadURL() {
		$upload_dir = wp_upload_dir();

		return $upload_dir['baseurl'] . vc_upload_dir();
	}

	/**
	 * @return string
	 */
	public static function getFieldPrefix() {
		return self::$field_prefix;
	}

	/**
	 * @param string $url
	 * @return \WP_Filesystem_Direct|bool
	 */
	protected static function getFileSystem( $url = '' ) {
		/** @var \WP_Filesystem_Direct $wp_filesystem */ global $wp_filesystem;
		$status = true;
		if ( ! $wp_filesystem || ! is_object( $wp_filesystem ) ) {
			require_once ABSPATH . '/wp-admin/includes/file.php';
			$status = WP_Filesystem( false, false, true );
		}

		return $status ? $wp_filesystem : false;
	}

	/**
	 * @return string
	 */
	public function getOptionGroup() {
		return $this->option_group;
	}
}

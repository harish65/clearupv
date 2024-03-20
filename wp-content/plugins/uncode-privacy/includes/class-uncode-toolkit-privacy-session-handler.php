<?php
/**
 * Session Handler Class.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Uncode_Toolkit_Privacy_Session_Handler' ) ) :

/**
 * Main Session Handler Class
 */
final class Uncode_Toolkit_Privacy_Session_Handler {

	/**
	 * The single instance of the class
	 */
	private static $_instance = null;

	/**
	 * Session Object
	 */
	public $session = null;

	/**
	 * Main Instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Cloning is forbidden.
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'uncode-privacy' ), '1.0.0' );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'uncode-privacy' ), '1.0.0' );
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'init' ), 0 );
	}

	/**
	 * Init when WordPress initialises.
	 */
	public function init() {
		// Session class, handles session data for users
		if ( uncode_toolkit_privacy_logs_enabled() && ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' ) ) {
			$this->session  = new Uncode_Toolkit_Privacy_Session();
		}
	}
}

endif;

if ( ! function_exists( 'UNCODE_GDPR_SESSION' ) ) :
	/**
	 * Returns the main instance of UNCODE_GDPR_SESSION to prevent the need to use globals.
	 */
	function UNCODE_GDPR_SESSION() {
		return Uncode_Toolkit_Privacy_Session_Handler::instance();
	}
endif;

// Get UNCODE_GDPR_SESSION Running
UNCODE_GDPR_SESSION();

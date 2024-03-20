<?php

use Tribe\Tickets\Plus\Commerce\WooCommerce\Orders\Data\Order_Summary;

class Tribe__Tickets_Plus__Commerce__WooCommerce__Orders__Report {
	/**
	 * Slug of the admin page for orders
	 *
	 * @var string
	 */
	public static $orders_slug = 'tickets-orders';

	/**
	 * Slug of the orders tab.
	 *
	 * @var string
	 */
	public static $tab_slug = 'tribe-tickets-plus-woocommerce-orders-report';

	/**
	 * @var string The orders page menu hook suffix.
	 *
	 * @see add_submenu_page()
	 */
	public $orders_page;

	/**
	 * The table that will display the ticket orders.
	 *
	 * @var Tribe__Tickets_Plus__Commerce__WooCommerce__Orders__Table
	 */
	protected $orders_table;

	/**
	 * Constructor!
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'orders_page_register' ] );
		add_filter( 'post_row_actions', [ $this, 'orders_row_action' ] );
		add_filter( 'tribe_filter_attendee_order_link', [ $this, 'filter_editor_orders_link' ], 10, 2 );

		// Register the WooCommerce orders report tab.
		$wc_tabbed_view = new Tribe__Tickets_Plus__Commerce__WooCommerce__Tabbed_View__Report_Tabbed_View();
		$wc_tabbed_view->register();
	}

	/**
	 * Registers the Orders admin page
	 */
	public function orders_page_register() {
		// The orders table only works with WooCommerce.
		if ( ! class_exists( 'WooCommerce' ) ) {
			return;
		}

		$this->orders_page = add_submenu_page(
			'',
			'Order list',
			'Order list',
			'edit_posts',
			self::$orders_slug,
			[
				$this,
				'orders_page_inside',
			]
		);

		add_filter( 'tribe_filter_attendee_page_slug', [ $this, 'add_attendee_resources_page_slug' ] );
		add_action( 'admin_enqueue_scripts', tribe_callback( 'tickets.attendees', 'enqueue_assets' ) );
		add_action( 'admin_enqueue_scripts', tribe_callback( 'tickets.attendees', 'load_pointers' ) );
		add_action( "load-$this->orders_page", [ $this, 'orders_page_screen_setup' ] );

	}

	/**
	 * Filter the Order Link to EDD in the Ticket Editor Settings
	 *
	 * @since 4.10
	 *
	 * @param string $url     a url for the order page for an event
	 * @param int    $post_id the post id for the current event
	 *
	 * @return string
	 */
	public function filter_editor_orders_link( $url, $post_id ) {
		$provider = Tribe__Tickets__Tickets::get_event_ticket_provider( $post_id );

		if ( 'Tribe__Tickets_Plus__Commerce__WooCommerce__Main' === $provider ) {
			$url = remove_query_arg( 'page', $url );
			$url = add_query_arg( [ 'page' => 'tickets-orders' ], $url );
		}

		return $url;
	}

	/**
	 * Filter the page slugs that the attendee resources will load to add the order page
	 *
	 * @param array $slugs List of page slugs.
	 *
	 * @return array
	 */
	public function add_attendee_resources_page_slug( $slugs ) {
		$slugs[] = $this->orders_page;
		return $slugs;
	}

	/**
	 * Adds the "orders" link in the admin list row actions for each event.
	 *
	 * @param $actions
	 *
	 * @return array
	 */
	public function orders_row_action( $actions ) {
		global $post;

		// the orders table only works with WooCommerce
		if ( ! class_exists( 'WooCommerce' ) ) {
			return $actions;
		}

		if ( ! in_array( $post->post_type, Tribe__Tickets__Main::instance()->post_types(), true ) ) {
			return $actions;
		}

		$has_tickets = count( (array) Tribe__Tickets_Plus__Commerce__WooCommerce__Main::get_instance()->get_tickets( $post->ID ) );

		if ( ! $has_tickets ) {
			return $actions;
		}

		$url = self::get_tickets_report_link( $post );

		$actions['tickets_orders'] = sprintf(
			'<a title="%s" href="%s">%s</a>',
			esc_html__( 'See purchases for this event', 'event-tickets-plus' ),
			esc_url( $url ),
			esc_html__( 'Orders', 'event-tickets-plus' )
		);

		return $actions;
	}

	/**
	 * Setups the Orders screen data.
	 */
	public function orders_page_screen_setup() {
		$this->orders_table = new Tribe__Tickets_Plus__Commerce__WooCommerce__Orders__Table;
		wp_enqueue_script( 'jquery-ui-dialog' );

		add_filter( 'admin_title', array( $this, 'orders_admin_title' ), 10, 2 );
	}

	/**
	 * Sets the browser title for the Orders admin page.
	 * Uses the event title.
	 *
	 * @param $admin_title
	 * @param $title
	 *
	 * @return string
	 */
	public function orders_admin_title( $admin_title, $title ) {
		if ( ! empty( $_GET['event_id'] ) ) {
			$event       = get_post( absint( $_GET['event_id'] ) );
			$admin_title = sprintf( esc_html_x( '%s - Order list', 'Browser title', 'event-tickets-plus' ), $event->post_title );
		}

		return $admin_title;
	}

	/**
	 * Renders the Orders page
	 */
	public function orders_page_inside() {
		$this->orders_table->prepare_items();

		$event_id = isset( $_GET['event_id'] ) ? absint( $_GET['event_id'] ) : 0;
		$event    = get_post( $event_id );

		/**
		 * Filters whether or not fees are being passed to the end user (purchaser)
		 *
		 * @var boolean $pass_fees Whether or not to pass fees to user
		 * @var int $event_id Event post ID
		 */
		Tribe__Tickets_Plus__Commerce__WooCommerce__Orders__Table::$pass_fees_to_user = apply_filters( 'tribe_tickets_pass_fees_to_user', true, $event_id );

		/**
		 * Filters the fee percentage to apply to a ticket/order
		 *
		 * @var float $fee_percent Fee percentage
		 */
		Tribe__Tickets_Plus__Commerce__WooCommerce__Orders__Table::$fee_percent = apply_filters( 'tribe_tickets_fee_percent', 0, $event_id );

		/**
		 * Filters the flat fee to apply to a ticket/order
		 *
		 * @var float $fee_flat Flat fee
		 */
		Tribe__Tickets_Plus__Commerce__WooCommerce__Orders__Table::$fee_flat = apply_filters( 'tribe_tickets_fee_flat', 0, $event_id );

		ob_start();
		$this->orders_table->display();
		$table = ob_get_clean();

		// Build and render the tabbed view from Event Tickets and set this as the active tab
		$tabbed_view = new Tribe__Tickets__Commerce__Orders_Tabbed_View();
		$tabbed_view->set_active( self::$tab_slug );
		$tabbed_view->render();

		$tickets_admin_views = tribe( 'tickets.admin.views' );
		$order_summary_data  = new Order_Summary( $event_id );
		$post_type_object    = get_post_type_object( $event->post_type );
		$post_singular_label = $post_type_object->labels->singular_name;
		$order_summary_context =  [
			'post_id'             => $event_id,
			'post'                => $event,
			'post_singular_label' => $post_singular_label,
			'order_summary'       => $order_summary_data,
		];
		$order_summary_template = $tickets_admin_views->template( 'commerce/reports/orders/summary', $order_summary_context, false );

		/** @var \Tribe__Tickets_Plus__Admin__Views $view */
		$view = tribe( 'tickets-plus.admin.views' );
		$view->template( 'woocommerce-orders', [
			'event_id'      => $event_id,
			'event'         => $event,
			'order_summary' => $order_summary_template,
			'table'         => $table
		] );
	}

	/**
	 * Returns the link to the "Orders" report for this post.
	 *
	 * @since 5.7.4 - tec_tickets_filter_event_id filter to normalize the $post_id.
	 *
	 * @param WP_Post $post
	 *
	 * @return string The absolute URL.
	 */
	public static function get_tickets_report_link( $post ) {
		/**
		 * This filter allows retrieval of an event ID to be filtered before being accessed elsewhere.
		 *
		 * @since 5.7.4
		 *
		 * @param int|null The event ID to be filtered.
		 */
		$post_id = apply_filters( 'tec_tickets_filter_event_id', $post->ID );

		$url = add_query_arg( array(
			'post_type' => $post->post_type,
			'page'      => self::$orders_slug,
			'event_id'  => $post_id,
		), admin_url( 'edit.php' ) );

		return $url;
	}

	public static function get_total_sales_per_productby_status( $product_id ) {
		global $wpdb;

		if ( ! $product_id ) {
			return false;
		}

		$order_items = [];

		/** @var Tribe__Tickets__Status__Manager $status_manager */
		$status_manager = tribe( 'tickets.status' );

		$order_statuses = (array) $status_manager->get_statuses_by_action( 'all', 'woo' );

		foreach ( $order_statuses as $order_status ) {

			$sql = $wpdb->prepare( "
 						SELECT SUM( order_item_meta.meta_value ) as _qty,
 						SUM( order_item_meta_3.meta_value ) as _line_total
 						FROM {$wpdb->prefix}woocommerce_order_items as order_items

						LEFT JOIN {$wpdb->prefix}woocommerce_order_itemmeta as order_item_meta ON order_items.order_item_id = order_item_meta.order_item_id
						LEFT JOIN {$wpdb->prefix}woocommerce_order_itemmeta as order_item_meta_2 ON order_items.order_item_id = order_item_meta_2.order_item_id
						LEFT JOIN {$wpdb->prefix}woocommerce_order_itemmeta as order_item_meta_3 ON order_items.order_item_id = order_item_meta_3.order_item_id
						LEFT JOIN {$wpdb->posts} AS posts ON order_items.order_id = posts.ID

						WHERE posts.post_type = 'shop_order'
						AND posts.post_status IN ( '$order_status' )
						AND order_items.order_item_type = 'line_item'
						AND order_item_meta.meta_key = '_qty'
						AND order_item_meta_2.meta_key = '_product_id'
						AND order_item_meta_2.meta_value = %s
						AND order_item_meta_3.meta_key = '_line_total'

						GROUP BY order_item_meta_2.meta_value
					",
					$product_id
				);

			$order_items[ $order_status ] = $wpdb->get_results( $sql );
		}

		return $order_items;
	}
}

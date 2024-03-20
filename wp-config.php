<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'oofzvumy_wp_a57');
/** MySQL database username */
define( 'DB_USER', 'oofzvumy_wp_a57');
/** MySQL database password */
define( 'DB_PASSWORD', 'ea6Be8ad2qehJevhu');
/** MySQL hostname */
define( 'DB_HOST', '10.24.248.75' );
/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hj=f&Yy*UwD K*L#ukE~AaJKZ;76@%4*@0+Eo@/pkqD@5R/sMn)WS_EzzBul{sj0;' );
define( 'SECURE_AUTH_KEY',  '<7p4UXL<*s]rmJa}%^a7KbT??T&J[7ff%[Jsd`eVhphPLf ||;_J_{_EkYc3GeFPu' );
define( 'LOGGED_IN_KEY',    '!N~v3NhDG1*hDoo@aOxt!(o0e$zHm)+dn|bH~pU]+W3F1=PJG|hu^A2=cG//RG?^o' );
define( 'NONCE_KEY',        'z-qe1*#PfA+>-Tf5&b7[aZ3#&0@O^bJTZ p&WQ.vSp~fu8tg&[MYhIxaZ:a!nK.12' );
define( 'AUTH_SALT',        'dW#-1M^80B=LW*w8s-J&saoK1!`/Y`u>n:senUGnxbkybRmf]]mX`%&WI4,c;#Q@}' );
define( 'SECURE_AUTH_SALT', '}oKahbGIbD:+P(jv^89/5K a*gePfP*py$2y5Fzy/<y4ALdH$bbHN^LtU/3-2B}52' );
define( 'LOGGED_IN_SALT',   'g]Zg6DB@p%S+^mNHiwJNTT3^-qax,7_JTBtjj]$|n{[4f2Z)I%E]E!YJ,XE% h18}' );
define( 'NONCE_SALT',       'ZR_dT^tTj&LUV}}]v& E^(I7t02=ayzoHbMi!R5tPw=.qppNj1K.cP$n]MD?7ig*h' );
/**#@-*/
/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'clearvuepv253_wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
/* Add any custom values between this line and the "stop editing" line. */
// Settings modified by hosting provider
define( 'WP_CRON_LOCK_TIMEOUT',     120             );
define( 'AUTOSAVE_INTERVAL',        300             );
define( 'WP_POST_REVISIONS',        4               );
define( 'EMPTY_TRASH_DAYS',         7               );
define( 'WP_AUTO_UPDATE_CORE',      true            );
define( 'FS_METHOD',                'direct'        );
define( 'WP_REDIS_DISABLE_BANNERS', true            );
define( 'WP_REDIS_SELECTIVE_FLUSH', true            );
define( 'WP_REDIS_DISABLED',        false           );
define( 'WP_REDIS_HOST',            '10.24.248.78'   );
define( 'WP_REDIS_PORT',            6379     );
define( 'WP_REDIS_USERNAME',        'oofzvumy'   );
define( 'WP_REDIS_PASSWORD',        ['oofzvumy', 'poqmGwfr2yPgr6kjq'] );
define( 'WP_REDIS_PREFIX',          "oofzvumy__RTp9_" );
define( 'WP_DEBUG_LOG', '1' );
define( 'DISABLE_WP_CRON', '1' );
define( 'WP_MAX_MEMORY_LIMIT', '512M' );
define( 'WP_MEMORY_LIMIT', '512M' );
define( 'DISALLOW_FILE_EDIT', '1' );
define( 'WP_DEBUG_DISPLAY', false );
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}
/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

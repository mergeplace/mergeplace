<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mergeplace' );

/** MySQL database username */
define( 'DB_USER', 'wp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wp' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '2-PSZL/^[`t@XDks:J^$q<:14ZJIFIFPlcro`W(C5/.955Y1_2$^U0;3b/E@sTr5' );
define( 'SECURE_AUTH_KEY',   'ZJ;VmJI.5zv0p!0]EgPXH)S:F~P:}{^o]mDRA8kEuYx*T3t1LK9uzcSU@_ojyp+]' );
define( 'LOGGED_IN_KEY',     '.E~qG1X7+FFep,i$>+fQy *if#:d&/R;*N%5>:]EdXb( >BTK?Igq-D(CP,^%NRe' );
define( 'NONCE_KEY',         'Z/k<4B<R:Hz+jW^%1k#j46D3P``YQIA&~<w%1Jf>Vz:$v2*EQ^*Z?j!_2r)/WUXt' );
define( 'AUTH_SALT',         '<wRWx:eE66eGm&adF;kk|{e:sKx!yj%=d2xX`IA}{lu-Aj.Gwc@cH-9T&f_Jo,y#' );
define( 'SECURE_AUTH_SALT',  '*C`]xW~~}&!x5g> R5Fi)*xR|ryxJOV3tX*r:9Br9R/6VU|Gmmuk]QC{>LOayj-p' );
define( 'LOGGED_IN_SALT',    '18gX@.!t&=@X%xEmgs `~[~S&4 1sK`ToBtazEye$5#5]av%v+;IDHtfSu)T9]S3' );
define( 'NONCE_SALT',        'lb7YgEOLW&IKbNu.|0mu6A);U]Ngk~/25fqP:fuqR+uyB@Gj|U_ldo*Un9fSy^Ty' );
define( 'WP_CACHE_KEY_SALT', 'pGs0F.s?M=5+gsaw:~L$;8hw^~?!wl ?[9ac+>7gSwQb.+(OwxJ],^.>r}>gKXnC' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


define( 'WP_DEBUG', true );
define( 'SCRIPT_DEBUG', true );


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

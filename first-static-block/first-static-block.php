<?php
/**
 * Plugin Name:       celaneo-block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       celaneo-block
 *
 * @package           first-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function register_layout_category( $categories ) {

	$categories[] = array(
		'slug'  => 'celaneo-theme-design',
		'title' => 'Celaneo'
	);

	return $categories;
}

if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) {
	add_filter( 'block_categories_all', 'register_layout_category' );
} else {
	add_filter( 'block_categories', 'register_layout_category' );
}
function first_block_first_static_block_block_init() {
	register_block_type( __DIR__ . '/build' );

	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/block-skill.asset.php');

	wp_register_script(
		'block-skill',
		plugins_url( 'build/block-skill.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
}
add_action( 'init', 'first_block_first_static_block_block_init' );

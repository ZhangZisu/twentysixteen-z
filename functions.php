<?php

function twentysixteen_fonts_url() {
	return 'https://fonts.googleapis.com/css?family=Inconsolata|Noto+Sans|Noto+Sans+SC';
}

function twentysixteenz_scripts() {
	wp_enqueue_script( 'twentysixteenz-pjax', get_stylesheet_directory_uri() . '/js/jquery.pjax.js', array( 'jquery' ), '2.0.1' );

	wp_enqueue_style( 'prism', get_stylesheet_directory_uri() . '/css/prism.css', array(), '1.16.0' );
	wp_enqueue_script( 'prism', get_stylesheet_directory_uri() . '/js/prism.js', array(), '1.16.0' );
	
	wp_enqueue_style( 'nprogress', get_stylesheet_directory_uri() . '/css/nprogress.css', array(), '0.2.0' );
	wp_enqueue_script( 'nprogress', get_stylesheet_directory_uri() . '/js/nprogress.js', array(), '0.2.0' );
	
	wp_enqueue_style( 'aplayer', get_stylesheet_directory_uri() . '/css/APlayer.min.css', array(), '1.10.2' );
	wp_enqueue_script( 'aplayer', get_stylesheet_directory_uri() . '/js/APlayer.min.js', array(), '1.10.2' );
}
add_action( 'wp_enqueue_scripts', 'twentysixteenz_scripts' );

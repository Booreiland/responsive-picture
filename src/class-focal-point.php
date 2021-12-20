<?php

class RP_Focal_Point extends ResponsivePics {

	public function __construct() {
		add_action('admin_enqueue_scripts',   ['RP_Focal_Point', 'load_scripts']);
		// add_action('wp_enqueue_media',        ['RP_Focal_Point', 'add_custom_media_template']);
		add_action('print_media_templates',   ['RP_Focal_Point', 'edit_media_template']);
		add_action('wp_ajax_get_focal_point', ['RP_Focal_Point', 'get_focal_point']);
		add_action('wp_ajax_set_focal_point', ['RP_Focal_Point', 'set_focal_point']);
	}

	/**
	 * Enqueues all necessary CSS and Scripts
	 */
	public static function load_scripts() {
		// Scripts
		$assets = ResponsivePicsWP::$enqueue->enqueue('focalpoint', 'admin', [
			'js'        => true,
			'css'       => true,
			'js_dep'    => ['jquery'],
			'css_dep'   => [],
			'in_footer' => false
		]);
		$entry_point = array_pop($assets['js']);
		wp_localize_script($entry_point['handle'], 'responsivePicsL10n', self::focal_point_l10n());

		// Styles
		$assets = ResponsivePicsWP::$enqueue->enqueue('focalpoint', 'admin', [
			'js'  => false,
			'css' => true
		]);
	}

	/**
	 * Wherever the Media Modal is deployed, also deploy our overrides.
	 */
	public static function add_custom_media_template() {
		add_action('admin_print_footer_scripts', ['RP_Focal_Point', 'override_media_templates'], 11);
	}

	/**
	 * Add subview to media modal
	 */
	public static function edit_media_template() {
		?>
		<script type="text/html" id="tmpl-attachment-focal-point">
			<button type="button" class="button button-disabled crop-attachment image-focal__button"><?php _e('Save Focal Point', RESPONSIVE_PICS_TEXTDOMAIN); ?></button>
		</script>
		<?php
	}

	/**
	 * Return all the translation strings necessary for the javascript
	 *
	 * @return array
	 */
	private static function focal_point_l10n() {
		return [
			'saveButton' => __('Save Focal Point', RESPONSIVE_PICS_TEXTDOMAIN),
			'saving'     => __('Saving…', RESPONSIVE_PICS_TEXTDOMAIN),
			'saved'      => __('Saved', RESPONSIVE_PICS_TEXTDOMAIN),
			'tryAgain'   => __('Please Try Again', RESPONSIVE_PICS_TEXTDOMAIN)
		];
	}

	/**
	 * Our attachment override
	 * https://www.ibenic.com/extending-wordpress-media-uploader-embed-options/
	 */
	public static function override_media_templates() {
		include('views/attachment-details-two-column.php'); ?>
		<script>
			(function(media){
				var attTwoColsOld = wp.media.view.Attachment.Details.TwoColumn;
				wp.media.view.Attachment.Details.TwoColumn = attTwoColsOld.extend({
					template: wp.template('attachment-details-two-column-focal-point'),
					editAttachment: function(event) {
						if (event) {
							event.preventDefault();
						}
						this.controller.content.mode('edit-image');
					}
				});
			})(wp.media);
		</script>
	<?php }

	/**
	 * Get the focalpoint of the attachment from the post meta
	 */
	public static function get_focal_point() {
		$attachment  = isset($_POST['attachment']) ? $_POST['attachment'] : [];
		$post_id     = isset($attachment['id']) ? $attachment['id'] : null;
		$focal_point = get_post_meta($post_id, 'responsive_pics_focal_point', true);

		// Return the focal point if there is one
		if ($post_id && is_array($focal_point)) {
			wp_send_json_success([
				'focal_point' => $focal_point
			]);
		}

		// Return the ajax call
		wp_send_json_error();
	}

	/**
	 * Set the focalpoint of the attachment as post meta
	 */
	public static function set_focal_point() {
		$attachment  = isset($_POST['attachment']) ? $_POST['attachment'] : [];
		$focal_point = isset($attachment['focal_point']) ? $attachment['focal_point'] : null;
		$post_id     = isset($attachment['id']) ? $attachment['id'] : null;

		// Save the focal point if there is one
		if ($post_id && is_array($focal_point)) {
			update_post_meta($post_id, 'responsive_pics_focal_point', $focal_point);
			wp_send_json_success();
		}

		// Return the ajax call
		wp_send_json_error();
	}
}
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php
	if ( isset( $block->parsed_block['innerBlocks'] ) ) {
		foreach ( $block->parsed_block['innerBlocks'] as $innerBlock ) {
			if ( !empty( $innerBlock['attrs']['title'] ) ) {
				printf("<button role='button' class='accordion'>%s</button>", $innerBlock['attrs']['title']);
			}
			if ( !empty( $innerBlock['attrs']['content'] ) ) {
				printf("<p class='panel'>%s</p>", $innerBlock['attrs']['content']);
			}
		}
	}
	?>
</div>

import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { BaseControl } from '@wordpress/components';

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps,
		{
			allowedBlocks: ['block/accordion-item'],
			template: [
				['block/accordion-item'],
				
			]
		},
	);
	return (
		<BaseControl label={__("Accordeon Block")}>
			<div {...innerBlocksProps} />
		</BaseControl>
	);
}

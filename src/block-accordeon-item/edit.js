import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="p"
				value={attributes.title}
				allowedFormats={[]}
				onChange={(title) => setAttributes({ title })}
				placeholder="Enter title here.."
			/>
			<RichText
				tagName="div"
				value={attributes.content}
				allowedFormats={['core/bold', 'core/italic', 'core/link']}
				onChange={(content) => setAttributes({ content })}
				placeholder="Enter content here.."
			/>
		</div>
	);
}

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {
	registerBlockType,
	useBlockProps,
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	Card,
	CardMedia,
	CardHeader,
	CardBody,
	FormFileUpload,
	TextControl,
	TextareaControl
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( 'celaneo/block-skill', {

	apiVersion: 2,
	attributes: {
		content: {
			type: "text",
			source: "textarea",
			selector: "p"
		},
		title: {
			type: "string",
			source: "text",
			selector: "h2"
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: ( {attributes, setAttributes} ) => {

		return (
			<div { ...useBlockProps() }>

				<h2>
					<TextControl
						label= { __('Title of the block', 'title label' ) }
						onChange={ ( titleValue ) => setAttributes( titleValue ?? '' ) }
					/>
				</h2>

				<p>
					<TextareaControl
						label= { __('Description of the block', 'description label' ) }
						help="Enter some text"
						value={ attributes.content }
						onChange={ ( contentValue ) => setAttributes( {content: contentValue} ) }
					/>
				</p>
			</div>

		);
	},

	/**
	 * @see ./save.js
	 */
	save:  ({props} ) => {
		const blockProps = useBlockProps.save();

		return (
			<div { ...blockProps.save() }>

						<h2>
							<TextControl
								tagname="h2"
								value={ props.attributes.title }
							/>
						</h2>

						<p>
							<Textarea.Content
								className={ `gutenberg-examples-align-${ props.attributes.alignment }` }
								tagName="p"
								value={ props.attributes.content }
							/>
						</p>

			</div>
		);
	},
} );


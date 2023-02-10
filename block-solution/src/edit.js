/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { Card, CardBody, CardHeader, CardMedia, FormFileUpload, TextareaControl, TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/compose'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(title, body) {
	const [ titleValue, setTitleValue ] = useState( title );
	const [ text, setText ] = useState( body );

	return (
		<Card>
			<CardMedia>
				<FormFileUpload
					accept="image/*"
					onChange={ ( event ) => console.log( event.currentTarget.files ) }
				>
					Upload
				</FormFileUpload>
			</CardMedia>
			<CardHeader>
				<TextControl
					label="__('Title of the block', 'title label' )"
					value={ titleValue }
					onChange={ ( nextValue ) => setTitleValue( nextValue ?? '' ) }
				/>
			</CardHeader>
			<CardBody>
				<TextareaControl
					label="__('Description of the block', 'description label' )"
					help="Enter some text"
					value={ text }
					onChange={ ( value ) => setText( value ) }
				/>
			</CardBody>
		</Card>
	);
}

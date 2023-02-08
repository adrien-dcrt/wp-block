import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';

import {
	useBlockProps,
	ColorPalette,
	InspectorControls,
} from '@wordpress/block-editor';

registerBlockType( 'first-block/first-static-block', {
	apiVersion: 2,
	attributes: {
		message: {
			type: 'string',
			source: 'text',
			selector: 'div',
			default: '', // empty default
		},
		bg_color: { type: 'string', default: '#000000' },
		text_color: { type: 'string', default: '#ffffff' },
	},
	edit: ( { attributes, setAttributes } ) => {
		const onChangeBGColor = ( hexColor ) => {
			setAttributes( { bg_color: hexColor } );
		};

		const onChangeTextColor = ( hexColor ) => {
			setAttributes( { text_color: hexColor } );
		};

		return (
			<div { ...useBlockProps() }>
				<InspectorControls key="setting">
					<div id="gutenpride-controls">
						<fieldset>
							<legend className="blocks-base-control__label">
								{ __( 'Background color', 'gutenpride' ) }
							</legend>
							<ColorPalette // Element Tag for Gutenberg standard colour selector
								onChange={ onChangeBGColor } // onChange event callback
							/>
						</fieldset>
						<fieldset>
							<legend className="blocks-base-control__label">
								{ __( 'Text color', 'gutenpride' ) }
							</legend>
							<ColorPalette // Element Tag for Gutenberg standard colour selector
								onChange={ onChangeTextColor } // onChange event callback
							/>
						</fieldset>
					</div>
				</InspectorControls>
				<TextControl
					value={ attributes.message }
					onChange={ ( val ) => setAttributes( { message: val } ) }
					style={ {
						backgroundColor: attributes.bg_color,
						color: attributes.text_color,
					} }
				/>
			</div>
		);
	},
	save: ( { attributes } ) => {
		return (
			<div
				{ ...useBlockProps.save() }
				style={ {
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
				} }
			>
				{ attributes.message }
			</div>
		);
	},
} );


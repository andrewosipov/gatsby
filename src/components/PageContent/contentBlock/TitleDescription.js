import React from 'react';
import {CONTENT_BLOCK, CONTENT_BLOCK_TEXT, CONTENT_BLOCK_FULL_WIDTH} from '../../constants';
import {getDescriptionCustomClassName as getDescription, getImageTitle, getLink} from '../../helpers';

const ImageAndCaption = props => {
    const {title, description, imageTitle = null, className = null, textTemplate} = props;
    const sectionClassName = ( className !== null ) ? `${CONTENT_BLOCK} ${className}`: CONTENT_BLOCK;
    const textClassName    = ( textTemplate === "content-page-with-collection" ) ? `${CONTENT_BLOCK_TEXT} ${CONTENT_BLOCK_FULL_WIDTH}`: CONTENT_BLOCK_TEXT;

    return (
        <section className={sectionClassName}>
            {getImageTitle(title, imageTitle)}
            {getDescription(description, textClassName)}
        </section>
    );
};

export default ImageAndCaption;
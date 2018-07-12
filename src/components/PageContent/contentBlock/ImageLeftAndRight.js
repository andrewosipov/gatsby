import React from 'react';
import {CONTENT_BLOCK, CONTENT_BLOCK_TEXT, CONTENT_BLOCK_INSIDE, CONTENT_BLOCK_FLEX, CONTENT_BLOCK_FLEX_INVERSE} from '../../constants';
import {getTitle2 as getTitle, getDescription, getImageStandart as getImage, getLink} from '../../helpers';

const StandartContentBlock = props => {
    const {title, description, image, link, linkText, sectionClassName, index} = props;

    // if the template is 'image-left-and-right' the content block should be reverseble
    const inverseBlock  = ( index % 2 === 0 ) ? CONTENT_BLOCK_FLEX_INVERSE : null;
    const inverse = ( props.template.slug === 'image-left-and-right' ) ? inverseBlock : CONTENT_BLOCK_FLEX_INVERSE;

    return (
        <section className={`${CONTENT_BLOCK} ${CONTENT_BLOCK_INSIDE} ${CONTENT_BLOCK_FLEX} ${inverse} ${sectionClassName}`}>
            <div className={`${CONTENT_BLOCK_TEXT}`}>
                {getTitle(title)}
                {getDescription(description)}
                {getLink(link, linkText)}
            </div>
            {getImage(image)}
        </section>
    );
};

export default StandartContentBlock;
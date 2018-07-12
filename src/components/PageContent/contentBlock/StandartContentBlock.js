import React from 'react';
import {CONTENT_BLOCK, CONTENT_BLOCK_TEXT, CONTENT_BLOCK_INSIDE, CONTENT_BLOCK_FLEX, CONTENT_BLOCK_FLEX_INVERSE} from '../../constants';
import {getTitle2 as getTitle, getDescription, getImageStandart as getImage, getLink} from '../../helpers';

const StandartContentBlock = props => {
    const {title, description, image, link, linkText} = props;
    return (
        <section className={`${CONTENT_BLOCK} ${CONTENT_BLOCK_INSIDE} ${CONTENT_BLOCK_FLEX} ${CONTENT_BLOCK_FLEX_INVERSE}`}>
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
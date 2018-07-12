import React from 'react';
import Link from 'gatsby-link';
import {CONTENT_BLOCK, CONTENT_BLOCK_TEXT, CONTENT_BLOCK_INSIDE, CONTENT_BLOCK_FLEX, CONTENT_BLOCK_FLEX_INVERSE, CONTENT_BLOCK_NEWS_ITEM, CONTENT_BLOCK_FULL_WIDTH} from '../../constants';
import {getTitle2 as getTitle, getImageStandart as getImage, getPreview, getLink} from '../../helpers';

const CareersIndexPage = props => {
    const {title, preview, image, slug, className = null} = props;
    const sectionClassName = ( className !== null ) ? `${CONTENT_BLOCK} ${className}`: CONTENT_BLOCK;
    const link = `/careers/${slug}/`;

    return (
        <section className = {`${CONTENT_BLOCK} ${CONTENT_BLOCK_INSIDE} ${CONTENT_BLOCK_FLEX} ${CONTENT_BLOCK_FLEX_INVERSE} ${CONTENT_BLOCK_NEWS_ITEM} ${CONTENT_BLOCK_FULL_WIDTH}`}>
            <div className = {CONTENT_BLOCK_TEXT}>
                {getTitle(title)}
                {getPreview(preview)}
                {getLink(link, 'Read More')}
            </div>
            {getImage(image)}
        </section>
    );
};

export default CareersIndexPage;
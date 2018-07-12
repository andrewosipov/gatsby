import React from 'react';
import Link from 'gatsby-link';
import {CONTENT_BLOCK, CONTENT_BLOCK_TEXT, CONTENT_BLOCK_INSIDE, CONTENT_BLOCK_FLEX, CONTENT_BLOCK_FLEX_INVERSE, CONTENT_BLOCK_NEWS_ITEM} from '../../constants';
import {getTitle2 as getTitle, getImageStandart as getImage, getPreview, getLink} from '../../helpers';

const NewsPageIndex = props => {
    const {title, preview, image, slug, className = null} = props;
    const sectionClassName = ( className !== null ) ? `${CONTENT_BLOCK} ${className}`: CONTENT_BLOCK;
    const link = `/about-us/blog/${slug}/`;

    return (
        <section className = {`${CONTENT_BLOCK} ${CONTENT_BLOCK_INSIDE} ${CONTENT_BLOCK_FLEX} ${CONTENT_BLOCK_FLEX_INVERSE} ${CONTENT_BLOCK_NEWS_ITEM}`}>
            <div className = {CONTENT_BLOCK_TEXT}>
                {getTitle(title)}
                {getPreview(preview)}
                {getLink(link, 'Read More')}
            </div>
            {getImage(image)}
        </section>
    );
};

export default NewsPageIndex;
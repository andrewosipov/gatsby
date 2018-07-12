import React from 'react';
import {CONTENT_BLOCK, CONTENT_BLOCK_INSIDE, CONTENT_BLOCK_TEXT, CONTENT_BLOCK_FLEX, CONTENT_BLOCK_INFO, CONTENT_BLOCK_FULL_WIDTH} from '../../constants';
import {getLinkTitle, getSubTitleP as getSubTitle, getDescriptionText as getDescription, getLink} from '../../helpers';

const EventBlock = (props) => {
    const {title, subTitle, description, image, link, linkURL} = props;
    return (
        <section className = {`${CONTENT_BLOCK} ${CONTENT_BLOCK_INSIDE} ${CONTENT_BLOCK_FLEX}`}>
            <div className = {CONTENT_BLOCK_INFO}>
                {getSubTitle(subTitle)}
            </div>
            <div className = {`${CONTENT_BLOCK_TEXT} ${CONTENT_BLOCK_FULL_WIDTH}`}>
                {getLinkTitle(title, linkURL)}
                {getDescription(description)}
                {getLink(link, linkURL)}
            </div>
        </section>
    );
};

export default EventBlock;
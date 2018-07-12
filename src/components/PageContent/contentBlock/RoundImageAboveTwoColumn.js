import React from 'react';
import {CONTENT_BLOCK, COLUMN_ITEM} from '../../constants';
import {getTitle3 as getTitle, getDescriptionText as getDescription, getImageRound as getImage, getLink} from '../../helpers';

const RoundImageAboveTwoColumn = (props) => {
    const {title, description, image} = props;
    return (
        <section className={`${COLUMN_ITEM} ${CONTENT_BLOCK}`}>
            {getImage(image)}
            {getTitle(title)}
            {getDescription(description)}
        </section>
    );
};

export default RoundImageAboveTwoColumn;
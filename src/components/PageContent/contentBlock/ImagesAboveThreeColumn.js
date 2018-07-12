import React from 'react';
import {CONTENT_BLOCK, CONTENT_BLOCK_IMG, COLUMN_THREE, COLUMN_ITEM} from '../../constants';
import {getTitle3 as getTitle, getDescription, getImageStandart as getImage, getLink} from '../../helpers';

const ImagesAboveThreeColumn = (props) => {
    const {title, description, image} = props;
    return (
        <section className = {`${COLUMN_THREE} ${CONTENT_BLOCK}`}>
            <div className = {`${CONTENT_BLOCK_IMG}`}>
                {getImage(image)}
            </div>
            {getTitle(title)}
            {getDescription(description)}
        </section>
    );
};

export default ImagesAboveThreeColumn;
import React from 'react';
import {CONTENT_BLOCK} from '../../constants';
import {getImageSquare as getImage, getLink} from '../../helpers';

const ImageAndCaption = props => {
    const {title, image, link, className = null} = props;
    const sectionClassName = ( className !== null ) ? `${CONTENT_BLOCK} ${className}`: CONTENT_BLOCK;

    return (
        <div className={sectionClassName}>
            {getImage(image)}
            <span>{title}</span>
        </div>
    );
};

export default ImageAndCaption;
import React from 'react';
import Link from 'gatsby-link';
import {CONTENT_BLOCK} from '../../constants';
import {getImageSquare as getImage, getLink} from '../../helpers';

const ImageAndCaption = props => {
    const {title, image, reference = null, slug, className = null} = props;
    const sectionClassName = ( className !== null ) ? `${CONTENT_BLOCK} ${className}`: CONTENT_BLOCK;
    const _slug = ( reference !== null ) ? reference.slug : slug;
    if( _slug )
        return (
            <Link to={_slug} className={sectionClassName}>
                {getImage(image)}
                <span>{title}</span>
            </Link>
        );
    else
        return (
            <div className={sectionClassName}>
                {getImage(image)}
                <span>{title}</span>
            </div>
        );
};

export default ImageAndCaption;
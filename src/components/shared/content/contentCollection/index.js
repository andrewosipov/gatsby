import React from 'react';
import Link from 'gatsby-link';

import ContentBlock from '../contentBlock';
import ProfileCollection from '../profileCollection';

const ContentCollection = (props) => {
    //console.dir(props);

    let className   = ( props.template != null && props.template.slug == 'round-image-above-two-column' )   ? 'inside-column-container' : null;
    className       = ( props.template != null && props.template.slug == 'images-above-three-column' )      ? 'column-container'        : className;
    className       = ( props.template != null && props.template.slug == 'profile-collection' )             ? 'profiles-container'      : className;

    const collectionClassName = ( props.className != null ) ? props.className : null;
    let title, collection;

    // standart element collection
    if( props.items != null && props.items.map != null && props.template != null ) {

        if( props.template.slug == 'profile-collection' ){
            // profile collection
            collection = (<ProfileCollection items = {props.items} />);
        }else{
            // other collection
            collection = props.items.map((item, index) => (
                <ContentBlock key={index} index={index} textTemplate={props.textTemplate} template={props.template} {...item} />
            ));
        }

        if( props.title != null ){
            title = (<h2 className="page-title">{props.title}</h2>);
        }

    }

    return (
        <div className={`${className} ${collectionClassName}`}>
            {title}
            {collection}
        </div>
    );
};

export default ContentCollection;
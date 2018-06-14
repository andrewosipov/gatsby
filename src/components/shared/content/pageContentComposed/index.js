import React from 'react';
import Link from 'gatsby-link';

import MetaData from '../../template/SeoMetaData';
import TitleSection from '../titleSection';
import Collection from '../contentCollection';
import ContentBlock from '../contentBlock';

const PageContent = (props) =>{ //console.dir(props);
    const metaData = ( props.seoMetaData != null ) ? (<MetaData {...props.seoMetaData} />) : (<MetaData {...props.defaultMetaData} />);
    const requestURL = ( props.requestQuoteUrl ) ? props.requestQuoteUrl.requestQuoteUrl : "";

    return (
        <div className="inside-container">
            {metaData}
            <TitleSection hideShareButtons={props.hideShareButtons} ivertOrder={true} {...props.titleSection} />
            <Collection title={props.header21} items={props.contentCollection}  className="images-list images-list-three-column" template={ {slug: "image-and-caption"} } />
            <Collection title={props.header22} items={props.contentCollection2} className="content-block__full-width" template={ {slug: "image-left"} } />
            <Collection title={props.header23} items={props.contentCollection24}  className="images-list" template={ {slug: "link-image-and-caption"} } />
            <div className="divider"></div>
            <h2 className="page-title">{props.header24}</h2>
            <Collection title={props.header3} items={props.contentCollection25} className="content-block__full-width" template={ {slug: "image-left"} } />
            <Collection title={props.header32} items={props.contentCollection26}  className="images-list" template={ {slug: "link-image-and-caption"} } />
            <p className="button-container"><Link to={requestURL} className="button">REQUEST A QUOTE</Link></p>
        </div>
    )
};

export default PageContent;
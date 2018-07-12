import React from 'react';
import Link from 'gatsby-link';

import MetaData from '../shared/template/SeoMetaData';
import TitleSection from './TitleSection';
import Collection from './ContentCollection';
import LeftMenu from '../shared/template/leftMenu';
import ContentBlock from './contentBlock/index';
import {getHeaderImage} from '../helpers';

const getBody = props => { //console.dir(props);
    const requestURL = ( props.requestQuoteUrl ) ? props.requestQuoteUrl.requestQuoteUrl : "";
    const collection1 = ( props.hideBlock1 === true ) ? null : <Collection title={props.header21} items={props.contentCollection}  className="images-list images-list-three-column" template={ {slug: "link-image-and-caption"} } />;
    const collection2 = ( props.hideBlock2 === true ) ? null : <Collection title={props.header22} items={props.contentCollection2} className="content-block__full-width" template={ {slug: "image-left"} } />;
    const collection3 = ( props.hideBlock3 === true ) ? null : <Collection title={props.header23} items={props.contentCollection24}  className="images-list" template={ {slug: "link-image-and-caption"} } />;
    const collection4 = ( props.hideBlock4 === true ) ? null : (
        <div>
            <div className="divider">&nbsp;</div>
            <h2 className="page-title">{props.header24}</h2>
            <Collection title={props.header3} items={props.contentCollection25} className="content-block__full-width" template={ {slug: "image-left"} } />
        </div>
    );
    const collection5 = ( props.hideBlock5 === true ) ? null : <Collection title={props.header32} items={props.contentCollection26}  className="images-list" template={ {slug: "link-image-and-caption"} } />;

    return (
        <div>
            <TitleSection hideShareButtons={props.hideShareButtons} ivertOrder={true} {...props.titleSection} />
            {collection1}
            {collection2}
            {collection3}
            {collection4}
            {collection5}
            <p className="button-container"><Link to={requestURL} className="button">REQUEST A QUOTE</Link></p>
        </div>
    );
};

const getMenu = props => {
    const {subMenu = null, location} = props;
    if( subMenu === null ) return null;

    return <LeftMenu items={subMenu.menuItems} location={location} />
};

const PageContent = props =>{ //console.dir(props);
    const metaData = ( props.seoMetaData != null ) ? (<MetaData {...props.seoMetaData} />) : (<MetaData {...props.defaultMetaData} />);

    if( props.templatePage === "Two Columns" )
        return (
            <div className="inside-container">
                {metaData}
                {getHeaderImage({...props.titleSection})}
                <div className="column-right">
                    {getBody(props)}
                </div>
                <div className="column-left">
                    {getMenu(props)}
                </div>
            </div>
        );

    return (
        <div className="inside-container">
            {metaData}
            {getHeaderImage({...props.titleSection})}
            {getBody(props)}
        </div>
    )
};

export default PageContent;
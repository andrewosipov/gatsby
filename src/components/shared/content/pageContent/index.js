import React from 'react';
import Link from 'gatsby-link';

import MetaData from '../../template/SeoMetaData';
import TitleSection from '../titleSection';
import Collection from '../contentCollection';
import ContentBlock from '../contentBlock';
import LeftMenu from '../../template/leftMenu';
import ApplicationList from '../../applications/applicationList';

const PageContent = (props) =>{ //console.dir(props);

    const metaData = ( props.seoMetaData != null ) ? (<MetaData {...props.seoMetaData} />) : (<MetaData {...props.defaultMetaData} />);
    const applications = ( props.applicationList != null ) ? (<ApplicationList {...props.applicationList} requestQuoteUrl = {props.requestQuoteUrl} hideButtons={props.hideApplicationButtons} />) : null;
    const requestButton = ( props.applicationList == null && props.requestQuoteUrl != null ) ? (<p className="button-container"><Link to={props.requestQuoteUrl.requestQuoteUrl} className="button">REQUEST A QUOTE</Link></p>) : null;

    if( props.templatePage == "Two Columns" ) {
        return (
            <div className="inside-container">
                {metaData}
                <div className="column-right">
                    <TitleSection hideShareButtons={props.hideShareButtons} {...props.titleSection} />
                    <Collection items={props.contentCollection} template={props.templateCollection} />
                    {applications}
                    {requestButton}
                </div>
                <div className="column-left">
                    <LeftMenu items={props.subMenu.menuItems} location={props.location} />
                </div>
            </div>
        )
    }

    if( props.templatePage == "News Page" ) {
        return (
            <div className="inside-container">
                {metaData}
                <div className="column-right">
                    <TitleSection hideShareButtons={props.hideShareButtons} className="news-page" {...props.titleSection} />
                    <Collection items={props.contentCollection} template={props.templateCollection} />
                    <ContentBlock {...props} />
                </div>
                <div className="column-left">
                    <LeftMenu items={props.subMenu.menuItems} location={props.location} />
                </div>
            </div>
        )
    }

    if( props.templatePage == "Careers Page" ) {
        return (
            <div className="inside-container">
                {metaData}
                <TitleSection hideShareButtons={props.hideShareButtons} className="news-page" {...props.titleSection} />
                <Collection items={props.contentCollection} textTemplate="content-page-with-collection" template={props.templateCollection} />
                <ContentBlock {...props} />
            </div>
        )
    }

    /*if( props.templatePage == "collapsible-collection" ) {
        return (
            <div className="inside-container">
                {metaData}
                <TitleSection hideShareButtons={props.hideShareButtons} {...props.titleSection} />
                <Collection items={props.contentCollection} template={props.templateCollection} />
                {applications}
                {requestButton}
            </div>
        )
    }*/

    //if( props.templatePage == 'one-column' || props.templatePage == null ) {
        return (
            <div className="inside-container">
                {metaData}
                <TitleSection hideShareButtons={props.hideShareButtons} {...props.titleSection} />
                <Collection items={props.contentCollection} template={props.templateCollection} />
                {applications}
                {requestButton}
            </div>
        )
    //}
};

export default PageContent;
import React from 'react';
import Link from 'gatsby-link';
import TwoColumns from './templatePage/TwoColumns';
import StandartPage from './templatePage/StandartPage';

import MetaData from '../shared/template/SeoMetaData';
import TitleSection from './TitleSection';
import Collection from './ContentCollection';
import ContentBlock from './contentBlock';
import LeftMenu from '../shared/template/leftMenu';
import ApplicationList from '../shared/Applications/ApplicationList';

const PageContent = (props) =>{ //console.dir(props);

    const metaData = ( props.seoMetaData != null ) ? (<MetaData {...props.seoMetaData} />) : (<MetaData {...props.defaultMetaData} />);
    const applications = ( props.applicationList != null ) ? (<ApplicationList {...props.applicationList} requestQuoteUrl = {props.requestQuoteUrl} hideButtons={props.hideApplicationButtons} />) : null;
    const requestButton = ( props.applicationList == null && props.requestQuoteUrl != null ) ? (<p className="button-container"><Link to={props.requestQuoteUrl.requestQuoteUrl} className="button">REQUEST A QUOTE</Link></p>) : null;

    if( props.templatePage === "Two Columns" )
        return <TwoColumns {...props} />;

    if( props.templatePage === "News Page" ) {
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

    if( props.templatePage === "Careers Page" ) {
        return (
            <div className="inside-container">
                {metaData}
                <TitleSection hideShareButtons={props.hideShareButtons} className="news-page" {...props.titleSection} />
                <Collection items={props.contentCollection} textTemplate="content-page-with-collection" template={props.templateCollection} />
                <ContentBlock {...props} />
            </div>
        )
    }

    // standart page
    return <StandartPage {...props} />;
};

export default PageContent;
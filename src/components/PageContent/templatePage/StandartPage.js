import React from 'react';
import TitleSection from '../TitleSection';
import Collection from '../ContentCollection';
import LeftMenu from '../../shared/template/leftMenu';
import {getMetaData, getHeaderImage, getApplicationList, getRequestButton} from '../../helpers';

const TwoColumns = (props) =>{
    const {
        titleSection,
        contentCollectionTitle,
        contentCollection,
        templateCollection,
        applicationList,
        requestQuoteText,
        requestQuoteUrl,
        hideApplicationButtons,
        hideShareButtons,
        subMenu,
        location,
        seoMetaData,
        defaultMetaData
    } = props;

    return (
        <div className="inside-container">
            {getMetaData(seoMetaData, defaultMetaData)}
            {getHeaderImage({...titleSection})}
            <TitleSection hideShareButtons={hideShareButtons} {...titleSection} />
            <Collection title={contentCollectionTitle} items={contentCollection} template={templateCollection} />
            {getApplicationList(applicationList, requestQuoteUrl, hideApplicationButtons)}
            {getRequestButton(applicationList, requestQuoteText, requestQuoteUrl)}
        </div>
    )
};

export default TwoColumns;
import React from 'react';

import Slider from '../components/HomePage/MainSlider';
import IntegratedSoftware from '../components/HomePage/IntegratedSoftware';
import KeyFeatures from '../components/HomePage/KeyFeatures';
import PopularPackages from '../components/HomePage/PopularPackages';
import NewProducts from '../components/HomePage/NewProducts';
import CallToAction from '../components/HomePage/CallToAction';
import Features from '../components/HomePage/Features';
import MetaData from '../components/shared/template/SeoMetaData';
import ContentBlock from '../components/PageContent/contentBlock';
import Button from '../components/shared/buttons';


export default function HomePage(props){
    const data = { content: props.pathContext };
    if( data === null ) return null;

    const metaData = ( data.content.seoMetaData !== null ) ? (<MetaData {...data.content.seoMetaData} />) : (<MetaData {...data.defaultMetaData} />);

    return (
        <div>
            {metaData}

            <Slider
                items = {data.content.slider}
            />

            {/* About Music */}
            <ContentBlock
                title = {data.content.aboutMusicFirst.title}
                description  = {data.content.aboutMusicFirst.description}
                template = { {slug: "title-description"} }
                className = ''
            />

            {/* Online Classroom */}
            <ContentBlock
                title       = {data.content.integratedSoftwareTitleDesc.title}
                description = {data.content.integratedSoftwareTitleDesc.description}
                template    = { {slug: "title-description"} }
                className   = ''
            />

            <IntegratedSoftware
                items = {data.content.integratedSoftware}
            />

            <KeyFeatures
                title = {data.content.keyFeaturesTitle}
                items = {data.content.keyFeatures}
            />



            <Button text={data.content.keyFeaturesButtonText} link={data.content.keyFeaturesButtonLink} />

            <PopularPackages
                title       = {data.content.popularPackagesTitle}
                subTitle    = {data.content.popularPackagesSubTitle}
                description = {null}
                items       = {data.content.popularPackages}
            />

            <CallToAction buttonText = {data.content.customizeButtonText} buttonLink = {data.content.customizeButtonLink} />

            <NewProducts
                imageTitle  = {null}
                title    = "New Products"
                description = {null}
                items       = {data.content.newProducts}
            />



            <Features items = {data.content.features} />

        </div>
    )
};
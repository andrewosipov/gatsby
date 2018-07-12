import React from 'react';
import CollapsibleBlock from './CollapsibleBlock';
import StandartContentBlock from './StandartContentBlock';
import RoundImageAboveTwoColumn from './RoundImageAboveTwoColumn';
import ImagesAboveThreeColumn from './ImagesAboveThreeColumn';
import ImageLeftAndRight from './ImageLeftAndRight';
import WithoutFlat from './WithoutFlat';
import Newsletter from './Newsletter';
import NewsPageIndex from './NewsPageIndex'
import CareersIndexPage from './CareersIndexPage';
import ImageAndCaption from './ImageAndCaption';
import LinkImageAndCaption from './LinkImageAndCaption';
import TitleDescription from './TitleDescription';
import EventBlock from './EventBlock';

const ContentBlock = (props) => {

    const {template = null} = props;

    if( template === null  )
        return <StandartContentBlock {...props} />;

    if ( template.slug === 'round-image-above-two-column' )
        return <RoundImageAboveTwoColumn {...props} />;

    // three columns with square images
    if ( template.slug === 'images-above-three-column' )
        return <ImagesAboveThreeColumn {...props} />;

    // image to left and image to right both
    if ( template.slug === 'image-left' || template.slug === 'image-left-and-right' )
        return <ImageLeftAndRight {...props} />;

    if ( template.slug === 'without-float' )
        return <WithoutFlat {...props} />;

    // collapsible block like a FAQ
    if ( template.slug === 'collapsible-collection' )
        return <CollapsibleBlock hideTitle = "Yes" {...props} />;

    // event entry
    if ( template.slug === 'event' )
        return <EventBlock {...props} />;

    // news index page
    if ( template.slug === 'news-page-index' )
        return <NewsPageIndex {...props} />;

    // careers index page
    if ( template.slug === 'careers-index-page' )
        return <CareersIndexPage {...props} />;

    // newsletters
    if ( template.slug === 'newsletters' )
        return <Newsletter {...props} />;

    // title-description
    if ( template.slug === 'title-description' ) {
        return <TitleDescription {...props} />;
    }

    // image and caption for composed pages
    if ( template.slug === 'image-and-caption' )
        return <ImageAndCaption {...props} />;

    // link image and caption for composed pages
    if ( template.slug === 'link-image-and-caption' )
        return <LinkImageAndCaption {...props} />;

};

export default ContentBlock;
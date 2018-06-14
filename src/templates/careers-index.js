import React from 'react';
import PageContent from '../components/shared/content/pageContent';

export default function Template( props ) {
    const data = props.pathContext;
    //console.dir(data);
    //const metaData = ( data.seoMetaData != null ) ? (<MetaData {...data.seoMetaData} />) : (<MetaData {...data.defaultMetaData} />);
    data.templateCollection = { slug: 'careers-index-page' };
    data.contentCollection = data.collection;
    return <PageContent location={props.location} {...data} />
};

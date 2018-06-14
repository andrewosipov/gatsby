import React from "react";
import MetaData from '../components/shared/template/SeoMetaData';
import TitleSection from '../components/shared/content/titleSection';

import ApplicationPage from '../components/shared/applications/applicationPage';

export default function Template( props ) { //console.dir(props);
    // get the contentful data
    const data =  props.pathContext;
    //console.dir(data);
    const metaData = ( data.seoMetaData != null ) ? (<MetaData {...data.seoMetaData} />) : (<MetaData {...data.defaultMetaData} />);
    const title = `Request a Demo of ${data.title}`;
    const iframe = ( data.demoIframeUrl != null ) ? (<div className="contact__form"><iframe src={data.demoIframeUrl.demoIframeUrl} width="100%" height="500" frameBorder="0" marginheight="0" marginwidth="0">Loading...</iframe></div>) : null;
    return (
        <div className="inside-container">
            {metaData}
            <TitleSection hideShareButtons={"Yes"} title={title} />
            {iframe}
        </div>
    )
}
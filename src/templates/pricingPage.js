import React, {Component} from 'react';
import ReactDOM from 'react-router-dom';
import Link from 'gatsby-link';

import TitleSection from '../components/PageContent/TitleSection';
import MetaData from '../components/shared/template/SeoMetaData';

class PricingPage extends (Component) {
    constructor(props){
        super(props);
    }

    setIframeRef = ref => {
        this.iframe = ref;
    };

    componentDidMount(){ // replace the iframe src by URI params
        //console.dir(this.iframe);
        const res = this.iframe.baseURI.match(/(\?.+)$/);
        this.iframe.src = res ? "https://www.musicfirst.com/widget/pricing-estimator/step2" + res[1] : "https://www.musicfirst.com/widget/pricing-estimator/step1";
    }

    render(){
        const data = { content: this.props.pathContext };
        const metaData = ( data.content.seoMetaData !== null ) ? (<MetaData {...data.content.seoMetaData} />) : ( <MetaData {...data.defaultMetaData} />);

        return (
            <div className="inside-container" >
                {metaData}
                <TitleSection hideShareButtons={data.content.hideShareButtons} {...data.content.titleSection} />
                <div className="iframe__container">
                    <iframe ref={this.setIframeRef} width="560" height="500" src={`https://www.musicfirst.com/widget/pricing-estimator/step1`} frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export default PricingPage;

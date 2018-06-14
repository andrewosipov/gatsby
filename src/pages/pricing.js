import React from 'react';
import ReactDOM from 'react-router-dom';
import Link from 'gatsby-link';

import TitleSection from '../components/shared/content/titleSection';
import MetaData from '../components/shared/template/SeoMetaData';

class PricingPage extends (React.Component) {
    constructor(props){
        super(props);
    }

    setIframeRef = ref => {
        this.iframe = ref;
        //console.dir('---------');
        //console.dir( ref);
    }

    componentDidMount(){ // replace the iframe src by URI params
        //console.dir(this.iframe);
        const res = this.iframe.baseURI.match(/(\?.+)$/);
        this.iframe.src = res ? "https://www.musicfirst.com/widget/pricing-estimator/step2" + res[1] : "https://www.musicfirst.com/widget/pricing-estimator/step1";
    }

    render(){
        const {data} = this.props;
        const metaData = ( data.content.seoMetaData != null ) ? (<MetaData {...data.content.seoMetaData} />) : ( <MetaData {...data.defaultMetaData} />);

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
};

export default PricingPage;

export const query  = graphql`
  query pricingPage {
    content: contentfulContentPage( contentful_id: { eq: "57bd566m3C8AwYawE4gI48" } ){
      id
      title
      slug
      titleSection{
            id
            title
            subTitle
            description{
                  id
                  description
            }
            image{
                  id
                  resolutions(width:247, height:185, quality: 100, resizingBehavior: PAD ){
                        src
                        width
                        height
                  }
            }  
            video  
            typeFormUrl                  
      }
      
      hideShareButtons   
      
      seoMetaData{
            id
            metaTitle
            metaDescription{
                  id
                  metaDescription
            }
            metaKeywords
            openGraphTitle
            openGraphDescription{
                  id
                  openGraphDescription
            }
            openGraphUrl
            openGraphImage{
                  id
                  file{
                      url
                  }
            }
      }      

    }
    
    
    
  }
`;
import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import { Carousel } from 'react-responsive-carousel';
import ApplicationIframe from './Iframe';
import ApplicationActions from './Actions';
import ShareThis from '../shareThis/index';
import MetaData from '../template/SeoMetaData';

const Application = (props) =>{ //console.dir(props);

    const metaData = ( props.seoMetaData != null ) ? (<MetaData {...props.seoMetaData} />) : (<MetaData {...props.defaultMetaData} />);
    const title         = ( props.title != null )       ? props.title : null;
    const icon          = ( props.icon.square != null ) ? props.icon.square : null;
    const description   = ( props.description != null ) ? props.description.description : null;
    const actions       = ( props.actions != null ) ? (<ApplicationActions {...props} />) : null;
    const platforms     = props.supportedPlatforms.map((item, index) => ( <li key={index}><img src={item.icon.square.src} width={item.icon.square.width} height={item.icon.square.height} alt={item.title} title={item.title} /></li> ));
    const solutions     = props.solutions.map((item, index) => ( <li key={index}><Link to={item.slug}>{item.title}</Link></li> ));
    const shareButtons  = ( props.hideShareButtons == "Yes" ) ? null : (<ShareThis />);

    let items = [];
    let headerClassName = null;
    if( props.slider != null && props.slider.map != null ) {
        items = props.slider.map((item, index) => {
            headerClassName = ( item.video != null ) ? 'application__header_iframe' : headerClassName;
            return (
                <div key={index} className="application__slider_item" style={{backgroundImage: 'url(' + item.image.file.url + ')'}}>

                    <ApplicationIframe video={item.video}/>

                </div>
            )
        });
    }

    return (
        <div className="application-page">
            {metaData}
            <div className={"application__header " + headerClassName}>
                <div className="application__slider">
                    <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={ ( items.length>1 ) ? true : false } >
                        {items}
                    </Carousel>
                </div>
                <div className="inside-container ">
                    <div className="title">
                        <img src={icon.src} width={icon.width} height={icon.height} alt={title} />
                        <h1>{title}</h1>
                        {actions}
                    </div>
                </div>
            </div>
            <div className="inside-container ">
                <div className="column-right application__content">
                    <ReactMarkdown>{description}</ReactMarkdown>
                </div>
                <div className="column-left">
                    <h4>Compatible OS & Browsers</h4>
                    <ul className="platforms">{platforms}</ul>
                    <h4>Solutions</h4>
                    <ul className="solutions">{solutions}</ul>
                    {shareButtons}
                </div>
            </div>
        </div>
    )

};

export default Application;
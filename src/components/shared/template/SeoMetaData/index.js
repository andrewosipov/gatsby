import React from 'react';
import Helmet from 'react-helmet';

const SeoMetaData = (props) => {
    //console.dir(props);
    const title          = ( props.metaTitle != null )       ? props.metaTitle : "Musicfirst";
    const description    = ( props.metaDescription != null ) ? props.metaDescription.metaDescription : "MusicFirst, the Digital Education Division of the Music Sales Group, was founded with one mission in mind: Offer music teachers and their students easy-to-use, affordable cloud-based solutions that enable music learning, creation, assessment, sharing, and exploration on any device at anytime, anywhere.";
    const keywords       = ( props.metaKeywords != null )    ? props.metaKeywords : "";
    const openGraphTitle = ( props.openGraphTitle != null )  ? props.openGraphTitle : "Musicfirst";
    const openGraphDescription = ( props.openGraphDescription != null )  ? props.openGraphDescription.openGraphDescription : "MusicFirst, the Digital Education Division of the Music Sales Group, was founded with one mission in mind: Offer music teachers and their students easy-to-use, affordable cloud-based solutions that enable music learning, creation, assessment, sharing, and exploration on any device at anytime, anywhere.";
    const openGraphUrl   = ( props.openGraphUrl != null )  ? props.openGraphUrl : "https://www.musicfirst.com";
    const openGraphImage   = ( props.openGraphImage != null )  ? props.openGraphImage.file.url : "https://www.musicfirst.com/assets/images/logo.png";

    return (
        <Helmet
            title = {title}
            meta  = {[
                { name: 'description',  content: description },
                { name: 'keywords',     content: keywords },
                { property: 'og:type',  content: 'arcticle' },
                { property: 'og:title', content: openGraphTitle },
                { property: 'og:image', content: openGraphImage },
                { property: 'og:description', content: openGraphDescription },
            ]}
            script = {[
                { src: "//platform-api.sharethis.com/js/sharethis.js#property=5ae433bb4d3f70001197fbf8&product=inline-share-buttons", "type": "text/javascript" },
                { type: 'text/javascript', innerHTML: `
                    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '2114181848795954');
                    fbq('track', 'PageView');`
                }
            ]}
            noscript = {[
                { innerHTML: `<img height="1" width="1" src="https://www.facebook.com/tr?id=2114181848795954&ev=PageView&noscript=1" />` }
            ]}
        />
    );
}

export default SeoMetaData;

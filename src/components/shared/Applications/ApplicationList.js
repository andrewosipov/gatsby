import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'gatsby-link';

const ApplicationList = (props) => {
    //console.dir(props);
    const hideButton = ( props.hideButtons ) ? "hide-buttons" : "";
    const title = ( props.hideTitle  ) ? null : (<h3><span>{props.title}</span></h3>);
    const requestURL = ( props.requestQuoteUrl ) ? (<p className="button-container"><Link to={props.requestQuoteUrl.requestQuoteUrl} className="button">REQUEST A QUOTE</Link></p>) : null;
    let collection;
    if( props.collection != null && props.collection.map != null ) {

        collection = props.collection.map((item, index) => (
            <li key={index}>
                <Link to={item.slug} className="image"><img src={item.icon.square.src} width={item.icon.square.width} height={item.icon.square.height} alt={item.title}/></Link>
                <Link to={item.slug} className="title">{item.title}</Link>
                <ReactMarkdown>{item.preview.preview}</ReactMarkdown>
                <p className="button-container"><Link to={item.slug} className="button button__mini button__green">Learn More</Link></p>
            </li>
        ));

    }

    return (
        <div className={"application-list content-block content-block__text content-block__full-width "+hideButton}>
            {title}
            <ul>{collection}</ul>
            {requestURL}
        </div>
    );
};

export default ApplicationList;
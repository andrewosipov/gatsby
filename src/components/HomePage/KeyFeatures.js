import React from 'react';
import ReactMarkdown from 'react-markdown';

const KeyFeatures = (props) => {

    if( !props.items ) return null;

    const list = props.items.map((item, index) => (
        <li key={item.id}>
            <h3>{item.title}</h3>
            <p className="key-features__icon"><img src={item.image.file.url} width="119" height="119" alt={item.title} title={item.title} /></p>
            <div className="key-features__text"><ReactMarkdown>{item.description.description}</ReactMarkdown></div>
        </li>
    ));
    const buttonText  = ( props.buttonText != null ) ? props.buttonText : 'Start Your Free Trial Now';
    const buttonLink  = ( props.buttonLink != null ) ? props.buttonLink : '#';

    return (
        <section className="content-block key-features">
            <h2><span>{props.title}</span></h2>
            <ul>
                {list}
            </ul>
        </section>
    );
};

export default KeyFeatures;

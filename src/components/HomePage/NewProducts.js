import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

const NewProducts = (props) => {
    const list = props.items.map((item, index) => {
        const logo = ( item.logo ) ? <img src={item.logo.file.url} alt="" /> : null;
        return (
            <li key={index} style={ { backgroundImage: 'url('+item.image.resolutions.src+')'} }>
                {logo}
                <ReactMarkdown>{item.description.description}</ReactMarkdown>
                <p className="button-container"><Link to={item.link} className="button ">{item.linkText}</Link></p>
            </li>
        )
    });
    return (
        <section className="content-block new-products ">
            <h2><span>{props.title}</span></h2>
            <ul>
                {list}
            </ul>
        </section>
    );
};

export default NewProducts;

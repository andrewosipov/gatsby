import React from 'react';
import Link from 'gatsby-link';

//  <ContentColumnItem image={item.image} title={item.title} text={item.description.description} key={index} />

const IntegratedSoftware = (props) => {
    const list = props.items.map((item, index) => (
        <li key={index}>
            <p><img src={item.image.file.url} width="97" height="97" alt={item.title} title={item.title}/></p>
            <h3>{item.title}</h3>
        </li>
    ));
    return (
        <section className="content-block integrated-software">
            <h2><span>{props.title}</span></h2>
            <ul>
                {list}
            </ul>
        </section>
    );
};

export default IntegratedSoftware;

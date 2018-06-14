import React from 'react';
import Link from 'gatsby-link';

const Features = (props) => (
    <section className="features content-block">
        <ul>
            { props.items.map( item => <li key={item.id}><h3>{item.title}</h3><p>{item.description.description}</p></li> ) }
        </ul>
    </section>
);

export default Features;

import React from 'react';
import Link from 'gatsby-link';

const Buttons = (props) => {
    const buttonText  = ( props.text != null ) ? props.text : 'Start Your Free Trial Now';
    const buttonLink  = ( props.link != null ) ? props.link : '#';

    return (<section className="content-block">
        <p className="button-container"><Link to={buttonLink} className="button button__big">{buttonText}</Link></p>
    </section>);
};

export default Buttons;
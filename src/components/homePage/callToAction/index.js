import React from 'react';
import Link from 'gatsby-link';

const CallToAction = (props) => {
    const buttonText  = ( props.buttonText != null ) ? props.buttonText : 'Customize Now';
    const buttonLink  = ( props.buttonLink != null ) ? props.buttonLink : '#';

    return (
        <section className="call-to-action content-block">
            <p className="call-to-action__p">Or build your own package</p>
            <p className="call-to-action__button-container button-container"><Link to={buttonLink} className="button button__big">{buttonText}</Link></p>
            <p className="call-to-action__p">Call us on <span className="content__red-text">1-855-896-3344</span></p>
        </section>
    );
}

export default CallToAction;

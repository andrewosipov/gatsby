import React from 'react';
import Link from 'gatsby-link';

const ContactBlock = (props) => { //console.dir(props);
    const parent = props.parent;
    const email = ( props.email != null ) ? (<p className="item">Email: <a href={"mailto:" + props.email}>{props.email}</a></p>) : null;
    const phone = ( props.phone != null ) ? (<p className="item">Phone: {props.phone}</p>) : null;
    const description = ( props.description != null ) ? (<p className="item">{props.description.description}</p>) : null;
    let covering = [];
    if( props.coveringStates != null ) {
        const tempCovering = props.coveringStates.map((item, index) => {
            const spacer = ( index > 0 ) ? ', ' : null;
            return (<span key={item.id}>{spacer}<a key={item.id} onClick={props.parent.linkHandler} style={{ color: '#'+props.color }}>{item.shortTitle != null ? item.shortTitle : item.title}</a></span> );
        });
        covering = covering.concat(tempCovering);
    }
    if( props.coveringCountries != null ) {
        const tempCovering = props.coveringCountries.map((item, index) => {
            const spacer = ( index > 0 || ( props.coveringStates != null && props.coveringStates.length > 0 ) ) ? ', ' : null;
            return (<span key={item.id}>{spacer}{item.shortTitle != null ? item.shortTitle : item.title}</span> );
        });
        covering = covering.concat(tempCovering);
    }
    if( props.coveringContinents != null ) {
        const tempCovering = props.coveringContinents.map((item, index) => {
            const spacer = ( index > 0 || ( props.coveringCountries != null && props.coveringCountries.length > 0 ) || ( props.coveringStates != null && props.coveringStates.length > 0 ) ) ? ', ' : null;
            return (<span key={item.id}>{spacer}{item.shortTitle != null ? item.shortTitle : item.title}</span> );
        });
        covering = covering.concat(tempCovering);
    }
    if( covering.length > 0 ) {
        covering = (<p >Covering: {covering}</p>);
    }

    return (
        <div className="contact__block" >
            <p className="title">{props.title}</p>
            {covering}
            {email}
            {phone}
            {description}
        </div>
    );
}

export default ContactBlock;
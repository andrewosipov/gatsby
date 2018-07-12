import React from 'react';

const Newsletter = props => {
    const {title, link} = props;

    return (
        <div className="newsletters">
            <a href={link} target="_blank">{title}</a>
        </div>
    )
};

export default Newsletter;
import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

const PopularPackages = (props) => {
    const list = props.items.map((item, index) => {
        let badge = ( item.enableBadge === true ) ? (<div className="badge"><span>{item.badgeText}</span></div>) : "";
        let _className = ( item.enableBadge === true ) ? "stand-out" : "";
        const title = ( item.imageTitle != null ) ? (<img src={item.imageTitle.resolutions.src} alt="" />) : (<h3>{item.title}</h3>);

        return (
            <li className={_className} key={item.id}>
                <div>
                    {badge}
                    {title}
                    <p className="popular-packages__starting-at">{item.label1}</p>
                    <p className="popular-packages__price">${item.value}</p>
                    <p className="popular-packages__per-user-year">{item.label2}</p>
                    <div className="popular-packages__text"><ReactMarkdown source={item.description.description} /></div>
                    <p className="popular-packages__button-container">
                        <span className="popular-packages__note">{item.noteText}</span>
                        <Link to={item.buttonLink} className="popular-packages__button button ">{item.buttonText}</Link>
                    </p>
                </div>
            </li>
        )
    });


    let subTitle    = ( props.imageTitle != null ) ? (<img className="image-title" src={props.imageTitle.resolutions.src} alt="" />) : (<h3><span>{props.subTitle}</span></h3>);
    let description = ( props.description != null ) ? (<div className="content-block__text content-block__full-width"><ReactMarkdown>{props.description}</ReactMarkdown></div>) : "";

    return (
        <section className="content-block popular-packages ">

            {subTitle}
            {description}
            <ul>
                {list}
            </ul>
        </section>
    );
};

export default PopularPackages;

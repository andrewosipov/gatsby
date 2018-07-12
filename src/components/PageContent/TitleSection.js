import React from 'react';
import ReactMarkdown from 'react-markdown';
import ShareThis from '../shared/shareThis/index';

const TitleSection = (props) =>{ //console.dir(props);
    const title         = ( props.title != null ) ? props.title : null;
    const subTitle      = ( props.subTitle != null ) ? (<h3 className="sub-title">{props.subTitle}</h3>) : null;
    const description   = ( props.description != null ) ? props.description.description : null;
    const image         = ( props.image != null ) ? (<img className="content-block__img-right" src={props.image.resolutions.src} width={props.imagewidth} height={props.imageheight} alt="" />) : null;
    const shareButtons  = ( props.hideShareButtons == "Yes" ) ? null : (<ShareThis />);
    const typeForm      = ( props.typeFormUrl != null ) ? (<div className="contact__form"><iframe width="560" height="500" src={props.typeFormUrl} frameBorder="0" allowFullScreen></iframe></div>) : null;
    const invert        = ( props.ivertOrder == true ) ? true : false;
    let video           = null;
    const sectionClassName = ( props.className != null ) ? props.className : "";
    const headerImage = ( props.fullScreenImage != null ) ? (<img className="header-image" src={props.fullScreenImage.resolutions.src} width={props.fullScreenImage.resolutions.width} height={props.fullScreenImage.resolutions.height} alt="" />) : null;
    const noteText = ( props.noteText != null && props.noteTitle != null ) ? (<div className={`header-note ${props.noteColor}`}><span className="text">{props.noteLabel}</span><span className="title">{props.noteTitle}</span><span className="text">{props.noteText}</span></div>) : null;

    if( props.video != null ) {
        const regexpVideo = props.video.match(/v=([^&]+)/);
        video = props.video ? (<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + regexpVideo[1]} frameBorder="0" allowFullScreen></iframe>) : null;
    }

    let text;
    if( invert ){
        text = (
            <div className="content-block__text content-block__text_left">
                {video}
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
        );
    }else {
        text = (
            <div className="content-block__text content-block__text_left">
                <ReactMarkdown>{description}</ReactMarkdown>
                {video}
            </div>
        );
    }


    return (
        <section className={"content-block content-block__flex " + sectionClassName}>
            {noteText}
            <h1><span>{title}</span></h1>
            {subTitle}
            {text}
            {image}
            {typeForm}
            {shareButtons}
        </section>
    );
};

export default TitleSection;
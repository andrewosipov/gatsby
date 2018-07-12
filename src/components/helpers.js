import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import MetaData from './shared/template/SeoMetaData';
import ApplicationList from './shared/Applications/ApplicationList';
import {CONTENT_BLOCK, CONTENT_BLOCK_TEXT, CONTENT_TEXT, CONTENT_BLOCK_IMG, CONTENT_BLOCK_INSIDE, CONTENT_BLOCK_FLEX,
    CONTENT_BLOCK_FLEX_INVERSE, CONTENT_BLOCK_LINK, DEFAULT_LINK_TEXT, IMAGE_TITLE, HEADER_IMAGE} from './constants';


export const getTitle2 = (title = null) => {
    return (title !== null) ? <h2><span>{title}</span></h2> : null;
};

export const getTitle3 = (title = null) => {
    return (title !== null) ? <h3><span>{title}</span></h3> : null;
};

export const getImageTitle = (title = null, imageTitle = null) => {
    return ( imageTitle !== null ) ? (<img className = {IMAGE_TITLE} src={imageTitle.src} alt="" />) : (<h2><span>{title}</span></h2>) ;
};

export const getSubTitleP = (subTitle = null) => {
    return (subTitle !== null) ? <p><span>{subTitle}</span></p> : null;
};

export const getLinkTitle = (title = null, link = null) => {
    return (title !== null && link !== null ) ? <h2><a href={link} target="_blank"><span>{title}</span></a></h2> : null;
};

// -----------

export const getPreview = (preview = null) => {
    return (preview !== null) ? <div className={`${CONTENT_BLOCK_TEXT}`}><ReactMarkdown>{preview.preview}</ReactMarkdown></div> : null;
};


export const getDescription = (description = null) => {
    return (description !== null) ? <div className={`${CONTENT_BLOCK_TEXT}`}><ReactMarkdown>{description.description}</ReactMarkdown></div> : null;
};

export const getDescriptionText = (description = null) => {
    return (description !== null) ? <div className={`${CONTENT_TEXT}`}><ReactMarkdown>{description.description}</ReactMarkdown></div> : null;
};

export const getDescriptionCustomClassName = (description = null, className = CONTENT_TEXT) => {
    return (description !== null) ? <div className={className}><ReactMarkdown>{description.description}</ReactMarkdown></div> : null;
};

// -----------

export const getHeaderImage = ({fullScreenImage:image = null}) => {
    return (image !== null) ? <div className={`${HEADER_IMAGE}`}><img src={image.resolutions.src} width={image.resolutions.width} height={image.resolutions.height} /></div> : null;
};

export const getImageStandart = (image = null) => {
    return (image !== null && image.standart !== undefined) ? <img className={`${CONTENT_BLOCK_IMG}`} src={image.standart.src} width={image.standart.width} height={image.standart.height} /> : null;
};

export const getImageRound = (image = null) => {
    return (image !== null && image.round !== undefined) ? <img src={image.round.src} width={image.round.width} height={image.round.height} /> : null;
};

export const getImageSquare = (image = null) => {
    return (image !== null && image.square !== undefined) ? <img src={image.square.src} width={image.square.width} height={image.square.height} /> : null;
};

// -----------

export const getLink = (link = null, linkText = DEFAULT_LINK_TEXT) => {
    return (link !== null) ? (<p className={`${CONTENT_BLOCK_LINK}`}><Link to={link}>{linkText}</Link></p>) : null;
};

// -----------

export const getMetaData = (seoMetaData = null, defaultMetaData = null) => {
    return ( seoMetaData !== null ) ? (<MetaData {...seoMetaData} />) : (<MetaData {...defaultMetaData} />);
};

// -----------

export const getApplicationList = (applicationList = null, requestQuoteUrl = null, hideApplicationButtons) => {
    return ( applicationList !== null ) ? (<ApplicationList {...applicationList} requestQuoteUrl = {requestQuoteUrl} hideButtons={hideApplicationButtons} />) : null;
};

export const getRequestButton = (applicationList = null, requestQuoteText = 'REQUEST A QUOTE', requestQuoteUrl = null) => {
    return ( applicationList === null && requestQuoteUrl !== null ) ? (<p className="button-container"><Link to={requestQuoteUrl.requestQuoteUrl} className="button">{requestQuoteText}</Link></p>) : null;
};
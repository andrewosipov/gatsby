import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';
import CollapsibleBlock from './collapsibleBlock';

const ContentBlock = (props) => { //console.dir(props);

    const title         = ( props.title != null )       ? props.title : null;
    const subTitle      = ( props.subTitle != null )    ? props.subTitle : null;
    const preview       = ( props.preview != null )     ? props.preview.preview : null;
    const description   = ( props.description != null ) ? props.description.description : null;
    const imageTitle    = ( props.imageTitle != null )  ? props.imageTitle.resolutions : null;
    const imageSquare   = ( props.image != null )       ? props.image.square : null;
    const imageRound    = ( props.image != null )       ? props.image.round : null;
    const imageStandart = ( props.image != null )       ? props.image.standart : null;
    const imageStandartImage = ( imageStandart != null )       ? (<img className="content-block__img" src={props.image.standart.src} width={props.image.standart.width} height={props.image.standart.height} />) : null;
    const slug          = ( props.slug != null )        ? props.slug : null;
    const linkURL       = ( props.link != null )        ? props.link : null;
    const linkText      = ( props.linkText != null )    ? props.linkText : "LEARN MORE HERE";
    const link          = ( props.link != null )        ? (<p className="content-block__link"><Link to={props.link}>{linkText}</Link></p>) : null;
    const inverseBlock  = ( props.index % 2 == 0 )      ? "content-block__flex_inverse" : null;
    const sectionClassName = ( props.className != null ) ? "content-block " + props.className : "content-block";
    const textClassName    = ( props.textTemplate == "content-page-with-collection" ) ? "content-block__text content-block__full-width" : "content-block__text";

    if( props.template != null ) {

        // columns with round images
        if ( props.template.slug == 'round-image-above-two-column' ) {
            return (
                <section className="column-item content-block">
                    <img src={imageRound.src} width={imageRound.width} height={imageRound.height}/>
                    <h3><span>{title}</span></h3>
                    <div className="text"><ReactMarkdown>{description}</ReactMarkdown></div>
                </section>
            );
        }

        // three columns with square images
        if ( props.template.slug == 'images-above-three-column' ) {
            return (
                <section className="content-block column-three">
                    <div className="content-block__img">
                        <img src={imageStandart.src} width={imageStandart.width} height={imageStandart.height}  alt="" />
                    </div>
                    <h3><span>{title}</span></h3>
                    <div className="content-block__text"><ReactMarkdown>{description}</ReactMarkdown></div>
                </section>
            );
        }

        // image to left and image to right both
        if ( props.template.slug == 'image-left' || props.template.slug == 'image-left-and-right' ) {
            // if the template is 'image-left-and-right' the content block should be reverseble
            const inverse = ( props.template.slug == 'image-left-and-right' ) ? inverseBlock : "content-block__flex_inverse";
            return (
                <section className={`content-block content-block__inside content-block__flex ${inverse} ${sectionClassName}`}>
                    <div className="content-block__text">
                        <h2><span>{title}</span></h2>
                        <div className="content-block__text"><ReactMarkdown>{description}</ReactMarkdown></div>
                        {link}
                    </div>
                    <img className="content-block__img" src={imageStandart.src} width={imageStandart.width} height={imageStandart.height} />
                </section>
            );
        }

        if ( props.template.slug == 'without-float' ) {
            const image = ( imageStandart != null ) ? (<img className="content-block__img" src={imageStandart.src} width={imageStandart.width} height={imageStandart.height}/>) : null;
            const titleInside = ( props.hideTitle == "Yes" ) ? null : (<h2><span>{title}</span></h2>);
            return (
                <section className="content-block content-block__inside ">
                    <div className="content-block__text content-block__full-width">
                        {titleInside}
                        <div className="text"><ReactMarkdown>{description}</ReactMarkdown></div>
                        {link}
                    </div>
                    {image}
                </section>
            );
        }

        // collapsible block like a FAQ
        if ( props.template.slug == 'collapsible-collection' ) {
            const image = ( imageStandart != null ) ? (<img className="content-block__img" src={imageStandart.src} width={imageStandart.width} height={imageStandart.height}/>) : null;
            const titleInside = ( props.hideTitle == "Yes" ) ? null : (<h2><span>{title}</span></h2>);
            return (
                <CollapsibleBlock title = {title} description = {description} link = {link} image = {image} />
            );
        }

        // event entry
        if ( props.template.slug == 'event' ) {
            return (
                <section className="content-block content-block__inside content-block__flex ">
                    <div className="content-block__info">
                        <p><span>{subTitle}</span></p>
                    </div>
                    <div className="content-block__text content-block__full-width">
                        <h2><a href={linkURL} target="_blank"><span>{title}</span></a></h2>
                        <ReactMarkdown>{description}</ReactMarkdown>
                        <p><a href={linkURL} target="_blank">{linkText}</a></p>
                    </div>
                </section>
            )
        }

        // news index page
        if ( props.template.slug == 'news-page-index' ) {
            const link = `/about-us/blog/${slug}/`;
            return (
                <section className={"content-block content-block__inside content-block__flex content-block__flex_inverse content-block__news-item"}>
                    <div className="content-block__text">
                        <h2><span>{title}</span></h2>
                        <div className="content-block__text"><ReactMarkdown>{preview}</ReactMarkdown></div>
                        <p className="content-block__link"><Link to={link}>Read More</Link></p>
                    </div>
                    <img className="content-block__img" src={imageStandart.src} width={imageStandart.width} height={imageStandart.height} />
                </section>
            );
        }

        // careers index page
        if ( props.template.slug == 'careers-index-page' ) {
            const link = `/careers/${slug}/`;
            return (
                <section className={"content-block content-block__inside content-block__flex content-block__flex_inverse content-block__news-item content-block__full-width"}>
                    <div className="content-block__text ">
                        <h2><span>{title}</span></h2>
                        <div className="content-block__text"><ReactMarkdown>{preview}</ReactMarkdown></div>
                        <p className="content-block__link"><Link to={link}>Read More</Link></p>
                    </div>
                    {imageStandartImage}
                </section>
            );
        }

        // newsletters
        if ( props.template.slug == 'newsletters' ) {
            return (
                <div className="newsletters"><a href={linkURL} target="_blank">{title}</a></div>
            )
        }

        // title-description
        if ( props.template.slug == 'title-description' ) {
            const _title = ( imageTitle != null ) ? (<img className="image-title" src={imageTitle.src} alt="" />) : (<h2><span>{title}</span></h2>) ;
            return (
                <section className={sectionClassName}>
                    {_title}
                    <div className={textClassName}><ReactMarkdown>{description}</ReactMarkdown></div>
                </section>
            )
        }

        if ( props.template.slug == 'image-and-caption' ) {
            return (
                <div className={sectionClassName}>
                    <img src={imageSquare.src} width={imageSquare.width}  alt={title} />
                    <span>{title}</span>
                </div>
            )
        }

        if ( props.template.slug == 'link-image-and-caption' ) {
            const _slug = ( props.reference != null ) ? props.reference.slug : slug;
            return (
                <Link to={_slug} className={sectionClassName}>
                    <img src={imageSquare.src} width={imageSquare.width}  alt={title} />
                    <span>{title}</span>
                </Link>
            )
        }

    }

    return (
        <section className="content-block content-block__inside content-block__flex content-block__flex_inverse">
            <div className="content-block__text">
                <h2><span>{title}</span></h2>
                <div className="content-block__text"><ReactMarkdown>{description}</ReactMarkdown></div>
                {link}
            </div>
            <img className="content-block__img" src={imageStandart.src} width={imageStandart.width} height={imageStandart.height} />
        </section>
    );

};

export default ContentBlock;
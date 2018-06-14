import React from 'react';
import Link from 'gatsby-link';
import { Carousel } from 'react-responsive-carousel';

const MainSlider = ( props ) => {
    let items = props.items.map((item,index) => (
        <div key={index}>
            <section className="main-slider" style={ { backgroundImage: 'url('+item.image.resolutions.src+')'} }>
                <h1>{item.title}</h1>
                <p className="main-slider__sub-title">{item.subTitle}</p>
                <p className="main-slider__button button-container"><Link to={item.buttonLink} className="button button__red ">{item.buttonText}</Link></p>
            </section>
        </div>
    ));
    return (
        <Carousel showThumbs={false} showArrows={false} showStatus={false} showIndicators={ ( items.length>1 ) ? true : false } >
            {items}
        </Carousel>
    );
};

export default MainSlider;

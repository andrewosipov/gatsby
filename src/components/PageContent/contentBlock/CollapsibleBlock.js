import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {CONTENT_BLOCK, CONTENT_BLOCK_INSIDE, CONTENT_BLOCK_TEXT, CONTENT_BLOCK_FLEX, CONTENT_BLOCK_INFO, CONTENT_BLOCK_FULL_WIDTH} from '../../constants';
import {getLinkTitle, getSubTitleP as getSubTitle, getDescriptionText as getDescription, getImageStandart as getImage, getLink} from '../../helpers';
import PropTypes from 'prop-types';

class CollapsibleBlock extends Component {
    static propTypes = {};

    state = {
        isOpen: false
    };

    clickHandle = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getOpen(){
        return this.state.isOpen ? "open" : ""
    }

    render() {
        const {title, subTitle, description, image, link, linkURL} = this.props;
        return (
            <section className = {`${CONTENT_BLOCK} ${CONTENT_BLOCK_INSIDE} collapsible ${this.getOpen()}`}>
                <div className = {`${CONTENT_BLOCK_TEXT} ${CONTENT_BLOCK_FULL_WIDTH}`}>
                    <h2 onClick={this.clickHandle}><span>{title}</span></h2>
                    {getDescription(description)}
                    {getLink(link, linkURL)}
                </div>
                {getImage(image)}
            </section>
        );
    }
}

export default CollapsibleBlock;

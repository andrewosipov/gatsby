import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
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
        return (
            <section className={"content-block content-block__inside collapsible " + this.getOpen()}>
                <div className="content-block__text content-block__full-width">
                    <h2 onClick={this.clickHandle}><span>{this.props.title}</span></h2>
                    <div className="text"><ReactMarkdown>{this.props.description}</ReactMarkdown></div>
                    {this.props.link}
                </div>
                {this.props.image}
            </section>
        );
    }
}

export default CollapsibleBlock;

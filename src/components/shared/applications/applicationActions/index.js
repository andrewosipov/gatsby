import React from 'react';
import Link from 'gatsby-link';
//StorageHub = require('cross-storage').CrossStorageHub;
const Storage = require('cross-storage').CrossStorageClient;
//import

class AplicationActions extends React.Component {
    constructor(props) {
        super(props);
        //console.dir(props);
        this.state = {
            isOpen: false
        }
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    clickHandler = (slug) => {
        this.setIsOpen();
        //console.dir(slug);
        const self = this;
        const storage = new Storage("https://www.musicfirstappcloud.com/app/");
        storage.onConnect().then( () => {
            storage.set(slug, self.props.appId);
            storage.setItem(slug+'_expires_at', Math.abs(Date.now() + ((12*60*60)*1000)));
        });
    };

    render() {
        const className = ( this.state.isOpen ) ? "open" : "";
        const labels = this.props.actions.map((item, index) => item.subTitle);
        const list = this.props.actions.map((item, index) => {
            //let link = (<a href="https://www.musicfirstappcloud.com/app/" onClick={ () => this.clickHandler(item.slug) }>{item.title}</a>);
            let url = this.props.requestQuoteUrl != null ? this.props.requestQuoteUrl.requestQuoteUrl : "";
            let link = (<Link to={url} onClick={ this.setIsOpen }>{item.title}</Link>); // request quote
            if( item.slug == 'request-demo' ){ link = (<Link to={`${this.props.slug}request-individual-tool-demo/`} onClick={ this.setIsOpen }>{item.title}</Link>); }
            if( item.slug == 'try' && this.props.tryPageReference != null ){ link = (<Link to={this.props.tryPageReference.slug} onClick={ this.setIsOpen }>{item.title}</Link>); }
            return (<li key={index}>{link}</li>)
        });

        return (
            <div className={"application-action " + className}>
                <button className="button button__green" onClick={this.setIsOpen}>{labels.join(" / ")}</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
};

export default AplicationActions;
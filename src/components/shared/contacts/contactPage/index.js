import React from 'react';
import Link from 'gatsby-link';
import USAMap from "../../react-usa-map";
import ContentBlock from '../contactBlock';
import ContactBlock from "../contactBlock/index";
import MetaData from '../../template/SeoMetaData';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeState: false,
            states: null,
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        //console.dir(props);
    }

    statesCustomConfig = (arg) => {
        let result = {};
        //console.dir(this.state.states);
        //console.dir(this._states);
        this.props.phoneContacts.forEach((item, index )=>{
            if( item.coveringStates != null && item.coveringStates.forEach != null ) {
                item.coveringStates.forEach((e, i) => {
                    result[e.shortTitle] = {fill: "#" + item.color, opacity: 1};
                    //result[e.shortTitle] = ( this.state.activeState && this.state.states && this.state.states[i].shortTitle == e.shortTitle ) ? {fill: "#" + item.color, opacity: 1} : {fill: "#" + item.color, opacity: 0.7};
                });
            }
        });
        return result;
    };

    linkHandler = (e) => {
        e.preventDefault();
    }

    contactHandler = (e) => {
        //console.dir(e);
        if( e != null ) {
            const arr = e.map != null ? e.map(item => item.shortTitle) : null;
            /*this.setState({
                activeState: true,
                states: arr.join(',')
            });*/
        }
    }

    openModal(ev) {
        ev.preventDefault();
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const phoneContacts = this.props.phoneContacts.map((item, index) => {
            return (<ContactBlock key={'phone'+item.id} parent={this} {...item}  />);
        });

        const emailContacts = this.props.emailContacts.map((item, index) => {
            return (<ContactBlock key={'email'+item.id} {...item} /> );
        });

        const faxContacts = this.props.faxContacts.map((item, index) => {
            return (<ContactBlock key={'fax'+item.id} {...item} /> );
        });

        const metaData = ( this.props.seoMetaData != null ) ? (<MetaData {...this.props.seoMetaData} />) : (<MetaData {...this.props.defaultMetaData} />);

        const typeForm = ( this.props.iframeForm != null ) ? (<div className="contact__form modal"><iframe width="760" height="500" src={this.props.iframeForm} scrolling="no" frameBorder={1} ></iframe></div>) : null;

        return (
            <div className="inside-container contact">
                {metaData}
                <div className="contact__column" >
                    <h3 className="phone-title">By Phone</h3>
                    {phoneContacts}
                </div>
                <div className="contact__column">
                    <h3  className="email-title">By Mail</h3>
                    {emailContacts}
                    <h3 className="fax-title">By Fax</h3>
                    {faxContacts}
                    <p>{this.props.description.description}</p>
                    <div className="button-container">
                        <a href={this.props.iframeForm} className="button" onClick = {this.openModal}>Contact Us</a>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            {typeForm}
                        </Modal>
                    </div>
                    <div className="contact__map">
                        <USAMap customize={this.statesCustomConfig()} />
                    </div>

                </div>



            </div>
        )
    }

};

export default ContactPage;
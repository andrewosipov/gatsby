import React from 'react';
import Link from 'gatsby-link';
import cookie from 'react-cookies'

class CookiesBanner extends React.Component {
    constructor(props) {
        super(props);
        this.maxAge = 60 * 60 * 24 * 366; // 1 year
        const cookieValue = cookie.load('cookieIsOpen', true);
        //console.dir(cookieValue);
        if( cookieValue == null || cookieValue == 'true' ) {
            cookie.remove('cookieIsOpen');
            cookie.save('cookieIsOpen', true, { path: '/', maxAge: this.maxAge });
            this.state = {
                isOpen: true
            }
        }else {
            cookie.save('cookieIsOpen', false, { path: '/', maxAge: this.maxAge }) ;
            this.state = {
                isOpen: false
            }
        }
    }

    setIsClose = (e) => {
        e.stopPropagation();
        const expires = new Date();
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
        cookie.save('cookieIsOpen', false, { path: '/', maxAge: this.maxAge }) ;
        this.setState({
            isOpen: false
        })
    };

    render() {
        if( this.state.isOpen ) {
            return (
                <div className="cookies-banner">
                    <p className="text">
                        <b>We use cookies</b> to give you the best online experience. By using our website, you agree to
                        our use of cookies in accordance with our cookie policy. &nbsp;
                        <Link to={'/privacy-policy/'} target="_blank">Learn more here</Link>
                        <button className="close" onClick={this.setIsClose}>X</button>
                    </p>
                </div>
            )
        }else{
            return (<div></div>);
        }
    }
}

export default CookiesBanner;
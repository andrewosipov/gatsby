import React from 'react';
import Link from 'gatsby-link';
import MainMenu from '../mainMenu/index';
import logo from './logo.png';

const MainHeader = (data) => {
    const button = ( data.location.pathname != "/applications/musicfirst-junior/" ) ? (<p className="main-header__button-container"><Link to="/musicfirst-classroom-demo-request/" className="button button__free-trial button__mini">Free Trial</Link></p>) : null;
    return(
        <header className="main-header">
            <div className="main-header__logo">
                <Link to="/" className="main-header__logo_a">
                    <img src={logo} width="177" height="27" alt="Music First" title="Music First" /> Music First
                </Link>
            </div>
            <MainMenu items = {data.mainMenu} />
            {button}
        </header>
    );
}

export default MainHeader;


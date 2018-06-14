import React from 'react';
import Link from 'gatsby-link';
//import Popup from '../../react-popup/dist';

const MainFooter = () => (
    <footer className="main-footer">
        <section className="main-footer__container">
            <div className="main-footer__contacts">
                <p className="main-footer__phone">Contact us on <span className="content__red-text">1-855-896-3344</span></p>
                <p className="main-footer__follow">Follow MusicFirst:</p>
                <ul className="main-footer__social-links_ul">
                    <li className="main-footer__social-links_li"><a href="https://www.facebook.com/musicfirstinc/" className="main-footer__social-links_a main-footer__social-links_facebook" target="_blank">facebook</a></li>
                    <li className="main-footer__social-links_li"><a href="https://twitter.com/MusicFirst2" className="main-footer__social-links_a main-footer__social-links_twitter" target="_blank">twitter</a></li>
                    <li className="main-footer__social-links_li"><a href="https://www.youtube.com/user/MusicFirstVideo" className="main-footer__social-links_a main-footer__social-links_youtube" target="_blank">youtube</a></li>
                </ul>
            </div>
            <div className="main-footer__nav-and-copyright">
                <nav className="main-footer__nav">
                    <ul className="main-footer__nav_ul">
                        <li className="main-footer__nav_li"><Link to="/terms-and-conditions/" className="main-footer__nav_a">Terms & Conditions</Link></li>
                        <li className="main-footer__nav_li"><Link to="/privacy-policy/" className="main-footer__nav_a">Privacy Policy</Link></li>
                        <li className="main-footer__nav_li"><Link to="/careers/" className="main-footer__nav_a">Careers</Link></li>
                        <li className="main-footer__nav_li"><a href="https://www.musicsales.com/" className="main-footer__nav_a" target="_blank">Music Sales Group</a></li>
                        <li className="main-footer__nav_li"><Link to="/contact-us/" className="main-footer__nav_a">Contact Us</Link></li>
                        <li className="main-footer__nav_li"><a href="https://www.dropbox.com/sh/hezhxgznm1laaiw/AADhEJHln9sSYFlH60L4v1W9a?dl=0" className="main-footer__nav_a" target="_blank">Press</a></li>
                    </ul>
                </nav>
                <p className="main-footer__copyright">© 2014 - 2018 MusicFirst v3</p>
            </div>
        </section>
    </footer>
);

export default MainFooter

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';


import MainHeader from '../components/shared/template/mainHeader';
import MainFooter from '../components/shared/template/mainFooter';
import VerticalNavigation from '../components/shared/template/leftMenu';

import './scss/index.scss'

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="Musicfirst"
      meta={[
        { name: 'description', content: 'Musicfirst' },
        { name: 'keywords', content: '' },
      ]}
    />
    <div className="wrapper">

        <MainHeader />

        <main className="main-container">
            <div className="inside-container">
                  <div className="column-right">
                    {children()}
                  </div>
                  <div className="column-left">
                      <VerticalNavigation location="{ location }" />
                  </div>
            </div>
        </main>

        <MainFooter />

    </div>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

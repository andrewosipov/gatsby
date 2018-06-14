import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';
import MainHeader from '../components/shared/template/mainHeader';
import MainFooter from '../components/shared/template/mainFooter';
import CookiesBanner from '../components/shared/template/cookiesBanner';

import './scss/index.scss'

const TemplateWrapper = ({ children, data, location }) => (
    <div className="wrapper">
        <MainHeader mainMenu={data.content.menuItems} location={location} />

          <main className="main-container">
              {children()}
          </main>

        <MainFooter />
        <CookiesBanner />
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper

export const query  = graphql`
    query mainMenu{
        content: contentfulMainMenu{
              id      
              title
              menuItems{
                    id
                    title
                    slug
                    reference{
                      id
                      slug
                    }
                    subMenu{
                          id
                          title
                          slug
                          reference{
                            id
                            slug
                          }
                          subMenu{
                                id
                                title
                                slug
                                reference{
                                  id
                                  slug
                                }
                          }
                    }
              }
        }
    }  
`;

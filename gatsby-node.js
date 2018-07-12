const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;

    // include queries
    const homePage = require('./src/queries/homePage');
    const contentPage = require('./src/queries/contentPage');
    const defaultMetaDataQuery = require('./src/queries/defaultMetaData');
    const newsPage = require('./src/queries/newsPage');
    const contentfulContactPage = require('./src/queries/contactPage');
    const applications = require('./src/queries/applications');
    const careersPage = require('./src/queries/careersPage');
    const careers = require('./src/queries/careers');
    const composedPapes = require('./src/queries/composedPages');
    const pricingPage = require('./src/queries/pricingPage');

    return new Promise((resolve, reject) => {

        let defaultMetaData;
        graphql(`
            query defaultMetaData{ 
                defaultMetaData: ${defaultMetaDataQuery}
            }
        `).then(result => {
            defaultMetaData = result.data.defaultMetaData;
        });

        // create a home page
        graphql(`
            query homePage{ 
                homePage: ${homePage}
            }
        `).then(result => { //console.log( result );
            createPage({
                path: '/',
                component: path.resolve(`./src/templates/homePage.js`),
                context: result.data.homePage
            });
        });

        // creating content pages
        graphql(`
            query contentPage{ 
                content: ${contentPage} 
            }
        `).then(result => {
            result.data.content.edges.forEach( (item, index) =>{
                if( item.node.slug !== '/pricing/' ) {
                    item.node["defaultMetaData"] = defaultMetaData;
                    createPage({
                        path: item.node.slug,
                        component: path.resolve(`./src/templates/content-page.js`),
                        context: item.node
                    });
                }
            });
        });

        // creating application pages
        graphql(`
            query contentPage{ 
                application: ${applications} 
            }
        `).then(result => {
            result.data.application.edges.forEach( (item, index) =>{
                // create an application page
                createPage({
                    path: item.node.slug,
                    component: path.resolve(`./src/templates/application-page.js`),
                    context: item.node
                });
                // creating a demo request page
                if( item.node.actions !== null && item.node.actions.reduce( (res, current) =>( current.slug === 'request-demo' ? true : res )) ){
                    createPage({
                        path: `${item.node.slug}request-individual-tool-demo/`,
                        component: path.resolve(`./src/templates/applicationDemoPage.js`),
                        context: item.node
                    });
                }
            });
        });

        // creating news posts pages and main news page
        graphql(`
            query newsPage{ 
                newsPage: ${newsPage} 
            }
        `).then(result => {
            // main news page
            createPage({
                path: '/about-us/blog/',
                component: path.resolve(`./src/templates/blog-index.js`),
                context: result.data.newsPage
            });

            // news post page
            result.data.newsPage.collection.forEach( (item, index) =>{
                item.subMenu = result.data.newsPage.subMenu;
                createPage({
                    path: '/about-us/blog/'+ item.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: item
                })
            });
        });

        // creating careers posts pages and main careers page
        graphql(`
            query careersPage{ 
                careersPage: ${careersPage} 
            }
        `).then(result => {
            // main careers page
            createPage({
                path: '/careers/',
                component: path.resolve(`./src/templates/careers-index.js`),
                context: result.data.careersPage
            });

            // careers post page
            result.data.careersPage.collection.forEach( (item, index) =>{
                createPage({
                    path: '/careers/'+ item.slug,
                    component: path.resolve(`./src/templates/careers-post.js`),
                    context: item
                })
            });
        });

        // create a contact page
        graphql(`
            query contactPage{ 
                contactPage: ${contentfulContactPage}
            }
        `).then(result => {
            createPage({
                path: result.data.contactPage.slug,
                component: path.resolve(`./src/templates/contact-page.js`),
                context: result.data.contactPage
            });
        });

        // creating composed pages
        graphql(`
            query contentComposed{ 
                contentComposed: ${composedPapes} 
            }
        `).then(result => {
            result.data.contentComposed.edges.forEach( (item, index) =>{
                if( item.node.slug != '' )
                    createPage({
                        path: item.node.slug,
                        component: path.resolve(`./src/templates/content-page-composed.js`),
                        context: item.node
                    });
            });
        });

        // create a pricing page
        graphql(`
            query pricingPage{ 
                pricingPage: ${pricingPage}
            }
        `).then(result => {
            createPage({
                path: '/pricing/',
                component: path.resolve(`./src/templates/pricingPage.js`),
                context: result.data.pricingPage
            });
        });

        resolve()

    });

};
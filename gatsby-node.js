const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    //import contentPageQuery from "./src/queries/contentPage";

    return new Promise((resolve, reject) => {
        graphql(`
          query contentPage {
              content: allContentfulContentPage{
                  edges{
                    node{
                          id
                          title
                          slug
                          titleSection{
                                id
                                title
                                subTitle
                                description{
                                      id
                                      description
                                }
                                image{
                                      id
                                      resolutions(width:247, height:185, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                }  
                                video  
                                typeFormUrl                  
                          }
                          contentCollection{
                                id
                                title
                                hideTitle
                                subTitle
                                description{
                                      id
                                      description
                                }
                                image{
                                      id
                                      round: resolutions(width:170, height:170, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                      standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                } 
                                link
                                linkText    
                          }
                          hideShareButtons
                          applicationList{
                                id
                                title
                                hideTitle
                                collection{
                                      id
                                      title
                                      preview{
                                            id
                                            preview
                                      }
                                      slug
                                      icon{
                                            id
                                            square: resolutions(width:120, height:120, quality: 100, resizingBehavior: PAD ){
                                                src
                                                width
                                                height
                                            }
                                      }
                                }                            
                          }
                          requestQuoteUrl{
                            id
                            requestQuoteUrl
                          }
                          hideApplicationButtons
                          templatePage
                          templateCollection{
                                id
                                title
                                slug
                          }
                          subMenu{
                                id
                                menuItems{
                                    id
                                    title
                                    slug
                                    reference{
                                      id
                                      slug
                                    }
                                }              
                          }
                          seoMetaData{
                                id
                                metaTitle
                                metaDescription{
                                      id
                                      metaDescription
                                }
                                metaKeywords
                                openGraphTitle
                                openGraphDescription{
                                      id
                                      openGraphDescription
                                }
                                openGraphUrl
                                openGraphImage{
                                      id
                                      file{
                                          url
                                      }
                                }
                          }
                    }
                  }                    
              }  
              
              defaultMetaData: contentfulSeoMetaData( contentful_id: { eq: "3yQVjVBx2gQSMY6q4oASCq" } ) {
                    id
                    metaTitle
                    metaDescription{
                          id
                          metaDescription
                    }
                    metaKeywords
                    openGraphTitle
                    openGraphDescription{
                          id
                          openGraphDescription
                    }
                    openGraphUrl
                    openGraphImage{
                          id
                          file{
                              url
                          }
                    }
              }
              
              newsPage: contentfulNewsPage( contentful_id: { eq: "6p7NK2aOgEacWaMEEEwY0O" } ) {
                    id
                    title 
                    titleSection{
                        id
                        title
                        subTitle
                        description{
                              id
                              description
                        }
                        image{
                              id
                              resolutions(width:247, height:185, quality: 100, resizingBehavior: PAD ){
                                    src
                                    width
                                    height
                              }
                        }  
                        video                    
                    }                  
                    
                    collection{
                          id
                          title
                          slug
                          preview{
                                id
                                preview            
                          }
                          description{
                                id
                                description
                          }
                          image{
                                id
                                      round: resolutions(width:170, height:170, quality: 100, resizingBehavior: CROP ){
                                            src
                                            width
                                            height
                                      }
                                      standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                          }
                    }
                    hideShareButtons
                    templatePage
                    templateCollection{
                        id
                        title
                        slug
                    }
                    seoMetaData{
                            id
                            metaTitle
                            metaDescription{
                                  id
                                  metaDescription
                            }
                            metaKeywords
                            openGraphTitle
                            openGraphDescription{
                                  id
                                  openGraphDescription
                            }
                            openGraphUrl
                            openGraphImage{
                                  id
                                  file{
                                      url
                                  }
                            }
                    }
                    subMenu{
                          id
                          menuItems{
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
              
              news: contentfulNewsPage( contentful_id: { eq: "6p7NK2aOgEacWaMEEEwY0O" } ) { 
                    id
                    title
                    collection{
                          id
                          title
                          slug
                          preview{
                                id
                                preview            
                          }
                          description{
                                id
                                description
                          }
                          image{
                                id
                                resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                      src
                                      width
                                      height
                                }
                          }
                    }
                    seoMetaData{
                            id
                            metaTitle
                            metaDescription{
                                  id
                                  metaDescription
                            }
                            metaKeywords
                            openGraphTitle
                            openGraphDescription{
                                  id
                                  openGraphDescription
                            }
                            openGraphUrl
                            openGraphImage{
                                  id
                                  file{
                                      url
                                  }
                            }
                    }
                    subMenu{
                          id
                          menuItems{
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
              
              contactPage: contentfulContactPage( contentful_id: { eq: "4LM4dfjwfuKCkCyKA0uWUE" } ) {
                    id
                    title   
                    slug                
                    iframeForm
                    description{
                        id
                        description
                    }
                    phoneContacts{
                        id
                        title
                        slug
                        email
                        phone
                        color
                        coveringStates{
                            id
                            title
                            shortTitle
                            slug
                        }
                        coveringCountries{
                            id
                            title
                            shortTitle
                            slug
                        }
                        coveringContinents{
                            id
                            title
                            slug
                        }
                        description{
                          id
                          description
                        }
                    }
                    emailContacts{
                        id
                        title
                        slug
                        email
                        phone                        
                        description{
                          id
                          description
                        }
                    }
                    faxContacts{
                        id
                        title
                        slug
                        email
                        phone                        
                        description{
                          id
                          description
                        }
                    }
                    seoMetaData{
                            id
                            metaTitle
                            metaDescription{
                                  id
                                  metaDescription
                            }
                            metaKeywords
                            openGraphTitle
                            openGraphDescription{
                                  id
                                  openGraphDescription
                            }
                            openGraphUrl
                            openGraphImage{
                                  id
                                  file{
                                      url
                                  }
                            }
                    }
              } 
              
              application: allContentfulApplication{
                  edges{
                    node{
                          id
                          title
                          slug
                          actions{
                                id
                                title
                                subTitle
                                slug
                          }
                          appId
                          demoIframeUrl{
                            id
                            demoIframeUrl
                          }
                          requestQuoteUrl{
                            id
                            requestQuoteUrl
                          }
                          tryPageReference{
                            id
                            slug
                          }
                          hideShareButtons
                          solutions{
                                id
                                title
                                slug
                          }
                          supportedPlatforms{
								id
                                title
                                slug
                                icon{
                                  id
                                  square: resolutions(width:120, height:120, quality: 100, resizingBehavior: PAD ){
                                        src
                                        width
                                        height
                                  }
                                }
                          }
                          icon{
                              id
                              square: resolutions(width:120, height:120, quality: 100, resizingBehavior: PAD ){
                                    src
                                    width
                                    height
                              }
                          }    
                          slider{
                                id
                                title
                                image{
                                      id
                                      file{
                                            url
                                      }
                                }
                                video
                          }
                          preview{
                                id
                                preview
                          }  
                          description{
                                id
                                description
                          }   
                           seoMetaData{
                                    id
                                    metaTitle
                                    metaDescription{
                                          id
                                          metaDescription
                                    }
                                    metaKeywords
                                    openGraphTitle
                                    openGraphDescription{
                                          id
                                          openGraphDescription
                                    }
                                    openGraphUrl
                                    openGraphImage{
                                          id
                                          file{
                                              url
                                          }
                                    }
                            }              
                    }
                  }                    
              }  
              
              careersPage: contentfulNewsPage( contentful_id: { eq: "OuV9Roxy2ySEYYEiKyCSo" } ) {
                    id
                    title 
                    titleSection{
                        id
                        title
                        subTitle
                        description{
                              id
                              description
                        }
                        image{
                              id
                              resolutions(width:247, height:185, quality: 100, resizingBehavior: PAD ){
                                    src
                                    width
                                    height
                              }
                        }  
                        video                    
                    }                  
                    
                    collection{
                          id
                          title
                          slug
                          preview{
                                id
                                preview            
                          }
                          description{
                                id
                                description
                          }
                          image{
                                id
                                  resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                          src
                                          width
                                          height
                                  }
                                  round: resolutions(width:170, height:170, quality: 100, resizingBehavior: CROP ){
                                        src
                                        width
                                        height
                                  }
                                  standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                        src
                                        width
                                        height
                                  }
                          }
                    }
                    hideShareButtons
                    templatePage
                    templateCollection{
                        id
                        title
                        slug
                    }
                    seoMetaData{
                            id
                            metaTitle
                            metaDescription{
                                  id
                                  metaDescription
                            }
                            metaKeywords
                            openGraphTitle
                            openGraphDescription{
                                  id
                                  openGraphDescription
                            }
                            openGraphUrl
                            openGraphImage{
                                  id
                                  file{
                                      url
                                  }
                            }
                    }
                    subMenu{
                          id
                          menuItems{
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
              
              careers: contentfulNewsPage( contentful_id: { eq: "OuV9Roxy2ySEYYEiKyCSo" } ) { 
                    id
                    title
                    collection{
                          id
                          title
                          slug
                          preview{
                                id
                                preview            
                          }
                          description{
                                id
                                description
                          }
                          image{
                                id
                                resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                      src
                                      width
                                      height
                                }
                          }
                    }
                    seoMetaData{
                            id
                            metaTitle
                            metaDescription{
                                  id
                                  metaDescription
                            }
                            metaKeywords
                            openGraphTitle
                            openGraphDescription{
                                  id
                                  openGraphDescription
                            }
                            openGraphUrl
                            openGraphImage{
                                  id
                                  file{
                                      url
                                  }
                            }
                    }
                    subMenu{
                          id
                          menuItems{
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
              
                     
              contentComposed: allContentfulContentPageComposed{
                  edges{
                    node{
    					  id
                          title
                          slug
                          titleSection{
                                id
                                title
                                subTitle
                                description{
                                      id
                                      description
                                }
                                image{
                                      id
                                      resolutions(width:247, height:185, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                }  
                                video  
                                typeFormUrl                  
                          }
                            
    					  header21    
    					  contentCollection{
                                id
                                title
                            	  description{
                                      id
                                      description
                                }
                                image{
                                      id
                                      square: resolutions(width:370, height:370, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                      standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                } 
                                link
                                linkText    
                          }
                          
                          header22    
    					  contentCollection2{
                                id
                                title
                            	  description{
                                      id
                                      description
                                }
                                image{
                                      id
                                      square: resolutions(width:370, height:370, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                      standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                } 
                                link
                                linkText    
                          }
                          
                          header23    
    					  contentCollection24{
                                id
                                title
                            	  description{
                                      id
                                      description
                                }                                
                                reference{
                                    id
                                    slug
                                }
                                image{
                                      id
                                      square: resolutions(width:370, height:370, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                      standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                } 
                                link
                                linkText    
                          }
    					  
    					  
                          
                          header3    
    					  contentCollection25{
                                id
                                title
                            	  description{
                                      id
                                      description
                                }
                                image{
                                      id
                                      square: resolutions(width:370, height:370, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                      standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                } 
                                link
                                linkText    
                          }
                          
                          header32    
    					  contentCollection26{
                                id
                                title
                            	  description{
                                      id
                                      description
                                }
                                reference{
                                    id
                                    slug
                                }
                                image{
                                      id
                                      square: resolutions(width:370, height:370, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                      standart: resolutions(width:360, height:279, quality: 100, resizingBehavior: PAD ){
                                            src
                                            width
                                            height
                                      }
                                } 
                                link
                                linkText    
                          }    					  
                          hideShareButtons
                          requestQuoteUrl{
                            id
                            requestQuoteUrl
                          }
    					  seoMetaData{
                                id
                                metaTitle
                                metaDescription{
                                      id
                                      metaDescription
                                }
                                metaKeywords
                                openGraphTitle
                                openGraphDescription{
                                      id
                                      openGraphDescription
                                }
                                openGraphUrl
                                openGraphImage{
                                      id
                                      file{
                                          url
                                      }
                                }
                          }
                    }
                  }
    
              }              
              
          }
        `).then(result => { //console.dir( result.data.newsPage );

            // content pages
            result.data.content.edges.forEach( (item, index) =>{
                item.node["defaultMetaData"] = result.data.defaultMetaData;
                // create content pages
                if( item.node.slug != '/pricing/' ) {
                    createPage({
                        path: item.node.slug,
                        component: path.resolve(`./src/templates/content-page.js`),
                        context: item.node
                    });
                }
            });

            // news/blog page
            createPage({
                path: '/about-us/blog/',
                component: path.resolve(`./src/templates/blog-index.js`),
                context: result.data.newsPage
            });

            // blog posts
            result.data.news.collection.forEach( (item, index) =>{
                // get the Sub Menu from parent page Blog
                item.subMenu = result.data.newsPage.subMenu;
                createPage({
                    path: '/about-us/blog/'+ item.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: item
                })
            });

            // contact pages
            createPage({
                path: result.data.contactPage.slug,
                component: path.resolve(`./src/templates/contact-page.js`),
                context: result.data.contactPage
            });

            // application pages
            result.data.application.edges.forEach( (item, index) =>{
                // create content pages
                createPage({
                    path: item.node.slug,
                    component: path.resolve(`./src/templates/application-page.js`),
                    context: item.node
                });
                if( item.node.actions != null && item.node.actions.reduce( (res, current) =>( current.slug == 'request-demo' ? true : res )) ){
                    //console.log(item.node.title)
                    // create demo request page
                    createPage({
                        path: `${item.node.slug}request-individual-tool-demo/`,
                        component: path.resolve(`./src/templates/application-demo-page.js`),
                        context: item.node
                    });
                }
            });

            // carrers index page
            createPage({
                path: '/careers/',
                component: path.resolve(`./src/templates/careers-index.js`),
                context: result.data.careersPage
            });

            // carrers posts
            result.data.careers.collection.forEach( (item, index) =>{
                // get the Sub Menu from parent page Blog
                //item.subMenu = result.data.newsPage.subMenu;
                createPage({
                    path: '/careers/'+ item.slug,
                    component: path.resolve(`./src/templates/careers-post.js`),
                    context: item
                })
            });

            // content page composed
            result.data.contentComposed.edges.forEach( (item, index) =>{
                createPage({
                    path: item.node.slug,
                    component: path.resolve(`./src/templates/content-page-composed.js`),
                    context: item.node
                });
            });


            resolve()
        })

    });

};
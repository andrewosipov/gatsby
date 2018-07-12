module.exports = `

contentfulNewsPage( contentful_id: { eq: "6p7NK2aOgEacWaMEEEwY0O" } ) {
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

`;
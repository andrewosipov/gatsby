module.exports = `

    contentfulContentPage( contentful_id: { eq: "57bd566m3C8AwYawE4gI48" } ){
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
          
          hideShareButtons   
          
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

`;
module.exports = `

contentfulHomePage ( contentful_id: { eq: "17VgudiV76UyaIomu4Uk60" } ) {
      id
      
      title
      
      slider{
        id
        title
        subTitle
        image{
            id
            file{
                url
            }
            resolutions(width:1024, height:576, quality: 90){
                width
                height
                src
            }
        }
        buttonText
        buttonLink
      }
      
      aboutMusicFirst{
        id
        title
        description{
            id
            description
        }
      }
      
      integratedSoftwareTitleDesc{
        id
        title
        description{
            id
            description
        }
      }
      
      integratedSoftware{
        id
        title
        image{
            id
            file{
                url
            }
            resolutions(width:97, height:97, quality: 90){
                width
                height
                src
            }
        }
      }
      
      keyFeaturesTitle
      keyFeatures{
        id
        title
        image{
          id
          file{
            url
          }
        }
        description{
          id
          description
        }
      }
      
      keyFeaturesButtonText
      
      keyFeaturesButtonLink
      
      popularPackagesTitle  
      
       
      
      popularPackagesSubTitle  
      
      
      
      popularPackages{
    	id
        title        
        imageTitle{
            id
            file{
                url
            }
            resolutions(width:215, height:50, quality: 100, resizingBehavior: PAD){
                width
                height
                src
            }
        }
        label1
        value
        label2
        enableBadge
        badgeText
        description{
            id
            description
        }
        noteText
        buttonText
        buttonLink
      }
      
      targetedSolutionsTitle 
      
      newProducts{
        id
        title
        description{
          id
          description
        }
        image{
          id
            file{
                url
            }
            resolutions(width:800, quality: 100){
                width
                height
                src
            }
        }
        logo{
          id
          file{
                url
            }
        }
        link
        linkText
      }
      
      customizeButtonText
      
      customizeButtonLink
      
      features{
    	id
        title
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
    
`;
import React from 'react';
import Link from 'gatsby-link';

import Slider from '../components/homePage/mainSlider';
import IntegratedSoftware from '../components/homePage/integratedSoftware';
import KeyFeatures from '../components/homePage/keyFeatures';
import PopularPackages from '../components/homePage/popularPackages';
import CallToAction from '../components/homePage/callToAction';
import Features from '../components/homePage/features';
import MetaData from '../components/shared/template/SeoMetaData';
import ContentBlock from '../components/shared/content/contentBlock';
import Button from '../components/shared/buttons';

const IndexPage = ({data}) =>{
    const metaData = null;//( data.content.seoMetaData != null ) ? (<MetaData {...data.content.seoMetaData} />) : (<MetaData {...data.defaultMetaData} />);

    return (
      <div>
          {metaData}

        <Slider
          items = {data.content.slider}
        />

        {/* About Music */}
        <ContentBlock
            title = {data.content.aboutMusicFirst.title}
            description  = {data.content.aboutMusicFirst.description}
            template = { {slug: "title-description"} }
            className = 'content-block__full-width'
        />

        {/* Online Classroom */}
        {/*<ContentBlock
          title = {data.content.onlineClassroom.title}
          description  = {data.content.onlineClassroom.description}
          template = { {slug: "title-description"} }
          className = 'online-classroom'
        />*/}

        {/*<IntegratedSoftware
          title = {data.content.integratedSoftwareTitle}
          items = {data.content.integratedSoftware}
        />*/}

        <Button text={data.content.keyFeaturesButtonText} link={data.content.keyFeaturesButtonLink} />

          {/* Online Classroom */}
          <ContentBlock
              title       = {data.content.popularPackagesTitle}
              imageTitle  = {data.content.popularPackagesImageTitle}
              description = {{ description: data.content.popularPackagesDescription.popularPackagesDescription }}
              template    = { {slug: "title-description"} }
              className   = 'content-block__full-width'
          />

          <KeyFeatures
              title = {null}
              items = {data.content.keyFeatures}
          />

        <PopularPackages
            title       = {data.content.popularPackagesTitle}
            subTitle    = {data.content.popularPackagesSubTitle}
            description = {null}
            items       = {data.content.popularPackages}
        />

        <PopularPackages
            title       = {data.content.targetedSolutionsTitle}
            imageTitle  = {data.content.targetedSolutionsImageTitle}
            subTitle    = {data.content.targetedSolutionsSubTitle}
            description = {data.content.targetedSolutionsDescription.targetedSolutionsDescription}
            items       = {data.content.targetedSolutions}
        />

        <CallToAction buttonText = {data.content.customizeButtonText} buttonLink = {data.content.customizeButtonLink} />

        <Features items = {data.content.features} />

      </div>
    )
};

export default IndexPage;

export const query  = graphql`
  query homePage {
    content: contentfulHomePage ( contentful_id: { eq: "17VgudiV76UyaIomu4Uk60" } ) {
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
      
      
      
      integratedSoftwareTitle
      
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
      
      
      
      keyFeaturesButtonText
      
      keyFeaturesButtonLink
      
      popularPackagesTitle  
      
      popularPackagesImageTitle{
            id
            file{
                url
            }
            resolutions(width:263, height:50, quality: 100, resizingBehavior: PAD){
                width
                height
                src
            }
      }      
      
      popularPackagesSubTitle  
      
      popularPackagesDescription{
        id
        popularPackagesDescription
      }     
      
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
      
      targetedSolutionsImageTitle{
            id
            file{
                url
            }
            resolutions(width:295, height:50, quality: 100, resizingBehavior: PAD){
                width
                height
                src
            }
      }      
      
      targetedSolutionsSubTitle
            
      targetedSolutionsDescription{
        id
        targetedSolutionsDescription
      }    
      
      targetedSolutions{
    	id
        title
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
    
    
    
  }
`;

/*
* keyFeaturesTitle

      keyFeatures{
        id
        title
        image{
            id
            file{
                url
            }
            resolutions(width:119, height:119, quality: 90){
                width
                height
                src
            }
        }
        description{
            id
            description
        }
      }
*
* */
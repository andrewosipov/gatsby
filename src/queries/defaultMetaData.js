const defaltMetaDataQuery = `
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
`;

export default defaltMetaDataQuery;
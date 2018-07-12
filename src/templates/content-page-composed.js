import React from "react";
import Helmet from "react-helmet";

import PageContentComposed from '../components/PageContent/ComposedPage';

export default function Template( props ) { //console.dir(props);
    // get the contentful data
    const data =  props.pathContext;
    //console.dir(props);
    return <PageContentComposed location={props.location} {...data} />
}
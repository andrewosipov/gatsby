import React from "react";
import Helmet from "react-helmet";

import PageContent from '../components/PageContent';

export default function Template( props ) { //console.dir(props);
    // get the contentful data
    const data =  props.pathContext;//props.data != null ? props.data.content : props.pathContext ;
    //console.dir(props);
    return <PageContent location={props.location} {...data} />
}
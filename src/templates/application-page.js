import React from "react";
import Helmet from "react-helmet";

import ApplicationPage from '../components/shared/applications/applicationPage';

export default function Template( props ) { //console.dir(props);
    // get the contentful data
    const data =  props.pathContext;//props.data != null ? props.data.content : props.pathContext ;
    //console.dir(props);
    return (<ApplicationPage location={props.location} {...data} />)
}
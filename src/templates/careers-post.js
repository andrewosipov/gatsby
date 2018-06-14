import React from "react";
import PageContent from '../components/shared/content/pageContent';

export default function Template( props ) {
    const data = props.pathContext;
    //console.dir(_data);
    data.templatePage = "Careers Page";
    data.template = { slug: "without-float" };
    data.hideTitle = "Yes";
    data.titleSection = {
        title: data.title,
        image: data.image
    };
    data.content = {
        description: data.description
    }
    return <PageContent {...data} />
}
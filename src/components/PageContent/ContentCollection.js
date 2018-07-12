import React, {Component} from 'react';
import ContentBlock from './contentBlock/index';
import ProfileCollection from './ProfileCollection';

export default class ContentCollection extends Component{

    getTitle(){
        const {title} = this.props;
        if (title != null) return (<h2 className="page-title">{this.props.title}</h2>);
        return null;
    }

    getCollection(){
        const {template, items} = this.props;
        if (template == null || items == null || items.map == null) return null;

        if (template.slug === 'profile-collection') {
            return (<ProfileCollection items={items}/>);
        } else {
            // other collection
            return items.map((item, index) => (
                <ContentBlock key={index} index={index} textTemplate={this.props.textTemplate} template={template} {...item} />
            ));
        }
    }

    getClassName(){
        const {template, className = null, items} = this.props;
        if ( !(template != null && template.slug != null) ) return null;

        let templateClassName = null;
        switch ( template.slug ){
            case 'round-image-above-two-column':
                templateClassName = 'inside-column-container'; break;

            case 'images-above-three-column':
                templateClassName = 'column-container'; break;

            case 'profile-collection':
                templateClassName = 'profiles-container';
        }

        return `${templateClassName} ${className}`
    }

    render(){
        return (
            <div>
                {this.getTitle()}
                <div className={this.getClassName()}>
                    {this.getCollection()}
                </div>
            </div>
        )
    }
}
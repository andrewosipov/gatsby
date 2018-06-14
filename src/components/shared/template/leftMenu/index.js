import React from 'react';
import Link from 'gatsby-link';

class VerticalNavigation extends React.Component {
    constructor(props) {
        super(props);
        //console.dir(arg);
    }

    render() {
        //console.log('menu');
        //console.dir(this.props);
        let menuItems = this.props.items.map((item, index) => {
            const slug = ( item.reference!=null ) ? item.reference.slug : item.slug;
            if( this.props.location == null || this.props.location == 'news' ) {
                return (
                    <li key={index}><Link to={slug} activeClassName="active" key={index}>{item.title}</Link></li>
                )
            }else{
                let _className = ( this.props.location.pathname == slug ) ? 'active' : "";
                return (
                    <li key={index}><Link to={slug} className={_className} key={index}>{item.title}</Link></li>
                )
            }
        });
        //let regex = new RegExp('\\w+');
        if (menuItems) {
            return (
                <ul className="vertical-nav">
                    {menuItems}
                </ul>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default VerticalNavigation;
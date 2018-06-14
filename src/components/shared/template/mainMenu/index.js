import React from 'react';
import Link from 'gatsby-link';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        //console.dir(arg);
        this.state = {
            isOpen: false
        }
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        //console.log(this.props);
        const className = ( this.state.isOpen ) ? 'open' : "";
        let menuItems = [];
        for( let i=0; i<this.props.items.length; i++ ){
            let item = this.props.items[i];
            let mainSlug = ( item.reference!=null ) ? item.reference.slug : item.slug;
            let subMenu;
            if( item.subMenu != null ){
                let subMenuItems = [];
                for( let j=0; j<item.subMenu.length; j++ ){
                    let subItem = item.subMenu[j];
                    let slug = ( subItem.reference!=null ) ? subItem.reference.slug : subItem.slug;
                    subMenuItems.push( (<li key={subItem.id}><Link to={slug} onClick={this.setIsOpen}>{subItem.title}</Link></li>) );
                }
                subMenu = (<ul>{subMenuItems}</ul>);
            }
            let element = (<li key={item.id}><Link to={mainSlug} onClick={this.setIsOpen}>{item.title}</Link>{subMenu}</li>);
            menuItems.push(element);
        }
        return (
            <nav className={"main-header__nav " + className }>
                <button className="main-header__mobile-nav_toogler" onClick={this.setIsOpen}>Mobile menu toggler</button>
                <ul>
                    {menuItems}
                </ul>
            </nav>
        );
    }
}

export default MainMenu;
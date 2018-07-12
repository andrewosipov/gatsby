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
    };

    getMenu(){
        const { items } = this.props;
        return items.map((item, index) => {
            let mainSlug = ( item.reference ) ? item.reference.slug : item.slug;
            return <li key={item.id}><Link to={mainSlug} onClick={this.setIsOpen}>{item.title}</Link>{this.getSubMenu(item.subMenu)}</li>
        })
    }

    getSubMenu(items){
        if( !items || !items.map ) return null;

        const subMenuItems = items.map((item, index) => {
            let mainSlug = ( item.reference ) ? item.reference.slug : item.slug;
            return <li key={item.id}><Link to={mainSlug} onClick={this.setIsOpen}>{item.title}</Link>{this.getSubMenu(item.subMenu)}</li>
        });
        return (<ul>{subMenuItems}</ul>);
    }

    render() {
        let menuItems = [];
        for( let i=0; i<this.props.items.length; i++ ){
            let item = this.props.items[i];
            let mainSlug = ( item.reference != null ) ? item.reference.slug : item.slug;
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
        const className = ( this.state.isOpen ) ? 'open' : "";
        return (
            <nav className={ "main-header__nav " + className}>
                <button className="main-header__mobile-nav_toogler" onClick={this.setIsOpen}>Mobile menu toggler</button>
                <ul>
                    {this.getMenu()}
                </ul>
            </nav>
        );
    }
}

export default MainMenu;
import React from 'react';
import Link from 'gatsby-link';
import ReactMarkdown from 'react-markdown';

// parent
class profileCollection extends React.Component {
    constructor(props) {
        super(props);
        //console.dir(props)
        this.parentOpen = this.parentOpen.bind(this);
        this.parentClose = this.parentClose.bind(this);
        this.setChild = this.setChild.bind(this);
        this.state = {
            open: false,
            openedChild: null
        }
    }

    parentOpen(e) {
        e.preventDefault()
        this.setState({
            open: true
        });
        //console.log(12);
    }

    parentClose(e) {
        e.preventDefault()
        this.setState({
            open: false
        });
        //console.log(12);
    }

    setChild(e, key) {
        e.preventDefault()
        this.setState({
            openedChild: key
        });
        //console.log(12);
    }

        render() {
        let collection = [];
        let buffer = [];
        for( let i=0; i<this.props.items.length; i++ ){
            let item = this.props.items[i];
            if( item.description != null ) {
                buffer.push((
                    <ProfileCompact title={item.title}
                                    subTitle={item.subTitle}
                                    image={item.image != null ? item.image.round : null}
                                    description={item.description.description}
                                    parentOpen={this.parentOpen}
                                    parentClose={this.parentClose}
                                    setChild={this.setChild}
                                    parent={this}
                                    index={i}
                                    key={i}
                    />
                ));
                if ((i + 1) % 3 == 0) {
                    let temp = buffer;
                    collection.push((<div className="profiles-row" key={i}>{temp}</div>));
                    buffer = [];
                }
            }
        }
        collection.push( (<div className="profiles-row"   key={this.props.items.length}>{buffer}</div>) );
        //console.dir(collection);
        return (
            <div>{collection}</div>
        )
    }
}

// child
class ProfileCompact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        //console.log('profile');
        //console.dir(this);
        let className;
        //if(  )= this.state.isOpen ? "profile open" : "profile";
        if( this.props.parent.state.open && ( this.props.parent.state.openedChild != this.props.index ) ){
            className = "profile fade";
        }
        if( this.props.parent.state.open && ( this.props.parent.state.openedChild == this.props.index ) ){
            className = "profile open";
        }
        if( !this.props.parent.state.open  ){
            className = "profile ";
        }

        return (
            <div className={className} onClick={this.setIsOpen}>
                <div className="compact-view">
                    <img src={this.props.image.src} width={this.props.image.width} height={this.props.image.height} alt=""/>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.subTitle}</p>
                </div>
                <div className="full-view">
                    <img src={this.props.image.src} width={this.props.image.width} height={this.props.image.height} alt=""/>
                    <div className="text">
                        <h3>{this.props.title}</h3>
                        <ReactMarkdown>{this.props.description}</ReactMarkdown>
                    </div>
                    <span className="close" onClick={this.setIsClose}>X</span>
                </div>
            </div>
        )
    }
    setIsOpen = (e) => {
        this.props.parentOpen(e);
        this.props.setChild(e, this.props.index);
        this.setState({
            isOpen: true
        })
    };

    setIsClose = (e) => {
        e.stopPropagation();
        this.props.parentClose(e);
        this.props.setChild(e, null);
        this.setState({
            isOpen: false
        })
    };
}



export default profileCollection;
import React from 'react';

class ApplicationIframe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    setIsOpen = (e) => {
        this.setState({
            isOpen: true
        })
    }

    render() {
        if( this.props.video == null ) {
            return (
                <div></div>
            )
        }else{
            if( this.state.isOpen ){
                const regexpVideo = this.props.video.match(/v=([^&]+)/);
                return (
                    <div className="iframe"><iframe width="560" height="315" src={"https://www.youtube.com/embed/" + regexpVideo[1]+"?autoplay=1"} frameBorder="0" allow="encrypted-media" allowfullscreen /></div>
                )
            }else {
                return (
                    <div className="iframe"><button onClick={this.setIsOpen} /></div>
                )
            }
        }
    }
}

export default ApplicationIframe;
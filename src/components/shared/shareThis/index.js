import React from 'react';

class ShareThis extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let timer = setInterval(function () {
            if( window.__sharethis__ != null ){
                window.__sharethis__.init({
                    "ts": 1525702408666,
                    "inline-reaction-buttons": {
                        "alignment": "center",
                        "padding": 12,
                        "reactions": ["slight_smile", "heart_eyes", "laughing", "astonished", "sob", "rage"],
                        "size": 48,
                        "spacing": 8,
                        "product": "inline-reaction-buttons",
                        "ts": 1524975254708,
                        "updated_at": 1524975254708
                    },
                    "inline-share-buttons": {
                        "alignment": "left",
                        "enabled": true,
                        "font_size": 12,
                        "has_spacing": true,
                        "labels": "none",
                        "min_count": 10,
                        "networks": ["facebook", "twitter", "googleplus", "sms", "email"],
                        "num_networks": 5,
                        "padding": 10,
                        "radius": 4,
                        "show_total": false,
                        "size": 32,
                        "size_label": "small",
                        "spacing": 8,
                        "use_native_counts": true,
                        "ts": 1525702408661,
                        "updated_at": 1525702408661
                    }
                });
                clearInterval(timer);
            }
        },0)
    }

    render() {
        return (
            <div className="sharethis-inline-share-buttons" />
        )
    }
}

export default ShareThis;
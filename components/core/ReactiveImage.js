import React, { Component } from 'react';
import { Image } from 'react-native';

class ReactiveImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false
        }

        this.setDefaultImg = this.setDefaultImg.bind(this);
    }

    setDefaultImg() {
        this.setState({
            error: true
        });
    }

    render() {
        const { error } = this.state;
        const { src, style } = this.props;        
        const placeholder = require('../../assets/placeholder.png');

        return (
            <Image
                source={error ? placeholder : src}
                onError={this.setDefaultImg}
                style={style}                
            />
        );
    }
}

export default ReactiveImage;
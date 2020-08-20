import React, { Component } from 'react';
import Api from '../utils/Api';

import Hotels from '../components/core/Hotels';


class HotelsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        }
    }

    async componentDidMount() {
        const json = await Api.getCityHotels('paris');
        this.setState({ hotels: json.hotels });             
    }

    render() {        
        return (
            <Hotels hotels={this.state.hotels} />
        );
    }
}

export default HotelsContainer;
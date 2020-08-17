import React, { Component } from 'react';
import Api from '../utils/Api';

import Hotels from '../components/Hotels';


class HotelsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: []
        }
    }

    componentDidMount() {
        Api.getCityHotels('paris')
            .then(json => this.setState({ hotels: json.hotels }));
    }

    render() {
        return (
            <Hotels hotels={this.state.hotels} />
        );
    }
}

export default HotelsContainer;
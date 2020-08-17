import React, { Component } from 'react';
import { Text } from 'react-native';
import Api from '../utils/Api';


class HotelsContainer extends Component {
    componentDidMount() {
        Api.getCityHotels('Paris').then(json => console.log(json));
    }

    render() {
        return (
            <Text>HotelsContainer</Text>
        );
    }
}

export default HotelsContainer;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Api from '../utils/Api';

import Hotel from '../components/hotel/Hotel';



class HotelContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {}
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        Api.getHotelDetails(id)
            .then(details => this.setState({ details }));
    }

    render() {
        const { details } = this.state;

        // console.log(details);
        return <View><Hotel details={details} /></View>
    }
}

export default HotelContainer;
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Api from '../utils/Api';

import Hotel from '../components/hotel/Hotel';



class HotelContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {}
        }
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        const details = await Api.getHotelDetails(id);
        this.setState({ details });
    }

    renderHotel() {
        const { details } = this.state;

        if (Object.keys(details).length === 0) {
            return <ActivityIndicator />
        }

        return <Hotel {...details} />
    }

    render() {
        const { details } = this.state;        
        // console.log("ctners/HotelContainer details", details);        

        return (
            <View style={styles.container}>
                {this.renderHotel()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 35
    }
});

export default HotelContainer;
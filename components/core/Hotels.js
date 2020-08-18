import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

import Config from '../../Config';
const { host } = Config;

import ReactiveImage from './ReactiveImage';


const Hotels = ({ hotels }) => {  
    // console.log(hotels);    

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listItem}>                
                <Link to={`/hotels/${item._id}`} component={TouchableOpacity}>
                    <ReactiveImage
                        src={{ uri: `${host}/${item.pictures[0]}` }} 
                        style={styles.cardImage}                        
                    />                
                    <Text>{item.name}</Text>
                    <View style={styles.caption}>
                        <Text>{item.price} €</Text>
                    </View>                
                </Link>
            </View>
            
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hotels</Text>
            {hotels.length === 0 && <ActivityIndicator /> }
            <FlatList                
                data={hotels}
                renderItem={renderItem}
                keyExtractor={item => item._id}
            />
        </View>
    );        
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 35
    },
    title: {
        fontSize: 40,
        textAlign: 'center'
    },
    cardImage: {
        height: 200,
        width: '100%'
    },
    listItem: {
        marginBottom: 50
    },
    caption: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default Hotels;
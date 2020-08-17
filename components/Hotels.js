import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import Config from '../Config';
const { host } = Config;


const Hotels = ({ hotels }) => {  
    console.log(hotels);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listItem}>
                <Image
                    source={{ uri: `${host}/${item.pictures[0]}` }} 
                    style={styles.cardImage}
                    defaultSource={{ uri: 'http://via.placeholder.com/300x200' }}
                />
                
                <Text>{item.name}</Text>

                <View style={styles.caption}>
                    <Text>{item.price} €</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hotels</Text>
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
        height: 150,
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
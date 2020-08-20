import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ReactiveImage from '../core/ReactiveImage';

class Hotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsToRender: 3
        }
    }

    renderListItem({ item }) {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }

    renderList() {
        const { commodities } = this.props;
        const { itemsToRender } = this.state;
        const data = commodities.map(commodity => ({ name: commodity }));        
        
        return (
            <View>
                <FlatList 
                    data={data.slice(0, itemsToRender)}
                    renderItem={this.renderListItem}
                    keyExtractor={(item, index) => index.toString()}                                        
                />
                <TouchableOpacity 
                    onPress={() => this.setState({ itemsToRender: data.length })}                    
                >                
                    <Text style={styles.listToggle}>Plus...</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {        
        const { name } = this.props;
        
        return (
            <View>
                <Text style={styles.title}>{name}</Text>
                {this.renderList()}                
            </View>    
        );
    }
}

const styles = StyleSheet.create({    
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listToggle: {        
        marginTop: 3,
        fontSize: 15,
                        
    }
});

export default Hotel;
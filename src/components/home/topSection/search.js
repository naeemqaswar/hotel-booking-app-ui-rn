import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Search() {
    const _renderSearchInput = () => {
        return <View style={styles.inputContainer}>
            <Icon name="search" color="#1a303d" size={20}/>
            <View style={styles.inputWrapper}>
                <TextInput 
                    placeholder="Search the hotel, motel and club"
                    style={styles.input} 
                />
            </View>
        </View>
    };

    return <View style={styles.container}>
        <Text style={styles.title}>Search your desire hotel</Text>
        {_renderSearchInput()}
    </View>;
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // borderWidth: 1,
        // borderColor: 'red',
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#fff',
    },
    inputContainer: {
        height: 50,
        width: '85%',
        marginTop: 20,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    inputWrapper: {
        width: '60%',
        marginLeft: 10,
        // borderWidth: 1,
    },
    input:{
        fontSize: 14,
        color: '#1a303d',
    },
});
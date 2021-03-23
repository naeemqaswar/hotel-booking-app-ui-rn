import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

export default function BookHotel(props) {
    const {title, action = ()=>{}} = props;

    return <TouchableHighlight
        onPress={action}
        style={styles.button}
        underlayColor="#0e0e0e"
    >
        <View style={styles.wrapper}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableHighlight>;
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#4a7187',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    wrapper:{
        borderRadius: 7,
    },
    text:{
        color: '#fff',
        fontSize: 16,
        textAlign:'center',
    },
});
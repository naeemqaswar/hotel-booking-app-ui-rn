import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function Button(props) {
    const {title, action} = props;

    return <TouchableHighlight 
        onPress={action}
        style={styles.container}
        underlayColor="rgba(0, 0, 0, 0.7)"
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    text:{
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
    },
});
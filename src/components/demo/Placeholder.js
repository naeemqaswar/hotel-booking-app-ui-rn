import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Placeholder(props) {
    const {title, source, size = 250} = props;

    return <View style={styles.container}>
        <Image
            source={source}
            resizeMode="contain"
            style={{height: size}}
        />
        <Text style={styles.title}>{title}</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        marginTop: 30,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        color: '#1a303d',
    },
});
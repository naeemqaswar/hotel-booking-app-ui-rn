import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function Background(props) {
    const {image} = props;

    return <View style={styles.container}>
        <Image
            source={image}
            resizeMode="cover"
            style={styles.image}
        />
        <View style={styles.filter}/>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filter:{
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(14, 14, 14, 0.7)',
    },
    image:{
        width: '100%',
        height: '100%',
    },
});
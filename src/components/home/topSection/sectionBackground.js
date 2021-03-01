import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function SectionBackground() {
    return <View style={styles.container}>
        <Image
            source={require('../../../../assets/home/header-bg.png')}
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
        // zIndex: 999,
        position: 'absolute',
        backgroundColor: 'rgba(14, 14, 14, 0.7)',
    },
    image:{
        width: '100%',
        height: '100%',
    },
});
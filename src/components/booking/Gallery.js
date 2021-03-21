import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function Gallery(props) {
    const {image} = props;

    return <View>
        <View style={styles.overlay} />
        <Image
            source={image}
            resizeMode="cover"
            style={styles.topSectionBg}
        />
    </View>;
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)',
        zIndex: 1,
    },
    topSectionBg: {
        height: '100%',
        width: '100%',
    },
});

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Tabs from './tabs';

const {width, height} = Dimensions.get('screen');

export default function Bookings() {
    return <View style={styles.container}>
        <Tabs />  
    </View>;
};

const styles = StyleSheet.create({
    container:{
        zIndex: 2,
        height: height/1.7,
        marginTop: -60,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
});
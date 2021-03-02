import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import ListingTabs from '../bookingSection/listingTabs';

const {width, height} = Dimensions.get('screen');

export default function BookingSection() {
    return <View style={styles.container}>
        <ListingTabs />  
    </View>;
};

const styles = StyleSheet.create({
    container:{
        zIndex: 2,
        height: height/1.7,
        // marginTop: -45,
        marginTop: -60,
        backgroundColor: '#fff',
        // backgroundColor: 'red',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // paddingHorizontal: '10%',
    },
});
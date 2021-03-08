import React from 'react';
import { View, StyleSheet, } from 'react-native';

import TopSection from '../components/home/topSection';
import Bookings from '../components/home/bookings';

export default function Home() {

    return <View style={styles.container}>
        <TopSection />
        <Bookings />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
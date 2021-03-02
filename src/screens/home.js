import React from 'react';
import { View, StyleSheet, } from 'react-native';

import TopSection from '../components/home/topSection';
import BookingSection from '../components/home/bookingSection';

export default function Home() {

    return <View style={styles.container}>
        <TopSection />
        <BookingSection />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
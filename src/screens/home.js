import React from 'react';
import { View, StyleSheet, } from 'react-native';

import TopSection from '../components/home/topSection';

export default function Home() {

    return <View style={styles.container}>
        <TopSection />
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
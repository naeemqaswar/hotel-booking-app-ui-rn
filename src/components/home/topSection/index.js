import React from 'react'
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import SectionBackground from './sectionBackground';
import Header from './header';

const {width, height} = Dimensions.get('screen');

export default function TopSection() {
    return <View style={styles.container}>
        <SectionBackground />
        <View style={styles.wrapper}>
            <SafeAreaView>
                <Header />
            </SafeAreaView>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        height: height/2,
    },
    wrapper: {
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
});
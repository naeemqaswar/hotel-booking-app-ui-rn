import React from 'react'
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';

import Header from './header';
import Search from './search';
import SectionBackground from './sectionBackground';

const {width, height} = Dimensions.get('screen');

export default function TopSection() {
    return <View style={styles.container}>
        <SectionBackground />
        <View style={styles.wrapper}>
            <SafeAreaView>
                <Header />
                <Search />
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
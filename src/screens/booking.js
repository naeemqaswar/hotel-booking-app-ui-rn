import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, SafeAreaView, Dimensions, Image } from 'react-native';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as RootNavigation from '../navigation/RootNavigation';

import Header from '../components/booking/Header';

const {width, height} =  Dimensions.get('screen');

function Booking() {
    return <SafeAreaView>
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Header/>
                <View style={styles.overlay} />
                <Image
                    source={require("../../assets/booking/portfolio.jpg")}
                    resizeMode="cover"
                    style={styles.topSectionBg}
                />
            </View>
            {/* <Text>Booking</Text> */}
        </View>
    </SafeAreaView>;
}

export default Booking;

const topSectionHeight = height / 1.8;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
        backgroundColor: 'red',
        height: topSectionHeight,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.1)',
        zIndex: 1,
      },
    topSectionBg: {
        height: topSectionHeight,
        width: '100%',
    },
});
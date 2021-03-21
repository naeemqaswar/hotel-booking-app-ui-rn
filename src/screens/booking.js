import React from 'react';
import { 
    View, 
    Dimensions, 
    StyleSheet, 
    SafeAreaView, 
} from 'react-native';

import * as RootNavigation from '../navigation/RootNavigation';

import TopBar from '../components/booking/TopBar';
import Facility from '../components/booking/Facility';
import BookHotel from '../components/booking/BookHotel';
import Gallery from '../components/booking/Gallery';
import Info from '../components/booking/Info';

const {height} =  Dimensions.get('screen');

function Booking() {
    return <SafeAreaView>
        <View style={styles.bookingHead}>
            <TopBar leadingAction={()=>RootNavigation.pop()} />
            <Gallery image={require("../../assets/booking/portfolio.jpg")}/>
        </View>
        <View style={styles.bookingInfo}>
            <Info
                title="Grand Luxury" 
                location="New Hill Town, USA"
                price="$700"
                rating={5}
                description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to. Place some good description here"
                readMoreAction={()=>{}}
            />
        </View>
        <View style={styles.bookingFooter}>
            <View style={styles.facilitiesContainer}>
                <Facility title="Food" icon={require("../../assets/booking/food.png")} />
                <Facility title="Pool" icon={require("../../assets/booking/pool.png")} />
                <Facility title="Gym" icon={require("../../assets/booking/gym.png")} />
                <Facility title="TV" icon={require("../../assets/booking/tv.png")} />
            </View>
            <BookHotel title="BOOK THIS HOTEL"/>
        </View>
    </SafeAreaView>;
}

export default Booking;

const topSectionHeight = height / 1.9;

const styles = StyleSheet.create({
    bookingHead: {
        height: topSectionHeight,
    },
    bookingInfo:{
        zIndex: 2,
        borderWidth: 1,
        marginTop: -120,
        height: height/2.4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: '8%',
        paddingHorizontal: '10%',
    },
    bookingFooter: {
        zIndex: 2,
        marginTop: -30,
        height: height/4.4,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: '8%',
        paddingHorizontal: '10%',
        backgroundColor: '#1a2f3b',
    },
    facilitiesContainer: {
        flexDirection: 'row',
        marginBottom: 25,
    },
});
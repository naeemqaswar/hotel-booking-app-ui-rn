import React from 'react';
import { 
    Text,
    View, 
    Image,
    Dimensions, 
    StyleSheet, 
    SafeAreaView, 
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as RootNavigation from '../navigation/RootNavigation';

import Header from '../components/booking/Header';

const {width, height} =  Dimensions.get('screen');

function Booking() {

    const _renderDetails = () => {
        return <View style={styles.contentContainer}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Grand Luxury</Text>
            </View>
            <Text style={styles.sectionTitle}>New Hill Town, USA</Text>
            <View style={styles.statsContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.sectionTitle}>Starting Price</Text>
                    <Text style={styles.priceValue}>$700</Text>
                </View>
                <View style={styles.ratingsContainer}>
                    <View style={styles.ratingsWrapper}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={5}
                            starSize={14}
                            fullStar="star"
                            emptyStar="star"
                            fullStarColor="#dbb16c"
                        />
                    </View>
                    <Text style={styles.sectionTitle}>5 Star Reviews</Text>
                </View>
            </View>
            <Text style={styles.description}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to. Place some good description here</Text>
            <View style={styles.readMoreContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <Text style={styles.readMoreText}>Read More ...</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>;
    }

    const _renderFacility = (title, icon) => (
        <View style={styles.facilityItem}>
            <View style={styles.facilityIconWrapper}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={styles.facilityIcon}
                />
            </View>
            <Text style={styles.facilityText}>{title}</Text>
        </View>
    );

    const _renderBookingFooter = () => (
        <View style={styles.bookingFooter}>
            <View style={styles.facilityItemsContainer}>
                {_renderFacility("Food", require("../../assets/booking/food.png"))}
                {_renderFacility("Pool", require("../../assets/booking/pool.png"))}
                {_renderFacility("Gym", require("../../assets/booking/gym.png"))}
                {_renderFacility("TV", require("../../assets/booking/tv.png"))}
            </View>
            {_renderBookingAction()}
        </View>
    );

    const _renderBookingAction = () => (
        <View style={styles.bookingActionContainer}>
            <TouchableHighlight
                onPress={()=>{}}
                style={styles.bookingActionTouchable}
            >
                <View style={styles.bookingAction}>
                    <Text style={styles.bookingActionText}>
                        BOOK THIS HOTEL
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    )

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
            {_renderDetails()}
            {_renderBookingFooter()}
        </View>
    </SafeAreaView>;
}

export default Booking;

const topSectionHeight = height / 1.9;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
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
    contentContainer:{
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
    contentWrapper:{},
    titleWrapper:{
        marginBottom: 5,
    },
    title:{
        fontSize: 33,
        lineHeight: 33,
        fontWeight: 'bold',
    },
    sectionTitle:{
        fontSize: 17,
        // lineHeight: 17,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
    statsContainer:{
        paddingTop: 15,
        paddingBottom: 5,
        flexDirection: 'row',
        marginTop: 5,
    },
    priceContainer: {
        flex: 1,
    },
    priceTitle:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    priceValue:{
        fontSize: 60,
        lineHeight: 70,
        color: '#dcb26a',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    },
    ratingsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ratingsWrapper: {
        width: 94,
    },
    description:{
        lineHeight: 22,
    },
    readMoreContainer:{
        paddingVertical: 15,
    },
    readMoreText:{
        color: '#dcb26a',
        fontSize: 16,
        fontWeight: 'bold',
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
    facilityItemsContainer: {
        flexDirection: 'row',
        marginBottom: 25,
    },
    facilityItem: {
        alignItems: 'center',
        flex: 1,
    },
    facilityIconWrapper: {
        marginBottom: 10,
    },
    facilityIcon: {
        height: 30,
        width: 30,
    },
    facilityText: {
        color: '#bec3c5',
        fontSize: 16,
    },
    bookingActionContainer:{},
    bookingAction:{
        backgroundColor: '#4a7187',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 7,
        
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    bookingActionTouchable:{
        borderRadius: 7,
    },
    bookingActionText:{
        color: '#fff',
        fontSize: 16,
        textAlign:'center',
    },
});
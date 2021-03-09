import React, {useState, useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import Booking from './booking';

export default function Slider() {
    let carousel;
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([
        {
            title: "Grand Luxury",
            image: require("../../../../assets/home/bookings/booking-1.png"),
            tag: "Featured",
            members: 500,
            rating: 3,
        },
        {
            title:"Otman Hall",
            image: require("../../../../assets/home/bookings/booking-2.png"),
            tag: "New",
            members: 200,
            rating: 4,
        },
        {
            title: "Grand Luxury",
            image: require("../../../../assets/home/bookings/booking-1.png"),
            tag: "Featured",
            members: 500,
            rating: 3,
        },
        {
            title:"Otman Hall",
            image: require("../../../../assets/home/bookings/booking-2.png"),
            tag: "New",
            members: 200,
            rating: 4,
        },
        {
            title: "Grand Luxury",
            image: require("../../../../assets/home/bookings/booking-1.png"),
            tag: "Featured",
            members: 500,
            rating: 3,
        },
        {
            title:"Otman Hall",
            image: require("../../../../assets/home/bookings/booking-2.png"),
            tag: "New",
            members: 200,
            rating: 4,
        },
    ]);

    return <View style={styles.container}>
        <View style={{ flex: 1, flexDirection:'row'}}>
            {/* <Booking {...carouselItems[0]} /> */}
            <Carousel
                layout={"default"}
                ref={ref => carousel = ref}
                data={carouselItems}
                sliderWidth={250}
                itemWidth={250}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                ItemSeparatorComponent={()=><View style={{width: 0}}/>}
                renderItem={(itemProp) => <Booking {...itemProp} />}
                onSnapToItem = { index => setActiveIndex(index) } 
            />
        </View>
    </View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
    },
});
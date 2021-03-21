import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import * as RootNavigation from '../../../navigation/RootNavigation';

import Booking from './Booking';

export default function Slider(props) {
    let carousel;

    const {items} = props;
    const [activeIndex, setActiveIndex] = useState(0);

    return <View style={styles.container}>
        <View style={styles.wrapper}>
            <Carousel
                layout={"default"}
                ref={ref => carousel = ref}
                data={items}
                sliderWidth={250}
                itemWidth={250}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                ItemSeparatorComponent={()=><View style={{width: 0}}/>}
                renderItem={(itemProp) => <Booking {...itemProp} onTap={()=> RootNavigation.navigate("booking")} />}
                onSnapToItem = { index => setActiveIndex(index) } 
            />
        </View>
    </View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        flexDirection:'row',
    },
});
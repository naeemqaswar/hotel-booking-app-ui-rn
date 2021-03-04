import React, {useState, useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default function Slider() {
    let carousel;
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([
        {
            title:"Item 1",
            text: "Text 1",
        },
        {
            title:"Item 2",
            text: "Text 2",
        },
        {
            title:"Item 3",
            text: "Text 3",
        },
        {
            title:"Item 4",
            text: "Text 4",
        },
        {
            title:"Item 5",
            text: "Text 5",
        },
    ]);

    const _renderItem = ({item,index}) => {
        return <View style={{
            backgroundColor:'#1a303d',
            borderRadius: 10,
            height: 350,
            padding: 50,
            marginHorizontal: 10,
        }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
        </View>;
    }

    return <View style={styles.container}>
        <View style={{ flex: 1, flexDirection:'row'}}>
            <Carousel
                layout={"default"}
                ref={ref => carousel = ref}
                data={carouselItems}
                sliderWidth={250}
                itemWidth={250}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                ItemSeparatorComponent={()=><View style={{width: 0}}/>}
                renderItem={_renderItem}
                onSnapToItem = { index => setActiveIndex(index) } />
        </View>
    </View>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
    },
});
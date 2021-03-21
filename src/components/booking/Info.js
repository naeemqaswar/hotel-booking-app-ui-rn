import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import StarRating from 'react-native-star-rating';

export default function Info(props) {
    const {title, location, price, rating, description, readMoreAction} = props;

    return <View>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.sectionTitle}>{location}</Text>
        <View style={styles.statsContainer}>
            <View style={styles.priceContainer}>
                <Text style={styles.sectionTitle}>Starting Price</Text>
                <Text style={styles.priceValue}>{price}</Text>
            </View>
            <View style={styles.ratingsContainer}>
                <View style={styles.ratingsWrapper}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={rating}
                        starSize={14}
                        fullStar="star"
                        emptyStar="star"
                        fullStarColor="#dbb16c"
                    />
                </View>
                <Text style={styles.sectionTitle}>{rating} Star Reviews</Text>
            </View>
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.readMoreContainer}>
            <TouchableWithoutFeedback onPress={readMoreAction}>
                <Text style={styles.readMoreText}>Read More ...</Text>
            </TouchableWithoutFeedback>
        </View>
    </View>;
}

const styles = StyleSheet.create({
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
});
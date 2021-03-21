import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome5';

const borderRadius = 10;

function Booking({item, onTap}) {
    const {title, image, tag, members, rating} = item;

    const _renderTag = () => <View style={styles.tag}>
        <Text style={styles.tagText}>{tag}</Text>
    </View>;

    const _renderInfo = () => <View style={styles.infoContainer}>
        <View style={styles.infoText}>
            <View style={styles.leftInfo}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.membersContainer}>
                    <Image 
                        source={require("../../../../assets/home/bookings/members.png")}
                        resizeMode="contain"
                        style={styles.membersIcon}
                    />
                    <View style={styles.membersTextWrapper}>
                        <Text style={styles.membersText}>{members} people</Text>
                    </View>
                </View>
            </View>
            <View style={styles.rightInfo}>
                <Icon name="bookmark" color="#fff" size={21}/>
            </View>
        </View>
        <View style={styles.ratingsWrapper}>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={rating}
                starSize={14}
                fullStar="star"
                emptyStar="star"
                fullStarColor="#dbb16c"
                emptyStarColor="#6a6751"
            />
        </View>
    </View>;
    
    return <TouchableWithoutFeedback onPress={onTap}>
        <View style={styles.container}>
        <Image 
            source={image}
            resizeMode="cover"
            style={styles.image}
        />
            {_renderTag()}
            {_renderInfo()}
        </View>
    </TouchableWithoutFeedback>;
}

export default Booking;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor:'#1a303d',
        borderRadius: 10,
        height: 370,
        marginHorizontal: 10,
        borderRadius: borderRadius,
        
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    tag: {
        paddingVertical: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        position: 'absolute',
        top: 20,
        left: 0,
        zIndex: 9,
        backgroundColor: '#1a303d',
    },
    tagText: {
        color: '#fff',
        fontSize: 12,
    },
    image: {
        height: '67%',
        width: '100%',
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
    },
    infoContainer:{
        paddingHorizontal: 20,
        paddingVertical: 17,
        height: '33%',
        width: '100%',
    },
    infoText:{
        flexDirection: 'row',
        marginBottom: 5,
    },
    leftInfo: {
        borderColor: 'green',
        width: '80%',
    },
    rightInfo: {
        borderColor: 'pink',
        width: '20%',
        alignItems: 'center',
        paddingTop: 5,
    },
    titleWrapper: {
        marginBottom: 5,
    },
    title: {
        fontSize: 22,
        lineHeight: 22,
        color: '#fff',
    },
    membersContainer: {
        flexDirection: 'row',
        borderColor: 'yellow',
        alignItems: 'center',
    },
    membersIcon: {
        height: 30,
        width: 30,
    },
    membersTextWrapper: {
        marginLeft: 5,
    },
    membersText: {
        fontSize: 14,
        lineHeight: 15,
        color: '#fff',
    },
    ratingsWrapper: {
        width: 90,
    },
});
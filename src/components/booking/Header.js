import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome5';

import * as RootNavigation from '../../navigation/RootNavigation';

function Header() {
    const _renderBackAction = ()=>{
        return <View style={styles.backActionContainer}>
            <TouchableWithoutFeedback onPress={()=>RootNavigation.pop()}>
                <View style={styles.backActionWrapper}>
                    <Image
                        source={require("../../../assets/booking/back.png")}
                        resizeMode="contain"
                        style={styles.backIcon}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>  
    };

    const _renderFavoriteAction = ()=>{
        return <View style={styles.favoriteActionContainer}>
            <TouchableWithoutFeedback onPress={()=>{}}>
                <View style={styles.favoriteActionWrapper}>
                    <Icon name="heart" size={25} color="#fff" solid={true} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    };

    return <View style={styles.container}>
        {_renderBackAction()}
        {_renderFavoriteAction()}
    </View>;
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row',
        paddingTop: 45,
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        zIndex: 9,
    },
    backActionContainer:{
        flex: 1,
        flexDirection: 'row',
    },
    backActionWrapper:{
        width: 45,
        height: 45,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon:{
        height: 25,
        width: 15,
    },
    favoriteActionContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    favoriteActionWrapper:{
        width: 45,
        height: 45,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
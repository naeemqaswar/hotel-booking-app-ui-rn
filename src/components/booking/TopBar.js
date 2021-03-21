import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

function TopBar(props) {
    const {leadingAction, favoriteAction = ()=>{}} = props;

    const _renderLeadingAction = ()=>{
        return <View style={styles.leadingContainer}>
            <TouchableWithoutFeedback onPress={leadingAction}>
                <View style={styles.leadingWrapper}>
                    <Image
                        source={require("../../../assets/booking/back.png")}
                        resizeMode="contain"
                        style={styles.backIcon}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>;  
    };

    const _renderFavoriteAction = ()=>{
        return <View style={styles.favoriteActionContainer}>
            <TouchableWithoutFeedback onPress={favoriteAction}>
                <View style={styles.favoriteActionWrapper}>
                    <Icon name="heart" size={25} color="#fff" solid={true} />
                </View>
            </TouchableWithoutFeedback>
        </View>;
    };

    return <View style={styles.container}>
        {_renderLeadingAction()}
        {_renderFavoriteAction()}
    </View>;
};

export default TopBar;

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
    leadingContainer:{
        flex: 1,
        flexDirection: 'row',
    },
    leadingWrapper:{
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
import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TopBar(props) {
    const {menuIcon, profileImage, profileAction = ()=>{}} = props;

    return <View style={styles.container}>
        <View style={styles.section}>
            <Icon name={menuIcon} color="#edecec" size={22}/>
        </View>
        <View style={[styles.section, {alignItems: 'flex-end'}]}>
            <TouchableWithoutFeedback onPress={profileAction}>
                <View style={styles.profileImageWrapper}>
                    <Image
                        source={profileImage}
                        resizeMode="cover"
                        style={styles.profileImage}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    section: {
        flex: 2, 
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    profileImageWrapper:{
        height: 40,
        width: 40,
    },
    profileImage:{
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
});
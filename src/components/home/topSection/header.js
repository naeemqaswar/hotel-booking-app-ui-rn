import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header() {
    return <View style={styles.container}>
        <View style={styles.section}>
            <Icon name="bars" color="#edecec" size={22}/>
        </View>
        <View style={[styles.section, {alignItems: 'flex-end'}]}>
            <View style={styles.imageWrapper}>
                <Image
                    source={require('../../../../assets/home/avatar.png')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
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
    imageWrapper:{
        height: 40,
        width: 40,
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
});
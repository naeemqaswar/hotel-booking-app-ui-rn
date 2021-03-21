import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Facility(props) {
    const {title, icon} = props;

    return <View style={styles.facilityItem}>
        <View style={styles.facilityIconWrapper}>
            <Image
                source={icon}
                resizeMode="contain"
                style={styles.facilityIcon}
            />
        </View>
        <Text style={styles.facilityText}>{title}</Text>
    </View>;
}

const styles = StyleSheet.create({
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
});
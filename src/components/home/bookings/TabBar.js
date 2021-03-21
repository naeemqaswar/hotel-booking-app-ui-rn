import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

export default function TabBar(props) {
    const {tabs, selected, choose} = props;
    
    const _tabs = tabs.map(({key, title}) => {
        const focused = selected == key;

        return <TouchableWithoutFeedback key={key} onPress={()=> choose(key)}>
            <Text style={[styles.label, { 
                color: focused ? 'black': '#d4d4d4', 
                fontWeight: focused ? 'bold': '300', 
                borderBottomWidth: focused ? 3:0,
                fontWeight: 'bold',
            }]}>
                {title}
            </Text>
        </TouchableWithoutFeedback>
    });

    return <View style={styles.container}>{_tabs}</View>;
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        margin: 8,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        lineHeight: 25,
    },
});
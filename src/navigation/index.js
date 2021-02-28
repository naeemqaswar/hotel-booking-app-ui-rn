import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createMaterialBottomTabNavigator, createBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import TabBar from '../navigation/tabBar';

import Home from '../screens/home';
import Account from '../screens/demo/account';
import Location from '../screens/demo/location';
import Bookmarks from '../screens/demo/bookmarks';
import Settings from '../screens/demo/settings';

const Tab = createBottomTabNavigator();

export default () => <NavigationContainer>
    <Tab.Navigator 
        initialRouteName="home" 
        tabBar={props => <TabBar {...props} />}
        // shifting={false}
        tabBarOptions={{
            // activeTintColor: Colors.tabIconSelected,
            // inactiveTintColor: Colors.tabIconDefault,
            // allowFontScaling: true,
            // labelStyle: { fontSize: 16, paddingTop: 5 },
            // tabStyle: { paddingTop: 5 },
            style: { 
                // height: 160, 
                // paddingTop: 200,
                // paddingBottom: 60,
            },
            labelPosition: 'beside-icon',
            tabStyle:{
                // marginTop:(Platform.OS === 'ios') ? 0 : 30,
                // marginBottom: 50,
                // paddingBottom:30,
                // height : 40,
                // flexDirection: 'row',
                // borderWidth: 1,
            },
            // tabBarLabel: ({isFocused}) => {
            //     const { routeName } = navigation.state;
            //     return <Text>{routeName}</Text>;
            //     switch (routeName) {
            //         case 'News':
            //             return isFocused ? (
            //              <Text>{routeName}</Text>
            //             ) : null;
            //             break;
            //     }
            // }
          }}
          sceneContainerStyle={{
            //   position: 'absolute',
            // borderWidth: 1,
            // height : 40,
            backgroundColor: '#fff',
            // backgroundColor: 'red',
          }}
    >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="locations" component={Location} />
        <Tab.Screen name="bookmarks" component={Bookmarks} />
        <Tab.Screen name="account" component={Account} />
        <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
</NavigationContainer>;
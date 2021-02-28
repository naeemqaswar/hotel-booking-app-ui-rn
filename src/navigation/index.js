import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator, createBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '../navigation/tabBar';

import Home from '../screens/home';
import Account from '../screens/demos/account';
import Location from '../screens/demos/location';
import Bookmarks from '../screens/demos/bookmarks';
import Settings from '../screens/demos/settings';

const Tab = createBottomTabNavigator();

export default () => <NavigationContainer>
    <Tab.Navigator
        initialRouteName="home" 
        tabBar={props => <TabBar {...props} />}
        sceneContainerStyle={{
            backgroundColor: '#fff',
        }}
    >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="locations" component={Location} />
        <Tab.Screen name="bookmarks" component={Bookmarks} />
        <Tab.Screen name="account" component={Account} />
        <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>
</NavigationContainer>;
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './RootNavigation';

import TabBar from '../navigation/tabBar';

import Home from '../screens/home';
import Login from '../screens/login';
import Booking from '../screens/booking';
import Account from '../screens/demos/account';
import Location from '../screens/demos/location';
import Bookmarks from '../screens/demos/bookmarks';
import Settings from '../screens/demos/settings';

const Stack = createStackNavigator();

function Main(){
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator
        initialRouteName="home" 
        tabBar={props => <TabBar {...props} />}
        sceneContainerStyle={{ backgroundColor: '#fff' }}
    >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="locations" component={Location} />
        <Tab.Screen name="bookmarks" component={Bookmarks} />
        <Tab.Screen name="account" component={Account} />
        <Tab.Screen name="settings" component={Settings} />
    </Tab.Navigator>;
}

export default () => <NavigationContainer ref={navigationRef}>
    <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }}  />
        <Stack.Screen name="main" component={Main} options={{ headerShown: false }}  />
        <Stack.Screen name="booking" component={Booking} options={{ headerShown: false }}  />
    </Stack.Navigator>
</NavigationContainer>;
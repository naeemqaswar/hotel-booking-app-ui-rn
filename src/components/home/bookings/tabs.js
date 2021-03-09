import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar, PagerScroll } from 'react-native-tab-view';

import Slider from './slider';

const initialLayout = { width: Dimensions.get('window').width };

export default function Tabs() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'popular', title: 'Popular' },
    { key: 'top_rated', title: 'Top rated' },
    { key: 'best_price', title: 'Best price' },
    { key: 'best_choice', title: 'Best for you' },
  ]);

  const renderScene = SceneMap({
    popular: () => <Slider key="popular"/>,
    top_rated: () => <Slider key="top_rated"/>,
    best_price: () => <Slider key="best_price"/>,
    best_choice: () => <Slider key="best_choice"/>,
  });

  const renderTabBar = props => (
    <View style={styles.tabBarContainer}>
        <TabBar
            {...props}
            scrollEnabled={false}
            activeColor="black"
            inactiveColor="#d4d4d4"
            indicatorStyle={styles.tabBarIndicator}
            tabStyle={styles.tabBarWrapper}
            style={styles.tabBar}
            renderLabel={({ route, focused, color }) => (
              <Text style={[styles.tabBarLabel, { 
                color, 
                fontWeight: focused ? 'bold': '300', 
                borderBottomWidth: focused ? 3:0,
                fontWeight: 'bold',
              }]}>
                  {route.title}
              </Text>
            )}
        />
    </View>
  );

  return (
    <TabView
        swipeEnabled = {false}
        lazy={true}
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'transparent',
  },
  tabBarContainer: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
  },
  tabBarWrapper: {
    padding: 4,
    width: 'auto',
  },
  tabBarIndicator: {
    backgroundColor: 'transparent',
  },
  tabBarLabel: {
    margin: 8,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    lineHeight: 25,
  },
});
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
    popular: () => <Slider/>,
    top_rated: () => <Slider/>,
    best_price: () => <Slider/>,
    best_choice: () => <Slider/>,
  });

  const renderTabBar = props => (
    <View 
        style={{
            paddingVertical: '2%',
            paddingHorizontal: '5%',
        }}
    >
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
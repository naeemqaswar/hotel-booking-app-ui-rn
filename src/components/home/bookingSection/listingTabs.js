import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar, PagerScroll } from 'react-native-tab-view';

import Slider from './slider';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function ListingTabs() {
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
            indicatorStyle={{ 
                backgroundColor: 'transparent',
            }}
            labelStyle={{
                fontSize: 13,
            }}
            tabStyle={{
                padding: 4,
                width: 'auto',
            }}
            style={{ 
                backgroundColor: 'transparent',
            }}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ 
                    color, 
                    margin: 8,
                    fontWeight: focused ? 'bold': '300',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                    borderBottomWidth: focused ? 3:0,
                    lineHeight: 25,
                }}>
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
  scene: {
    flex: 1,
  },
});
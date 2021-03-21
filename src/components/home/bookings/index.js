import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Slider from './Slider';
import TabBar from './TabBar';

const {height} = Dimensions.get('screen');

export default function Bookings(props) {
  const {data, tabs} = props;

  const [selectedTab, setSelectedTab] = useState();
  const [bookingContent, setBookingContent] = useState();

  useEffect(()=>{
    if(tabs.length != 0){
      setSelectedTab(tabs[0]['key']);
    }
  }, []);

  useEffect(()=>{
    _chooseBookings(selectedTab);
  }, [selectedTab]);

  const _chooseBookings = (type) => {
    setBookingContent(<Slider key={type} items={data}/>);
  };

  return <View style={styles.container}>
    <TabBar
      tabs={tabs}
      selected={selectedTab}
      choose={(tab)=> setSelectedTab(tab)}
    />
    {bookingContent}
  </View>
}

const styles = StyleSheet.create({
  container:{
      zIndex: 2,
      height: height/1.6,
      marginTop: -90,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
  },
});
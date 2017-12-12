import React from 'react';
import { TabNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';s
import Home from '../src/screens/Home';
import NewPhoto from '../src/screens/NewPhoto';
import { Platform, Image } from 'react-native';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => <Entypo name='home' size={26} style={{ color: "black" }} />
      },
    },
    NewPhoto: {
      screen: NewPhoto,
      navigationOptions: {
        tabBarIcon: () => <MaterialIcons name='photo-camera' size={26} style={{ color: "black" }} />
      },
    },
}, {
    headerMode: 'none',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      indicatorStyle: { backgroundColor: 'transparent', },
      showLabel: (Platform.OS !== 'android'),
      showIcon: 'true',
      activeTintColor: 'red',
      labelStyle: {
        fontSize: 11,
      },
      style: {
        backgroundColor: '#fff'
      }
    },
});
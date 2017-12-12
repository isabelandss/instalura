import React from 'react';
import { TabNavigator } from 'react-navigation';
import Home from '../src/screens/Home';
import Profile from '../src/screens/Profile';
import NewPhoto from '../src/screens/NewPhoto';
import { Platform, Image } from 'react-native';
import { MaterialIcons, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

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
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome name='user' size={26} style={{ color: "black" }} />
      },
    }
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
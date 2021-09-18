import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from './src/screens/HomeScreen';
import WalletScreen from './src/screens/WalletScreen';


const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Tab.Navigator >

      <Tab.Screen component={HomeScreen} name="Home" options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }} />

      <Tab.Screen component={WalletScreen} name="Wallet" options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name='wallet' color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


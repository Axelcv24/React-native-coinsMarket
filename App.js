import React from 'react';
<<<<<<< HEAD

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
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen component = {HomeScreen} name="Home" optiones={{title: 'Home'}}/>
    </Stack.Navigator>
>>>>>>> 386551eae497b13df7fb040d1c2407678281a5cd
  )
}

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <MyStack />
=======
      <MyStack/>
>>>>>>> 386551eae497b13df7fb040d1c2407678281a5cd
    </NavigationContainer>
  );
}

<<<<<<< HEAD
=======

>>>>>>> 386551eae497b13df7fb040d1c2407678281a5cd

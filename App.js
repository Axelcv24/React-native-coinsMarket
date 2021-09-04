import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen component = {HomeScreen} name="Home" optiones={{title: 'Home'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


